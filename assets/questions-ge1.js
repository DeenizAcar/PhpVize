/* Hocanın "Genel Tekrar 1" (PHP_GE1.pdf) sunumundan gelen sorular ve benzerleri.
   - Deneme vizesi 4: GE1'in 14 sorusu vize formatına çevrildi.
   - Deneme vizesi 1–3: her birinde 4 test + 2 boşluk sorusu GE1 tarzı sorularla değiştirildi;
     çıkarılan eski sorular konu testlerine taşındı (havuzdan kaybolmaz).
   - why: yanlış şık seçilince gösterilen açıklama (şık indeksi → metin). */
(function () {
  var EXAMS = window.EXAMS, TQ = window.TOPIC_QUESTIONS;
  function exam(id) { return EXAMS.filter(function (e) { return e.id === id; })[0]; }
  function why(id, i, map) { exam(id).questions[i].why = map; }
  function swap(id, i, q) {
    var e = exam(id), old = e.questions[i];
    TQ[old.topic].push(old);
    e.questions[i] = q;
  }

  /* ---------- Mevcut sınav sorularına yanlış şık açıklamaları ---------- */
  why('hoca', 0, { 0: '24 başlangıç değeri. `-=` sonucu değişkene yazar: 24 − 5 = 19.', 1: '5 çıkarılan miktar, sonuç değil.', 3: '29 için toplama gerekirdi; `-=` çıkarır.', 4: '245 metin birleştirme gibi görünüyor; `-=` aritmetik işlemdir.' });
  why('hoca', 1, { 0: '`===` türü de kontrol eder: "8" metin, 8 tam sayı → false.', 2: 'Yine tür farkı: 8 (int) ile "8" (string) `===` ile eşit değildir.', 3: '`!=` yalnızca değere bakar; "8" ile 8 değerce eşit, sonuç false.', 4: '8 < 8 yanlış; `<` sınırı dahil etmez.' });
  why('hoca', 2, { 0: '70 >= 85 yanlış; A dalı çalışmaz.', 1: 'else yalnızca önceki koşulların hepsi yanlışsa çalışır. 70 >= 70 doğru.', 2: 'Zincirde tek dal çalışır ve A dalının koşulu zaten yanlış.', 4: 'B dalı çalışınca else atlanır; zincirde yalnızca bir dal çalışır.' });
  why('hoca', 3, { 0: '6 yalnızca son `$i` değeri.', 1: '12 = 2 + 4 + 6, ama başlangıçtaki `$sum = 1` unutulmuş.', 3: '14 için 8 de eklenmeliydi; `$i` 8 olunca 8 < 7 yanlış, döngü biter.', 4: '`$i` 2’şer artar: yalnızca 2, 4, 6 eklenir.' });
  why('hoca', 4, { 0: 'Hesaplar ama saklamaz: `$level` hep 7 kalır, döngü sonsuz olur.', 1: 'Değer artar (7, 9, 11…), koşul hep doğru: sonsuz döngü.', 2: 'Birer azaltır: 7 6 5 4 3 2 1 yazılır.', 3: '`$level` her turda 2 olur: 7 2 2 2… sonsuz döngü.' });
  why('hoca', 5, { 0: '2 < 2 de 2 > 8 de yanlış; sınır dahil değil.', 1: '4 aralığın içinde, iki koşul da yanlış.', 2: '8 > 8 yanlış; `>` sınırı dahil etmez.', 4: '6 aralığın içinde, iki koşul da yanlış.' });
  why('hoca', 6, { 0: 'kuzey **değerdir**; anahtar eşittirin solundaki zone.', 1: 'Veri adreste geldi (GET); `$_POST` boştur.', 3: 'Hem yöntem hem anahtar yanlış.', 4: 'rota dosya adıdır, alanın anahtarı değil.' });
  why('hoca', 7, { 0: '`[1]` ikinci kayıttır → Sarı.', 1: 'Doğru kayıt ama yanlış alan → 2 (kat).', 2: 'Sıra ters: önce kayıt indeksi, sonra alan. `$rooms["name"]` diye bir anahtar yok.', 4: 'İkinci kaydın katı → 1.' });
  why('hoca', 8, { 0: '18 fonksiyonun döndürdüğü değer; son satır ondan 2 daha çıkarıyor.', 2: 'İşlem 18 − 2, toplama değil.', 3: '28 = 30 − 2; fonksiyon 12’yi zaten düşmüştü.', 4: '`-` metin birleştirmez: 18 − 2 = 16.' });
  why('hoca', 9, { 0: '& silinmez, yalnızca kodlanır.', 1: '& boşluğa dönüşmez.', 2: '`R&amp;D` HTML **kaynağında** yazar; tarayıcı bunu & olarak gösterir. Soru kullanıcının gördüğünü soruyor.', 4: 'Karakter kelimeye çevrilmez.' });

  why('demo1', 0, { 0: '55 için iki satırın da saklanması gerekirdi; `$balance - 10;` saklamaz.', 2: '50 başlangıç; `+= 15` değeri 65 yapar.', 3: '40 = 50 − 10; ama saklanan işlem `+= 15`.', 4: '75 = 65 + 10; satırda eksi var ve sonucu zaten saklanmıyor.' });
  why('demo1', 3, { 0: '`$i` 1, 4, 7 olur; toplam 12.', 2: 'Başlangıç `$sum = 0`; 1 + 4 + 7 = 12.', 3: '`$i` 10 olunca 10 <= 9 yanlış, 10 eklenmez.', 4: '22 = 1 + 4 + 7 + 10; 10 koşulu geçemez.' });
  why('demo1', 5, { 0: '18 >= 18 doğru; alt sınır dahil.', 1: '20 aralığın içinde.', 2: '25 <= 25 doğru; üst sınır dahil.', 4: '22 aralığın içinde.' });
  why('demo1', 6, { 0: '2 değerdir; anahtar sayfa.', 2: 'Veri adreste geldi: `$_GET`.', 3: 'kategori başka alanın anahtarı → kitap.', 4: 'urun dosya adıdır.' });
  why('demo1', 7, { 0: '`[2]` üçüncü kitap → 610.', 1: 'Doğru kayıt, yanlış alan → Simyacı.', 2: 'Sıra ters: önce indeks, sonra anahtar.', 4: '`[0]` ilk kitap → 540.' });
  why('demo1', 9, { 0: 'Etiket kodlandığı için tarayıcı onu çalıştırmaz; kalın yazı oluşmaz.', 1: 'Etiketler silinmez, metin olarak görünür.', 3: 'Bu HTML kaynağıdır; tarayıcı `&lt;` kodunu < olarak gösterir.', 4: 'Metin silinmez, sadece etiketler etkisizleşir.' });

  why('demo2', 0, { 0: '120 çarpma sonucu; ardından `-= 20` saklanır.', 2: '140 için 20 eklenmeliydi; `-=` çıkarır.', 3: '20 çıkarılan miktar.', 4: 'İşlemler aritmetik: 40 × 3 − 20.' });
  why('demo2', 3, { 0: 'Her tur 2 ekler ve 5 tur var.', 1: '5 tur sayısı; her turda 2 eklenir → 10.', 2: '`$i` 5, 4, 3, 2, 1 → 5 tur (1 >= 1 doğru).', 4: '`$i` 0 olunca 0 >= 1 yanlış; 6. tur yok.' });
  why('demo2', 5, { 0: '5 < 10 doğru → yazar.', 1: '9 < 10 doğru → yazar.', 3: '51 > 50 doğru → yazar.', 4: '60 > 50 doğru → yazar.' });
  why('demo2', 6, { 0: 'kutu `id`’dir; PHP `name` ile okur.', 1: 'Ankara değerdir, anahtar değil.', 3: '`method="get"` → `$_GET`.', 4: 'sonuc dosya adıdır.' });
  why('demo2', 7, { 0: '25 = Çay + Su; istenen Kahve + Su.', 1: '40 yalnızca Kahve.', 3: '55 = Çay + Kahve.', 4: '`+` sayıları toplar; birleştirme nokta ile olurdu.' });
  why('demo2', 9, { 0: 'Bu kullanıcının gördüğüdür; kaynakta & → `&amp;`.', 2: 'Kelimeye çevrilmez.', 3: '& silinmez.', 4: '`&lt;` < işaretinin kodudur.' });

  why('demo3', 0, { 0: '`++` unutulmuş: 3 → 4 → 14.', 2: '4 yalnızca `++` sonrası; `+= 10` da saklanır.', 3: '3 başlangıç değeri.', 4: 'İşlemler aritmetik; nokta yalnızca echo satırında.' });
  why('demo3', 3, { 0: '1 > 0 doğru olduğu için 4. tur da çalışır.', 2: '−2 > 0 yanlış; 5. tur yok.', 3: '10 başlangıç değeri, tur sayısı değil.', 4: '22 değerlerin toplamı; sayaç turları sayar.' });
  why('demo3', 5, { 1: '`||` için tek doğru koşul yeter: 600 >= 500.', 2: 'if–else’te yalnızca bir dal çalışır.', 3: 'Koşul doğru → if dalı yazar.', 4: 'Kodda hata yok.' });
  why('demo3', 6, { 1: 'Önce anahtar (name), sonra değer.', 2: 'GET’te veri adrese eklenir; adreste görünmeyen POST’tur.', 3: 'Yöntem get → `$_GET`.', 4: 'Adres action dosyasıyla başlar: sonuc.php.' });
  why('demo3', 7, { 0: '155 = 70 + 85; `[1]` ve `[3]` → 85 ve 60.', 2: '160 = 70 + 90.', 3: '130 = 70 + 60; `[0]` değil `[1]` istendi.', 4: '`+` toplar, birleştirmez.' });
  why('demo3', 9, { 0: 'Doğrulama yapmaz; sadece gösterimi düzenler.', 1: 'ENT_QUOTES tek ve çift tırnağı kapsar.', 3: 'Sabittir; `$` almaz.', 4: 'Biçimlendirmez; etiketleri etkisizleştirir.' });

  /* ---------- Deneme 1–3: GE1 tarzı yeni sorular ---------- */
  // Deneme 1
  swap('demo1', 1, { type: 'mc', topic: 'karsilastirma', q: 'Ekranda ne görünür?',
    code: `$code = "25";
$max = 25;
if ($code == $max) { echo "A"; }
if ($code === $max) { echo "B"; }
if ($code != $max) { echo "C"; }`,
    opts: ['`A`', '`AB`', '`ABC`', '`B`', '`AC`'], a: 0,
    exp: 'Üç **bağımsız** if var; her biri ayrı sınanır. `"25" == 25` doğru → A. `===` tür farkı yüzünden yanlış. `!=` değerler eşit olduğu için yanlış.',
    why: { 1: '`"25" === 25` false: biri metin, biri tam sayı.', 2: 'B ve C koşulları yanlış; yalnızca A yazılır.', 3: '`===` tür de ister; bu koşul yanlış.', 4: '`!=` değere bakar; 25 ile "25" eşit, koşul yanlış.' }, check: 'out' });
  swap('demo1', 2, { type: 'mc', topic: 'kosullar', q: 'Hız 130 iken “Çok hızlı” yazılması bekleniyor. Mevcut kod ne yazar?',
    code: `$speed = 130;
if ($speed > 50) { echo "Hızlı"; }
elseif ($speed > 120) { echo "Çok hızlı"; }
else { echo "Normal"; }`,
    opts: ['`Hızlı`', '`Çok hızlı`', '`HızlıÇok hızlı`', '`Normal`', '`Çok hızlıHızlı`'], a: 0,
    exp: 'İlk koşul (130 > 50) doğru → “Hızlı” yazılır ve zincir biter; `elseif` hiç denenmez. Doğrusu yüksek eşiği önce sınamak: önce `> 120`, sonra `> 50`.',
    why: { 1: 'Beklenen bu ama kod sırası buna izin vermiyor: ilk doğru dal “Hızlı”.', 2: 'if–elseif zincirinde yalnızca bir dal çalışır.', 3: 'else ancak iki koşul da yanlışsa çalışır.', 4: 'Zincirde tek dal çalışır ve sıra yukarıdan aşağıdır.' }, check: 'out' });
  swap('demo1', 4, { type: 'mc', topic: 'donguler', q: 'Ekranda ne görünür?',
    code: `$n = 10;
while ($n > 4) {
    $n -= 2;
    echo $n . " ";
}`,
    opts: ['`10 8 6`', '`8 6 4`', '`8 6`', '`10 8 6 4`', '`8 6 4 2`'], a: 1,
    exp: 'Önce azalt, sonra yaz. 10 > 4 → 8 yaz; 8 > 4 → 6 yaz; 6 > 4 → 4 yaz; 4 > 4 yanlış, döngü biter. Koşul tur **başında** kontrol edildiği için 4 de yazılır.',
    why: { 0: 'echo azaltmadan **sonra**; 10 hiç yazılmaz.', 2: 'Son turda koşul 6 > 4 ile girildi, sonra 4 yapıldı ve yazıldı.', 3: '10 yazılmaz; azaltma echo’dan önce.', 4: '4 > 4 yanlış; 5. tur yok.' }, check: 'out' });
  swap('demo1', 8, { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda ne görünür?',
    code: `function price($x) {
    echo $x * 2;
}
$p = price(4);
echo " TL";`,
    opts: ['`8 TL`', '` TL8`', '`8`', '` TL`', '`TL 8`'], a: 0,
    exp: 'Fonksiyon `return` etmiyor, içinde `echo` var: `price(4)` çağrıldığı anda 8 yazılır. `$p` boş (null) kalır. Sonra “ TL” eklenir: `8 TL`.',
    why: { 1: 'Çağrı “ TL” satırından önce; 8 önce yazılır.', 2: 'Sonraki `echo " TL";` de çalışır.', 3: 'Fonksiyon içindeki echo da çıktı üretir.', 4: 'Sıra: önce fonksiyonun yazdığı 8, sonra “ TL”.' }, check: 'out' });
  swap('demo1', 12, { type: 'fill', topic: 'mantiksal', q: '18–26 derece (sınırlar dahil) konforlu. Konfor **dışını** yakala.',
    code: `if ($temp < 18 ____ $temp > 26) { echo "Konfor dışı"; }`,
    ans: ['||'], exp: '`||`: aralık dışında olmak için iki ihlalden biri yeter. `&&` yazılsaydı hiçbir sayı aynı anda hem 18’den küçük hem 26’dan büyük olamazdı.',
    whyFill: { '&&': 'Bir sayı aynı anda 18’den küçük ve 26’dan büyük olamaz; koşul hep yanlış kalır.' }, check: { pre: '$temp = 30;', expect: 'Konfor dışı' } });
  swap('demo1', 13, { type: 'fill', topic: 'diziler', q: 'Yalnızca 9 yazdır.',
    code: `$teams = [
    ["name" => "Kartal", "score" => 12],
    ["name" => "Aslan", "score" => 9]
];
echo $teams[____]["score"];`,
    ans: ['1'], exp: '`1`: 9 ikinci kaydın puanı; ikinci kayıt indeks 1. Aynı kaydın adı için `["name"]` → Aslan.',
    whyFill: { '2': 'İki kayıt var: indeksler 0 ve 1. `[2]` yok.', '0': '`[0]` ilk kayıt → 12.' }, check: { expect: '9' } });

  // Deneme 2
  swap('demo2', 1, { type: 'mc', topic: 'karsilastirma', q: 'Ekranda ne görünür?',
    code: `$a = "0";
$b = 0;
if ($a === $b) { echo "1"; }
if ($a == $b) { echo "2"; }
if ($a !== $b) { echo "3"; }`,
    opts: ['`1`', '`2`', '`23`', '`123`', '`3`'], a: 2,
    exp: 'Bağımsız üç if. `"0" === 0` yanlış (tür farklı). `"0" == 0` doğru → 2. `!==` tür farklı olduğu için doğru → 3. Çıktı: `23`.',
    why: { 0: '`===` tür de ister; "0" metin, 0 tam sayı.', 1: 'Üçüncü if de ayrıca sınanır: `!==` tür farkından dolayı true.', 3: 'İlk koşul yanlış, 1 yazılmaz.', 4: 'İkinci if de doğru: değerce eşitler.' }, check: 'out' });
  swap('demo2', 2, { type: 'mc', topic: 'kosullar', q: '3 kg’lık paket için “Mini” bekleniyor. Mevcut kod ne yazar?',
    code: `$kg = 3;
if ($kg <= 10) { echo "Küçük"; }
elseif ($kg <= 5) { echo "Mini"; }
else { echo "Büyük"; }`,
    opts: ['`Mini`', '`Küçük`', '`KüçükMini`', '`Büyük`', '`MiniKüçük`'], a: 1,
    exp: '3 <= 10 doğru → “Küçük” ve zincir biter. `<= 5` dalı, kendisinden geniş bir koşulun arkasında kaldığı için hiç çalışamaz. Düzeltme: önce `<= 5`, sonra `<= 10`.',
    why: { 0: 'Mini dalına hiç ulaşılmaz; ilk koşul zaten doğru.', 2: 'Zincirde yalnızca bir dal çalışır.', 3: 'else için iki koşulun da yanlış olması gerekir.', 4: 'Sıra yukarıdan aşağı; ilk doğru dal Küçük.' }, check: 'out' });
  swap('demo2', 4, { type: 'mc', topic: 'donguler', q: 'Ekranda ne görünür?',
    code: `$x = 1;
while ($x < 20) {
    $x = $x * 3;
    echo $x . " ";
}`,
    opts: ['`1 3 9`', '`3 9`', '`3 9 27`', '`1 3 9 27`', '`9 27`'], a: 2,
    exp: 'Koşul tur başında: 1 < 20 → 3 yaz; 3 < 20 → 9 yaz; 9 < 20 → 27 yaz; 27 < 20 yanlış. 27 sınırı aşsa da yazılır, çünkü kontrol çarpmadan **önce** yapıldı.',
    why: { 0: '1 yazılmaz: çarpma echo’dan önce.', 1: 'Üçüncü tur 9 < 20 ile girer ve 27 yazar.', 3: '1 yazılmaz.', 4: 'İlk tur 3 yazar.' }, check: 'out' });
  swap('demo2', 8, { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda ne görünür?',
    code: `function tag($n) {
    echo "#" . $n;
    return $n + 1;
}
$t = tag(4);
echo " " . $t;`,
    opts: ['`#4 5`', '`5 #4`', '`#5 5`', '`#4 4`', '` 5`'], a: 0,
    exp: 'Çağrı anında fonksiyon içindeki echo `#4` yazar, sonra 5 döndürür. `$t = 5`. Son satır “ 5” ekler: `#4 5`.',
    why: { 1: 'Fonksiyon önce çağrıldı; `#4` önce yazılır.', 2: 'echo `$n + 1`’den önce, `$n` hâlâ 4.', 3: 'return `$n + 1` = 5 döndürür.', 4: 'Fonksiyon içindeki echo da çıktı üretir.' }, check: 'out' });
  swap('demo2', 12, { type: 'fill', topic: 'mantiksal', q: '0–100 dışındaki puanları yakala (0 ve 100 geçerli).',
    code: `if ($score ____ 0 || $score > 100) { echo "Geçersiz"; }`,
    ans: ['<'], exp: '`<`: 0 geçerli olduğu için `<= 0` değil `< 0`. Sağ taraf `> 100` olduğu için 100 de geçerli kalır.',
    whyFill: { '<=': '`<=` yazılırsa 0 da geçersiz sayılır; oysa 0 geçerli.' }, check: { pre: '$score = -1;', expect: 'Geçersiz' } });
  swap('demo2', 13, { type: 'fill', topic: 'diziler', q: 'Fiat yazdır.',
    code: `$cars = [
    ["brand" => "Fiat", "year" => 2015],
    ["brand" => "Opel", "year" => 2020]
];
echo $cars[0]["____"];`,
    ans: ['brand'], cs: true, exp: '`brand`: ilk kayıt (`[0]`) içinde marka alanı. `year` yazılsaydı 2015 gelirdi.',
    whyFill: { 'year': 'year → 2015; istenen marka adı.' }, check: { expect: 'Fiat' } });

  // Deneme 3
  swap('demo3', 1, { type: 'mc', topic: 'karsilastirma', q: 'Ekranda ne görünür?',
    code: `$p = "7";
$q = 7;
if ($p == $q) { echo "E"; }
if ($p === $q) { echo "T"; }
$p = 7;
if ($p === $q) { echo "S"; }`,
    opts: ['`E`', '`ES`', '`ETS`', '`S`', '`ET`'], a: 1,
    exp: 'İlk iki if: "7" == 7 doğru (E), "7" === 7 yanlış. Sonra `$p = 7` ile tür tam sayı olur; 7 === 7 doğru (S). Çıktı: `ES`.',
    why: { 0: '`$p` sonradan tam sayı yapıldı; son if de doğru.', 2: 'İkinci if’te `$p` hâlâ metin: T yazılmaz.', 3: 'İlk if’te `==` değerce eşit → E yazılır.', 4: 'T için tür eşitliği gerekir; o anda `$p` metin.' }, check: 'out' });
  swap('demo3', 2, { type: 'mc', topic: 'kosullar', q: 'Saat 23 için “Gece” bekleniyor. Mevcut kod ne yazar?',
    code: `$hour = 23;
if ($hour >= 12) { echo "Öğleden sonra"; }
elseif ($hour >= 22) { echo "Gece"; }
else { echo "Sabah"; }`,
    opts: ['`Gece`', '`Öğleden sonra`', '`Öğleden sonraGece`', '`Sabah`', '`GeceÖğleden sonra`'], a: 1,
    exp: '23 >= 12 doğru → ilk dal çalışır, zincir biter. “Gece” dalına ulaşılmaz. Düzeltme: `>= 22` önce sınanır.',
    why: { 0: 'Beklenen bu ama sıra yanlış; ilk doğru dal “Öğleden sonra”.', 2: 'Zincirde tek dal çalışır.', 3: 'else için iki koşulun da yanlış olması gerekir.', 4: 'Sıra yukarıdan aşağı.' }, check: 'out' });
  swap('demo3', 4, { type: 'mc', topic: 'donguler', q: 'Ekranda ne görünür?',
    code: `$k = 0;
while ($k < 6) {
    $k += 2;
    echo $k;
}`,
    opts: ['`024`', '`246`', '`0246`', '`24`', '`2468`'], a: 1,
    exp: '0 < 6 → 2 yaz; 2 < 6 → 4 yaz; 4 < 6 → 6 yaz; 6 < 6 yanlış. Arttırma echo’dan önce olduğu için 0 yazılmaz, 6 yazılır.',
    why: { 0: '0 yazılmaz; önce `+= 2`.', 2: '0 yazılmaz.', 3: 'Üçüncü tur 4 < 6 ile girer ve 6 yazar.', 4: '6 < 6 yanlış; 8’e ulaşılmaz.' }, check: 'out' });
  swap('demo3', 8, { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda ne görünür?',
    code: `function add($a, $b) {
    echo $a + $b;
}
echo "Sonuç: " . add(2, 3);`,
    opts: ['`Sonuç: 5`', '`5Sonuç: `', '`Sonuç: `', '`5`', '`Sonuç: 55`'], a: 1,
    exp: 'Dıştaki echo önce birleştirilecek metni hazırlar; bunun için `add(2, 3)` çağrılır ve fonksiyon **hemen** 5 yazar, değer döndürmez (null). Sonra `"Sonuç: "` yazılır: `5Sonuç: `. GE1 Soru 10 ile aynı mantık.',
    why: { 0: 'Bu çıktı için fonksiyonun `return $a + $b;` yapması gerekirdi.', 2: 'Fonksiyon içindeki echo da 5 yazar.', 3: 'Dıştaki echo “Sonuç: ” metnini de yazar.', 4: 'Fonksiyon değer döndürmez; 5 yalnızca bir kez yazılır.' }, check: 'out' });
  swap('demo3', 12, { type: 'fill', topic: 'mantiksal', q: '1–30 kg arası (sınırlar dahil) gönderilebilir.',
    code: `if ($w ____ 1 && $w <= 30) { echo "Gönderilebilir"; }`,
    ans: ['>='], exp: '`>=`: 1 kg da kabul. `>` yazılırsa tam 1 kg reddedilir.',
    whyFill: { '>': '`>` sınırı dahil etmez; 1 kg reddedilir.' }, check: { pre: '$w = 1;', expect: 'Gönderilebilir' } });
  swap('demo3', 13, { type: 'fill', topic: 'diziler', q: '“80 TL” yazdır.',
    code: `$menu = [
    ["dish" => "Çorba", "price" => 60],
    ["dish" => "Pilav", "price" => 80]
];
echo $menu[1]["____"] . " TL";`,
    ans: ['price'], cs: true, exp: '`price`: ikinci kaydın (`[1]`) fiyat alanı 80.',
    whyFill: { 'dish': 'dish → Pilav; istenen fiyat.' }, check: { expect: '80 TL' } });

  /* ---------- Deneme vizesi 4 (GE1) ---------- */
  var stock = { type: 'mc', topic: 'atama', q: 'Hangi değer gerçekten değişti? Ekranda ne yazılır?',
    code: `$stock = 18;
$stock - 4;
$stock += 3;
echo "Stok: " . $stock;`,
    opts: ['`Stok: 17`', '`Stok: 18`', '`Stok: 21`', '`Stok: 14`', '`Stok: 25`'], a: 2,
    exp: 'Saklanan değerler: 18 → 18 → 21. İkinci satır 14’ü hesaplar ama hiçbir değişkene atamaz. Bir işlemi hesaplamak sonucu kaydetmez.',
    why: { 0: '17 = 18 − 4 + 3; ama `$stock - 4;` saklanmadı.', 1: '18 başlangıç; `+= 3` saklanır.', 3: '14 hesaplanır ama saklanmaz.', 4: '25 için `+= 7` gerekirdi.' }, check: 'out' };
  var tag1 = { type: 'mc', topic: 'karsilastirma', q: 'Ekranda X, Y veya XY mi görünür?',
    code: `$tag = "40";
$limit = 40;
if ($tag === $limit) { echo "X"; }
if ($tag == $limit)  { echo "Y"; }`,
    opts: ['`X`', '`Y`', '`XY`', '`YX`', 'Hiçbir şey'], a: 1,
    exp: '"40" metin, 40 tam sayı. `===` tür farkı yüzünden yanlış; `==` değerce eşit olduğu için doğru → Y. Bağımsız iki if her biri ayrı sınanır.',
    why: { 0: '`===` tür de ister; X yazılmaz.', 2: 'X koşulu yanlış.', 3: 'X yazılmaz; sıralama da if sırasıyla olurdu.', 4: '`==` değerce eşit → Y yazılır.' }, check: 'out' };
  var tag2 = { type: 'mc', topic: 'karsilastirma', q: 'İlk satırdaki tırnaklar kaldırılırsa (`$tag = 40;`) ekranda ne görünür?',
    code: `$tag = 40;
$limit = 40;
if ($tag === $limit) { echo "X"; }
if ($tag == $limit)  { echo "Y"; }`,
    opts: ['`X`', '`Y`', '`XY`', '`YX`', 'Hiçbir şey'], a: 2,
    exp: 'Artık ikisi de tam sayı: `===` doğru (X), `==` doğru (Y). Bağımsız iki if olduğu için ikisi de yazılır: `XY`.',
    why: { 0: 'İkinci if de ayrıca sınanır ve doğru.', 1: 'Tür artık aynı; `===` de doğru.', 3: 'if’ler yukarıdan aşağı çalışır: önce X.', 4: 'İki koşul da doğru.' }, check: 'out' };
  var points = { type: 'mc', topic: 'kosullar', q: '92 puan için beklenen etiket “Üstün”. Mevcut çıktı nedir?',
    code: `$points = 92;
if ($points >= 60) {
    echo "Geçti";
} elseif ($points >= 90) {
    echo "Üstün";
} else {
    echo "Tekrar";
}`,
    opts: ['`Geçti`', '`Üstün`', '`GeçtiÜstün`', '`Tekrar`', '`ÜstünGeçti`'], a: 0,
    exp: '92 >= 60 doğru → “Geçti” ve zincir biter; `>= 90` dalı hiç denenmez. Düzeltme: önce `>= 90` (Üstün), sonra `>= 60` (Geçti). Sırayı değiştirirken her mesaj kendi koşuluyla birlikte taşınır.',
    why: { 1: 'Beklenen bu ama ilk doğru dal “Geçti”.', 2: 'Zincirde yalnızca bir dal çalışır.', 3: 'else için iki koşulun da yanlış olması gerekir.', 4: 'Tek dal çalışır.' }, check: 'out' };
  var sum3 = { type: 'mc', topic: 'donguler', q: 'En son hangi sayı yazdırılır?',
    code: `$sum = 3;
for ($i = 2; $i <= 6; $i += 2) {
    $sum += $i;
}
echo $sum;`,
    opts: ['`12`', '`15`', '`9`', '`21`', '`18`'], a: 1,
    exp: 'i = 2 → sum 5; i = 4 → sum 9; i = 6 → sum 15. i = 8 olunca 8 <= 6 yanlış. Başlangıçtaki 3 de toplama dahil; echo döngü dışında bir kez çalışır.',
    why: { 0: '12 = 2 + 4 + 6; başlangıçtaki 3 unutulmuş.', 2: '9 ikinci turdan sonraki ara değer.', 3: '21 için 8 de eklenmeliydi; 8 <= 6 yanlış.', 4: '18 yanlış toplam; 3 + 2 + 4 + 6 = 15.' }, check: 'out' };
  var left = { type: 'mc', topic: 'donguler', q: 'Ekranda ne yazılır?',
    code: `$left = 9;
while ($left > 2) {
    $left -= 3;
    echo $left . " ";
}`,
    opts: ['`9 6 3`', '`6 3 0`', '`6 3`', '`9 6 3 0`', '`3 0`'], a: 1,
    exp: 'Koşul tur başında, echo azaltmadan sonra. 9 > 2 → 6 yaz; 6 > 2 → 3 yaz; 3 > 2 → 0 yaz; 0 > 2 yanlış. 0 da çıktıda görünür.',
    why: { 0: '9 yazılmaz; azaltma echo’dan önce.', 2: 'Üçüncü tur 3 > 2 ile girer ve 0 yazar.', 3: '9 yazılmaz.', 4: 'İlk tur 6 yazar.' }, check: 'out' };
  var form = { type: 'mc', topic: 'get', q: 'Kullanıcı B2 yazıp gönderiyor. raf.php’de `$value` ne olur?',
    code: `<form method="get" action="raf.php">
  <input name="section" id="zone">
  <button>Ara</button>
</form>
// raf.php içindeki PHP satırı:
$value = $_GET["zone"] ?? "";`,
    opts: ['`"B2"`', '`""` (boş metin)', '`"zone"`', '`"section"`', 'Hata verir'], a: 1,
    exp: 'Adres `raf.php?section=B2` olur. PHP alanı **name** ile okur; `zone` id’dir, adreste yok. Alan bulunamadığı için `??` boş metni verir. Düzeltme: `$_GET["section"]`.',
    why: { 0: 'B2 `section` anahtarıyla geldi; kod `zone` arıyor.', 2: 'id değeri PHP’ye gönderilmez.', 3: 'Anahtar adı değer olarak gelmez.', 4: '`??` sayesinde eksik alan hata vermez, boş metin olur.' }, check: { php: '$_GET = ["section" => "B2"]; $value = $_GET["zone"] ?? ""; var_export($value);', expect: "''" } };
  var pages = { type: 'mc', topic: 'sayac', q: 'Ekranda ne yazılır?',
    code: `$count = 0;
foreach ([2, 9, 5] as $pages) {
    if ($pages >= 5) {
        echo $pages . " ";
    }
    $count++;
}
echo "/ " . $count;`,
    opts: ['`9 5 / 2`', '`9 5 / 3`', '`2 9 5 / 3`', '`9 5`', '`/ 3`'], a: 1,
    exp: 'if yalnızca echo’yu kapsar; `$count++` süslü parantezin dışında, her turda çalışır → 3. Sadece yazdırılanları saymak için `$count++` if’in içine taşınmalı (sonuç 9 5 / 2). Kapsamı girinti değil süslü parantez belirler.',
    why: { 0: 'Bu düzeltilmiş halin çıktısı; mevcut kodda sayaç if dışında.', 2: '2 >= 5 yanlış; 2 yazılmaz.', 3: 'Döngüden sonraki echo da çalışır.', 4: '9 ve 5 koşulu sağlar, yazılır.' }, check: 'out' };
  var label = { type: 'mc', topic: 'fonksiyonlar', q: '`return` yerine `echo` yazıldı. Ekranda ne görünür?',
    code: `function labelNo($n) {
    echo $n + 2;
}
$id = labelNo(5);
echo "Raf: " . $id;`,
    opts: ['`Raf: 7`', '`7Raf: `', '`Raf: `', '`Raf: 77`', '`7`'], a: 1,
    exp: 'Fonksiyon içindeki echo çağrı anında 7 yazar; değer döndürmez, `$id` boş kalır. Sonra “Raf: ” yazılır → `7Raf: `. return ile çıktı `Raf: 7` olurdu.',
    why: { 0: 'Bu return’lü halin çıktısı.', 2: 'Fonksiyon içindeki echo da 7 yazar.', 3: '7 yalnızca bir kez yazılır; `$id` boş.', 4: 'Son satır da “Raf: ” yazar.' }, check: 'out' };
  var rb = { type: 'mc', topic: 'html', q: 'Kullanıcı ne görür?',
    code: `$text = "<u>R&B</u>";
echo htmlspecialchars(
    $text, ENT_QUOTES, "UTF-8"
);`,
    opts: ['Altı çizili “R&B”', '`<u>R&B</u>` metni (altı çizili değil)', 'Yalnızca `R&B`', '`&lt;u&gt;R&amp;B&lt;/u&gt;`', 'Hiçbir şey'], a: 1,
    exp: 'Etiketler silinmez, kodlanır: kaynakta `&lt;u&gt;R&amp;B&lt;/u&gt;` olur, tarayıcı bunu `<u>R&B</u>` metni olarak gösterir. Altı çizilmez; ortadaki & kaynakta `&amp;` olur.',
    why: { 0: 'Etiket kodlandığı için çalışmaz.', 2: 'Etiketler silinmez, metin olarak görünür.', 3: 'Bu HTML kaynağıdır; kullanıcı orijinal karakterleri görür.', 4: 'Metin silinmez.' }, check: { php: 'echo htmlspecialchars("<u>R&B</u>", ENT_QUOTES, "UTF-8");', expect: '&lt;u&gt;R&amp;B&lt;/u&gt;' } };

  var size = { type: 'fill', topic: 'mantiksal', q: '4–12 arası (sınırlar dahil) geçerli. Ret koşulunu tamamla.',
    code: `if ($size < 4 ____ $size > 12) {
    echo "Reddedildi";
} else {
    echo "Kabul";
}`,
    ans: ['||'], exp: '`||`: aralık dışında olmak için iki ihlalden biri yeter. 3 → Reddedildi, 4 → Kabul, 12 → Kabul, 13 → Reddedildi.',
    whyFill: { '&&': 'Bir sayı aynı anda 4’ten küçük ve 12’den büyük olamaz; hep “Kabul” yazılır.' }, check: { pre: '$size = 3;', expect: 'Reddedildi' } };
  var mixA = { type: 'fill', topic: 'diziler', q: 'Yalnızca 7 yazdır: kayıt indeksini yaz.',
    code: `$mixes = [
  ["name" => "Gece", "tracks" => 4],
  ["name" => "Sabah", "tracks" => 7]
];
echo $mixes[____]["tracks"];`,
    ans: ['1'], exp: '`1`: 7 ikinci kaydın tracks değeri. İlk seçim kaydı, ikinci seçim alanı belirler.',
    whyFill: { '0': '`[0]` ilk kayıt → 4.', '2': 'İki kayıt var; indeksler 0 ve 1.' }, check: { expect: '7' } };
  var mixB = { type: 'fill', topic: 'diziler', q: 'Aynı kaydın adını (Sabah) göstermek için alan anahtarını yaz.',
    code: `$mixes = [
  ["name" => "Gece", "tracks" => 4],
  ["name" => "Sabah", "tracks" => 7]
];
echo $mixes[1]["____"];`,
    ans: ['name'], cs: true, exp: '`name`: kayıt aynı kalır (`[1]`), sadece alan değişir.', check: { expect: 'Sabah' } };
  var section = { type: 'fill', topic: 'get', q: 'Form `<input name="section" id="zone">`. Değeri okuyan satırı düzelt.',
    code: `$value = $_GET["____"] ?? "";
echo $value;`,
    ans: ['section'], cs: true, exp: '`section`: PHP alanı name ile okur. Adres `raf.php?section=B2` → B2.',
    whyFill: { 'zone': '`zone` id’dir; adreste yer almaz, sonuç boş metin olur.' }, check: { pre: '$_GET = ["section" => "B2"];', expect: 'B2' } };
  var atLeast = { type: 'fill', topic: 'karsilastirma', q: 'Kural: “En az 5 olanları say.” Listeye 5 eklendi; doğru sonuç 3 olmalı.',
    code: `$values = [4, 6, 8, 5];
$count = 0;
foreach ($values as $value) {
    if ($value ____ 5) { $count++; }
}
echo $count;`,
    ans: ['>='], exp: '`>=`: “en az 5” 5’i de kapsar. `>` ile çıktı 2 olurdu; hata ancak sınır değeri (5) listede olunca görünür.',
    whyFill: { '>': '`>` 5’i saymaz; sonuç 2 çıkar.' }, check: { expect: '3' } };
  var total = { type: 'fill', topic: 'sayac', q: 'Eşiğe eşit veya yüksek ölçümlerin toplamı isteniyor (beklenen 23).',
    code: `$data = [3, 8, 5, 10];
$limit = 5;
$total = 0;
foreach ($data as $value) {
    if ($value >= $limit) {
        $total ____ $value;
    }
}
echo $total;`,
    ans: ['+='], exp: '`+=`: 8 + 5 + 10 = 23. Sadece `=` kullanılırsa toplam yerine son uygun değer (10) kalır.',
    whyFill: { '=': '`=` her seferinde üzerine yazar; sonuç 10 olur.' }, check: { expect: '23' } };

  var rack = { type: 'code', topic: 'foreach', title: 'İki ölçütlü seçim',
    q: 'Adres: `stok.php?raf=A`. Seçilen rafta, adedi en az 4 olan kayıtların adetlerini topla. Ekranda 10 görünmeli.',
    code: `// [raf, adet] biçiminde dört kayıt
$rows = [["A", 4], ["B", 7], ["A", 6], ["A", 2]];
$rack = $_GET["{{1}}"];
$sum = 0;
foreach ($rows {{2}} $row) {
    if ($row[0] === $rack {{3}} $row[1] >= 4) {
        $sum {{4}} $row[1];
    }
}
echo $sum;`,
    blanks: [{ ans: ['raf'], cs: true }, { ans: ['as'] }, { ans: ['&&'] }, { ans: ['+='] }],
    exps: ['`raf`: adresteki anahtar (`?raf=A`).', '`as`: her turda bir kayıt `$row`’a gelir.', '`&&`: hem doğru rafta hem adet ≥ 4 olmalı. `||` olsaydı B rafının 7’si de eklenirdi.', '`+=`: adet toplama eklenir.'],
    note: 'A için 4 + 6 = 10 (2 eşiği geçemez). B için sonuç 7 olurdu. Kayıt elemanları indeksle okunur: `$row[0]` raf, `$row[1]` adet.',
    pre: '$_GET = ["raf" => "A"];', expect: '10' };

  EXAMS.push({
    id: 'demo4', title: 'Deneme vizesi 4 (yeni)', desc: 'Hocanın Genel Tekrar 1 sunumundan; diğerlerinden biraz daha zor.', featured: true,
    questions: [stock, tag1, tag2, points, sum3, left, form, pages, label, rb, size, mixA, mixB, section, atLeast, total, rack]
  });

  /* ---------- Kod tamamlama havuzuna ek sorular ---------- */
  window.EXTRA_CODE.push(
    { type: 'code', topic: 'sayac', title: 'Sıcak günler',
      q: '20 derece ve üstündeki günleri say ve sıcaklıklarını topla. Ekranda “2 gün, toplam 55” görünmeli.',
      code: `$temps = [12, 18, 25, 30];
$limit = 20;
$hot = 0;
$sum = 0;
foreach ($temps {{1}} $t) {
    if ($t {{2}} $limit) {
        $hot{{3}};
        $sum {{4}} $t;
    }
}
echo $hot . " gün, toplam " . $sum;`,
      blanks: [{ ans: ['as'] }, { ans: ['>='] }, { ans: ['++'] }, { ans: ['+='] }],
      exps: ['`as`: her sıcaklık `$t`’ye gelir.', '`>=`: “20 ve üstü” 20’yi de kapsar.', '`++`: sayaç uygun her günde bir artar.', '`+=`: sıcaklık toplama eklenir.'],
      note: '25 ve 30 uygun: 2 gün, 25 + 30 = 55. Sayaç ve toplam aynı if’in içinde olmalı.',
      expect: '2 gün, toplam 55' },
    { type: 'code', topic: 'get', title: 'Türe göre uzun kitaplar',
      q: 'Adres: `kitap.php?tur=roman`. Seçilen türde ve 100 sayfadan **uzun** (100 hariç) kitapları say. Ekranda “2 kitap” görünmeli.',
      code: `$books = [
    ["tur" => "roman", "sayfa" => 320],
    ["tur" => "şiir", "sayfa" => 90],
    ["tur" => "roman", "sayfa" => 150],
    ["tur" => "roman", "sayfa" => 80]
];
$tur = $_GET["{{1}}"];
$adet = 0;
foreach ($books as $book) {
    if ($book["tur"] === $tur {{2}} $book["sayfa"] {{3}} 100) {
        $adet{{4}};
    }
}
echo $adet . " kitap";`,
      blanks: [{ ans: ['tur'], cs: true }, { ans: ['&&'] }, { ans: ['>'] }, { ans: ['++'] }],
      exps: ['`tur`: adresteki anahtar.', '`&&`: iki ölçüt birden sağlanmalı.', '`>`: “100’den uzun, 100 hariç”.', '`++`: uygun her kitapta sayaç artar.'],
      note: 'Romanlar 320, 150, 80 → 100’den uzun olanlar 320 ve 150: 2 kitap.',
      pre: '$_GET = ["tur" => "roman"];', expect: '2 kitap' },
    { type: 'code', topic: 'fonksiyonlar', title: 'İndirimli toplam',
      q: 'Her fiyattan 10 TL indirim yapan fonksiyonu kullanarak toplamı yazdır. Ekranda “Toplam: 130” görünmeli.',
      code: `function discounted($price) {
    {{1}} $price - 10;
}
$prices = [50, 30, 80];
$total = 0;
foreach ($prices as $p) {
    $total {{2}} discounted({{3}});
}
echo "Toplam: " {{4}} $total;`,
      blanks: [{ ans: ['return'] }, { ans: ['+='] }, { ans: ['$p'], cs: true }, { ans: ['.', 'nokta'] }],
      exps: ['`return`: indirimli fiyat çağırana verilir; echo olsaydı toplama eklenemezdi.', '`+=`: her indirimli fiyat toplama eklenir.', '`$p`: o turdaki fiyat fonksiyona gönderilir (argüman).', 'Nokta (`.`): etiket ile sayı birleşir.'],
      note: '40 + 20 + 70 = 130.',
      expect: 'Toplam: 130' }
  );
})();
