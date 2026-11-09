/* İş Sağlığı ve Güvenliği. Hoca slayt ve çalışma sorusu vermedi; sorular derste işlenen
   slaytların fotoğraflarından (ISGSunumlar) üretildi. Genel tekrar yok, sadece testler. */

window.COURSE = {
  id: 'isg',
  lang: 'none',
  storeKey: 'isgvize-best',
  noReview: true,
  testLead: 'Hoca soru vermedi; sorular derste işlenen slaytlardan üretildi. Sınav formatı bilinmediği için denemeler 25 soru × 4 puan.',
  hocaNote: 'Slaytlardaki tüm konular, ders sırasıyla. Her soru anında kontrol edilir.',
  points: { mc: 4 },
  randomExam: { mc: 25 },
  randomTitle: 'Rastgele 25 soru',
  randomDesc: 'Her açılışta farklı 25 soru, tüm konulardan; az gördüğün sorular önce.'
};

window.EXAM_FORMAT = [];
window.TRAPS = [];

window.TOPICS = [
  { id: 'kavram', title: 'Temel kavramlar, amaçlar, önemi', blocks: [] },
  { id: 'tarih', title: 'Tarihsel gelişim ve kurumlar', blocks: [] },
  { id: 'kaza', title: 'İş kazası ve kaza çeşitleri', blocks: [] },
  { id: 'meslek', title: 'Meslek hastalıkları', blocks: [] },
  { id: 'onlem', title: 'Önleme: taraflar ve risk değerlendirmesi', blocks: [] },
  { id: 'saglik', title: 'Koruyucu sağlık ve rehabilitasyon', blocks: [] },
  { id: 'maliyet', title: 'Kaza ve hastalık maliyetleri', blocks: [] },
  { id: 'organizasyon', title: 'İSG organizasyonu: İGU, hekim, OSGB', blocks: [] },
  { id: 'korunma', title: 'Korunma politikaları, koruma düzeyleri', blocks: [] },
  { id: 'yangin', title: 'Yangın ve söndürme', blocks: [] },
  { id: 'elektrik', title: 'Elektrik güvenliği', blocks: [] },
  { id: 'fiziksel', title: 'Fiziksel riskler: gürültü, titreşim, ısı, ışık, radyasyon', blocks: [] },
  { id: 'kimyasal', title: 'Kimyasal riskler, gazlar, MSDS', blocks: [] }
];

