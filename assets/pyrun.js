/* Tarayıcıda Python çalıştırıcı (Pyodide, Web Worker içinde).
   PyRun.run(kod, testler) → her test için { ok, lines:[{text,line}], error, ... }
   Test: { inp: [girdiler], setup: 'hazır kod', call: 'çağrı kodu', expect: [{n:[sayılar]} | {t:'metin', cs:bool}] }
   Çıktının her satırı, onu yazdıran kullanıcı satırıyla eşlenir; yanlış satır böyle bulunur. */
(function () {
  var PYODIDE = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';

  var HARNESS = [
    'import sys, json, traceback, builtins',
    'class _NoInput(Exception): pass',
    'class _TooLong(Exception): pass',
    'def _run(args):',
    '    out = []',
    '    st = {"ret": None, "last": None, "steps": 0}',
    '    inp = list(args["inp"])',
    '    def where():',
    '        f = sys._getframe(2)',
    '        while f is not None:',
    '            if f.f_code.co_filename == "<kod>": return f.f_lineno',
    '            f = f.f_back',
    '        return st["ret"]',
    '    def my_input(prompt=""):',
    '        if not inp: raise _NoInput()',
    '        return str(inp.pop(0))',
    '    def my_print(*a, sep=" ", end="\\n", file=None, flush=False):',
    '        w = where(); r = st["ret"]; st["ret"] = None',
    '        out.append([(sep if sep is not None else " ").join(str(x) for x in a) + (end if end is not None else "\\n"), w, r])',
    '    def local(fr, ev, ar):',
    '        if ev == "line":',
    '            st["last"] = fr.f_lineno',
    '            st["steps"] += 1',
    '            if st["steps"] > 300000: raise _TooLong()',
    '        elif ev == "return" and ar is not None and fr.f_code.co_name != "<module>": st["ret"] = fr.f_lineno',
    '        return local',
    '    def glob(fr, ev, ar):',
    '        return local if fr.f_code.co_filename == "<kod>" else None',
    '    g = {"__name__": "__main__", "__builtins__": builtins, "input": my_input, "print": my_print}',
    '    err = None',
    '    try:',
    '        if args["setup"]: exec(compile(args["setup"], "<hazir>", "exec"), g)',
    '        code = compile(args["code"], "<kod>", "exec")',
    '        sys.settrace(glob)',
    '        try:',
    '            exec(code, g)',
    '            if args["call"]: exec(compile(args["call"], "<test>", "exec"), g)',
    '        finally:',
    '            sys.settrace(None)',
    '    except SyntaxError as e:',
    '        err = {"type": type(e).__name__, "msg": str(e.msg), "line": e.lineno if e.filename == "<kod>" else None}',
    '    except _NoInput:',
    '        err = {"type": "NoInput", "msg": "", "line": st["last"]}',
    '    except _TooLong:',
    '        err = {"type": "TooLong", "msg": "", "line": st["last"]}',
    '    except BaseException as e:',
    '        line = None',
    '        tb = e.__traceback__',
    '        while tb is not None:',
    '            if tb.tb_frame.f_code.co_filename == "<kod>": line = tb.tb_lineno',
    '            tb = tb.tb_next',
    '        err = {"type": type(e).__name__, "msg": str(e), "line": line or st["last"]}',
    '    lines, cur, curline, curret = [], "", None, None',
    '    for text, ln, rt in out:',
    '        parts = text.split("\\n")',
    '        for k, p in enumerate(parts):',
    '            if cur == "" and curline is None and (p != "" or k < len(parts) - 1): curline, curret = ln, rt',
    '            cur += p',
    '            if k < len(parts) - 1:',
    '                lines.append({"text": cur, "line": curline, "ret": curret})',
    '                cur, curline, curret = "", None, None',
    '    if cur != "": lines.append({"text": cur, "line": curline, "ret": curret})',
    '    return json.dumps({"lines": lines, "error": err})'
  ].join('\n');

  var WORKER = [
    'importScripts("' + PYODIDE + 'pyodide.js");',
    'var ready = loadPyodide({ indexURL: "' + PYODIDE + '" }).then(function (py) {',
    '  py.runPython(' + JSON.stringify(HARNESS) + ');',
    '  return py;',
    '});',
    'self.onmessage = function (e) {',
    '  ready.then(function (py) {',
    '    var res = e.data.cases.map(function (c) {',
    '      py.globals.set("_ARGS", JSON.stringify({ code: e.data.code, inp: c.inp || [], setup: c.setup || "", call: c.call || "" }));',
    '      return JSON.parse(py.runPython("_run(json.loads(_ARGS))"));',
    '    });',
    '    self.postMessage({ id: e.data.id, res: res });',
    '  }).catch(function (err) { self.postMessage({ id: e.data.id, fail: String(err) }); });',
    '};',
    'ready.then(function () { self.postMessage({ ready: true }); }, function (err) { self.postMessage({ loadFail: String(err) }); });'
  ].join('\n');

  var worker = null, ready = false, waiting = {}, seq = 0, onReady = [];

  function start() {
    var url = URL.createObjectURL(new Blob([WORKER], { type: 'text/javascript' }));
    worker = new Worker(url);
    ready = false;
    worker.onmessage = function (e) {
      var d = e.data;
      if (d.ready) { ready = true; onReady.splice(0).forEach(function (f) { f(); }); return; }
      if (d.loadFail) { Object.keys(waiting).forEach(function (k) { waiting[k].reject(new Error('Python yüklenemedi: ' + d.loadFail)); delete waiting[k]; }); worker = null; return; }
      var w = waiting[d.id];
      if (!w) return;
      delete waiting[d.id];
      clearTimeout(w.timer);
      if (d.fail) w.reject(new Error(d.fail)); else w.resolve(d.res);
    };
  }

  // Sayfa açılınca değil, ilk yazma sorusu görününce yüklenir (~10 MB, bir kez)
  function warm() { if (!worker) start(); }

  function run(code, cases) {
    warm();
    return new Promise(function (resolve, reject) {
      var id = ++seq;
      function send() {
        waiting[id] = { resolve: resolve, reject: reject, timer: setTimeout(function () {
          // Sonsuz döngü vb.: worker'ı öldür, yeniden başlat
          delete waiting[id];
          worker.terminate(); worker = null;
          resolve(cases.map(function () { return { lines: [], error: { type: 'Timeout', msg: '', line: null } }; }));
        }, 8000) };
        worker.postMessage({ id: id, code: code, cases: cases });
      }
      if (ready) send(); else onReady.push(send);
    });
  }

  /* ---------- Karşılaştırma ---------- */
  function trLower(s) { return String(s).replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase(); }
  function norm(s, cs) {
    s = cs ? String(s) : trLower(s);
    return ' ' + s.replace(/[^0-9A-Za-zÇĞİÖŞÜçğıöşüâîû.]+/g, ' ').replace(/\.(?!\d)/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  }
  function nums(s) { return (String(s).match(/-?\d+(?:\.\d+)?/g) || []).map(Number); }
  function lineMatches(text, item) {
    if (item.n) {
      var have = nums(text), k = 0;
      item.n.forEach(function (x) { while (k < have.length && Math.abs(have[k] - x) > 1e-6) k++; if (k < have.length) k++; else k = Infinity; });
      if (k === Infinity) return false;
    }
    if (item.t != null && norm(text, item.cs).indexOf(norm(item.t, item.cs)) === -1) return false;
    return true;
  }
  function similarity(text, item) {
    var s = 0;
    if (item.t != null) {
      var have = norm(text, false);
      norm(item.t, false).trim().split(' ').forEach(function (w) { if (w && have.indexOf(' ' + w + ' ') !== -1) s += 2; });
    }
    if (item.n) {
      var hn = nums(text);
      item.n.forEach(function (x) { if (hn.some(function (y) { return Math.abs(y - x) < 1e-6; })) s += 1; });
      if (hn.length) s += 0.5;
    }
    return s;
  }
  function describe(item) {
    var parts = [];
    if (item.t != null) parts.push('“' + item.t + '”');
    if (item.n) parts.push(item.n.join(', '));
    return parts.join(' ve ');
  }

  // Bir testi değerlendir: beklenen satırlar sırayla, araya başka satırlar girebilir
  function judge(r, c) {
    if (r.error) return { ok: false, kind: 'error', error: r.error, lines: r.lines };
    var ptr = 0;
    for (var k = 0; k < (c.expect || []).length; k++) {
      var item = c.expect[k], found = -1;
      for (var j = ptr; j < r.lines.length; j++) if (lineMatches(r.lines[j].text, item)) { found = j; break; }
      if (found === -1) {
        // Beklenen satırın yerine geçen satırı tahmin et: beklenene en çok benzeyen kalan satır
        var best = ptr, bestScore = 0;
        for (var b = ptr; b < r.lines.length; b++) {
          var sc = similarity(r.lines[b].text, item);
          if (sc > bestScore) { bestScore = sc; best = b; }
        }
        var at = r.lines[best] || null;
        return { ok: false, kind: 'wrong', item: item, want: describe(item), at: at, line: at ? at.line : null, lines: r.lines, idx: best };
      }
      ptr = found + 1;
    }
    return { ok: true, lines: r.lines };
  }

  var ERR_TR = {
    NameError: 'Tanımlanmamış bir isim kullanılmış (yazım hatası ya da tanımlamadan kullanma).',
    TypeError: 'Tür uyuşmazlığı (ör. metinle sayı toplama, input’u int’e çevirmeme) ya da fonksiyona yanlış sayıda parametre.',
    ValueError: 'Değer çevrilemedi (ör. int("3.5") veya int("abc")).',
    IndexError: 'Liste dışı bir indeks kullanılmış.',
    KeyError: 'Sözlükte olmayan bir anahtar okunmuş.',
    ZeroDivisionError: 'Sıfıra bölme.',
    SyntaxError: 'Yazım hatası: `:` eksik olabilir, tırnak/parantez kapanmamış olabilir.',
    IndentationError: 'Girinti hatası: blok satırları aynı hizada değil ya da `:` sonrası girinti yok.',
    AttributeError: 'Bu türde olmayan bir metot çağrılmış (ör. sayıda `.strip()`).',
    UnboundLocalError: 'Değişkene değer verilmeden kullanılmış.',
    NoInput: 'Program, testin verdiğinden fazla girdi istedi. Döngüden çıkmıyor (break eksik) ya da fazladan input() var.',
    TooLong: 'Program çok uzun sürdü: büyük ihtimalle sonsuz döngü (sayaç artmıyor ya da break yok).',
    Timeout: 'Program 8 saniyede bitmedi: büyük ihtimalle sonsuz döngü.'
  };

  window.PyRun = { run: run, judge: judge, warm: warm, ERR_TR: ERR_TR, nums: nums };
})();
