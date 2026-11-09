/* İSG soru bankası. Hoca soru vermedi; sorular derste işlenen slaytlardan üretildi (ISGSunumlar).
   Şıklar sabit tohumla karıştırılır; doğru cevap her açılışta aynı harfte durur.
   q(konu, soru, [doğru, yanlış1, yanlış2, yanlış3], açıklama) */
(function () {
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var shuf = rng(2026);
  var ALL = [];
  function q(topic, text, opts, exp) {
    var idx = opts.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(shuf() * (i + 1)); var x = idx[i]; idx[i] = idx[j]; idx[j] = x; }
    var item = { type: 'mc', topic: topic, q: text, opts: idx.map(function (k) { return opts[k]; }), a: idx.indexOf(0), exp: exp, no: ALL.length + 1 };
    ALL.push(item);
  }

  /* ---------- 1. Temel kavramlar, amaçlar, önemi ---------- */
  q('kavram', 'İşyerlerinde işin yürütülmesi nedeniyle oluşan tehlikelerden ve sağlığa zarar verebilecek koşullardan korunmak için yapılan sistemli çalışmalara ne denir?',
    ['İş güvenliği', 'İşçi sağlığı', 'Meslek hastalığı', 'Risk değerlendirmesi'],
    '**İş güvenliği** tanımı. İşçi sağlığı ise ILO/WHO’nun tanımladığı tıp bilimidir.');
  q('kavram', 'ILO ve WHO’nun tanımına göre işçi sağlığı nasıl bir bilimdir?',
    ['İşin insana, insanın işe uymasını amaçlayan tıp bilimi', 'İşyerindeki makinelerin güvenliğini inceleyen mühendislik bilimi', 'Kazaların maliyetini hesaplayan iktisat bilimi', 'İşçilerin hukuki haklarını düzenleyen hukuk bilimi'],
    'ILO ve WHO işçi sağlığını fiziksel, ruhsal, moral ve sosyal iyilik halini, işin insana ve insanın işe uymasını amaçlayan **tıp bilimi** olarak tanımlar.');
  q('kavram', 'İşçi sağlığı tanımında çalışanların hangi yönlerden tam iyilik hali sayılmaz?',
    ['Ekonomik', 'Fiziksel', 'Ruhsal', 'Sosyal'],
    'Tanımda **fiziksel, ruhsal, moral ve sosyal** iyilik hali geçer; ekonomik yoktur.');
  q('kavram', 'WHO’ya göre iş kazası hangisidir?',
    ['Önceden planlanmamış; yaralanmaya, makine zararına veya üretimin bir süre durmasına yol açan olay', 'Belirli bir zarar veya yaralanmaya yol açan, önceden planlanmamış ve beklenmedik olay', 'İşyerinde ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen özre uğratan olay', 'Mesleki risklere uzun süre maruz kalınması sonucu ortaya çıkan ve tedavi gerektiren olay'],
    'WHO tanımında **makine ve teçhizatın zarara uğraması** ve **üretimin bir süre durması** vardır. B şıkkı ILO, C şıkkı 6331 sayılı Kanun tanımıdır.');
  q('kavram', 'ILO iş kazasını nasıl tanımlar?',
    ['Belirli bir zarar veya yaralanmaya yol açan, önceden planlanmamış beklenmedik olay', 'Önceden planlanmamış; yaralanmaya, makine zararına veya üretimin bir süre durmasına yol açan olay', 'İşyerinde veya işin yürütümü nedeniyle meydana gelen, ruhen ya da bedenen özre uğratan olay', 'Kötü çalışma şartlarından belirli ve uzun bir süre sonra ortaya çıkan sağlık bozukluğu'],
    '**ILO:** belirli bir zarar veya yaralanmaya yol açan, önceden planlanmamış beklenmedik olay.');
  q('kavram', '6331 sayılı İSG Kanunu’na göre iş kazası hangisidir?',
    ['İşyerinde veya işin yürütümü nedeniyle meydana gelen, ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen özre uğratan olay', 'Önceden planlanmamış, çoğu zaman yaralanmalara, makine ve teçhizatın zarara uğramasına veya üretimin bir süre durmasına yol açan olay', 'Belirli bir zarar veya yaralanmaya yol açan, önceden planlanmamış ve beklenmedik olan, işyeri dışında da gerçekleşebilen olay', 'Mesleki risklere maruziyet sonucu ortaya çıkan, işin nitelik ve yürütüm şartlarının doğurduğu sakatlık veya hastalık'],
    '6331 sayılı Kanun tanımı: **ölüme sebebiyet veren** veya vücut bütünlüğünü **ruhen ya da bedenen özre uğratan** olay.');
  q('kavram', '6331 sayılı Kanun’a göre meslek hastalığı nasıl tanımlanır?',
    ['Mesleki risklere maruziyet sonucu ortaya çıkan hastalık', 'İşyerinde aniden ortaya çıkan ve hemen tedavi edilen hastalık', 'İşe girmeden önce var olan ve işte ağırlaşan hastalık', 'Bulaşıcı hastalıkların işyerinde çalışanlar arasında yayılması'],
    'Meslek hastalığı = **mesleki risklere maruziyet sonucu** ortaya çıkan hastalık.');
  q('kavram', 'Günümüzde iş güvenliği teknik bir bilim dalıdır. Aşağıdakilerden hangisi iş güvenliğinin faydalandığı bilimler arasında sayılmamıştır?',
    ['Astronomi', 'Ergonomi', 'İstatistik', 'Sosyoloji'],
    'Faydalanılan bilimler: **mühendislik, sosyoloji, iktisat, istatistik, psikoloji, ergonomi**.');
  q('kavram', 'İş güvenliği çalışanların yanı sıra hangi iki güvenliği de sağlar?',
    ['İşletme güvenliği ve üretim güvenliği', 'Sosyal güvenlik ve gelir güvenliği', 'Bilgi güvenliği ve veri güvenliği', 'Gıda güvenliği ve çevre güvenliği'],
    'Slayttaki NOT: iş güvenliği çalışanların yanı sıra **işletme güvenliği** ve **üretim güvenliği** de sağlar; olay olmadan kazaları önler.');
  q('kavram', 'İş sağlığı ve güvenliğinin üç amacı hangi seçenekte doğru verilmiştir?',
    ['Çalışanları korumak, üretim ve işletme güvenliği', 'Kâr artırmak, maliyet düşürmek, rekabet sağlamak', 'Çalışanları korumak, ücretleri artırmak, sendikalaşmayı sağlamak', 'Denetim yapmak, ceza vermek, kayıt tutmak'],
    'Üç amaç: **çalışanları korumak, üretim güvenliğini sağlamak, işletme (işyeri) güvenliğini sağlamak**.');
  q('kavram', 'İSG önlemleriyle işgücü ve işgünü kayıplarının azalması, işçilerin verimli çalışması ve üretimin düzenli yapılması hangi amaçla ilgilidir?',
    ['Üretim güvenliğini sağlamak', 'İşyeri güvenliğini sağlamak', 'Çalışanları korumak', 'Sosyal güvenliği sağlamak'],
    '**Üretim güvenliği:** işgücü ve işgünü kayıpları azalır, işçiler verimli çalışır, işyerine ekonomik katkı olur.');
  q('kavram', 'Araç, gereç, makine, donanım ve tesisatta işyerini tehlikeye düşürebilecek risklerin ortadan kalkması hangi amacı karşılar?',
    ['İşyeri (işletme) güvenliğini sağlamak', 'Üretim (verimlilik) güvenliğini sağlamak', 'Çalışanların sağlığını korumak', 'Sosyal güvenliği sağlamak (SGK)'],
    '**İşyeri güvenliği:** makine, donanım ve tesisattaki risklerin ortadan kalkması.');
  q('kavram', 'Slaytlara göre dünyada her 15 saniyede iş kazalarından kaç işçi ölmektedir?',
    ['1', '15', '160', '6300'],
    'Her 15 saniyede **1 işçi ölür**, **160 işçi** iş kazası geçirir.');
  q('kavram', 'Slaytlara göre dünyada her 15 saniyede kaç işçi iş kazasına uğramaktadır?',
    ['160', '1', '15', '317'],
    'Her 15 saniyede **160** işçi kazaya uğrar (1’i ölür).');
  q('kavram', 'Her yıl dünyada iş kazaları sonucunda yaklaşık kaç işçi ölmektedir?',
    ['2,3 milyon', '317 milyon', '6300', '62 903'],
    'Yılda **2,3 milyon** işçi ölür; yılda **317 milyon** iş kazası olur.');
  q('kavram', 'Her yıl dünyada kaç iş kazası olmaktadır?',
    ['317 milyon', '2,3 milyon', '160 milyon', '6300'],
    'Yılda **317 milyon** iş kazası; 2,3 milyon ölüm.');
  q('kavram', 'Slaytlara göre her gün dünyada kaç işçi iş kazasına uğramakta veya meslek hastalığına yakalanmaktadır?',
    ['6300', '160', '1454', '2085'],
    'Her gün **6300** işçi.');
  q('kavram', '2010 verilerine göre ülkemizde iş kazaları ve meslek hastalıkları sonucu kaç kişi ölmüştür?',
    ['1454', '2085', '62 903', '6300'],
    '2010 Türkiye: **1454 ölüm**, 2085 sürekli iş göremez, 62 903 kayıtlı iş kazası.');
  q('kavram', '2010 verilerine göre ülkemizde iş kazaları ve meslek hastalıkları sonucu kaç kişi sürekli iş göremez duruma düşmüştür?',
    ['2085', '1454', '62 903', '317'],
    '2010 Türkiye: 1454 ölüm, **2085 sürekli iş göremez**, 62 903 kayıtlı kaza.');
  q('kavram', '2010 verilerine göre ülkemizdeki kayıtlı iş kazası sayısı kaçtır?',
    ['62 903', '1454', '2085', '6300'],
    'Kayıtlı iş kazası: **62 903**.');

  /* ---------- 2. Tarihsel gelişim ve kurumlar ---------- */
  q('tarih', 'İş sağlığı ve güvenliği ile ilgili ilk yazılı kaynaklar kime dayanmaktadır?',
    ['Heredot', 'Hipokrat', 'Ramazzini', 'Aristo'],
    'İlk yazılı kaynaklar **Heredot**’a dayanır (verimli olmak için yüksek enerjili besin).');
  q('tarih', 'Çalışanların verimli olması için yüksek enerjili besinlerle beslenmesi gerektiği üzerinde ilk kez duran düşünür kimdir?',
    ['Heredot', 'Hipokrat', 'Ramazzini', 'Galen'],
    '**Heredot**: yüksek enerjili besin. Hipokrat: işten zarar görme.');
  q('tarih', 'Çalışanların yaptıkları işten zarar görebilecekleri görüşünü kim ileri sürmüştür?',
    ['Hipokrat', 'Heredot', 'Ramazzini', 'Paracelsus'],
    '**Hipokrat**: çalışanlar yaptıkları işten zarar görebilir.');
  q('tarih', 'İş sağlığı ve güvenliğinin bilimsel esaslara dayalı ele alınması kim tarafından gerçekleşmiştir?',
    ['Ramazzini', 'Heredot', 'Hipokrat', 'Robert Owen'],
    '17. yy’da **Bernardino Ramazzini**; iş sağlığının kurucusu sayılır.');
  q('tarih', 'Bernardino Ramazzini hangi yüzyılda çalışmalarını yapmıştır?',
    ['17. yüzyıl', '15. yüzyıl', '18. yüzyıl', '19. yüzyıl'],
    'Ramazzini **17. yy**. Sanayi Devrimi 18. yy’ın ikinci yarısıdır.');
  q('tarih', 'İş sağlığının kurucusu sayılan Ramazzini’nin meslek hastalıkları kitabının adı nedir?',
    ['De Morbis Artificum Diatriba', 'De Re Metallica', 'Corpus Hippocraticum', 'Historiai'],
    'Kitap: **“De Morbis Artificum Diatriba”**.');
  q('tarih', 'İş sağlığı ve güvenliği alanında bilimsel anlamdaki ilk gelişmeler nerede ortaya çıkmış, konunun gelişimi nerede olmuştur?',
    ['İtalya’da ortaya çıkmış, İngiltere’de gelişmiştir', 'İngiltere’de ortaya çıkmış, Almanya’da gelişmiştir', 'Fransa’da ortaya çıkmış, İtalya’da gelişmiştir', 'Almanya’da ortaya çıkmış, ABD’de gelişmiştir'],
    'İlk bilimsel gelişmeler **İtalya** (Ramazzini), gelişimi **İngiltere** (Sanayi Devrimi).');
  q('tarih', 'Sanayi Devrimi nerede ve ne zaman yaşanmıştır?',
    ['İngiltere’de, 18. yüzyılın ikinci yarısında', 'İtalya’da, 17. yüzyılın ikinci yarısında', 'Fransa’da, 19. yüzyılın ilk yarısında', 'Almanya’da, 18. yüzyılın ilk yarısında'],
    '**18. yy’ın ikinci yarısında İngiltere**. Elle üretimin yerini makineli seri üretim aldı, yeni riskler doğdu.');
  q('tarih', 'İngiltere’de kadınların ve 10 yaşından küçük çocukların maden ocaklarında çalıştırılması hangi yıl yasaklanmıştır?',
    ['1842', '1844', '1895', '1900'],
    '**1842** maden yasağı · 1844 işyeri hekimi · 1895 meslek hastalığı bildirimi · 1900 muayeneler.');
  q('tarih', 'İngiltere’de fabrikalarda işyeri hekimi bulundurma zorunluluğu hangi yıl getirilmiştir?',
    ['1844', '1842', '1895', '1930'],
    '**1844** fabrikalarda işyeri hekimi zorunluluğu.');
  q('tarih', 'İngiltere’de tehlikeli bazı meslek hastalıklarının bildirimi zorunluluğu hangi yıl getirilmiştir?',
    ['1895', '1842', '1844', '1900'],
    '**1895** bildirim zorunluluğu.');
  q('tarih', 'İngiltere’de 1900 yılında getirilen kurallar arasında hangisi yoktur?',
    ['Fabrikalarda işyeri hekimi bulundurma zorunluluğu', 'İşe giriş ve aralıklı sağlık muayenesi', 'Tehlikeli işlerde özel muayeneler', 'Sakatlananlar hakkında özel rapor hazırlanması'],
    'İşyeri hekimi zorunluluğu **1844**’te getirildi. 1900’de muayeneler, meslek hastalığı bildirimi ve özel rapor kuralı geldi.');
  q('tarih', 'ABD’de iş sağlığı ve güvenliğiyle ilgili kanunlar hangi yıl çıkarılmıştır?',
    ['1877', '1840', '1841', '1849'],
    'İsviçre **1840**, Fransa **1841**, Almanya **1849**, ABD **1877**.');
  q('tarih', 'İş sağlığı ve güvenliğiyle ilgili kanun çıkaran ülkeler arasında en erken tarihli olan hangisidir?',
    ['İsviçre (1840)', 'Fransa (1841)', 'Almanya (1849)', 'ABD (1877)'],
    'Sıra: İsviçre 1840 → Fransa 1841 → Almanya 1849 → ABD 1877.');
  q('tarih', 'Osmanlı’da Tanzimat’tan önceki dönemde dini esaslara dayalı meslek örgütleri hangisidir?',
    ['Esnaf zaviyeleri', 'Loncalar', 'Sendikalar', 'Orta sandığı'],
    'Önce **esnaf zaviyeleri**, zamanla yerini Avrupa’daki meslek örgütleri olan **loncalar** aldı.');
  q('tarih', 'Zamanla esnaf zaviyelerinin yerini hangi meslek örgütleri almıştır?',
    ['Loncalar', 'Sendikalar', 'Odalar', 'Vakıflar'],
    'Esnaf zaviyelerinin yerini **loncalar** aldı.');
  q('tarih', 'Türkiye’de sosyal güvenliğin başlangıcı kabul edilen, loncalardaki yardımlaşma sandıklarının adı nedir?',
    ['Orta sandığı veya teavün sandığı', 'Emekli sandığı veya Bağ-Kur', 'Esnaf zaviyesi veya lonca', 'Vakıf sandığı veya hazine'],
    'Loncalarda **orta sandığı** veya **teavün sandığı** vardı.');
  q('tarih', 'Türkiye’de İSG alanındaki düzenlemeler asıl hangi dönemde yapılmıştır?',
    ['Cumhuriyet dönemi', 'Tanzimat’tan önceki dönem', 'Tanzimat ve Meşrutiyet dönemi', 'Lale Devri'],
    'Gerçek sanayileşme **Cumhuriyet** döneminde başladığı için düzenlemeler asıl bu dönemde yapıldı.');
  q('tarih', '1923’te işçilerin korunması konusunun ele alındığı etkinlik hangisidir?',
    ['İzmir İktisat Kongresi', 'Sivas Kongresi', 'Lozan Konferansı', 'Erzurum Kongresi'],
    '**1923 İzmir İktisat Kongresi**: işçilerin korunması.');
  q('tarih', 'İşverenin hukuki sorumluluğunu düzenleyen 1926 tarihli kanun hangisidir?',
    ['Borçlar Kanunu', 'Umumi Hıfzıssıhha Kanunu', 'İş Kanunu', 'Sosyal Sigortalar Kanunu'],
    '**1926 Borçlar Kanunu**: işverenin hukuki sorumluluğu.');
  q('tarih', '50’den fazla işçi çalıştıran işyerlerine işyeri hekimi ve revir-hastane zorunluluğu getiren 1930 tarihli kanun hangisidir?',
    ['Umumi Hıfzıssıhha Kanunu', 'Borçlar Kanunu', 'Sosyal Sigortalar Kanunu', 'İş Sağlığı ve Güvenliği Kanunu'],
    '**1930 Umumi Hıfzıssıhha Kanunu**: 50’den fazla işçi → işyeri hekimi, revir-hastane.');
  q('tarih', 'Türkiye’nin ilk iş kanunu hangi yıl çıkarılmıştır?',
    ['1936', '1926', '1930', '1945'],
    '**1936 İş Kanunu** ilk iş kanunudur.');
  q('tarih', 'Çalışma Bakanlığı hangi yıl kurulmuştur?',
    ['1945', '1936', '1964', '1923'],
    '**1945** Çalışma Bakanlığı.');
  q('tarih', 'Sosyal Sigortalar Kanunu hangi yıl çıkarılmıştır?',
    ['1964', '1945', '2003', '2006'],
    '**1964** Sosyal Sigortalar Kanunu; 2006 Sosyal Sigortalar ve Genel Sağlık Kanunu.');
  q('tarih', 'Avrupa Birliği’ne uyum sürecinde kabul edilen 2003 tarihli İş Kanunu’nun sayısı nedir?',
    ['4857', '6331', '5510', '1475'],
    '2003 İş Kanunu **4857** sayılıdır. 6331 = İSG Kanunu, 5510 = Sosyal Sigortalar ve GSS Kanunu.');
  q('tarih', '6331 sayılı İş Sağlığı ve Güvenliği Kanunu hangi tarihte kabul edilmiştir?',
    ['20.06.2012', '22.05.2003', '31.05.2006', '25.08.1971'],
    '6331 sayılı Kanun **20.06.2012**’de kabul edildi.');
  q('tarih', '2006 yılında çıkarılan kanun hangisidir?',
    ['Sosyal Sigortalar ve Genel Sağlık Kanunu', 'İş Sağlığı ve Güvenliği Kanunu (6331 sayılı)', 'Sosyal Sigortalar Kanunu ve Çalışma Bakanlığı', 'Avrupa Birliği uyumlu İş Kanunu (4857)'],
    '**2006**: Sosyal Sigortalar ve Genel Sağlık Kanunu. 1964 Sosyal Sigortalar, 2003 İş Kanunu, 2012 İSG Kanunu.');
  q('tarih', 'Ülkemizde İSG ile ilgili kurumların başında hangisi yer alır?',
    ['Çalışma ve Sosyal Güvenlik Bakanlığı', 'Sağlık Bakanlığı', 'İçişleri Bakanlığı', 'Sanayi ve Teknoloji Bakanlığı'],
    'Başta **Çalışma ve Sosyal Güvenlik Bakanlığı** vardır; ona bağlı 4 birim konuyla ilgilidir.');
  q('tarih', 'Çalışma ve Sosyal Güvenlik Bakanlığı’na bağlı, İSG ile ilgili birimler arasında hangisi yoktur?',
    ['Türk Standartları Enstitüsü', 'İş Teftiş Kurulu Başkanlığı', 'İSGÜM', 'Yakın ve Ortadoğu Çalışma Enstitüsü Müdürlüğü'],
    'Dört birim: **İSG Genel Müdürlüğü, İş Teftiş Kurulu Başkanlığı, İSGÜM, Yakın ve Ortadoğu Çalışma Enstitüsü Müdürlüğü**.');
  q('tarih', 'İSGÜM’ün açılımı nedir?',
    ['İşçi Sağlığı ve İş Güvenliği Merkezi', 'İş Sağlığı Güvenlik Üst Müdürlüğü', 'İşyeri Sağlık Gözetim Merkezi', 'İş Sağlığı Genel Uzmanlık Merkezi'],
    'İSGÜM = **İşçi Sağlığı ve İş Güvenliği Merkezi**.');
  q('tarih', 'Ülkemizde İSG uygulamalarında karşılaşılan sorunlar arasında hangisi sayılmamıştır?',
    ['Döviz kurundan kaynaklanan sorunlar', 'İşyerinin yapısından kaynaklanan sorunlar', 'Eğitimle ilgili sorunlar', 'Örgütlenme ve araştırma eksikliklerinden kaynaklanan sorunlar'],
    'Sorunlar: işyerinin yapısı, yasal düzenlemeler, eğitim, kazalardan sonra çıkan sorunlar, örgütlenme ve araştırma eksiklikleri.');

  /* ---------- 3. İş kazası ve kaza çeşitleri ---------- */
  q('kaza', 'Toplumsal bir oluşum içinde önceden planlanmayan, bilinmeyen, kontrol dışına çıkan ve çevresine zarar verebilecek nitelikteki olaya ne denir?',
    ['Kaza', 'Yangın', 'Meslek hastalığı', 'Tehlike'],
    'Bu genel **kaza** tanımıdır.');
  q('kaza', 'İş kazasının yasal tanımı hangi kanunun hangi maddesinde yapılmıştır?',
    ['5510 sayılı Kanun’un 13. maddesi', '6331 sayılı Kanun’un 4. maddesi', '4857 sayılı Kanun’un 13. maddesi', '5510 sayılı Kanun’un 1. maddesi'],
    'Yasal tanım: **5510 sayılı** Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu, **13. madde**.');
  q('kaza', '5510 sayılı Kanun’un 13. maddesine göre aşağıdakilerden hangisi iş kazası sayılmaz?',
    ['Hafta sonu kendi aracıyla tatile giderken geçirilen kaza', 'Sigortalının işyerinde bulunduğu sırada geçirdiği kaza', 'Emziren kadın sigortalının süt izni sırasında geçirdiği kaza', 'İşverence sağlanan servisle işe gelirken geçirilen kaza'],
    'Madde 13’te işyerinde bulunma, iş nedeniyle işyeri dışı, görevli gönderilme, emzirme süresi ve **işverence sağlanan taşıtla** gidiş-geliş sayılır. Tatil sayılmaz.');
  q('kaza', 'Emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanda geçirdiği kaza için ne söylenebilir?',
    ['5510 sayılı Kanun’a göre iş kazasıdır', 'Meslek hastalığıdır', 'İş kazası sayılmaz', 'Sadece işyeri içindeyse iş kazasıdır'],
    'Madde 13 (d): emziren kadın sigortalının süt verme zamanları **iş kazası** kapsamındadır.');
  q('kaza', 'Görevli olarak işyeri dışında başka bir yere gönderilen sigortalının asıl işini yapmaksızın geçen zamanda uğradığı kaza nedir?',
    ['İş kazası', 'Trafik kazası, iş kazası değil', 'Meslek hastalığı', 'Kişisel kaza'],
    'Madde 13 (c): görevli gönderilme sırasında asıl işini yapmadan geçen zamanlar da **iş kazası** sayılır.');
  q('kaza', 'Yaralanmanın ağırlığına göre sınıflandırmada hangisi yer almaz?',
    ['Göze bir şey kaçması', 'Yaralanma ile sonuçlanmayan kazalar', 'Bir gün ile yirmi gün arasında tedavi gerektiren kazalar', 'Sürekli iş göremezlik veya ölümle biten kazalar'],
    '“Göze bir şey kaçması” **kaza cinsine göre** sınıflandırmadadır. Ağırlığa göre 5 sınıf: yaralanmasız, 1 günden fazla uzaklaşma gerektirmeyen, 1–20 gün, 20 günden fazla, sürekli iş göremezlik/ölüm.');
  q('kaza', 'Yaralanmanın ağırlığına göre sınıflandırmada kaç sınıf vardır?',
    ['5', '4', '6', '9'],
    'Ağırlığa göre **5**, yaralanmanın cinsine göre **6**, kaza cinsine göre **9** sınıf.');
  q('kaza', 'Yaralanmanın ağırlığına göre sınıflandırmada tedavi süreleri için kullanılan gün sınırı hangisidir?',
    ['20 gün', '10 gün', '30 gün', '45 gün'],
    'Sınıflar: 1–**20** gün tedavi ve **20** günden fazla tedavi.');
  q('kaza', 'Yaralanmanın cinsine göre sınıflandırmada hangisi yer alır?',
    ['Ruhsal ve sinirsel tahribat', 'Elektrik çarpması kazaları', 'Düşme ve incinme kazaları', 'Parça veya malzeme düşmesi'],
    'Yaralanmanın cinsine göre: baş-göz-boyun, dış beden, kol-el-parmak, ayak-bacak, iç organ, **ruhsal ve sinirsel tahribat**. Diğerleri kaza cinsine göredir.');
  q('kaza', 'Kaza cinsine göre sınıflandırmada hangisi yer almaz?',
    ['İç organ kazaları', 'Düşme, incinme', 'Elektrik kazaları', 'Sıkışma, ezilme'],
    '“İç organ kazaları” **yaralanmanın cinsine göre** sınıftadır. Kaza cinsine göre 9 sınıf: düşme, parça düşmesi, göze kaçma, yanma-patlama, makine, el aletleri, elektrik, zehirlenme-boğulma, sıkışma-ezilme.');
  q('kaza', 'Kaza cinsine göre sınıflandırmada kaç sınıf vardır?',
    ['9', '5', '6', '7'],
    'Kaza cinsine göre **9** sınıf.');
  q('kaza', 'Bir işçinin kötü çalışma şartlarından etkilenerek aniden hastalanması nedir?',
    ['İş kazası', 'Meslek hastalığı', 'Kronik hastalık', 'Bulaşıcı hastalık'],
    'Kötü şartlardan **aniden** hastalanma = **iş kazası**; belirli ve uzun süre sonra bozulma = meslek hastalığı.');
  q('kaza', 'Kötü çalışma şartlarından belirli ve uzun bir süre sonra sağlığın bozulması nedir?',
    ['Meslek hastalığı', 'İş kazası', 'Akut zehirlenme', 'Ani hastalık'],
    '**Uzun süre sonra** bozulma = meslek hastalığı. Ani = iş kazası.');

  /* ---------- 4. Meslek hastalıkları ---------- */
  q('meslek', 'Meslek hastalıkları iş kazalarına oranla günümüzde işçi sağlığını nasıl tehdit etmektedir?',
    ['Daha fazla tehdit etmektedir', 'Daha az tehdit etmektedir', 'Eşit düzeyde tehdit etmektedir', 'Artık tehdit etmemektedir'],
    'Meslek hastalıkları **daha fazla** tehdit ediyor; sebebi üretim teknolojileri ve kimyasallardaki gelişmeler.');
  q('meslek', 'Meslek hastalıklarının iş kazalarına göre daha fazla tehdit oluşturmasının sebebi nedir?',
    ['Üretim teknolojileri ve kimyasallardaki gelişmeler', 'Çalışma saatlerinin kısalması ve tatillerin artması', 'İşçi sayısının azalması ve ücretlerin düşmesi', 'Sendikaların güçlenmesi ve grevlerin artması'],
    'Sebep: **üretim teknolojilerindeki ve kimyasallardaki gelişmeler**.');
  q('meslek', 'Bir hastalığın meslek hastalığı sayılabilmesi için hastalıkla yapılan iş arasında ne olmalıdır?',
    ['Sebep-sonuç ilişkisi', 'Zaman ilişkisi', 'Mekân ilişkisi', 'Ücret ilişkisi'],
    'Hastalık ile iş arasında **sebep-sonuç ilişkisi** gerekir.');
  q('meslek', 'Meslek hastalıklarına neden olan başlıca faktörler arasında hangisi sayılmamıştır?',
    ['Ergonomik faktörler', 'Kimyasallar', 'Tozlar', 'Mikroorganizmalar'],
    'Dört faktör: **kimyasallar, tozlar, mikroorganizmalar, fiziksel faktörler**.');
  q('meslek', 'İşçilerin sağlığını etkileyen faktörlerin başında gelen meslek hastalığı nedeni hangisidir?',
    ['Kimyasal maddeler', 'Gürültü', 'Mikroorganizmalar', 'Titreşim'],
    'Slayt: **kimyasal maddeler** işçi sağlığını etkileyen faktörlerin başında gelir.');
  q('meslek', 'Kimyasal faktörlerin sınıflandırmasında hangisi yer almaz?',
    ['Virüsler', 'Çözücüler', 'Pestisitler', 'Boyalar'],
    'Kimyasallar: madenler, çözücüler, zehirli gazlar, asit, boyalar, pestisitler, plastik maddeler. **Virüs** mikroorganizmadır.');
  q('meslek', 'Solunum yoluyla vücuda girip basit tahrişten bronşite, mesleki akciğer hastalıklarına ve kansere kadar etki gösterebilen faktör hangisidir?',
    ['Tozlar', 'Titreşim', 'Gürültü', 'Mikroorganizmalar'],
    '**Tozlar** solunum yoluyla girer; etkisi tozun cinsi, yoğunluğu, kişinin duyarlılığı ve solunan miktara bağlıdır.');
  q('meslek', 'Mesleki bulaşıcı hastalıklara yol açan biyolojik faktörler hangileridir?',
    ['Mikroorganizmalar', 'Tozlar', 'Kimyasallar', 'Fiziksel faktörler'],
    '**Mikroorganizmalar**: virüsler, bakteriler, parazitler, mantarlar.');
  q('meslek', 'Mikroorganizmaların türleri arasında hangisi yoktur?',
    ['Pestisitler', 'Virüsler', 'Parazitler', 'Mantarlar'],
    'Mikroorganizmalar: virüs, bakteri, parazit, mantar. **Pestisit** kimyasaldır.');
  q('meslek', 'Meslek hastalıklarına neden olan başlıca fiziksel faktörler hangileridir?',
    ['Radyasyon, gürültü ve titreşim', 'Asit, boya ve çözücü', 'Virüs, bakteri ve mantar', 'Kurşun, cıva ve arsenik'],
    'Fiziksel faktörler: **radyasyon, gürültü, titreşim**.');

  /* ---------- 5. Önleme: taraflar, 4 yöntem, risk değerlendirmesi ---------- */
  q('onlem', 'İş kazaları ve meslek hastalıklarına karşı yapılacak çalışmalar kaç başlıkta sınıflandırılır?',
    ['İş kazası, meslek hastalığı ve işçi sağlığına yönelik önlemler', 'Teknik önlemler, hukuki önlemler ve işverene yönelik ekonomik yaptırımlar', 'Bireysel önlemler, kurumsal önlemler ve devletin aldığı ulusal önlemler', 'Kısa vadeli önlemler, orta vadeli önlemler ve uzun vadeli planlama çalışmaları'],
    'Üç sınıf: **iş kazalarına karşı, meslek hastalıklarına karşı, işçilerin sağlığını korumaya yönelik** önlemler.');
  q('onlem', 'İş kazaları ve meslek hastalıklarına ilişkin sorumluluk konusunda hangisi doğrudur?',
    ['Toplumsal bir sorundur; başta işveren, işçi, sendika ve devlete görev düşer', 'Sadece işverenin sorumluluğudur; işçilerin, sendikaların ve devletin bir görevi yoktur', 'Sadece devletin sorumluluğudur; denetim ve yaptırım dışında başka bir önlem gerekmez', 'Sadece işçinin dikkatine bağlıdır; işçi önlemlere uyarsa başka bir şey gerekmez'],
    'İSG **toplumsal** bir sorundur: başta **işverenler**, işçiler, sendikalar ve devlet.');
  q('onlem', 'İşverenin iş kazalarını önlemeye yönelik çalışmaları ne zaman başlamalıdır?',
    ['İşyerinin kuruluşundan itibaren', 'İlk iş kazasından sonra', 'Üretime geçtikten sonra', 'Denetim yapıldığında'],
    'Çalışmalar **işyerinin kuruluşundan** itibaren (bina, makine-tesisat seçimi) başlar ve üretime geçtikten sonra da sürer.');
  q('onlem', 'İşverenin İSG’ye yaptığı yatırımlar işletmeye nasıl geri döner?',
    ['Üretimin ve verimliliğin artması şeklinde', 'Vergi iadesi ve devlet desteği olarak', 'Devlet teşviki ve hibe olarak', 'Geri dönmez, sadece ek bir maliyettir'],
    'İnsancıl ya da ekonomik nedenle yapılan her yatırım **üretim ve verimliliğin artması** şeklinde geri döner.');
  q('onlem', 'Aşağıdakilerden hangisi iş kazalarının önlenmesinde işverenin rolleri arasında sayılmamıştır?',
    ['İşçilerin ücretlerini her yıl artırmak', 'Makine koruyucularını denetlemek', 'Kişisel koruyucu donanım kullanımını sağlamak', 'Çalışma psikoloğu bulundurmak'],
    'İşveren: önlem alma, araç-gereç bulundurma, makine koruyucu denetimi, KKD, eğitim, güvenli davranış denetimi, ilk yardım sistemi, kayıt tutma, bilimsel kurumları destekleme, mevzuat, **çalışma psikoloğu**. Ücret artışı sayılmaz.');
  q('onlem', 'Sağlıklı işleyen bir İSG sistemi kurmak için birbirini tamamlayan kaç yöntem vardır?',
    ['4', '3', '5', '6'],
    '**Dört yöntem:** risk değerlendirme, inandırma ve özendirme, işe uygun işçi seçme, iş güvenliği disiplininin sağlanması.');
  q('onlem', 'Sağlıklı bir İSG sisteminin dört yöntemi arasında hangisi yoktur?',
    ['Sigorta primlerinin düşürülmesi', 'Risk değerlendirmesi yapılması', 'İnandırma ve özendirme çalışmaları', 'İşe uygun işçi seçilmesi'],
    'Dört yöntem: risk değerlendirme, inandırma ve özendirme, işe uygun işçi seçme, **iş güvenliği disiplininin sağlanması**.');
  q('onlem', 'İşyerinde var olan ya da dışarıdan gelebilecek tehlikelerin zararlarının ve alınacak önlemlerin belirlenmesi için yapılan çalışmalara ne denir?',
    ['Risk değerlendirmesi', 'İnandırma ve özendirme', 'İş güvenliği disiplini', 'Sağlık gözetimi'],
    'Bu **risk değerlendirmesi** tanımıdır.');
  q('onlem', '“Bir şeyin zarar verme potansiyeli” neyin tanımıdır?',
    ['Tehlike', 'Risk', 'Kaza', 'Olay'],
    '**Tehlike** = zarar verme potansiyeli. **Risk** = maruz kalma sonucu sakatlık/hastalığın şiddeti.');
  q('onlem', 'Bir tehlikeye maruz kalma sonucunda bir sakatlık ya da hastalığın şiddetini ifade eden kavram hangisidir?',
    ['Risk', 'Tehlike', 'Kaza', 'Hasar'],
    '**Risk** = şiddet. Tehlike = potansiyel.');
  q('onlem', 'Risk değerlendirmesi kaç aşamadan oluşur?',
    ['5', '3', '4', '6'],
    'Birbirini takip eden **beş aşama**.');
  q('onlem', 'Risk değerlendirmesinin birinci aşamasında ne yapılır?',
    ['İşyeri ile ilgili bilgi toplanır', 'Tehlikeler belirlenir', 'Riskler sınıflandırılır', 'Risk Değerlendirme Formu doldurulur'],
    '1. **bilgi toplama** · 2. tehlikeleri belirleme · 3. riskleri belirleme · 4. önlem planlama · 5. formla belgelendirme.');
  q('onlem', 'Risk değerlendirmesinin hangi aşamasında genel kontrol listesinde “evet/hayır” işaretlenerek tehlikenin varlığı tespit edilir?',
    ['İkinci aşama', 'Birinci aşama', 'Üçüncü aşama', 'Beşinci aşama'],
    '**İkinci aşama**: tehlikeler kontrol listesiyle (evet/hayır) belirlenir.');
  q('onlem', 'Risk değerlendirmesinin üçüncü aşamasında riskler nasıl sınıflandırılır?',
    ['Olasılık düşük/orta/yüksek, şiddet hafif/orta/büyük', 'Olasılık var/yok, şiddet önemli/önemsiz/çok önemli', 'Sadece maliyetine göre ucuz/orta/pahalı olarak', 'Sadece etkilenen kişi sayısına göre az/orta/çok'],
    'Olasılık **düşük, orta, yüksek**; şiddet **hafif, orta, büyük**.');
  q('onlem', 'Risk değerlendirmesi sonucunda hangi riskler kabul edilemez ve önlem alınması gerekir?',
    ['Büyük riskler', 'Küçük riskler', 'Orta düzey riskler', 'Küçük ve orta riskler'],
    'Küçük ve orta riskler kabul edilebilir; **büyük riskler** kabul edilemez, önlem gerekir.');
  q('onlem', 'Risk değerlendirmesinin dördüncü aşamasında ne yapılır?',
    ['Riskin kaldırılması veya azaltılmasına yönelik faaliyetler planlanır', 'Tehlikeler genel kontrol listesinde evet/hayır işaretlenerek belirlenir', 'İşyeri, çalışanlar ve iş ekipmanları hakkında bilgi toplanır', 'Değerlendirme Risk Değerlendirme Formu ile belgelendirilir'],
    '**Dördüncü aşama**: riski kaldırma/azaltma faaliyetlerinin planlanması.');
  q('onlem', 'Risk değerlendirmesinin beşinci aşamasında ne kullanılır?',
    ['Risk Değerlendirme Formu', 'İSG onaylı defteri', 'Malzeme Güvenlik Bilgi Formu', 'İş kazası bildirim tutanağı'],
    '**Beşinci aşama**: “Risk Değerlendirme Formu” ile belgelendirme.');
  q('onlem', 'Risk değerlendirmesinin tek başına yeterli olmadığı, insanları daha tedbirli davranmaya teşvik etmeyi amaçlayan tamamlayıcı tedbir hangisidir?',
    ['İnandırma ve özendirme', 'İş güvenliği disiplini', 'İşe uygun işçi seçme', 'Rehabilitasyon'],
    '**İnandırma ve özendirme** tamamlayıcı bir tedbirdir; ihmal ve dalgınlık gibi kişisel özelliklere karşı bilinçlendirme.');
  q('onlem', 'İnandırma ve özendirme çalışmalarının özellikle hedef aldığı kaza nedeni hangisidir?',
    ['İhmal ve dalgınlık gibi kişisel özellikler', 'Makine arızaları ve bakım eksiklikleri', 'Mevzuattaki yasal boşluklar ve belirsizlikler', 'Olumsuz hava koşulları ve doğal afetler'],
    'İhmal ve dalgınlık her insanda görülebilir; çalışanlar **bilinçlendirilerek** daha dikkatli davranmaları sağlanır.');
  q('onlem', 'İşçilerin fizik yeteneklerine göre makine, donanım ve araç-gereç geliştirme çalışmaları yapan bilim dalı hangisidir?',
    ['Ergonomi', 'Toksikoloji', 'Epidemiyoloji', 'Sosyoloji'],
    '**Ergonomi (iş bilim)**: işe uygun işçi seçme yönteminin dayandığı bilim dalı.');
  q('onlem', 'İşe alırken yetenek testi yapılması ve sık kaza yapan işçilerin saptanması hangi yöntemin kapsamındadır?',
    ['İşe uygun işçi seçme', 'İnandırma ve özendirme', 'İş güvenliği disiplini', 'Risk değerlendirmesi'],
    'Yetenek testi, sık kaza yapanları saptama, uygun iş değiştirme → **işe uygun işçi seçme** (ergonomi).');
  q('onlem', 'İş güvenliği disiplini konusunda hangisi doğrudur?',
    ['Disiplin tedbirleri son çare olarak düşünülmelidir', 'Kazayı önlemenin ilk adımı ceza vermektir', 'Disiplin tedbirleri inandırmadan önce uygulanmalıdır', 'Ergonomik inceleme yapmadan ceza verilebilir'],
    'İnandırma ve özendirme denenmeden, ergonomik inceleme yapılmadan ceza vermek doğru değildir; disiplin **son çare**dir.');
  q('onlem', 'Slaytlarda sayılan disiplin tedbirleri hangileridir?',
    ['İhtar, ücret kesintisi veya işe son verme', 'Uyarı, kınama ve görevden uzaklaştırma', 'Para cezası, hapis ve sürgün', 'Rapor, tutanak ve dilekçe'],
    'Disiplin tedbirleri: **ihtar, ücret kesintisi, işe son verme**.');
  q('onlem', 'İşçilerin iş kazaları ve meslek hastalıklarının önlenmesi bakımından en önemli yükümlülüğü nedir?',
    ['İş sağlığı ve güvenliği önlemlerine uymak', 'Sendikaya üye olmak ve toplantılara katılmak', 'Fazla mesai yaparak üretimi artırmak', 'Risk değerlendirmesini kendisi yapmak'],
    'İşçinin en önemli yükümlülüğü **İSG önlemlerine uymak**tır.');
  q('onlem', 'İşçilerin rolleri arasında hangisi sayılmamıştır?',
    ['İşyeri politikasını ve bütçesini belirlemek', 'Dikkatli çalışmak', 'Alet ve makineler hakkında yeterli bilgi sahibi olmak', 'Kullanma talimatlarına uygun kullanmak'],
    'İşçi: dikkatli çalışır, bilgi sahibi olur, tereddüdünü **sorarak öğrenir**, talimatlara uyar. Bütçe işverenin işidir.');
  q('onlem', 'İş kazalarının önlenmesinde sendikaların yapması gereken en önemli iş nedir?',
    ['Üyelerinin haklarını korumak ve onları eğitmek', 'İşyerlerini denetleyip işverenlere ceza vermek', 'İSG mevzuatını düzenleyip yürürlüğe koymak', 'İşyerlerinin risk değerlendirmesini yapmak'],
    'Sendikanın en önemli işi üyelerinin **haklarını korumak ve onları eğitmek**tir.');
  q('onlem', 'İş kazalarının önlenmesinde devletin görevleri arasında hangisi yoktur?',
    ['İşyerlerinin üretim planını yapmak', 'Yol gösterici olmak', 'Mevzuatı düzenlemek', 'Kurallara uymayanlara yaptırım uygulamak'],
    'Devlet: **yol gösterici olmak, mevzuatı düzenlemek, denetim yapmak, yaptırım uygulamak**.');
  q('onlem', 'İSG’nin gelişim sürecinde devletin rolü nasıl değişmiştir?',
    ['Başta zorunlu müdahaleler, sonra yol gösterici ve teşvik edici', 'Başta yol gösterici, sonra çalışma hayatından tamamen çekilmiş', 'Başından beri hiç değişmeden sadece denetleyici olarak kalmış', 'Başta teşvik edici, sonra sadece cezalandırıcı bir yapıya geçmiş'],
    'Başlangıçta **zorunlu müdahaleler**, sonraki dönemlerde **yol gösterici ve teşvik edici**.');
  q('onlem', 'Slaytlara göre İSG konusunda devletin yapacağı belki de en önemli iş nedir?',
    ['İSG’nin bir devlet politikası haline getirilmesi', 'Tehlikeli tüm işyerlerini kamulaştırmak', 'İşçi ücretlerini her yıl yeniden belirlemek', 'Sendikaların yerine devlet birimleri kurmak'],
    'En önemli iş: İSG’nin **devlet politikası** haline getirilmesi; **İSG bilincinin oluşturulması** önlemenin ilk adımıdır.');
  q('onlem', 'İş kazaları ve meslek hastalıklarının önlenmesinin ilk adımı nedir?',
    ['İSG bilincinin oluşturulması', 'Ceza verilmesi', 'Tazminat ödenmesi', 'İşyerinin kapatılması'],
    'Toplumun dikkatini çekip **İSG bilincinin oluşturulması** ilk adımdır.');

  /* ---------- 6. Meslek hastalığı önlemleri, koruyucu sağlık, rehabilitasyon ---------- */
  q('saglik', 'Meslek hastalığına yol açabilecek maddelerle çalışan işyerlerinde, hastalanma ve zehirlenmelerin ilk belirtilerini ve tedbirleri gösteren ne asılır?',
    ['Özel afişler', 'MSDS formları', 'Risk değerlendirme formları', 'Onaylı defter'],
    'Uygun yerlere **özel afişler** asılır.');
  q('saglik', 'İşyerinde kullanılan zehirli ve zararlı maddeler için teknik imkan varsa ne yapılır?',
    ['Aynı işi gören daha az zararlı maddelerle değiştirilir', 'Daha yoğun kullanılarak işin süresi kısaltılır', 'Kapalı alan yerine açık alanda kullanılmaya başlanır', 'Çalışan sayısının az olduğu gece vardiyasına alınır'],
    'Teknik imkan varsa **daha az zehirli ve zararlı** maddelerle değiştirilir.');
  q('saglik', 'Zehirli toz, duman, gaz, sis veya sıvılarla çalışmalar teknik imkanlara göre nasıl yapılmalıdır?',
    ['Kapalı sistemle, etkili ve yeterli havalandırma ile', 'Açık sistemle, havalandırmaya gerek duymadan', 'Hiçbir sistem kurmadan, sadece kişisel koruyucuyla', 'Atıklar doğrudan atmosfere verilerek, hızlıca'],
    '**Kapalı sistem** + **etkili ve yeterli havalandırma**; atıklar zararsız hale getirilmeden çevreye verilmez.');
  q('saglik', 'Çok zehirli maddelerin kullanıldığı bölümlerin diğer yerlerden ayrılarak etkilerinin azaltılmasına ne denir?',
    ['Tecrit', 'Havalandırma', 'İkame', 'Seroprofilaksi'],
    'Çok zehirli maddeler ve bölümler **tecrit** edilir.');
  q('saglik', 'Meslek hastalıklarından korunmak için düzenli yapılması gereken muayeneler hangileridir?',
    ['İşe giriş ve işe yerleştirme muayeneleri', 'Sadece işten ayrılış ve emeklilik muayeneleri', 'Sadece kaza sonrası yapılan acil muayeneler', 'Her yıl yapılan göz ve kulak muayeneleri'],
    '**İşe giriş ve işe yerleştirme muayeneleri** düzenli yapılır; hassas olanlar bu işlerde çalıştırılmaz.');
  q('saglik', 'İşçilerin sağlığını korumada izlenen başlıca üç yol hangisidir?',
    ['Koruyucu sağlık, tedavi edici sağlık hizmetleri ve rehabilitasyon', 'Aşılama hizmetleri, ilaç tedavisi hizmetleri, cerrahi müdahaleler', 'Sağlık eğitimi, işyeri denetimi ve kurallara uymayanlara ceza', 'Birincil koruma, ikincil koruma ve üçüncül koruma düzeyleri'],
    'Üç yol: **koruyucu sağlık hizmetleri, tedavi edici sağlık hizmetleri, rehabilitasyon**.');
  q('saglik', 'Aşağıdakilerden hangisi işçilere yönelik koruyucu sağlık hizmetlerinden değildir?',
    ['Mesleki rehabilitasyon', 'Aşılama', 'Kemoprofilaksi', 'İşe dönüş muayeneleri'],
    'Koruyucu: aşılama, seroprofilaksi, kemoprofilaksi, beslenme, erken tanı ve portör taramaları, işe dönüş muayeneleri, acil yardım/ilkyardım, sağlık eğitimi. Rehabilitasyon ayrı bir yoldur.');
  q('saglik', 'Aktif bağışıklama olarak da adlandırılan koruyucu sağlık hizmeti hangisidir?',
    ['Aşılama', 'Seroprofilaksi', 'Kemoprofilaksi', 'Portör taraması'],
    '**Aşılama = aktif bağışıklama**: zayıflatılmış mikroplar hasta olmayan kişiye verilir.');
  q('saglik', 'Pasif bağışıklama olarak adlandırılan, serum kullanılması uygulaması hangisidir?',
    ['Seroprofilaksi', 'Aşılama', 'Kemoprofilaksi', 'Beslenme'],
    '**Seroprofilaksi = pasif bağışıklama** (serum).');
  q('saglik', 'Aşılama ile seroprofilaksi arasındaki fark nedir?',
    ['Aşı hasta olmayan kişiye, serum hasta kişiye verilir', 'Aşı hasta kişiye, serum sağlıklı kişiye verilir', 'İkisi de sadece hasta kişiye verilir', 'Aşı ilaçtır, serum besindir'],
    'Fark: **aşı hasta olmayan** kişiye yapılır, **serum hasta** kişiye verilir.');
  q('saglik', 'Sağlıklı bireylere belirli farmakolojik özellikleri olan maddeler verilerek yürütülen koruyucu sağlık hizmeti hangisidir?',
    ['Kemoprofilaksi', 'Seroprofilaksi', 'Aşılama', 'Rehabilitasyon'],
    '**Kemoprofilaksi**: sağlıklı bireylere ilaç verilerek hastalığın önlenmesi.');
  q('saglik', 'Bataklık bölgelerde çalışmak zorunda olan işçilere sıtma için koruyucu ilaç verilmesi hangi hizmete örnektir?',
    ['Kemoprofilaksi', 'Aşılama', 'Seroprofilaksi', 'Portör taraması'],
    'Slayttaki örnek: sıtma için koruyucu ilaç = **kemoprofilaksi**.');
  q('saglik', 'Hastalığın ne kadar erken dönemde teşhis edilirse tedavisinin o kadar kolay olmasına dayanan koruyucu hizmet hangisidir?',
    ['Erken tanı çalışmaları ve portör taramaları', 'İşe dönüş muayeneleri ve ilk yardım', 'Mesleki rehabilitasyon çalışmaları', 'Seroprofilaksi (pasif bağışıklama)'],
    '**Erken tanı ve portör taramaları**: erken teşhis → kolay ve başarılı tedavi.');
  q('saglik', 'Hastalık veya kaza nedeniyle geçici olarak işi bırakan işçilerin yeniden işe başlamadan önce muayene edilmesine ne denir?',
    ['İşe dönüş muayenesi', 'İşe giriş muayenesi', 'Portör taraması', 'Periyodik muayene'],
    '**İşe dönüş muayenesi**.');
  q('saglik', 'Kişisel hijyen, bulaşıcı hastalıklardan korunma, aile planlaması ve ana-çocuk sağlığı hakkında eğitim hangi koruyucu hizmetin kapsamındadır?',
    ['Sağlık eğitimi', 'Kemoprofilaksi', 'İşe dönüş muayenesi', 'Tedavi edici hizmet'],
    '**Sağlık eğitimi**: her fırsatta ve muayeneye gidildiğinde yapılmalıdır.');
  q('saglik', 'Yeterli ve dengeli beslenememenin işçiler üzerindeki etkisi nedir?',
    ['Vücut zayıf düşer, direnç azalır, hastalanma ihtimali artar', 'Vücut hafifler, çalışma hızı ve verim belirgin şekilde artar', 'Dikkat artar, kaza riski azalır ve devamsızlık düşer', 'Bağışıklık güçlenir, hastalanma ihtimali giderek azalır'],
    '**Beslenme** önemli koruyucu yöntemdir; yetersizlik direnci düşürür.');
  q('saglik', 'Hastalıkların veya sakatlıkların iyileştirilmesine yönelik yapılan tıbbi işlemlerin tümüne ne denir?',
    ['Tedavi', 'Rehabilitasyon', 'Profilaksi', 'Sağlık gözetimi'],
    '**Tedavi** tanımı. İşyerinde acil müdahaleden sonra tedavi bir sağlık hizmeti sunucusunda sürer.');
  q('saglik', 'Bedenen veya ruhen sakat kalmış, çalışma gücünü kaybetmiş kişilerin başkalarına bağımlı olmadan yaşaması için yapılan tıbbi ve sosyal yardım çalışmalarına ne denir?',
    ['Rehabilitasyon', 'Tedavi', 'Seroprofilaksi', 'Sağlık eğitimi'],
    'Bu **rehabilitasyon** tanımıdır.');
  q('saglik', 'Rehabilitasyonun türleri hangi seçenekte doğru verilmiştir?',
    ['Tıbbi, mesleki, sosyal', 'Birincil, ikincil, üçüncül', 'Aktif, pasif, kimyasal', 'Fiziksel, kimyasal, biyolojik'],
    'Rehabilitasyonun üç türü: **tıbbi, mesleki, sosyal**.');
  q('saglik', 'Sakatlıkları nedeniyle eski işlerini yapamayanlara yeni bir iş öğretme, iş bulma ve işe uyum hizmetleri hangi rehabilitasyondur?',
    ['Mesleki rehabilitasyon', 'Tıbbi rehabilitasyon', 'Sosyal rehabilitasyon', 'Psikolojik rehabilitasyon'],
    '**Mesleki rehabilitasyon**: yeni iş öğretme, iş bulma, işe uyum.');
  q('saglik', 'Slaytlara göre sosyal rehabilitasyon kime yöneliktir?',
    ['Eski hükümlülere', 'Yaşlı işçilere', 'Engelli çocuklara', 'Yeni işe başlayanlara'],
    '**Sosyal rehabilitasyon**: eski hükümlülerin sosyal yaşama uyumunu kolaylaştırır.');
  q('saglik', 'Bedensel sakatlıkların mümkün olduğu kadar düzeltilmesine yönelik faaliyetler hangi rehabilitasyondur?',
    ['Tıbbi rehabilitasyon', 'Mesleki rehabilitasyon', 'Sosyal rehabilitasyon', 'Ekonomik rehabilitasyon'],
    '**Tıbbi rehabilitasyon**: bedensel sakatlıkların düzeltilmesi.');

  /* ---------- 7. Maliyetler ---------- */
  q('maliyet', 'İş kazaları ve meslek hastalıklarının maliyeti hangi üç başlık altında toplanır?',
    ['İşçiler, işverenler ve ülke ekonomisi açısından', 'Doğrudan maliyet, dolaylı maliyet ve gizli maliyet', 'Tıbbi maliyet, hukuki maliyet ve sosyal maliyet', 'Kısa vadeli, orta vadeli ve uzun vadeli maliyet'],
    'Üç başlık: **işçiler, işverenler, ülke ekonomisi** açısından.');
  q('maliyet', 'İş kazalarından ilk ve en çok zarar gören taraf kimdir?',
    ['İşçiler', 'İşverenler', 'Devlet', 'Sendikalar'],
    'İlk ve en çok zarar gören **işçiler**dir.');
  q('maliyet', 'İşçiler açısından maliyetler arasında hangisi sayılmamıştır?',
    ['Mahkeme masrafları', 'Çalışma gücünde veya meslekte kazanma gücünde kayıplar', 'Gelir kaybı veya gelirde azalma', 'Psikolojik ve ruhsal sorunların ortaya çıkması'],
    'İşçi açısından üç kayıp: kazanma gücü kaybı, gelir kaybı, psikolojik sorunlar. **Mahkeme masrafı** işverenin doğrudan maliyetidir.');
  q('maliyet', 'İş kazası sonucunda işçinin önce etkilenen en değerli varlığı nedir?',
    ['Sağlığı', 'Geliri', 'Mesleği', 'Ailesi'],
    'İşçinin en değerli varlığı **sağlığı**dır; organ kaybı dolaylı olarak gelir düzeyini de etkiler.');
  q('maliyet', 'İşçinin geçirdiği kaza sonucunda artık mesleğini yürütemeyecek hale gelmesi ne anlama gelir?',
    ['Meslekte kazanma gücünü kaybetmesi', 'Geçici iş göremezlik durumuna düşmesi', 'Gelirinde geçici bir azalma olması', 'Sosyal rehabilitasyona alınması'],
    'Mesleği yürütememek = **meslekte kazanma gücünü kaybetmek**.');
  q('maliyet', 'Kaza veya hastalık nedeniyle sağlığı bozulan işçinin artık üreten değil tüketen tarafta yer alması ve kendini yük görmesi hangi kayıptır?',
    ['Psikolojik ve ruhsal sorunlar', 'Gelir kaybı veya gelirde azalma', 'İşverenin doğrudan maliyeti', 'Ülke açısından üretim kaybı'],
    'Kendini işe yaramaz, ailesine ve topluma yük görmek **psikolojik bunalımlara** yol açar.');
  q('maliyet', 'İşverenin maliyetleri hangi iki gruba ayrılır?',
    ['Doğrudan ve dolaylı maliyetler', 'Sabit ve değişken maliyetler', 'Maddi ve manevi maliyetler', 'Ulusal ve uluslararası maliyetler'],
    'İşveren maliyetleri **doğrudan** ve **dolaylı** olarak sınıflandırılır.');
  q('maliyet', 'Aşağıdakilerden hangisi işverenin doğrudan maliyetlerinden biridir?',
    ['İşçiye veya ailesine ödenen tazminatlar', 'Üretim kaybı', 'Yeni işçinin öğrenme süresinin maliyeti', 'Siparişlerin zamanında karşılanmaması'],
    'Doğrudan: SGK primiyle karşılanan giderler, **mahkeme masrafları**, **tazminatlar**. Diğerleri dolaylıdır.');
  q('maliyet', 'Aşağıdakilerden hangisi işverenin dolaylı maliyetlerinden biridir?',
    ['Sigortalanmamış tedavi giderleri', 'Mahkeme masrafları', 'İşçiye ödenen tazminatlar', 'SGK’ya ödenen iş kazası ve meslek hastalığı primi'],
    '**Sigortalanmamış tedavi giderleri** dolaylı maliyettir. Diğerleri doğrudan maliyettir.');
  q('maliyet', 'Kapsam ve miktarı tam tespit edilemeyen ve sınırlandırılamayan maliyetlere ne denir?',
    ['Dolaylı maliyetler', 'Doğrudan maliyetler', 'Sabit maliyetler', 'Fırsat maliyetleri'],
    '**Dolaylı maliyetler** tam tespit edilemez.');
  q('maliyet', 'Dolaylı maliyetler ile doğrudan maliyetler karşılaştırıldığında hangisi doğrudur?',
    ['Dolaylı maliyetler doğrudan maliyetlerden çok fazladır', 'Doğrudan maliyetler dolaylı maliyetlerden çok daha fazladır', 'İkisi her zaman birbirine eşit çıkar', 'Dolaylı maliyet hesaplanamadığı için yok sayılır'],
    'Değerlendirmede **dolaylı maliyetlerin çok daha fazla** olduğu görülür.');
  q('maliyet', 'Kazaya uğramış işçinin yeniden işbaşı yaptıktan sonra verimin düşmesine bağlı ücret maliyeti hangi gruptadır?',
    ['Dolaylı maliyet', 'Doğrudan maliyet', 'Ülke maliyeti', 'İşçi maliyeti'],
    'Verim düşmesine bağlı ücret maliyeti **dolaylı** maliyettir.');
  q('maliyet', 'Ülke ekonomisi açısından iş kazalarının maliyeti değerlendirilirken salt işgücü kaybının yanında neler de dikkate alınmalıdır?',
    ['İşçiye yapılan kültürel ve eğitim harcamalarının kayıpları', 'Sadece hastane ve ilaç masrafları dikkate alınmalıdır', 'Sadece mahkeme masrafları ve tazminatlar eklenmelidir', 'İşverenin kaybettiği kâr ve sipariş gelirleri'],
    'Ülke açısından **vasıflı insan gücü kaybı** ile **kültürel ve eğitim harcamaları** da dikkate alınmalıdır.');

  /* ---------- 8. İSG organizasyonu ---------- */
  q('organizasyon', 'İş güvenliği çalışmaları kimlerin katılacağı bir çalışmadır?',
    ['Tepeden en alttaki işçiye kadar tüm çalışanların', 'Sadece iş güvenliği uzmanı ve işyeri hekiminin', 'Sadece işverenin ve işveren vekillerinin', 'Sadece bölüm amirleri ve ustabaşılarının'],
    'İş güvenliği **tepeden en alttaki işçiye kadar tüm çalışanların** katıldığı bütün bir çalışmadır.');
  q('organizasyon', 'İş güvenliği organizasyonunda gerekli bütçenin sağlanması kimin görevidir?',
    ['İşveren', 'Fabrika müdürü', 'Bölüm amiri', 'İş güvenliği uzmanı'],
    '**İşveren**: bütçe + iş güvenliği organizasyonu, politikası ve kararlar.');
  q('organizasyon', 'Bölüm amirlerini seçmek ve atamak kimin görevidir?',
    ['Fabrika müdürü', 'İşveren', 'İş güvenliği uzmanı', 'İşyeri hekimi'],
    '**Fabrika müdürü**: çalışma düzenini kurar, bölüm amirlerini seçer ve atar, organizasyonu gerçekleştirir.');
  q('organizasyon', 'Alınacak işçileri seçmek ve ani tehlikeleri önlemek kimin görevidir?',
    ['Bölüm amirleri', 'Fabrika müdürü', 'İşveren', 'İşyeri hekimi'],
    '**Bölüm amirleri**: işçi seçme, tüzüklerin uygulanması, teşvik ve kontrol, konuları üst kademeye iletme, ani tehlikeleri önleme.');
  q('organizasyon', 'İş güvenliği uzmanı kimdir?',
    ['ÇSGB belgeli mühendis, mimar veya teknik eleman', 'ÇSGB tarafından belgelendirilmiş hekim', 'İşverenin seçtiği, deneyimli herhangi bir işçi', 'İşçiler tarafından seçilen sendika temsilcisi'],
    'İGU: İSG hizmetleri için **ÇSGB’ce belgelendirilmiş mühendis, mimar veya teknik eleman**.');
  q('organizasyon', 'C sınıfı iş güvenliği uzmanı hangi işyerlerinde çalışabilir?',
    ['Az tehlikeli sınıftaki işyerlerinde', 'Az tehlikeli ve tehlikeli sınıflarda', 'Bütün tehlike sınıflarında', 'Sadece çok tehlikeli sınıfta'],
    'C → **az tehlikeli** · B → az tehlikeli ve tehlikeli · A → bütün tehlike sınıfları.');
  q('organizasyon', 'B sınıfı iş güvenliği uzmanı hangi işyerlerinde çalışabilir?',
    ['Az tehlikeli ve tehlikeli sınıflarda', 'Sadece az tehlikeli sınıfta', 'Bütün tehlike sınıflarında', 'Sadece çok tehlikeli sınıfta'],
    'B sınıfı: **az tehlikeli ve tehlikeli**.');
  q('organizasyon', 'Bütün tehlike sınıflarında yer alan işyerlerinde çalışabilen iş güvenliği uzmanı hangi sınıf belgeye sahiptir?',
    ['A sınıfı', 'B sınıfı', 'C sınıfı', 'D sınıfı'],
    '**A sınıfı** bütün tehlike sınıflarında çalışabilir.');
  q('organizasyon', 'İş güvenliği uzmanının görevleri arasında hangisi yoktur?',
    ['Bölüm amirlerini seçmek ve atamak', 'Rehberlik ve danışmanlık', 'Eğitim ve bilgilendirme', 'İlgili birimlerle işbirliği'],
    'İGU görevleri: rehberlik ve danışmanlık, sağlık gözetimi, eğitim ve bilgilendirme, ilgili birimlerle işbirliği. Bölüm amirlerini **fabrika müdürü** atar.');
  q('organizasyon', 'İş güvenliği uzmanı, yakın ve hayati tehlike oluşturan bir husus tespit ettiğinde ve işveren gerekli tedbiri almazsa ne yapar?',
    ['Durumu Bakanlığa rapor eder', 'İşyerini kalıcı olarak kapatır', 'İşçileri işten çıkarır', 'Hiçbir şey yapamaz'],
    'Önce işverene bildirir; tedbir alınmazsa **Bakanlığa rapor** eder.');
  q('organizasyon', 'İş güvenliği uzmanı acil müdahale gerektiren hayati bir tehlikede işi nasıl durdurabilir?',
    ['İşveren veya vekilinin onayını almak kaydıyla geçici olarak', 'Kimseye sormadan, istediği süre boyunca kalıcı olarak', 'Sadece Bakanlıktan yazılı izin alarak ve kalıcı olarak', 'İşi durdurma yetkisi yoktur, sadece rapor yazabilir'],
    'İşveren veya işveren vekilinin **onayını almak kaydıyla geçici olarak** işi durdurur.');
  q('organizasyon', 'Tam süreli iş güvenliği uzmanlarının mesleki gelişim eğitimlerinde geçen süre, bir yıl içinde toplam kaç iş günü kadar çalışma süresinden sayılır?',
    ['5', '3', '7', '10'],
    'Yılda toplam **5 iş günü** çalışmadan sayılır; ücretten kesinti yapılmaz.');
  q('organizasyon', 'İş güvenliği uzmanı tespit ve tavsiyelerini nereye yazmak zorundadır?',
    ['Onaylı deftere', 'Risk değerlendirme formuna', 'MSDS’ye', 'Kaza tutanağına'],
    'Tespit ve tavsiyeler **onaylı deftere** yazılır; suretler işyeri hekimiyle birlikte saklanır.');
  q('organizasyon', 'Onaylı deftere yazma zorunluluğunu yerine getirmeyen iş güvenliği uzmanına ne olur?',
    ['Yazılı uyarılır, tekrarında belge 1 yıl askıya alınır', 'Belgesi hemen ve süresiz olarak iptal edilir', 'Sadece idari para cezası verilir, belge etkilenmez', 'Herhangi bir yaptırım uygulanmaz, sadece not düşülür'],
    'Önce **yazılı uyarı**; uyarı gerektiren durumun tekrarında belge geçerliliği **bir yıl** askıya alınır.');
  q('organizasyon', 'Onaylı defterin imzalanmaması veya düzenli tutulmamasından kim sorumludur?',
    ['İşveren veya işveren vekili', 'İş güvenliği uzmanı', 'İşyeri hekimi', 'Bölüm amiri'],
    'Defterin imzalanmaması/düzenli tutulmamasından **işveren veya işveren vekili** sorumludur.');
  q('organizasyon', 'İş güvenliği uzmanının yükümlülükleri arasında hangisi vardır?',
    ['Meslek sırlarını ve ticari bilgileri gizli tutmak', 'İşyerinin yıllık bütçesini hazırlamak ve onaylamak', 'İşçilerin ücretlerini ve primlerini belirlemek', 'Bölüm amirlerini seçmek ve görevlerine atamak'],
    'İGU işin normal akışını aksatmamalı, **meslek sırları, ekonomik ve ticari bilgileri gizli** tutmalıdır.');
  q('organizasyon', 'İşyeri hekimi kimdir?',
    ['ÇSGB tarafından belgelendirilmiş, İSG’de görevli hekim', 'Herhangi bir devlet hastanesinde çalışan uzman doktor', 'İşverenin aile hekimi olarak anlaştığı özel doktor', 'Sağlık Bakanlığı adına işyerlerini denetleyen müfettiş'],
    'İşyeri hekimi: **ÇSGB tarafından belgelendirilmiş** hekim.');
  q('organizasyon', 'İşyeri hekimliği eğitiminin teorik kısmı kaç saattir?',
    ['180 saat', '40 saat', '220 saat', '120 saat'],
    'Teorik **180** + uygulama **40** = toplam **220** saat.');
  q('organizasyon', 'İşyeri hekimliği eğitiminin toplam süresi kaç saattir?',
    ['220 saat', '180 saat', '40 saat', '260 saat'],
    'Toplam **220 saat** (180 teorik + 40 uygulama).');
  q('organizasyon', 'İşyeri hekimliği eğitiminin uygulama kısmı kaç saattir?',
    ['40 saat', '180 saat', '20 saat', '60 saat'],
    'Uygulama kısmı **40** saat.');
  q('organizasyon', 'İşyeri hekimi olmak için ne gerekir?',
    ['Yetkili kurumdan eğitim alıp Bakanlık sınavını geçmek', 'Sadece tıp fakültesini bitirip diploma almış olmak yeterlidir', 'İşverenle iş sözleşmesi imzalamak yeterlidir, belge gerekmez', 'Sendikaya üye olup sendikadan onay belgesi almak gerekir'],
    'Bakanlığın yetkilendirdiği kurumdan **eğitim** + Bakanlığın **sınavında başarı** → işyeri hekimliği sertifikası.');
  q('organizasyon', 'Kantin, yemekhane, soyunma odası, duş ve tuvaletlerin bakımı ve temizliği konusunda kontroller yapmak kimin görevidir?',
    ['İşyeri hekimi', 'Fabrika müdürü', 'Bölüm amiri', 'Sendika temsilcisi'],
    'Bu **işyeri hekiminin** görevlerindendir.');
  q('organizasyon', 'Gece vardiyaları dahil tüm çalışanların sağlık gözetimini kim yapar?',
    ['İşyeri hekimi', 'İş güvenliği uzmanı', 'Bölüm amiri', 'İşveren'],
    '**İşyeri hekimi** gece vardiyaları dahil tüm çalışanların sağlık gözetimini yapar.');
  q('organizasyon', 'İşyeri hekimi, bulunması halinde iş güvenliği uzmanı ile işbirliği yaparak hangi belgeleri hazırlar?',
    ['Yıllık çalışma planı ve yıllık değerlendirme raporu', 'Malzeme güvenlik bilgi formları (MSDS)', 'İşyerinin yıllık bütçe ve yatırım planı', 'İşçilerin maaş bordroları ve izin çizelgeleri'],
    'İGU ile birlikte **yıllık çalışma planı** ve **yıllık değerlendirme raporu** hazırlar.');
  q('organizasyon', 'Bulaşıcı hastalıkların kontrolü için işyeri hekiminin yaptırdığı muayene hangisidir?',
    ['Portör muayenesi', 'İşe dönüş muayenesi', 'Göz muayenesi', 'Ehliyet muayenesi'],
    'Yayılmayı önlemek ve bağışıklamayı sağlamak için **portör muayeneleri**.');
  q('organizasyon', 'Yeni teknolojinin sağlık bakımından değerlendirmesini yapmak ve test edilmesini sağlamak kimin görevidir?',
    ['İşyeri hekimi', 'Bölüm amiri', 'Sendika', 'Fabrika müdürü'],
    'Bu **işyeri hekiminin** görevlerindendir.');
  q('organizasyon', 'OSGB’nin açılımı nedir?',
    ['Ortak Sağlık ve Güvenlik Birimi', 'Ortak Sigorta ve Güvence Birliği', 'Organize Sanayi Güvenlik Bölgesi', 'Ortak Sosyal Güvenlik Bürosu'],
    'OSGB = **Ortak Sağlık ve Güvenlik Birimi**.');
  q('organizasyon', 'OSGB kurulabilmesi için tam süreli çalışan hangi personelin istihdamı zorunludur?',
    ['En az 1 işyeri hekimi, 1 iş güvenliği uzmanı, 1 sağlık personeli', 'En az iki işyeri hekimi ve bir hemşire; uzman gerekmez', 'Sadece bir iş güvenliği uzmanı; hekim ve sağlık personeli gerekmez', 'En az beş mühendis ve bir muhasebeci; sağlık personeli gerekmez'],
    'En az **1 işyeri hekimi**, **1 iş güvenliği uzmanı** ve **1 diğer sağlık personeli**.');
  q('organizasyon', 'OSGB’ler fiziki olarak hangi illerde hizmet sunmaya yetkilidir?',
    ['Kuruldukları il ve sınır komşusu illerde', 'Sadece kuruldukları ilin merkezinde', 'Hiçbir sınırlama olmadan Türkiye’nin her yerinde', 'Sadece büyükşehir statüsündeki illerde'],
    'OSGB’ler **kuruldukları il ve sınır komşusu illerde** hizmet verir.');
  q('organizasyon', 'OSGB’leri kimler kurabilir?',
    ['Yetkili kamu kurumları ve TTK’ya tabi şirketler', 'Sadece belediyeler ve il özel idareleri; şirketler kuramaz', 'Sadece işçi sendikaları ve konfederasyonları', 'Sadece devlet hastaneleri ve üniversite hastaneleri'],
    '**Kamu kurum ve kuruluşları** ile **Türk Ticaret Kanunu**’na göre faaliyet gösteren şirketler.');

  /* ---------- 9. Korunma politikaları ve koruma düzeyleri ---------- */
  q('korunma', '“Bir şeyin olmasına veya yapılmasına engel olmak; ortaya çıkan veya çıkacağı düşünülen bir tehlikeyi durdurmak” neyin tanımıdır?',
    ['Önleme', 'Koruma', 'Rehabilitasyon', 'Tedavi'],
    'Bu **önleme** tanımıdır.');
  q('korunma', '“Güçlü bir kimse veya kuruluşun güçsüz birini desteklemesi, himaye etmesi” hangi kavramın anlamları arasındadır?',
    ['Koruma', 'Önleme', 'Disiplin', 'Tedavi'],
    'Himaye etmek, muhafaza etmek, savunmak → **koruma**.');
  q('korunma', 'Çalışma sağlığını tehdit eden faktörler arasında slaytta hangisi sayılmamıştır?',
    ['Ekonomik', 'Fiziksel', 'Biyolojik', 'Psikososyal'],
    'Tehdit eden faktörler: **fiziksel, kimyasal, biyolojik, psikososyal**.');
  q('korunma', 'Hastalık veya yaralanma oluşmadan önce risk etmenlerinin kontrol edilmesi hangi koruma düzeyidir?',
    ['Birincil koruma', 'İkincil koruma', 'Üçüncül koruma', 'Rehabilitasyon'],
    '**Birincil** = oluşmadan önce · **İkincil** = erken tanı · **Üçüncül** = oluştuktan sonra kötüleşmeyi engelleme.');
  q('korunma', 'Yeterli ve dengeli beslenme, fizik egzersiz ve alkol-madde alışkanlıklarının önlenmesi hangi koruma düzeyinin hangi alt başlığındadır?',
    ['Birincil koruma, sağlığın geliştirilmesi', 'Birincil koruma, çevresel risk etmenlerinin kontrolü', 'İkincil koruma, erken tanı', 'Üçüncül koruma, rehabilitasyon'],
    'Birincil koruma → **sağlığın geliştirilmesi**.');
  q('korunma', 'Enfeksiyonların önlenmesi, dekontaminasyon, atık kontrolü, bağışıklama ve kemoprofilaksi hangi koruma düzeyindedir?',
    ['Birincil koruma', 'İkincil koruma', 'Üçüncül koruma', 'Tedavi'],
    'Bunlar birincil korumanın **çevresel risk etmenlerinin kontrolü** başlığındadır.');
  q('korunma', 'Hastalık belirtileri ortaya çıktığında erken tanı ve girişimlerin en kısa sürede uygulanması hangi koruma düzeyidir?',
    ['İkincil koruma', 'Birincil koruma', 'Üçüncül koruma', 'Önleme'],
    '**İkincil koruma**: erken tanı ve sevk, uygun tedavi, sakatlık ve komplikasyonları önleme.');
  q('korunma', 'Erken tanı ve sevk hangi koruma düzeyinde yer alır?',
    ['İkincil koruma', 'Birincil koruma', 'Üçüncül koruma', 'Sağlığın geliştirilmesi'],
    'Erken tanı ve sevk → **ikincil koruma**.');
  q('korunma', 'Hastalık ve sakatlık oluştuktan sonra daha kötüye gidişin engellenmesi amacıyla tıbbi, sosyal ve rehabilitasyon yöntemlerinin uygulanması hangi koruma düzeyidir?',
    ['Üçüncül koruma', 'İkincil koruma', 'Birincil koruma', 'Önleme'],
    '**Üçüncül koruma**: komplikasyonlarla mücadele, rehabilitasyon, protez, psikolojik/sosyal hizmet, iş değişikliği, emeklilik.');
  q('korunma', 'Protez uygulamaları, iş değişiklikleri, emeklilik ve uygun işe yerleştirme hangi koruma düzeyindedir?',
    ['Üçüncül koruma', 'İkincil koruma', 'Birincil koruma', 'Sağlığın geliştirilmesi'],
    'Bunlar **üçüncül koruma** uygulamalarıdır.');

  /* ---------- 10. Yangın ---------- */
  q('yangin', 'Yakıt veya yanıcı maddenin yakıcı madde (oksijen) ile hızlı kimyasal reaksiyonuna ne denir?',
    ['Yanma', 'Yangın', 'Patlama', 'Tutuşma sıcaklığı'],
    '**Yanma** tanımı. **Yangın** = kontrolden çıkmış yanma.');
  q('yangin', 'Kontrolden çıkmış yanma olayına ne denir?',
    ['Yangın', 'Yanma', 'Boğma', 'Dağıtma'],
    '**Yangın** = kontrolden çıkmış yanma.');
  q('yangin', 'Yanma reaksiyonunun başlayabilmesi için ısının ulaşması gereken değere ne denir?',
    ['Tutuşma sıcaklığı', 'Kaynama noktası', 'Erime noktası', 'Yoğuşma sıcaklığı'],
    'Reaksiyonun başlaması için **tutuşma sıcaklığı**na kadar ısı verilmelidir.');
  q('yangin', 'Yakıcı madde genelde havanın içinde yüzde kaç oranında bulunan oksijendir?',
    ['%21', '%78', '%50', '%1'],
    'Havada **%21** oksijen; hava olmayan yerde yangın olmaz.');
  q('yangin', 'Yanmayı durdurmanın en önemli yolu nedir?',
    ['Yanıcı madde ile hava arasındaki ilişkiyi kesmek', 'Ortamın sıcaklığını tutuşma sıcaklığının üstüne çıkarmak', 'Yangının çevresine daha fazla yanıcı madde koymak', 'Kapı ve pencereleri açıp havalandırmayı artırmak'],
    'En önemli yol: **yanıcı madde ile hava arasındaki ilişkiyi kesmek**.');
  q('yangin', 'Basit yangınlarda yanma sonucu açığa çıkanlar arasında hangisi yoktur?',
    ['Zehirli siyanür gazı', 'Karbonmonoksit (CO)', 'Karbondioksit (CO₂)', 'Su buharı (H₂O) ve ısı'],
    'Basit yangında **CO, CO₂, H₂O ve ısı**; zehirli gazlar ayrıca kimyasal madde yangınlarında çıkar.');
  q('yangin', 'Katı madde yangınları hangi sınıftır?',
    ['A sınıfı', 'B sınıfı', 'C sınıfı', 'D sınıfı'],
    'A **katı** · B **sıvı** · C **gaz** · D **metal**.');
  q('yangin', 'Yanabilen sıvıların yanması ile oluşan yangınlar hangi sınıftır?',
    ['B sınıfı', 'A sınıfı', 'C sınıfı', 'D sınıfı'],
    'B sınıfı: yanabilen **sıvılar**.');
  q('yangin', 'Likit petrol gazı, hava gazı ve hidrojen gibi gazların yanması ile oluşan yangınlar hangi sınıftır?',
    ['C sınıfı', 'B sınıfı', 'A sınıfı', 'D sınıfı'],
    'C sınıfı: **gazlar**; kuru kimyevi toz ile söndürülür.');
  q('yangin', 'Magnezyum, lityum, sodyum ve seryum gibi hafif metallerin yanmasıyla oluşan yangınlar hangi sınıftır?',
    ['D sınıfı', 'C sınıfı', 'B sınıfı', 'A sınıfı'],
    'D sınıfı: hafif **metaller** ve alaşımları; kuru kimyevi toz.');
  q('yangin', 'A sınıfı yangınlar nasıl söndürülür?',
    ['Soğutma ve yanıcı maddenin uzaklaştırılması ile', 'Sadece kuru kimyevi toz kullanılarak boğma ile', 'Sadece karbondioksit gazı püskürtülerek', 'Hiç su kullanılmadan, sadece kum ile boğarak'],
    'A (katı): **soğutma** ve **yanıcı maddenin uzaklaştırılması**.');
  q('yangin', 'B sınıfı yangınlar nasıl söndürülür?',
    ['Sis halinde su ile soğutma; CO₂, köpük veya tozla boğma', 'Sadece bol miktarda tazyikli su sıkılarak soğutma ile', 'Sadece kum dökülerek ve yanıcı madde uzaklaştırılarak', 'Yanıcı madde uzaklaştırılarak ve dağıtma yöntemi ile'],
    'B (sıvı): **sis halinde su** ile soğutma + **CO₂, köpük, kuru kimyevi toz** ile boğma.');
  q('yangin', 'Yangınların söndürülmesinde kullanılan yöntemler neye dayanır?',
    ['Yanma için gerekli üç unsurdan birini veya birkaçını ortadan kaldırmaya', 'Ortamdaki oksijen miktarını artırarak yanmayı hızlandırmaya', 'Yanıcı maddeyi tutuşma sıcaklığının üzerine kadar ısıtmaya', 'Yangını kontrol altında tutup kendi kendine sönmesini beklemeye'],
    'Söndürme: yanmanın **üç unsurundan** birini/birkaçını kaldırmak (soğutma, boğma, dağıtma).');
  q('yangin', 'Yanıcı maddenin genelde su ile soğutularak sıcaklığının tutuşma sıcaklığının altına indirilmesine ne denir?',
    ['Soğutma', 'Boğma', 'Dağıtma', 'Tecrit'],
    '**Soğutma** yöntemi.');
  q('yangin', 'Hava ile yanıcı madde arasında tampon oluşturularak havanın yanıcı maddeye ulaşmasının engellenmesine ne denir?',
    ['Boğma', 'Soğutma', 'Dağıtma', 'Söndürme tüpü'],
    '**Boğma** yöntemi.');
  q('yangin', 'Yanabilen fakat henüz yanmaya başlamamış yanıcı maddelerin yangından uzaklaştırılmasına ne denir?',
    ['Dağıtma', 'Boğma', 'Soğutma', 'Tahliye'],
    '**Dağıtma** yöntemi.');
  q('yangin', 'Su hangi yangınlarda kullanılmaz?',
    ['Akaryakıt yangınlarında', 'Kâğıt yangınlarında', 'Odun yangınlarında', 'Kumaş yangınlarında'],
    'Su **akaryakıt yangınlarında kullanılmaz**; elektriği ilettiği için de dikkatli kullanılmalıdır.');
  q('yangin', 'Çelik tüplerde basınç altında sıvı halde tutulan ve yanan maddeyi oksijensiz bırakan söndürme maddesi hangisidir?',
    ['Karbondioksit (CO₂)', 'Köpük (yüzey kaplayıcı)', 'Kuru kimyasal toz', 'Sis halinde su'],
    '**CO₂** akaryakıt yangınlarında kullanılır; çelik tüplerde sıvı haldedir.');
  q('yangin', 'Karbondioksit ile yangın söndürmek hangi ortamlarda oldukça zordur?',
    ['Açık alanlarda ve hava akımının olduğu yerlerde', 'Kapalı ve hava akımı olmayan odalarda', 'Küçük ve havalandırması kapalı laboratuvarlarda', 'Kapısı kapalı, rüzgâr almayan depolarda'],
    'CO₂ gazı dağılacağı için **açık alanlarda ve hava akımında** söndürme zordur.');
  q('yangin', 'Sıvı yüzeyini kaplayarak oksijenle yakıt arasındaki ilişkiyi kesen ve ayrıca soğutma özelliği olan söndürme maddesi hangisidir?',
    ['Köpük', 'Karbondioksit', 'Kum', 'Kuru kimyasal toz'],
    '**Köpük**: yüzeyi kaplar + soğutma özelliği; özellikle akaryakıt yangınlarında.');
  q('yangin', 'Özellikle elektrik yangınlarında kullanılabilen, taşınabilir tüplerdeki söndürme maddesi hangisidir?',
    ['Kuru kimyasallar', 'Sis halinde su', 'Köpük (sıvı köpük)', 'Kum ve toprak'],
    '**Kuru kimyasal toz** elektrik yangınlarında kullanılabilir; cinsine göre A, B, C sınıfı yangınları söndürür.');
  q('yangin', 'Kum daha çok hangi yangınlarda kullanılır?',
    ['Orman yangınlarında', 'Elektrik yangınlarında', 'Gaz yangınlarında', 'Metal yangınlarında'],
    '**Kum** daha çok **orman yangınlarında**; diğerlerinde boğucu olarak.');

  /* ---------- 11. Elektrik ---------- */
  q('elektrik', 'Elektrik kazalarının oluş nedenleri arasında hangisi sayılmamıştır?',
    ['Topraklama yapılması', 'Elektrik hakkında yeterli bilgiye sahip olmamak', 'Yalıtım kurallarına uyulmaması', 'Dikkatsizlik, tedbirsizlik, acelecilik'],
    'Nedenler: bilgisizlik, **yalıtım kurallarına uymama**, aşırı güven/risk alma, dikkatsizlik-acelecilik. Topraklama korunma yöntemidir.');
  q('elektrik', 'Elektrikle çarpılmak için ne gerekir?',
    ['Akımın vücuttan geçerek + ve – kutuplar arasındaki devreyi tamamlaması', 'Sadece elektrikli bir kabloya uzaktan bakmak veya yaklaşmak', 'Elektrikli aletin fişinin prize takılı olmadan kapalı olması', 'Ayakkabısız olarak tamamen kuru ve yalıtkan bir zeminde durmak'],
    'Akım vücuttan geçip **+ ve – kutuplar arasındaki devreyi tamamlamalıdır**.');
  q('elektrik', 'Pil, batarya ve akümülatörler hangi akımı üretir?',
    ['Doğru akım (DC)', 'Alternatif akım (AC)', 'Üç fazlı akım', 'Statik elektrik'],
    'Pil, batarya ve akü **doğru akım (DC)** üretir.');
  q('elektrik', 'Kaç voltun üzerindeki doğru akım (DC) kaynakları tehlikelidir?',
    ['30 volt', '12 volt', '42 volt', '220 volt'],
    '**30 volt üstü** DC kaynakları tehlikelidir. (42 V = küçük gerilim sınırı.)');
  q('elektrik', 'Alternatif akım kalp üzerinden geçerse ne olur?',
    ['Kalbin sinirsel iletim sistemi bozulur, kalp durur', 'Kalp hızlanır ama kalıcı bir zarar görmez', 'Hiçbir etkisi olmaz, akım vücuttan geçip gider', 'Sadece ciltte küçük ve yüzeysel bir yanık oluşur'],
    'AC kalpten geçerse **sinirsel iletim sistemi bozulur, kalp durur**.');
  q('elektrik', 'Prizdeki aktif kutba dokunulduğunda vücut devreyi tamamlamak için neyi kullanır?',
    ['Yere basan ayakları', 'Başını ve saçlarını', 'Üzerindeki elbiseleri', 'Akciğerlerini ve nefesi'],
    'AC ile çarpılma kolaydır; vücut devreyi **yere basan ayakları** ile tamamlar.');
  q('elektrik', 'Kuruyken iletken olmayan tahta ve plastik gibi maddeler ne zaman iletken olur?',
    ['Islanınca', 'Isınınca', 'Soğuyunca', 'Kırılınca'],
    'Su iyi iletir; tahta, plastik **ıslanınca** iletken olur.');
  q('elektrik', 'Elektrik yanıklarıyla ilgili hangisi doğrudur?',
    ['Ciltteki yara küçük olsa da derin dokularda şiddetli hasar olabilir', 'Doku hasarı her zaman ciltte görülen yara ile aynı büyüklüktedir', 'Elektrik yanığı sadece yüzeyseldir, derin dokulara ulaşmaz', 'Elektrik yanıkları ısı yanıklarından her zaman daha hafiftir'],
    'Doku hasarı ciltteki görüntüye göre **umulandan çok daha fazladır**; derin dokular etkilenir.');
  q('elektrik', 'Kopmuş bir gerilim hattı için ne varsayılmalıdır?',
    ['Kesildiğinden emin olunana kadar elektrik olduğu', 'Hat koptuğu anda elektriğin otomatik olarak kesilmiş olduğu', 'Sadece gece saatlerinde hatta elektrik bulunduğu', 'Yağmurlu havalarda hattın tamamen zararsız olduğu'],
    'Kesildiğine emin olunmadıkça **elektrik olduğu varsayılmalıdır**. Gerilim hatları 115 – 50 000 volt olabilir.');
  q('elektrik', 'Gerilim hatları kaç volt olabilir?',
    ['115 – 50 000 volt', '12 – 220 volt', '30 – 42 volt', '1 – 5 volt'],
    'Gerilim hatları **115 – 50 000 volt**.');
  q('elektrik', 'Elektrik kablosu üzerine düşmüş bir arabanın içindeki insanlar için ne söylenebilir?',
    ['Arabanın içinde kaldıkları sürece güvendedirler', 'Hemen kapıyı açıp araçtan dışarı atlamalıdırlar', 'Aracın metal kapı kollarını sıkıca tutmalıdırlar', 'Camı açıp kabloyu elleriyle itmeye çalışmalıdırlar'],
    'Lastikler yalıtkandır; devre toprağa tamamlanmadıkça **içeride kalanlar güvendedir**.');
  q('elektrik', 'Normalde gerilim altında olmayan ancak kullanım esnasında elektriklenebilecek el aletlerinin yalıtkanlı yapılmasına ne denir?',
    ['Koruyucu yalıtma', 'Sıfırlama', 'Topraklama', 'Kaçak akım rölesi'],
    '**Koruyucu yalıtma**: pense, karga burun, yan keski yalıtılmış; temizlik aletlerinin sapları yalıtkan.');
  q('elektrik', 'Küçük gerilim kullanmada elektrikli araçlar kaç voltun altında çalışacak şekilde tasarlanmalıdır?',
    ['42 V', '30 V', '110 V', '220 V'],
    'Küçük gerilim: **42 V**’un altı. Bu araçlarda **topraklamaya gerek yoktur**.');
  q('elektrik', 'Hangi uygulamada araçlara ayrıca topraklama yapılmasına ihtiyaç yoktur?',
    ['Küçük gerilim kullanma', 'Sıfırlama', 'Koruyucu yalıtma yapılmamış aletlerde', 'Çelik konstrüksiyonlu çatılarda'],
    '42 V altı **küçük gerilim** araçlarında topraklamaya gerek yoktur.');
  q('elektrik', 'Elektrikli makine ve araçların gövde kısımlarının nötr iletkenine bağlanmasına ne denir?',
    ['Sıfırlama', 'Topraklama', 'Yalıtma', 'İyonizasyon'],
    '**Sıfırlama**: gövde → **nötr** iletken. Topraklama: madeni kısımlar → **toprak**.');
  q('elektrik', 'Sıfırlamada nötr hattına doğrudan bağlamak için kaç mm² kesitinde bakır iletken kullanılması zorunludur?',
    ['10 mm²', '1,5 mm²', '4 mm²', '25 mm²'],
    'Sıfırlamada **10 mm²** bakır iletken zorunludur.');
  q('elektrik', 'Sıfırlama yapılan bir cihazın fişi prize ters takılırsa ne olur?',
    ['Cihazın gövdesine faz verilmiş olur', 'Cihaz daha verimli ve sessiz çalışır', 'Hiçbir şey olmaz, yön önemsizdir', 'Cihaz kendiliğinden topraklanmış olur'],
    'Fiş yönü sabit tutulmalıdır; ters takılırsa **gövdeye faz** verilir.');
  q('elektrik', 'Akım taşıyabilecek madeni kısımların yeryüzündeki toprak ile elektriksel olarak bağlanmasına ne denir?',
    ['Topraklama', 'Sıfırlama', 'Yalıtma', 'Nemlendirme'],
    '**Topraklama** tanımı.');
  q('elektrik', 'Elektrik çarpmalarına karşı en etkili yöntem hangisidir?',
    ['Topraklama', 'Sıfırlama', 'Nemlendirme', 'İyonizasyon'],
    'Slayt: **topraklama** elektrik çarpmalarına karşı en etkili yöntemdir.');
  q('elektrik', 'Çelik konstrüksiyonlu çatılar neye karşı topraklanmalıdır?',
    ['Yıldırıma', 'Statik elektriğe', 'Yangına', 'Depreme'],
    'Çelik konstrüksiyonlu çatılar **yıldırıma** karşı topraklanmalıdır.');
  q('elektrik', 'Elektrik hattına giren ve çıkan akımların birbirine eşit olması gerekliliği prensibine göre çalışan koruma elemanı hangisidir?',
    ['Kaçak akım rölesi', 'Sigorta', 'Topraklama hattı', 'Transformatör'],
    '**Kaçak akım rölesi**: vücuttan akım geçince giren-çıkan akım farkı oluşur, devre kesilir.');
  q('elektrik', 'Statik elektrik yükünün önlenmesi için kullanılan yöntemler arasında hangisi yoktur?',
    ['Sıfırlama', 'Nemlendirme', 'Birbirine bağlama ve topraklama', 'İyonizasyon'],
    'Statik elektrik: **nemlendirme, birbirine bağlama ve topraklama, iyonizasyon**.');
  q('elektrik', 'Elektrik kazaları ve yangınlar için slayttaki sonuç nedir?',
    ['Önlenebilir risklerdir', 'Önlenemez risklerdir', 'Sadece şans eseri olur', 'Sadece büyük işyerlerinde olur'],
    'Elektrik kazaları ve yangınlar **önlenebilir** risklerdir.');

  /* ---------- 12. Fiziksel risk faktörleri ---------- */
  q('fiziksel', 'İnsan sağlığı açısından önemli fiziksel risk faktörleri arasında hangisi sayılmamıştır?',
    ['Mikroorganizmalar', 'Gürültü', 'Titreşim', 'Radyasyon'],
    'Fiziksel: gürültü, titreşim, aşırı sıcak-soğuk, radyasyon, ışık/ışınlar/elektromanyetik dalgalar. Mikroorganizma **biyolojik**tir.');
  q('fiziksel', '“Hoşa gitmeyen, istenmeyen, rahatsız edici ses” neyin tanımıdır?',
    ['Gürültü', 'Titreşim', 'Radyasyon', 'Akustik travma'],
    '**Gürültü** tanımı.');
  q('fiziksel', 'Gürültünün fizyolojik etkileri arasında hangisi yoktur?',
    ['Uykusuzluk', 'İşitme kayıpları', 'Sinir ve dolaşım sistemi bozuklukları', 'Hormon dengesinin bozulması'],
    'Uykusuzluk, yorgunluk, uyuyamama **psikolojik** etkidir. Fizyolojik: işitme kaybı, acı hissi, sinir-dolaşım bozukluğu, hormon dengesi.');
  q('fiziksel', 'Gürültünün psikolojik etkileri hangileridir?',
    ['Yorgunluk, uyuyamama, uykusuzluk', 'İşitme kaybı ve acı hissi', 'Hormon dengesinin bozulması', 'Dolaşım sistemi bozuklukları'],
    'Psikolojik: **yorgunluk, uyuyamama, uykusuzluk**.');
  q('fiziksel', 'Çok yüksek ses düzeyinde ortaya çıkan, kulak zarı ile birlikte orta ve iç kulağın yapısını da bozan işitme kaybı hangisidir?',
    ['Akustik travma', 'Geçici işitme kaybı', 'Kalıcı işitme kaybı', 'Gürültü stresi'],
    '**Akustik travma**: çok yüksek ses, yoğun ses basıncı.');
  q('fiziksel', 'Gürültülü bir ortamda belirli bir süre duran kişinin işitmesinde oluşan ve belli bir süre sonra ortadan kalkan azalma hangisidir?',
    ['Geçici işitme kaybı', 'Kalıcı işitme kaybı', 'Akustik travma', 'Fizyolojik etki'],
    '**Geçici işitme kaybı**: süre sonra kalkar.');
  q('fiziksel', 'Uzun yıllar gürültülü ortamda bulunan insanların duymasında meydana gelen kalıcı azalma hangisidir?',
    ['Kalıcı işitme kaybı', 'Geçici işitme kaybı', 'Akustik travma', 'Psikolojik etki'],
    '**Kalıcı işitme kaybı**: gürültü düzeyi, süre, fizyolojik duruma bağlıdır.');
  q('fiziksel', 'Gürültüden korunmak için uygulanan üç yöntem arasında hangisi yoktur?',
    ['Çalışma saatini gece vardiyasına almak', 'Gürültüyü kaynağında azaltmak veya yok etmek', 'Gürültü ve ses izolasyonu yapmak', 'Kişisel koruyucular kullanmak'],
    'Üç yöntem: **kaynakta azaltma/yok etme, izolasyon, kişisel koruyucular**.');
  q('fiziksel', 'Genellikle katı ortamda yayılan, dokunma duyusu ile algılanan enerji yayılımına ne denir?',
    ['Titreşim', 'Gürültü', 'Radyasyon', 'Işık'],
    '**Titreşim** tanımı.');
  q('fiziksel', 'Titreşim frekansı hangi birimle ölçülür?',
    ['Hertz', 'Desibel', 'Lüks', 'Volt'],
    'Frekans = saniyedeki titreşim sayısı, **Hertz (Hz)**. Aydınlatma = lüks.');
  q('fiziksel', 'Elle kullanılan araç ve gereçlerde titreşim organizmayı hangi yolla etkiler?',
    ['El', 'Kulak', 'Göz', 'Solunum'],
    'Elle kullanılan araçlarda **el**; diğerlerinde titreşen zemin/parçayla ilişkili vücut bölümü.');
  q('fiziksel', 'Titreşim etkisinin en tipik örneği hangi işçilerde görülmüştür?',
    ['Soğuk iklimde motorlu testerelerle odun kesen işçilerde', 'Bilgisayar başında uzun süre çalışan büro memurlarında', 'Sıcak iklimde açık tarlada el ile çalışan işçilerde', 'Mutfakta bıçak kullanarak yemek hazırlayan aşçılarda'],
    'Tipik örnek: **soğuk iklimde motorlu testereyle odun kesenler**; el parmaklarındaki kılcal damarlar daralır. Benzeri kompresörle kazı yapanlarda.');
  q('fiziksel', 'Kamyon, traktör ve yol makineleri gibi büyük makine ve taşıtlarda görülen titreşimler hangi frekans aralığındadır?',
    ['Düşük frekans, 2-20 Hz', 'Orta frekans, 8-1000 Hz', 'Çok yüksek frekans, 1000-30000 Hz', 'Ultra frekans, 30000 Hz üstü'],
    'Düşük **2-20 Hz** büyük makine ve taşıtlar · orta 8-1000 Hz hava basınçlı el gereçleri · çok yüksek 1000-30000 Hz sabit endüstri makineleri.');
  q('fiziksel', 'Elle kullanılan hava basınçlı gereçlerde görülen orta frekanslı titreşimlerin aralığı nedir?',
    ['8-1000 Hz', '2-20 Hz', '1000-30000 Hz', '20-80 Hz'],
    'Orta frekans **8-1000 Hz**; gereçler genellikle 10-35 kg.');
  q('fiziksel', 'Orta frekanslı titreşimlerin hareket sistemine zararlı etkileri en sık nerede görülür?',
    ['Dirseklerde', 'Dizlerde', 'Bel omurlarında', 'Boyunda'],
    'En sık **dirseklerde**, sonra el bileği ve el kemik/eklemlerinde.');
  q('fiziksel', 'Çok yüksek frekanslı titreşimler (1000-30000 Hz) genellikle nerede görülür?',
    ['Sabit endüstri makinelerinde', 'Kamyon ve traktörlerde', 'Hava basınçlı el gereçlerinde', 'Bisikletlerde'],
    '**Sabit endüstri makinelerinde**.');
  q('fiziksel', 'Titreşimden korunma tedbirleri arasında hangisi yoktur?',
    ['Titreşimin frekansını artırmak', 'Dinamik dengesizliklerin giderilmesi', 'Titreşim amortisörlerinin kullanılması', 'Titreşim yalıtımı'],
    'Tedbirler: frekans uyumlaşması, dinamik dengesizlikleri giderme, **amortisör**, yalıtım, iletimin sönümlenmesi.');
  q('fiziksel', 'Gelişmiş ülkelerde hafif fiziksel işler yapan işçilerin çalıştığı fabrikalarda en rahat ortam sıcaklığı kabul edilen değer nedir?',
    ['15-20 °C', '12-16 °C', '20-25 °C', '25-30 °C'],
    'Hafif işler **15-20 °C**; ağır endüstriyel işler **12-16 °C**.');
  q('fiziksel', 'Ağır endüstriyel işlerde iş görenlerin kendilerini rahat hissettikleri ortam sıcaklığı sınırları nedir?',
    ['12-16 °C', '15-20 °C', '18-22 °C', '5-10 °C'],
    'Fiziksel aktivite arttıkça sıcaklık düşürülür: ağır işlerde **12-16 °C**.');
  q('fiziksel', 'Yapılan araştırmalara göre ortam sıcaklığı ile kaza sayısı arasındaki ilişki nedir?',
    ['Belli bir sıcaklığa kadar sabit, üstünde kaza sayısı artar', 'Sıcaklık arttıkça kaza sayısı düzenli olarak ve sürekli azalır', 'Sıcaklık ile kaza sayısı arasında hiçbir ilişki bulunmamıştır', 'Kaza sayısı sadece soğuk ortamlarda artar, sıcakta sabit kalır'],
    'Belli bir sıcaklığa kadar **sabit**, üstünde **artar**.');
  q('fiziksel', 'Ortamın rahat çalışma sıcaklığının üstünde olmasının olumsuzlukları arasında hangisi yoktur?',
    ['Kas kuvvetinin artması', 'Bıkkınlık', 'Hataların yoğunlaşması', 'Kan dolaşımının zorlaşması'],
    'Sayılanlar: bıkkınlık, sinirlilik, dikkatsizlik, hatalar, zihinsel verim düşüklüğü, beceri azalması, kaza artışı, ağır işte verim düşüklüğü, dolaşım zorlaşması, yorgunluk.');
  q('fiziksel', 'Soğuk çevre koşullarında insana soğuğu hissettiren etkenler özellikle hangileridir?',
    ['Sıcaklık derecesi ve hava akım hızı', 'Ortamın nemi ve gürültü düzeyi', 'Işık şiddeti ve titreşim düzeyi', 'Hava basıncı ve radyasyon düzeyi'],
    'Soğuğu hissettiren: **sıcaklık derecesi** ve **hava akım hızı**.');
  q('fiziksel', 'Soğuğun insan sağlığına zararları arasında hangisi sayılmamıştır?',
    ['Akustik travma', 'Soğuk algınlığı rahatsızlıkları', 'Vücudun belirli yerlerinin donması', 'Soğuk yanığı'],
    'Soğuk: soğuk algınlığı, donma, **soğuk yanığı**, gözlem ve tepki yeteneğinin azalması. Akustik travma gürültüdür.');
  q('fiziksel', 'Soğuk iş ortamına ait sorunlar ile aşırı ısı stresi ortamı karşılaştırıldığında hangisi doğrudur?',
    ['Soğuk ortam sorunları daha kolay halledilir', 'Soğuk ortam sorunları hiç çözülemez', 'İkisi aynı zorluktadır', 'Isı stresi daha kolay halledilir'],
    'Soğuk ortam sorunları **daha kolay** halledilir (uygun giyim); ama el-ayak parmakları, burun ve kulakları korumak güçtür.');
  q('fiziksel', 'Soğukta korunması en güç olan vücut bölümleri hangileridir?',
    ['El ve ayak parmakları, burun ve kulaklar', 'Gövde, sırt ve göğüs bölgesi', 'Bacaklar, dizler ve kalça bölgesi', 'Baş, boyun ve omuz bölgesi'],
    'Uygun giyimle korunulsa da **el-ayak parmakları, burun ve kulaklar** zor korunur.');
  q('fiziksel', 'İnsanın bilgiyi algılamasında en önemli algılayıcı hangisidir ve algılamanın yüzde kaçı onunla gerçekleşir?',
    ['Göz, %80-90', 'Kulak, %80-90', 'Göz, %50', 'Deri, %30'],
    'En önemli algılayıcı **göz**; algılamanın **%80-90**’ı göz kanalıyla.');
  q('fiziksel', 'Aydınlatma şiddetinin ölçü birimi nedir?',
    ['Lüks (lx)', 'Hertz (Hz)', 'Desibel (dB)', 'Lümen-saat'],
    'Aydınlatma şiddeti birimi **lüks (lx)** = birim alana düşen ışık akışı.');
  q('fiziksel', 'Bulutsuz bir yaz gününde aydınlatma şiddeti kaç lükse ulaşır?',
    ['100 000 lx', '3000 lx', '10 000 lx', '500 lx'],
    'Bulutsuz yaz günü **100 000 lx**; kapalı kış günü **3000 lx**.');
  q('fiziksel', 'Kapalı bir kış gününde aydınlatma şiddeti kaç lükse ulaşır?',
    ['3000 lx', '100 000 lx', '30 000 lx', '300 lx'],
    'Kapalı kış günü ancak **3000 lx**.');
  q('fiziksel', 'Uzun süreli ince işlerle uğraşanlarda ve kalite kontrol elemanlarında göz yorgunluğunu önlemek için ne yapılmalıdır?',
    ['Dinlenme araları verilmelidir', 'Işık tamamen kapatılmalıdır', 'Daha parlak yüzeylere bakılmalıdır', 'Mesai uzatılmalıdır'],
    '**Dinlenme araları** verilmeli; bu aralarda uzak ve fazla parlamayan cisimlere bakılmalıdır.');
  q('fiziksel', 'Dinlenme aralarında iş görenler nereye bakmalıdır?',
    ['Uzak mesafelere ve fazla parlamayan uzak cisimlere', 'Güneş ışınlarının içeri girdiği parlak pencereye', 'Parlak ışıkla aydınlatılmış yakın yüzeylere', 'Yakındaki ince detaylara ve küçük yazılara'],
    '**Uzak** ve **fazla parlamayan** cisimlere; parlak yüzeylere bakmak gözü zorlar.');
  q('fiziksel', 'Uzmanlara göre en iyi ışık hangisidir?',
    ['Beyaz ışık (gün ışığı)', 'Sarı ışık (sodyum)', 'Mavi ışık (LED)', 'Kırmızı ışık (kızıl)'],
    'En iyi ışık **beyaz ışık (gün ışığı)**; yetersizse gün ışığına benzeyen ışık.');
  q('fiziksel', 'Çalışılan yüzeyin her yanındaki aydınlatma düzeyinin eşit olması hangi aydınlatma koşuludur?',
    ['Aydınlatma tekdüze olmalıdır', 'Aydınlatma durağan olmalıdır', 'Göz kamaşmasına neden olmamalıdır', 'Gölge düşmemelidir'],
    '**Tekdüze**: her yanı eşit; sağlanmazsa göz çabuk yorulur.');
  q('fiziksel', 'Işık kaynağının titreşim yapmaması hangi aydınlatma koşuludur?',
    ['Aydınlatma durağan olmalıdır', 'Aydınlatma tekdüze olmalıdır', 'Işığın niteliği uygun olmalıdır', 'Gölge düşmemelidir'],
    '**Durağan (sabit)**: titreşim parlaklıkta hızlı değişime yol açar, göz yorulur.');
  q('fiziksel', 'Görme alanı içindeki ışık kaynaklarının maskelenmesi hangi aydınlatma koşulu için gereklidir?',
    ['Göz kamaşmasına neden olmaması', 'Aydınlatmanın tekdüze olması', 'Çalışma yüzeyine gölge düşmemesi', 'Kullanılan ışığın beyaz olması'],
    '**Göz kamaşmasını** önlemek için kaynaklar lambayı tamamen kaplayacak şekilde maskelenir.');
  q('fiziksel', 'Işığın bir kısmını tavana ve duvarların üst bölgelerine dağıtan lambalıklar hangi koşul için kullanılır?',
    ['Çalışılan yüzeye gölge düşmemesi', 'Göz kamaşmasını artırmak', 'Durağanlığı bozmak', 'Enerji tasarrufu'],
    'Aşırı **gölge** oluşmaması için doğru yerleşim ve bu tür lambalıklar.');
  q('fiziksel', 'Görsel yorgunluğun sonuçları arasında hangisi yoktur?',
    ['Kalıcı işitme kaybı', 'Gözlerde sulanma', 'Çift görme sorunu', 'Baş ağrısı şikayeti'],
    'Görsel yorgunluk: sulanma, çift görme, baş ağrısı, uyum gücünde azalma, netlik/kontrast/algılama hızında azalma.');
  q('fiziksel', '60 yaşındaki bir işçinin 20 yaşındaki bir işçiye göre ne kadar güçlü aydınlığa ihtiyacı vardır?',
    ['Yaklaşık 2-5 kat', 'Yarısı kadar', 'Aynı', '10-20 kat'],
    '40 yaş üstü daha fazla ışık ister; 60 yaşındaki işçi **2-5 kat** güçlü aydınlık ister.');
  q('fiziksel', 'Elektromanyetik ışınım neye göre sınıflara ayrılır?',
    ['Dalga boyuna göre', 'Rengine göre', 'Sıcaklığına göre', 'Ağırlığına göre'],
    'Elektromanyetik ışınım **dalga boyuna** göre: radyo, mikrodalga, kızılötesi, görünür, morötesi, X, gama.');
  q('fiziksel', 'Morötesi (UV) ışınımın dalga boyu aralığı nedir?',
    ['10-400 nm', '400-700 nm', '1-10 nm', '700-1000 nm'],
    'Morötesi: **10-400 nm**. (Görünür ışık yaklaşık 400-700 nm.)');
  q('fiziksel', 'Ultraviyole ışınları hangi iki ışın arasında kalır ve neden gözle görülemez?',
    ['Görünen ışın ile X-ışınları arasında; dalga boyları kısa olduğu için', 'Radyo dalgaları ile mikrodalga arasında; dalga boyları uzun olduğu için', 'Kızılötesi ile görünür ışık arasında; çok parlak oldukları için', 'X-ışını ile gama arasında; çok zayıf oldukları için'],
    'UV **görünen ışın ile X-ışınları** arasındadır; **dalga boyu kısa** olduğu için görülmez.');
  q('fiziksel', 'Radyasyon yayan maddelere ne denir?',
    ['Radyoaktif madde', 'İyonize madde', 'Kimyasal etken', 'Pestisit'],
    'Radyasyon yayan maddeler = **radyoaktif madde**.');
  q('fiziksel', 'Dalga, parçacık veya foton olarak adlandırılan enerji paketleri ile yayılan enerjiye ne denir?',
    ['Radyasyon', 'Titreşim', 'Gürültü', 'Aydınlatma'],
    '**Radyasyon**: daima doğada var olan bir olgudur.');
  q('fiziksel', 'Radyasyonun hücreye zararı nasıl açıklanır?',
    ['DNA’yı parçalar, hücreler ölür ve kansere yol açabilir', 'Sadece cildin yüzeyini ısıtır, iç dokulara ve hücrelere ulaşmaz', 'Kanı inceltir ve pıhtılaşmayı engeller, hücreye etkisi yoktur', 'Kemikleri güçlendirir, düşük dozda hücre yenilenmesini hızlandırır'],
    'Radyasyon **DNA**’yı parçalayabilir → hücre ölümü, doku zararı, kanser.');
  q('fiziksel', 'Radyasyon çocuklar ve gelişme çağındaki gençlerde genellikle hangi organı etkiler?',
    ['Gözü (görme bozukluğu, katarakt)', 'Kulağı (işitme kaybı, çınlama)', 'Böbrekleri (taş, yetmezlik)', 'Dişleri (çürük, diş eti)'],
    'Çocuk ve gençlerde genellikle **göz**: görme bozukluğu, katarakt.');
  q('fiziksel', 'Ozon yoğunluğundaki her %1’lik azalmaya karşılık derideki UV yanmalarında ne kadar artış gözlenmiştir?',
    ['%1,3', '%10', '%0,1', '%5'],
    'Her **%1** ozon azalmasına karşılık **%1,3** artış.');
  q('fiziksel', 'Kronik olarak UV’ye maruz kalmanın sonucu nedir?',
    ['Cilt esnekliğinin kaybı ve hızlı deri yaşlanması', 'Güneş yanığı ve deride kısa süreli kızarıklık', 'Akustik travma ve iç kulak yapısının bozulması', 'Geçici işitme kaybı ve kulak çınlaması'],
    '**Akut** maruziyet → güneş yanığı; **kronik** → esneklik kaybı ve deri yaşlanması.');
  q('fiziksel', 'UV ışınlarına maruziyetin sonuçları arasında hangisi sayılmamıştır?',
    ['Akciğer fibrozu', 'Cilt kanseri', 'Katarakt', 'Bağışıklık sisteminin baskı altına alınması'],
    'UV sonuçları: **cilt kanseri, katarakt, bağışıklık sisteminin baskılanması**.');

  /* ---------- 13. Kimyasal risk faktörleri ve MSDS ---------- */
  q('kimyasal', 'Çevrenin normal yaşama uygun kimyasal bileşimini az veya çok değiştiren etkenlere ne denir?',
    ['Kimyasal etken', 'Fiziksel etken', 'Biyolojik etken', 'Psikososyal etken'],
    'Bu **kimyasal etken** tanımıdır.');
  q('kimyasal', 'Kimyasal maddelerin insan vücuduna giriş yolları arasında hangisi yoktur?',
    ['İşitme yolu', 'Solunum yolu', 'Deri absorpsiyonu', 'Sindirim yolu'],
    'Üç yol: **solunum, deri absorpsiyonu, sindirim**.');
  q('kimyasal', 'Kimyasalların vücuda en tehlikeli giriş yolu hangisidir?',
    ['Solunum yolu', 'Sindirim yolu', 'Deri yolu', 'Göz yolu'],
    'En tehlikelisi **solunum**: akciğerin 55-75 m² hava temas yüzeyi var.');
  q('kimyasal', 'Yetişkin bir insanın akciğerinin hava ile temas yüzeyi ne kadardır?',
    ['55-75 m²', '5-10 m²', '150-200 m²', '1-2 m²'],
    'Akciğer temas yüzeyi **55-75 m²**; bu yüzden solunum en hızlı etki eden yoldur.');
  q('kimyasal', 'Sindirim yolu ile özellikle hangi zehirlenmeler ortaya çıkmaktadır?',
    ['Kurşun zehirlenmeleri', 'Karbonmonoksit zehirlenmeleri', 'Metan zehirlenmeleri', 'Ozon zehirlenmeleri'],
    'Sindirim yolu → özellikle **kurşun** zehirlenmeleri.');
  q('kimyasal', 'Deride tahrişe neden olan aşındırıcı maddelere örnek hangisidir?',
    ['NaOH, HCl, H₂SO₄', 'CO, CO₂, H₂O', 'CH₄, C₂H₂, H₂', 'O₂, N₂, Ar'],
    'Aşındırıcılar: **NaOH, HCl, H₂SO₄**. Bazı kimyasallar ise hiç etki uyandırmadan deriden geçer.');
  q('kimyasal', 'Gözler hangi şekildeki maddeleri absorbe eder?',
    ['Sıçrama veya buhar şeklindeki', 'Sadece katı parça şeklindeki', 'Sadece kuru toz şeklindeki', 'Sadece kokusuz gaz şeklindeki'],
    'Gözler **sıçrama veya buhar** şeklindeki maddeleri absorbe eder.');
  q('kimyasal', 'Kimyasal maddelerin etkisi genellikle nasıldır ve bunun sonucu nedir?',
    ['Kroniktir; başlangıçta fark edilmediği için tedbir alınamaz', 'Akuttur; hemen fark edildiği için önlem kolayca alınır', 'Etkisizdir; vücut bütün kimyasalları kendisi atar', 'Sadece akuttur ve birkaç saat içinde tamamen geçer'],
    'Etki genellikle **kronik**, seyrek akut; başlangıçta fark edilmediği için **tedbir alınamaz**.');
  q('kimyasal', 'Karbondioksit, metan, propan-bütan, asetilen ve hidrojen hangi gaz grubundadır?',
    ['Basit boğucu gazlar', 'Kimyasal boğucu gazlar', 'Tahriş edici gazlar', 'Sistematik zehir etkili gazlar'],
    'Bunlar **basit boğucu gazlar**dır.');
  q('kimyasal', 'Karbonmonoksit, hidrojen siyanür ve hidrojen sülfür hangi gaz grubundadır?',
    ['Kimyasal boğucu gazlar', 'Basit boğucu gazlar', 'Tahriş edici gazlar', 'Sistematik zehir etkili gazlar'],
    'CO, HCN, H₂S = **kimyasal boğucu gazlar**.');
  q('kimyasal', 'Amonyak, klor, kükürtdioksit, fosgen, azotoksitler, ozon ve formaldehit hangi gaz grubundadır?',
    ['Tahriş edici gazlar', 'Basit boğucu gazlar', 'Kimyasal boğucu gazlar', 'Sistematik zehir etkili gazlar'],
    'Bunlar **tahriş edici gazlar**dır.');
  q('kimyasal', 'Arsin, stibin, fosfin, nikel karbonil ve karbon sülfür hangi gaz grubundadır?',
    ['Sistematik zehir etkili gazlar', 'Tahriş edici gazlar', 'Basit boğucu gazlar', 'Kimyasal boğucu gazlar'],
    'Bunlar **sistematik zehir etkisi gösteren** gazlardır.');
  q('kimyasal', 'Bataklık gazı olarak bilinen, kömür ocaklarında ortaya çıkan ve doğal gazın ana bileşenini oluşturan gaz hangisidir?',
    ['Metan (CH₄)', 'Propan (C₃H₈)', 'Asetilen (C₂H₂)', 'Hidrojen sülfür (H₂S)'],
    '**Metan**: bataklık gazı, doğal gazın ana bileşeni, havadan **hafif**.');
  q('kimyasal', 'Metan ve LPG’nin havaya göre ağırlıkları için hangisi doğrudur?',
    ['Metan havadan hafif, LPG havadan ağırdır', 'İkisi de havadan hafiftir, yukarıda birikir', 'İkisi de havadan ağırdır, yerde birikir', 'Metan havadan ağır, LPG havadan hafiftir'],
    'Metan **havadan hafif**; propan-bütan (LPG) **havadan ağır**.');
  q('kimyasal', 'LPG (sıvılaştırılmış petrol gazı) hangi gazların karışımıdır?',
    ['Propan ve bütan', 'Metan ve etan', 'Hidrojen ve oksijen', 'Karbondioksit ve azot'],
    'LPG = **propan ve bütan** karışımı.');
  q('kimyasal', 'Kaynak işlerinde ve bazı proseslerde kullanılan basit boğucu gaz hangisidir?',
    ['Asetilen (C₂H₂)', 'Metan (CH₄)', 'Hidrojen (H₂)', 'Amonyak (NH₃)'],
    '**Asetilen**: kaynak işleri.');
  q('kimyasal', 'Akü şarz odalarında açığa çıkabilen gaz hangisidir?',
    ['Hidrojen (H₂)', 'Metan (CH₄)', 'Karbonmonoksit (CO)', 'Klor (Cl₂)'],
    'Akü şarz odalarında **hidrojen**.');
  q('kimyasal', 'Şarap mahzenlerinde fermantasyon sonucu ve kuru buz üretiminde ortaya çıkan gaz hangisidir?',
    ['Karbondioksit (CO₂)', 'Karbonmonoksit (CO)', 'Metan (CH₄)', 'Ozon (O₃)'],
    '**CO₂**: yanma, şarap mahzeni fermantasyonu, kuru buz üretimi.');
  q('kimyasal', 'Eksik yanma sonucu oluşan, soba, kazan ve egzoz dumanında bulunan ve soba zehirlenmelerine neden olan gaz hangisidir?',
    ['Karbonmonoksit (CO)', 'Karbondioksit (CO₂)', 'Metan (CH₄)', 'Hidrojen (H₂)'],
    '**Karbonmonoksit (CO)**: kimyasal boğucu; soba zehirlenmesi.');
  q('kimyasal', 'Böcek ilacı, sentetik lif üretimi ve metal kaplama işlemlerinde ortaya çıkan gaz hangisidir?',
    ['Hidrojen siyanür (HCN)', 'Hidrojen sülfür (H₂S)', 'Asetilen', 'Amonyak'],
    '**HCN**: böcek ilacı, sentetik lif, metal kaplama.');
  q('kimyasal', 'Hayvansal ve bitkisel atıkların kokuşması sonucu oluşan ve özellikle atık su arıtma tesislerinde ortaya çıkan gaz hangisidir?',
    ['Hidrojen sülfür (H₂S)', 'Hidrojen siyanür (HCN)', 'Metan (CH₄)', 'Ozon'],
    '**H₂S**: kokuşma; kimya ve boya endüstrisi; özellikle atık su arıtma tesisleri.');
  q('kimyasal', 'MSDS kısaltmasının açılımı nedir?',
    ['Material Safety Data Sheets', 'Medical Safety Data System', 'Material Security Document Standard', 'Machine Safety Data Sheets'],
    'MSDS = **Material Safety Data Sheets** = Malzeme Güvenlik Bilgi Formu.');
  q('kimyasal', 'Kimyasal bir malzemenin potansiyel tehlikelerini belirten ve ürünle güvenli çalışmayı gösteren belge hangisidir?',
    ['Malzeme Güvenlik Bilgi Formu (MSDS)', 'Risk Değerlendirme Formu', 'Onaylı defter', 'İş güvenliği uzmanlığı belgesi'],
    '**MSDS**: sağlık, yangın, reaktivite ve çevresel tehlikeleri belirtir.');
  q('kimyasal', 'MSDS’de belirtilen potansiyel tehlike türleri arasında hangisi yoktur?',
    ['Ekonomik', 'Sağlık', 'Yangın', 'Reaktivite'],
    'Tehlikeler: **sağlık, yangın, reaktivite, çevresel**.');
  q('kimyasal', 'MSDS’ler kim tarafından hazırlanır?',
    ['Tedarikçi veya üretici firma', 'İşyerindeki iş güvenliği uzmanı', 'Çalışma ve Sosyal Güvenlik Bakanlığı', 'İşyeri hekimi ve hemşiresi'],
    'MSDS’leri **tedarikçi veya üretici** firma hazırlar.');
  q('kimyasal', 'MSDS ile ürün etiketi karşılaştırıldığında hangisi doğrudur?',
    ['MSDS etiketten daha çok bilgi verir', 'Etiket MSDS’den daha çok bilgi verir', 'İkisi aynı bilgiyi verir', 'MSDS sadece fiyat bilgisi içerir'],
    'MSDS malzeme hakkında **etiketten daha çok** bilgi verir.');
  q('kimyasal', 'Malzeme Güvenlik Bilgi Formlarının amacı nedir?',
    ['İşletmede kullanılan kimyasallarla ilgili bilgiye çabuk erişim sağlamak', 'Kimyasalların piyasadaki satış fiyatını belirlemek ve duyurmak', 'İşçilerin kimyasal tehlike primlerini ve ücretlerini hesaplamak', 'Kimyasal ürünlerin reklamını ve satış tanıtımını yapmak'],
    'Amaç: kimyasallarla ilgili bilgiye **çabuk erişim**.');
  q('kimyasal', 'MSDS’de yer alan bilgiler arasında hangisi yoktur?',
    ['Satış fiyatı ve kâr marjı', 'İlkyardım bilgileri', 'Yangınla mücadele bilgileri', 'Bertaraf bilgileri'],
    'MSDS: tanıtım, bileşim, tehlikeler, ilkyardım, yangınla mücadele, yayılmaya karşı önlemler, kullanım-depolama, maruziyet-kişisel korunma, fiziksel-kimyasal özellikler, kararlılık-reaktivite, toksikolojik, ekolojik, bertaraf, taşımacılık, mevzuat, diğer.');
  q('kimyasal', 'MSDS’de yer alan “Toksikolojik Bilgi” ne ile ilgilidir?',
    ['Maddenin zehirlilik etkileri', 'Maddenin taşınma şekli', 'Maddenin fiyatı', 'Maddenin üretim yeri'],
    'Toksikolojik bilgi maddenin **zehirlilik (sağlık) etkileriyle** ilgilidir; ekolojik bilgi çevreyle ilgilidir.');

  /* ---------- Testler ---------- */
  var TQ = {};
  window.TOPICS.forEach(function (t) { TQ[t.id] = []; });
  ALL.forEach(function (x) { TQ[x.topic].push(x); });

  // Deneme sınavları: konulara dağıtılmış, birbiriyle çakışmayan 4 × 25 soru
  var rand = rng(4040);
  var byTopic = window.TOPICS.map(function (t) {
    var list = TQ[t.id].slice();
    for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var x = list[i]; list[i] = list[j]; list[j] = x; }
    return list;
  });
  var order = window.TOPICS.map(function (t) { return t.id; });
  function demo(k) {
    var picked = [], start = k * 3, guard = 0;
    while (picked.length < 25 && guard++ < 200) {
      for (var i = 0; i < byTopic.length && picked.length < 25; i++) {
        var list = byTopic[(start + i) % byTopic.length];
        if (list.length) picked.push(list.shift());
      }
      start += 1;
    }
    return picked.sort(function (a, b) { return order.indexOf(a.topic) - order.indexOf(b.topic) || a.no - b.no; });
  }

  window.TOPIC_QUESTIONS = TQ;
  window.EXAMS = [
    { id: 'hoca', group: 'hoca', mode: 'practice', featured: true, title: 'Tüm sorular (' + ALL.length + ')', desc: 'Slaytlardaki her konudan, ders sırasıyla, anında kontrol.', questions: ALL },
    { id: 'demo1', title: 'Deneme sınavı 1', desc: '25 soru, tüm konulardan.', questions: demo(0) },
    { id: 'demo2', title: 'Deneme sınavı 2', desc: '25 soru, deneme 1 ile çakışmaz.', questions: demo(1) },
    { id: 'demo3', title: 'Deneme sınavı 3', desc: '25 soru, önceki denemelerle çakışmaz.', questions: demo(2) },
    { id: 'demo4', title: 'Deneme sınavı 4', desc: '25 soru, önceki denemelerle çakışmaz.', questions: demo(3) }
  ];
  window.ISG_RAW = ALL;
})();