window.TOPIC_RULES = {
  kavram: 'İş güvenliği = tehlikelerden korunmak için **sistemli çalışmalar**. İşçi sağlığı (ILO+WHO) = **tıp bilimi**. İş kazası: WHO → üretim durması/makine zararı · ILO → zarar/yaralanma · 6331 → ölüm veya ruhen/bedenen özre uğratma. Amaçlar: **çalışanları korumak, üretim güvenliği, işletme güvenliği**. 15 sn’de **1 ölüm / 160 kaza**; yılda **2,3 milyon ölüm / 317 milyon kaza**.',
  tarih: '**Heredot** (besin) → **Hipokrat** (işten zarar) → **Ramazzini** 17. yy, “De Morbis Artificum Diatriba”, kurucu. İngiltere: **1842** maden yasağı, **1844** işyeri hekimi, **1895** bildirim, **1900** muayeneler. Türkiye: esnaf zaviyeleri → loncalar (orta/teavün sandığı). **1923** İzmir İktisat · **1926** Borçlar · **1930** Umumi Hıfzıssıhha (50+ işçi hekim) · **1936** ilk İş Kanunu · **1945** Çalışma Bakanlığı · **1964** SSK · **2003** 4857 · **2006** SS ve GSS · **2012** 6331.',
  kaza: 'Yasal tanım **5510 sayılı Kanun 13. madde**: işyerinde, iş nedeniyle dışarıda, görevli gönderilmede, **emzirme** süresinde, **işverenin taşıtıyla** gidiş-geliş. Sınıflar: ağırlığa göre **5** (20 gün sınırı), yaralanmanın cinsine göre **6**, kaza cinsine göre **9**. **Ani** hastalanma = iş kazası; **uzun süre sonra** = meslek hastalığı.',
  meslek: 'Meslek hastalıkları kazalardan **daha fazla** tehdit (teknoloji + kimyasallar). İş ile **sebep-sonuç** ilişkisi şart. 4 neden: **kimyasallar** (başta gelir), **tozlar** (solunum, bronşit→kanser), **mikroorganizmalar** (virüs, bakteri, parazit, mantar), **fiziksel** (radyasyon, gürültü, titreşim).',
  onlem: 'Sorumlular: başta **işveren**, işçi, sendika, devlet. 4 yöntem: **risk değerlendirme, inandırma-özendirme (tamamlayıcı), işe uygun işçi seçme (ergonomi), disiplin (son çare: ihtar, ücret kesintisi, işten çıkarma)**. Tehlike = **potansiyel**, risk = **şiddet**. Risk değ. 5 aşama: bilgi → tehlike (evet/hayır) → risk (olasılık × şiddet; büyük kabul edilemez) → planlama → **form**. İşçi: **önlemlere uymak**. Sendika: **hak koruma + eğitim**. Devlet: **politika + bilinç**.',
  saglik: 'Üç yol: **koruyucu, tedavi edici, rehabilitasyon**. Aşı = **aktif**, hasta olmayana · serum (seroprofilaksi) = **pasif**, hastaya · kemoprofilaksi = sağlıklıya ilaç (**sıtma**). Rehabilitasyon: **tıbbi** (bedensel), **mesleki** (yeni iş), **sosyal** (eski hükümlüler). Meslek hastalığı önlemleri: eğitim, **özel afiş**, daha az zehirliyle değiştirme, kapalı sistem + havalandırma, **tecrit**, KKD, işe giriş muayenesi.',
  maliyet: 'Üç başlık: **işçi, işveren, ülke**. İşçi: kazanma gücü, gelir, psikolojik. İşveren: **doğrudan** (SGK primiyle karşılanan, mahkeme, tazminat) ve **dolaylı** (tespit edilemeyen ve **çok daha fazla**: onarım, kayıp işgünü, fazla mesai, sigortasız tedavi, yeni işçinin öğrenmesi, sipariş ve üretim kaybı). Ülke: vasıflı insan gücü + eğitim harcamaları.',
  organizasyon: 'İşveren = **bütçe** + politika · fabrika müdürü = **bölüm amirlerini atar** · bölüm amiri = **işçi seçer**, ani tehlikeyi önler. İGU belgesi: **C** az tehlikeli, **B** + tehlikeli, **A** hepsi. İGU: tehlikede işverene bildir → Bakanlığa rapor; **onayla geçici** iş durdurma; yılda **5 iş günü** eğitim; **onaylı defter** (yazmazsa uyarı → 1 yıl askı; imzadan işveren sorumlu). Hekim eğitimi **180 + 40 = 220 saat**. OSGB: en az 1 hekim + 1 İGU + 1 sağlık personeli; **il + sınır komşusu iller**.',
  korunma: '**Birincil**: oluşmadan önce (beslenme, egzersiz, aşı, kemoprofilaksi, atık kontrolü). **İkincil**: belirti çıkınca **erken tanı ve sevk**, tedavi. **Üçüncül**: oluştuktan sonra kötüleşmeyi engelleme (rehabilitasyon, protez, iş değişikliği, emeklilik). Tehdit eden 4 faktör: fiziksel, kimyasal, biyolojik, psikososyal.',
  yangin: 'Yanma = yanıcı + **oksijen (%21)** + **tutuşma sıcaklığı**; yangın = **kontrolden çıkmış** yanma. Sınıflar: **A katı** (soğutma), **B sıvı** (sis su + CO₂/köpük/toz), **C gaz** (kuru toz), **D metal** (kuru toz). Yöntemler: **soğutma, boğma, dağıtma**. Su akaryakıtta kullanılmaz · CO₂ açık alanda zor · köpük akaryakıt + soğutur · kuru toz elektrik · kum orman.',
  elektrik: 'Çarpılma = **devreyi tamamlamak** (AC’de ayaklar). Pil/akü **DC**; **30 V üstü DC** tehlikeli. AC kalpten geçerse kalp durur. Islanan tahta/plastik iletken. Yanık **derindir**. Kopmuş hatta **elektrik var say** (115–50 000 V). Arabadakiler **güvende**. Kurallar: koruyucu yalıtma · **küçük gerilim 42 V** (topraklama gerekmez) · **sıfırlama** = nötre, **10 mm²**, ters fiş → gövdeye faz · **topraklama** = en etkili, çatılar yıldırıma · **kaçak akım rölesi** = giren = çıkan · statik: nemlendirme, bağlama-topraklama, iyonizasyon.',
  fiziksel: 'Gürültü: fizyolojik (işitme, hormon) / psikolojik (yorgunluk, uykusuzluk); **akustik travma, geçici, kalıcı**; korunma: kaynak, izolasyon, KKD. Titreşim: katı ortam, **Hertz**; düşük **2-20** taşıt, orta **8-1000** hava basınçlı (en sık **dirsek**), çok yüksek **1000-30000** sabit makine; tipik örnek **soğukta motorlu testere**. Sıcaklık: hafif iş **15-20 °C**, ağır **12-16 °C**. Aydınlatma: **lüks**; göz %80-90; yaz 100 000, kış 3000 lx; beyaz, tekdüze, durağan, kamaştırmayan, gölgesiz; 60 yaş **2-5 kat**. UV **10-400 nm**; ozon %1 → %1,3.',
  kimyasal: 'Giriş: **solunum** (en tehlikeli, 55-75 m²), deri, sindirim (**kurşun**). Etki genellikle **kronik**. Basit boğucu: CO₂, **metan** (bataklık, hafif), **LPG** (ağır), **asetilen** (kaynak), **H₂** (akü). Kimyasal boğucu: **CO** (soba), **HCN** (böcek ilacı), **H₂S** (atık su). Tahriş edici: NH₃, Cl₂, SO₂, fosgen, ozon. Sistematik: arsin, fosfin. **MSDS** = Material Safety Data Sheets; **üretici/tedarikçi** hazırlar, **etiketten fazla** bilgi, amaç **çabuk erişim**.'
};
