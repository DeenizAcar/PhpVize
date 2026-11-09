/* MBIL 107 / MBP 251 ara sınav. Kaynak: "Ara Sınav için örnek sorular" PDF'i (105 test + 6 yazma).
   Sınavda bu sorulardan 25'i birebir çıkacak. Genel tekrar yok, sadece testler. */

window.COURSE = {
  id: 'yz',
  lang: 'none',
  storeKey: 'yzvize-best',
  noReview: true,
  testLead: 'Sınavda bu 111 sorudan 25’i birebir çıkacak. Hoca cevap vermedi; cevaplar bizim, emin olmadıklarımız ⚠ ile işaretli.',
  points: { mc: 4, open: 4 },
  randomExam: { mc: 23, open: 2, openMax: 3 },
  hocaNote: 'PDF’teki sorular birebir, her soru anında kontrol edilir. Yazma sorularında cevaba bakıp kendini puanla.',
  randomTitle: 'Rastgele 25 soru',
  randomDesc: 'Her açılışta farklı 25 soru: en az 2 yazma sorusu, az gördüğün sorular önce.'
};

window.EXAM_FORMAT = [];
window.TRAPS = [];

window.TOPICS = [
  { id: 'temel', title: 'Temel kavramlar', blocks: [] },
  { id: 'yapi', title: 'Blok yapısı, karma, Merkle', blocks: [] },
  { id: 'ag', title: 'Ağ, düğüm, madencilik, mutabakat', blocks: [] },
  { id: 'kripto', title: 'Kripto para, anahtar, cüzdan', blocks: [] },
  { id: 'sozlesme', title: 'Akıllı sözleşme ve Ethereum', blocks: [] },
  { id: 'gelistirme', title: 'Geliştirme araçları ve dApp', blocks: [] },
  { id: 'guvenlik', title: 'Güvenlik', blocks: [] },
  { id: 'uygulama', title: 'Uygulamalar: DeFi, NFT, sektörler', blocks: [] },
  { id: 'yazma', title: 'Yazma soruları', blocks: [] }
];

window.TOPIC_RULES = {
  temel: 'Blockchain = eşler arası, **merkezi olmayan, dağıtılmış defter**. İlk blok **Genesis** (İncil’de Yaratılış). Bitcoin’i **Satoshi Nakamoto** yarattı; Ethereum = Vitalik Buterin. Temel özellik **değişmezlik**; hızlı değildir.',
  yapi: 'Blok = **başlık + işlemler**. Değişmezliği **karma (hash)** sağlar. Merkle kökü = **işlemlerin karması**. Sabit sayıda öğe → **basit karma**, değişken sayıda → **ağaç yapılı karma**. Blok yüksekliği = genesis’e kadarki **blok sayısı**.',
  ag: 'Ağ **P2P**. Mutabakat = fikir birliği. **PoW** = madencilik (hesaplama gücü), **PoS** = coin miktarına göre doğrulayıcı. Madenci = işlemleri doğrulayan **bilgisayarlar**. Bitcoin ~**10 dakikada** bir blok, PoW **7–15 TPS**.',
  kripto: 'Kripto para = kriptografiyle korunan **dijital** para. **Özel anahtar** = fonlara erişen gizli kod; cüzdan **anahtarları** saklar. **Altcoin** = Bitcoin dışındaki hepsi. **Stabilcoin** = dolara sabit. **Soğuk depolama** = internete bağlı olmayan anahtar. Çözülen sorun: **çift harcama**.',
  sozlesme: 'Akıllı sözleşme = koşul sağlanınca **kendi kendine çalışan program**. Dil **Solidity**. Ücret **gaz**. Dış veri **oracle** ile gelir. **Değiştirilemez**, manuel müdahale yok. Boyut sınırı **24576 bayt**.',
  gelistirme: 'dApp = **merkezi olmayan uygulama**. **Truffle/Hardhat** = geliştir, test et, dağıt. **Web3.js** = JavaScript ile Ethereum’a bağlan. **Testnet** = gerçek para olmadan test.',
  guvenlik: 'Güvenlik = **kriptografi + mutabakat**. Değişmezlik = **karma**. **Sybil** = sahte düğümler. Zinciri değiştirmek için **%51**. Bitcoin/Ethereum **RSA değil ECC** kullanır.',
  uygulama: 'Sağlık → kayıtları güvenli yönetmek · tedarik → **izlenebilirlik** · DeFi → **aracıları kaldırmak**, çoğu **Ethereum**’da · NFT → **benzersiz dijital varlık** · **yan zincirler** varlığı başka zincire taşır · BaaS → altyapı kurmadan kullanmak.',
  yazma: 'Yazma sorularında anahtar kelimeleri yaz: tanım + 2–3 örnek/özellik yeterli.'
};
