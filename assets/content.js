/* Genel tekrar içeriği.
   Ana kaynak: "PHP Çalışma Soruları.pdf" ve "PHP Çalışma Kitapçığı.pdf".
   Slaytlar yalnızca bu konuları açıklamak için kullanıldı.
   Satır içi biçim: `kod`, **kalın**. */

window.EXAM_FORMAT = [
  { range: 'Soru 1–10', what: 'Çoktan seçmeli test', pts: 50, per: '5 puan / soru' },
  { range: 'Soru 11–16', what: 'Boşluk doldurma', pts: 30, per: '5 puan / soru' },
  { range: 'Soru 17', what: 'Kod tamamlama', pts: 20, per: '4 boşluk × 5 puan' }
];

window.TRAPS = [
  { t: '`$x - 3;` hesaplar ama **saklamaz**, değer değişmez. Saklamak için `$x -= 3;`', topic: 'atama' },
  { t: 'Metin birleştirme **nokta** ile yapılır: `"Kalan: " . $stock`. `+` değil.', topic: 'yazdirma' },
  { t: '`"8" == 8` → true (değer), `"8" === 8` → false (tür farklı).', topic: 'karsilastirma' },
  { t: '`<` sınırı dahil etmez, `<=` dahil eder. "Tam 8 dahil değil" → `<`', topic: 'karsilastirma' },
  { t: 'Aralık İÇİ → `&&`, aralık DIŞI → `||`. "Sembolik operatör" → `&&` / `||`', topic: 'mantiksal' },
  { t: 'if–elseif zincirinde yalnızca **ilk doğru dal** çalışır; gerisi denenmez.', topic: 'kosullar' },
  { t: 'Döngü turlarını tek tek yaz: `for ($i = 2; $i < 7; $i += 2)` → 2, 4, 6', topic: 'donguler' },
  { t: '`$total = 0;` döngüden **önce**; döngüde `+=` (yalnız `=` son değeri bırakır).', topic: 'sayac' },
  { t: 'İndeks **0**’dan başlar. Kayıt listesinde önce kayıt sonra alan: `$rooms[0]["name"]`', topic: 'diziler' },
  { t: 'foreach kalıbı: `foreach ($orders as $order)` → alan: `$order["minutes"]`', topic: 'foreach' },
  { t: '`rota.php?zone=kuzey` → `$_GET["zone"]`. Anahtar input’un **name** değeridir, id değil.', topic: 'get' },
  { t: '`?? ""` alan gelmezse boş metin verir. htmlspecialchars **doğrulama yapmaz**.', topic: 'girdi' },
  { t: '`return` değeri çağıran koda verir; `echo` sadece yazdırır.', topic: 'fonksiyonlar' },
  { t: 'htmlspecialchars("R&D"): kullanıcı **R&D** görür, kaynakta `R&amp;D` olur. `ENT_QUOTES` = tek + çift tırnak.', topic: 'html' }
];

window.TOPICS = [
  {
    id: 'degiskenler',
    title: 'Değişkenler ve veri tipleri',
    src: 'Kitapçık s.1 (değer ve tür)',
    blocks: [
      { t: 'ul', items: [
        'Değişken `$` ile başlar: `$stock`, `$maxBudget`.',
        '`$`’dan sonra harf veya `_` gelir. Rakamla başlayamaz (`$2adet` ✗), boşluk ve `-` içeremez.',
        'Büyük/küçük harf duyarlıdır: `$toplam` ile `$Toplam` **farklı** değişkenlerdir.',
        'Tür yazılmaz; atanan değere göre PHP belirler.'
      ] },
      { t: 'table', head: ['Tür', 'Örnek', 'Açıklama'], rows: [
        ['string', '`"Gece"`, `"14"`', 'Metin. Tırnak içindeki her şey metindir.'],
        ['int', '`4`, `-12`', 'Tam sayı'],
        ['float', '`3.5`', 'Ondalıklı sayı (nokta ile yazılır)'],
        ['bool', '`true`, `false`', 'Doğru / yanlış'],
        ['array', '`[450, 1200]`', 'Dizi (Diziler konusunda)']
      ] },
      { t: 'code', code:
`$parca = "Gece";    // string
$adet = 4;          // int
$sure = 3.5;        // float
$premium = true;    // bool
var_dump($parca, $adet, $sure, $premium);`,
        out:
`string(4) "Gece"
int(4)
float(3.5)
bool(true)` },
      { t: 'p', text: '`var_dump()` türü ve değeri birlikte gösterir.' },
      { t: 'trap', text: '`14` tam sayı, `"14"` metindir. `"14" == 14` → true, ama `"14" === 14` → **false** (tür farklı). Kitapçık: `$minutes = "16";` sonra `$minutes === 16` → yanlış.' }
    ]
  },
  {
    id: 'atama',
    title: 'Atama ve aritmetik işlemler',
    src: 'Çalışma soruları: 1, 5 · Kitapçık s.1',
    blocks: [
      { t: 'ul', items: [
        '`=` **atama** yapar: sağdaki değeri soldaki değişkene yazar. Karşılaştırma yapmaz.',
        'Aritmetik: `+` toplama, `-` çıkarma, `*` çarpma, `/` bölme, `%` bölümden kalan.',
        'Önce `*` `/`, sonra `+` `-`. Parantez önceliği değiştirir: `2 + 3 * 4` → 14, `(2 + 3) * 4` → 20.'
      ] },
      { t: 'table', head: ['Kısa yazım', 'Uzun hali', '$x = 10 iken sonuç'], rows: [
        ['`$x += 5;`', '`$x = $x + 5;`', '15'],
        ['`$x -= 3;`', '`$x = $x - 3;`', '7'],
        ['`$x++;`', '`$x = $x + 1;`', '11'],
        ['`$x--;`', '`$x = $x - 1;`', '9']
      ] },
      { t: 'code', code:
`$stock = 24;
$stock -= 5;          // 24 - 5 = 19 saklanır
echo "Kalan: " . $stock;`, out: 'Kalan: 19' },
      { t: 'trap', text: '**En sık tuzak:** `$minutes - 3;` hesap yapar ama sonucu **hiçbir yere saklamaz**, değişken aynı kalır. Saklamak için `$minutes -= 3;` ya da `$minutes = $minutes - 3;`' },
      { t: 'code', code:
`$minutes = 14;
$minutes - 3;      // 11 hesaplanır ama saklanmaz
$minutes += 2;     // 14 + 2 = 16 saklanır
echo "Süre: " . $minutes;`, out: 'Süre: 16' },
      { t: 'tip', text: 'Soru 5 tipi: "Hangi satır 7, 5, 3, 1 sırasını üretir?" → değeri **saklayan** satır: `$level -= 2;`. `$level - 2;` değeri değiştirmez, döngü sonsuz olur.' },
      { t: 'p', text: '`%` kalanı verir: `7 % 2` → 1, `8 % 2` → 0 (0 ise sayı çifttir).' }
    ]
  },
  {
    id: 'yazdirma',
    title: 'Ekrana yazdırma ve metin birleştirme',
    src: 'Çalışma soruları: 1, 11, 17 (4. boşluk)',
    blocks: [
      { t: 'ul', items: [
        '`echo` metni tarayıcıya gönderir (çıktı üretir).',
        'Metinler **nokta (`.`)** ile birleştirilir. PHP’de `+` metin birleştirmez.',
        'Metin tırnak içinde, değişken tırnak dışında yazılır; aralarına nokta konur.',
        'Boşluğu metnin içine sen koyarsın: `"Stüdyo " . $room` → `Stüdyo B`',
        'İşlemi parantezle ayır: `"Ek süre: " . (2 + 3) . " dk"` → `Ek süre: 5 dk`'
      ] },
      { t: 'code', code:
`$sure = 4;
$tekrar = 3;
$toplam = $sure * $tekrar;
echo "Toplam: " . $toplam . " dk<br>";
echo "Ek süre: " . (2 + 3) . " dk";`, out:
`Toplam: 12 dk
Ek süre: 5 dk` },
      { t: 'ul', items: [
        '`<br>` tarayıcıda alt satıra geçirir. Kodda alt alta yazılan iki echo tarayıcıda **yan yana** çıkar: `echo "A"; echo "B";` → `AB`',
        'Döngü içindeki `echo` her turda çalışır. Döngüden sonraki `echo` **bir kez** çalışır.',
        'Sayılar da noktayla birleşir: `"5" . "3"` → `53` (toplama değil).'
      ] },
      { t: 'trap', text: '`echo` sadece yazdırır; değeri saklamaz, geri vermez. Değeri başka hesapta kullanmak için `return` gerekir (Fonksiyonlar).' },
      { t: 'low', text: 'Çift tırnak içinde değişken adı yazılırsa değeri gelir: `"$fiyat TL"`. Slaytta geçti; çalışma PDF’lerinde hep nokta kullanılıyor.' }
    ]
  },
  {
    id: 'karsilastirma',
    title: 'Karşılaştırma operatörleri',
    src: 'Çalışma soruları: 2, 12 · Kitapçık s.1',
    blocks: [
      { t: 'table', head: ['Operatör', 'Anlamı', '$rack = "8"; $number = 8;'], rows: [
        ['`==`', 'Değer eşit mi? (tür dönüşümüne izin verir)', '`$rack == $number` → true'],
        ['`===`', 'Değer **ve** tür aynı mı?', '`$rack === 8` → false'],
        ['`!=`', 'Değer farklı mı?', '`$rack != 8` → false'],
        ['`!==`', 'Değer **veya** tür farklı mı?', '`$rack !== 8` → true'],
        ['`<` `>`', 'Küçük / büyük (sınır **dahil değil**)', '`$number < 8` → false'],
        ['`<=` `>=`', 'Küçük-eşit / büyük-eşit (sınır **dahil**)', '`$number <= 8` → true']
      ] },
      { t: 'ul', items: [
        'Karşılaştırmanın sonucu her zaman bool’dur: `true` ya da `false`.',
        '`=` atama · `==` değer karşılaştırma · `===` değer + tür karşılaştırma.'
      ] },
      { t: 'code', code:
`$adet = "3";              // tırnak içi: metin
var_dump($adet == 3);     // değer eşit mi?
var_dump($adet === 3);    // tür de aynı mı?
var_dump($adet !== 3);    // tam eşit değil mi?`, out:
`bool(true)
bool(false)
bool(true)` },
      { t: 'tip', text: 'Sınır ifadeleri: "8’den kısa, tam 8 dahil değil" → `<` · "8 ve altı" → `<=` · "18 ve üzeri" → `>=` · "50’den büyük" → `>`' },
      { t: 'trap', text: '`if ($x = 10)` karşılaştırma değil **atamadır**: `$x`’e 10 yazılır ve koşul doğru sayılır. Karşılaştırma için `==` veya `===`.' }
    ]
  },
  {
    id: 'mantiksal',
    title: 'Mantıksal operatörler',
    src: 'Çalışma soruları: 6, 13 · Kitapçık s.2',
    blocks: [
      { t: 'table', head: ['Operatör', 'Anlamı', 'Ne zaman true?'], rows: [
        ['`&&`', 'VE', 'İki koşul da doğruysa'],
        ['`||`', 'VEYA', 'En az biri doğruysa'],
        ['`!`', 'DEĞİL', 'Koşulu tersine çevirir: `!true` → false']
      ] },
      { t: 'table', head: ['A', 'B', 'A && B', 'A || B'], rows: [
        ['true', 'true', 'true', 'true'],
        ['true', 'false', 'false', 'true'],
        ['false', 'true', 'false', 'true'],
        ['false', 'false', 'false', 'false']
      ] },
      { t: 'tip', text: '**Aralık İÇİ → `&&`** (`$m >= 15 && $m <= 45`) · **Aralık DIŞI → `||`** (`$h < 2 || $h > 8`)' },
      { t: 'code', code:
`// 15–45 dakika kabul, iki sınır da dahil
if ($minutes >= 15 && $minutes <= 45) {
    echo "Uygun";
} else {
    echo "Süreyi değiştirin";
}` },
      { t: 'table', head: ['Süre', 'Alt sınır (>= 15)', 'Üst sınır (<= 45)', 'Sonuç'], rows: [
        ['14', 'yanlış', 'doğru', 'Ret'],
        ['15', 'doğru', 'doğru', 'Kabul'],
        ['45', 'doğru', 'doğru', 'Kabul'],
        ['46', 'doğru', 'yanlış', 'Ret']
      ] },
      { t: 'code', code:
`// Aralık dışı: 2'den küçük VEYA 8'den büyük
if ($hours < 2 || $hours > 8) { echo "Uyarı"; }`, out:
`2 → (yazmaz)   4 → (yazmaz)   8 → (yazmaz)   9 → Uyarı` },
      { t: 'trap', text: 'Kabul koşulunda `&&` yerine `||` yazılırsa **46 da kabul edilir** (alt sınır doğru, biri yeterli). Aralık dışını `&&` ile yazarsan (`$s <= 0 && $s >= 5`) hiçbir sayı iki koşulu birden sağlayamaz, filtre çalışmaz.' },
      { t: 'code', code:
`$yeniUye = true;
$denemeKullandi = false;
if ($yeniUye && !$denemeKullandi) {
    echo "Deneme açıldı.";
} else {
    echo "Deneme açılamaz.";
}`, out: 'Deneme açıldı.' },
      { t: 'tip', text: '"İki koşulun da doğru olmasını sağlayan **sembolik** operatör" → `&&`. "En az biri" → `||`.' }
    ]
  },
  {
    id: 'kosullar',
    title: 'Koşullu ifadeler',
    src: 'Çalışma soruları: 3 · Kitapçık s.2',
    blocks: [
      { t: 'ul', items: [
        '`if` koşulu doğruysa bloğu çalışır. `else`, hiçbir koşul doğru değilse çalışır.',
        '`elseif` (veya `else if`) önceki koşul yanlışsa yeni bir koşul sınar.',
        'Zincirde **yalnızca bir dal** çalışır: ilk doğru koşulun dalı. Sonrakiler denenmez.',
        'Koşul `( )` içine, çalışacak kod `{ }` içine yazılır.'
      ] },
      { t: 'code', code:
`$score = 70;
if ($score >= 85) { echo "A"; }
elseif ($score >= 70) { echo "B"; }
else { echo "C"; }`, out: 'B' },
      { t: 'p', text: '70 >= 85 yanlış → 70 >= 70 doğru (eşitlik dahil) → **B**. else çalışmaz, "AB" ya da "BC" olmaz.' },
      { t: 'trap', text: '**Sıra önemli.** İlk koşul `$minutes >= 15`, ikinci `$minutes >= 45` ise 50 dakika **ilk dala** düşer, ikinci dal hiç denenmez. Yüksek eşiği önce sına.' },
      { t: 'code', code:
`$toplam = 750;
if ($toplam === 0) {
    $kargo = 0;
} elseif ($toplam >= 1000) {
    $kargo = 0;       // 1000 dahil ücretsiz
} else {
    $kargo = 80;
}
echo "Kargo: " . $kargo . " TL";`, out: 'Kargo: 80 TL' },
      { t: 'tip', text: '"1000 TL’ye de ücretsiz" → `>=`. `>` yazarsan tam 1000 TL’de kargo eklenir.' }
    ]
  },
  {
    id: 'donguler',
    title: 'For-while döngüleri',
    src: 'Çalışma soruları: 4, 5 · Kitapçık s.3',
    blocks: [
      { t: 'p', text: '**for**: başlangıç; devam koşulu; güncelleme tek satırda.' },
      { t: 'code', code:
`for ($i = 1; $i <= 3; $i++) {
    echo "Parça " . $i . "<br>";
}`, out:
`Parça 1
Parça 2
Parça 3` },
      { t: 'table', head: ['$i', 'Koşul $i <= 3', 'Ekrana', 'Tur sonu'], rows: [
        ['1', 'doğru', 'Parça 1', '$i = 2'],
        ['2', 'doğru', 'Parça 2', '$i = 3'],
        ['3', 'doğru', 'Parça 3', '$i = 4'],
        ['4', 'yanlış', '—', 'döngü biter']
      ] },
      { t: 'p', text: 'Gövde 3 kez çalışır, koşul **4 kez** kontrol edilir.' },
      { t: 'p', text: '**while**: her turdan önce sadece koşulu kontrol eder. İlerlemeyi sağlayan satır gövdede olmalı.' },
      { t: 'code', code:
`$position = 1;
while ($position < 8) {
    echo $position . " ";
    $position += 3;
}`, out: '1 4 7' },
      { t: 'p', text: 'Çıkışta `$position` = **10** (10 < 8 yanlış, 10 yazdırılmaz).' },
      { t: 'ul', items: [
        'Adım farklı olabilir: `$i += 2`, `$i -= 2`, `$i--`',
        'Turları tek tek yaz: `for ($i = 2; $i < 7; $i += 2)` → 2, 4, 6 (8 < 7 yanlış).',
        'while koşulu baştan yanlışsa gövde **hiç** çalışmaz (0 tur).'
      ] },
      { t: 'trap', text: '**Sonsuz döngü:** Koşuldaki değişken gövdede güncellenmezse döngü bitmez. `$level - 2;` saklamadığı için değer hiç değişmez → sonsuz. Doğrusu `$level -= 2;`' },
      { t: 'table', head: ['İhtiyaç', 'Uygun yapı'], rows: [
        ['1–10 arası numara üretmek', 'for (başlangıç, sınır, adım bir arada)'],
        ['Hedefe ulaşana kadar tekrar', 'while (koşul hedefi anlatır)'],
        ['Dizideki her eleman', 'foreach']
      ] }
    ]
  },
  {
    id: 'sayac',
    title: 'Sayaç ve toplam',
    src: 'Çalışma soruları: 4, 17 · Kitapçık s.6',
    blocks: [
      { t: 'table', head: ['', 'Sayaç', 'Toplam'], rows: [
        ['Görevi', 'Kaç kayıt/tur eşleşti?', 'Eşleşen kayıtlardaki miktar ne kadar?'],
        ['Başlangıç (döngüden önce)', '`$count = 0;`', '`$total = 0;`'],
        ['Döngü içinde', '`$count++;`', '`$total += $deger;`']
      ] },
      { t: 'ul', items: [
        'Başlangıç değeri (`= 0`) **döngüden önce** yazılır.',
        'Sonucu bir kez yazmak için `echo` **döngüden sonra** gelir.',
        'Koşullu toplamada `+=` satırı `if` bloğunun **içinde** olmalı.'
      ] },
      { t: 'code', code:
`$sum = 1;
for ($i = 2; $i < 7; $i += 2) {
    $sum += $i;       // 1+2=3, 3+4=7, 7+6=13
}
echo $sum;`, out: '13' },
      { t: 'code', code:
`$bins = [
    ["open" => true,  "units" => 4],
    ["open" => false, "units" => 9],
    ["open" => true,  "units" => 6]
];
$sum = 0;
$count = 0;
foreach ($bins as $bin) {
    if ($bin["open"]) {
        $sum += $bin["units"];
        $count++;
    }
}
echo "Raf: " . $count . ", Adet: " . $sum;`, out: 'Raf: 2, Adet: 10' },
      { t: 'trap', text: '`$total = 0;` döngünün **içine** yazılırsa her turda sıfırlanır, sadece son değer kalır. `+=` yerine `=` yazılırsa her değer öncekini siler, yine son değer kalır (Soru 17’de 17 yerine **10**).' },
      { t: 'trap', text: 'Toplama satırı `if` dışına (döngü içinde) taşınırsa koşul fark etmeksizin hepsi toplanır: kitapçık örneğinde 10 yerine **19**.' },
      { t: 'tip', text: 'Hiç eşleşme yoksa mesajı döngüden **sonra** kontrol et: `if ($matchCount === 0) { echo "Sonuç yok"; }`' }
    ]
  },
  {
    id: 'diziler',
    title: 'Diziler',
    src: 'Çalışma soruları: 8, 14 · Kitapçık s.5',
    blocks: [
      { t: 'p', text: '**İndisli dizi**: elemanlar 0, 1, 2… indeksleriyle tutulur.' },
      { t: 'code', code:
`$fiyatlar = [450, 1200, 300];
echo $fiyatlar[0] . "<br>";   // ilk eleman
echo $fiyatlar[2] . "<br>";   // son eleman
echo count($fiyatlar);        // eleman sayısı`, out:
`450
300
3` },
      { t: 'ul', items: [
        'İndeks **0**’dan başlar. 3 elemanlı dizinin son indeksi **2**’dir.',
        '`count($dizi)` eleman sayısını verir.'
      ] },
      { t: 'p', text: '**İlişkisel dizi**: her değer bir anahtara bağlıdır. `=>` anahtarı değere bağlar.' },
      { t: 'code', code:
`$urun = [
    "ad" => "Klavye",
    "fiyat" => 1200
];
echo $urun["ad"] . ": " . $urun["fiyat"] . " TL";`, out: 'Klavye: 1200 TL' },
      { t: 'p', text: '**Kayıt listesi (dizi içinde dizi)**: önce kayıt (indeks), sonra alan (anahtar).' },
      { t: 'code', code:
`$rooms = [
    ["name" => "Mavi", "floor" => 2],
    ["name" => "Sarı", "floor" => 1]
];
echo $rooms[0]["name"];    // ilk kayıt → name`, out: 'Mavi' },
      { t: 'trap', text: '`$rooms["name"][0]` yanlış sıradır. Önce `[0]` ile kaydı, sonra `["name"]` ile alanı seç. İkinci kayıt `[1]`’dir.' },
      { t: 'trap', text: 'Anahtarlar harf duyarlıdır: `"fiyat"` ≠ `"Fiyat"` (Undefined array key). `=>` ile `>=` karıştırma. Kayıtlar arasına virgül. Bir kaydın tamamını `echo $urun;` ile yazdırmak "Array to string conversion" uyarısı verir; önce alanı seç.' }
    ]
  },
  {
    id: 'foreach',
    title: 'Foreach döngüsü',
    src: 'Çalışma soruları: 17 · Kitapçık s.5, s.6',
    blocks: [
      { t: 'code', code:
`$fiyatlar = [450, 1200, 300];
foreach ($fiyatlar as $fiyat) {
    echo $fiyat . " TL<br>";
}`, out:
`450 TL
1200 TL
300 TL` },
      { t: 'ul', items: [
        'Okunuşu: "`$fiyatlar` listesindeki her değeri sırayla `$fiyat`’a al".',
        '`as` PHP anahtar kelimesidir; `$fiyat` adını biz seçeriz.',
        'Sayaç/indeks artırmaya gerek yok; foreach sonraki elemana kendisi geçer. Boş dizide gövde hiç çalışmaz.',
        'Liste (`$satislar`) ile tek eleman (`$satis`) farklıdır. Döngü içinde tek elemanı kullan: `$toplam += $satis;`'
      ] },
      { t: 'p', text: 'Kayıt listesinde her turda bir kayıt gelir; alanı anahtarla okursun:' },
      { t: 'code', code:
`$sessions = [
    ["room" => "A", "minutes" => 18],
    ["room" => "B", "minutes" => 25]
];
function netMinutes($minutes) {
    return $minutes - 3;
}
foreach ($sessions as $session) {
    echo netMinutes($session["minutes"]) . "<br>";
}`, out:
`15
22` },
      { t: 'p', text: 'Anahtar ve değeri birlikte almak için `=>`:' },
      { t: 'code', code:
`$moviePrices = ["Interstellar" => 180, "Barbie" => 250];
foreach ($moviePrices as $movieTitle => $ticketPrice) {
    echo $movieTitle . ": " . $ticketPrice . " TL<br>";
}`, out:
`Interstellar: 180 TL
Barbie: 250 TL` },
      { t: 'tip', text: '**Soru 17 kalıbı** (ezberle): `$total = 0;` → `foreach ($orders as $order)` → `if ($order["status"] === "...")` → `$total += $order["minutes"];` → döngüden sonra `echo "Toplam: " . $total . " dk";`' }
    ]
  },
  {
    id: 'get',
    title: 'HTML formundan GET ile veri alma',
    src: 'Çalışma soruları: 7 · Kitapçık s.4',
    blocks: [
      { t: 'code', code:
`<form method="get">
  <input id="shelfBox" name="shelf">
  <button>Ara</button>
</form>
<?php
$shelf = $_GET["shelf"] ?? "";
echo htmlspecialchars($shelf, ENT_QUOTES, "UTF-8");`, out:
`B4 gönderilince adres: arama.php?shelf=B4
Ekranda: B4` },
      { t: 'ul', items: [
        '`method="get"`: veriler adresin sonuna eklenir → `dosya.php?anahtar=değer`',
        'Birden çok alan `&` ile ayrılır: `index.php?maxBudget=300&category=music`',
        'PHP alanı input’un **`name`** değeriyle okur: `$_GET["shelf"]`. `id` sadece sayfadaki öğeyi tanımlar, PHP’yi etkilemez.',
        '`action` verinin gideceği dosyadır. Yazılmazsa form aynı sayfaya gönderilir.',
        'Adreste `?`’den sonra: eşittirin **solu anahtar**, **sağı değer**.'
      ] },
      { t: 'table', head: ['Adres', 'Okuyan ifade', 'Değer'], rows: [
        ['`rota.php?zone=kuzey`', '`$_GET["zone"]`', 'kuzey'],
        ['`arama.php?shelf=B4`', '`$_GET["shelf"]`', 'B4'],
        ['`index.php?maxBudget=300&category=music`', '`$_GET["category"]`', 'music']
      ] },
      { t: 'trap', text: '`$_GET["kuzey"]` yanlış (o değer, anahtar değil). `$_POST` GET ile gelen veriyi okumaz. Dosya adı (`rota`) anahtar değildir.' },
      { t: 'trap', text: 'Yalnızca `id` değiştirilirse PHP satırı **değişmez**; `name` aynı kaldıkça anahtar aynıdır.' }
    ]
  },
  {
    id: 'girdi',
    title: 'Girdi kontrolü',
    src: 'Kitapçık s.2 (sınır değerleri), s.4 (?? ve doğrulama)',
    blocks: [
      { t: 'ul', items: [
        '**`??`**: sol taraf yoksa veya null ise sağdaki varsayılanı kullanır. Form ilk açıldığında alan gönderilmemiştir: `$shelf = $_GET["shelf"] ?? "";` → `""`',
        'Adresten gelen değer metin olarak gelir: `?age=25` → `"25"`',
        'Geçerli aralığı **koşulla** denetle: kabul → `&&`, ret → `||`. Sınırları ve hemen dışını test et (14, 15, 45, 46).',
        'Tarayıcıdaki `required`, `min`, `max` yeterli değildir; adres elle değiştirilebilir. PHP de kontrol etmelidir.',
        '`htmlspecialchars()` **doğrulama yapmaz**; sadece gösterimi düzenler.'
      ] },
      { t: 'code', code:
`$hours = $_GET["hours"] ?? "";
if ($hours === "") {
    echo "Süre girin.";
} elseif ($hours < 1 || $hours > 8) {
    echo "Süre 1-8 arasında olmalı.";
} else {
    echo "Kayıt alındı.";
}`, out:
`(alan yok)  → Süre girin.
?hours=9    → Süre 1-8 arasında olmalı.
?hours=5    → Kayıt alındı.` },
      { t: 'tip', text: 'Kitapçık: "htmlspecialchars() kullanıcının geçerli bir raf kodu girdiğini kanıtlar mı?" → **Hayır.** Geçerliliği ayrı bir koşul denetler.' },
      { t: 'low', text: 'Slaytlarda ayrıca `is_int()`, `trim()`, `isset()`, `exit`, `filter_input()` geçti. Çalışma PDF’lerinde yoklar, öncelikleri düşük.' }
    ]
  },
  {
    id: 'fonksiyonlar',
    title: 'Fonksiyonlar',
    src: 'Çalışma soruları: 9, 15 · Kitapçık s.5',
    blocks: [
      { t: 'code', code:
`function calculateTotal($unitPrice, $ticketCount) {
    return $unitPrice * $ticketCount;
}
$totalPrice = calculateTotal(240, 3);
echo $totalPrice;`, out: '720' },
      { t: 'table', head: ['Kavram', 'Örnek', 'Anlamı'], rows: [
        ['Parametre', '`$unitPrice`, `$ticketCount`', 'Tanımdaki girdi adları'],
        ['Argüman', '`240`, `3`', 'Çağrıda gönderilen gerçek değerler'],
        ['Dönüş değeri', '`return ...`', 'Çağıran koda geri verilen sonuç (720)']
      ] },
      { t: 'ul', items: [
        'Tanım tek başına çalışmaz; fonksiyon **çağrılınca** çalışır.',
        '`return` değeri çağıran yere verir ve fonksiyonu bitirir. Sonuç değişkene atanabilir, başka hesapta kullanılabilir.',
        '`echo` sadece ekrana yazar; değeri çağıran koda teslim etmez.',
        'Aynı fonksiyon farklı argümanlarla tekrar tekrar çağrılabilir.'
      ] },
      { t: 'code', code:
`function remaining($used) {
    return 30 - $used;
}
$free = remaining(12);    // 18 döner, ekrana yazılmaz
echo $free - 2;`, out: '16' },
      { t: 'trap', text: '`return` yazılmazsa fonksiyon değer döndürmez (null): hesap sonucu kullanılamaz, ekranda boş görünür.' },
      { t: 'tip', text: 'Boşluk doldurmada "sonucu çağıran koda ilet" → `return` · "fonksiyon tanımla" → `function`' }
    ]
  },
  {
    id: 'html',
    title: 'HTML çıktısında metin gösterimi',
    src: 'Çalışma soruları: 10, 16 · Kitapçık s.4',
    blocks: [
      { t: 'code', code: `echo htmlspecialchars($metin, ENT_QUOTES, "UTF-8");` },
      { t: 'ul', items: [
        'Özel karakterleri HTML kodlarına çevirir. Böylece kullanıcının yazdığı etiket çalışmaz, **metin olarak** görünür.',
        '`ENT_QUOTES`: hem tek hem çift tırnağı dönüştürür. Hazır PHP sabitidir: başına `$` konmaz, tırnağa alınmaz, büyük harfle yazılır.',
        '`"UTF-8"`: karakter kodlaması (Türkçe karakterler doğru görünür).',
        'Doğrulama yapmaz; sadece gösterimi hazırlar.'
      ] },
      { t: 'table', head: ['Karakter', 'HTML kaynağında', 'Tarayıcıda görünen'], rows: [
        ['`<`', '`&lt;`', '<'],
        ['`>`', '`&gt;`', '>'],
        ['`&`', '`&amp;`', '&'],
        ['`"`', '`&quot;`', '"'],
        ['`\'`', '`&#039;` (ENT_QUOTES ile)', '\'']
      ] },
      { t: 'table', head: ['Kod', 'HTML kaynağı', 'Kullanıcının gördüğü'], rows: [
        ['`htmlspecialchars("R&D", …)`', '`R&amp;D`', 'R&D'],
        ['`htmlspecialchars("<i>Raf</i>", …)`', '`&lt;i&gt;Raf&lt;/i&gt;`', '<i>Raf</i> (italik değil)'],
        ['`echo "<b>Dune</b>";` (dönüştürmeden)', '`<b>Dune</b>`', '**Dune** (kalın)']
      ] },
      { t: 'trap', text: 'Soruyu dikkatli oku: "**Kullanıcı ne görür?**" → orijinal karakterler (`R&D`). "**HTML kaynağında ne olur?**" → kodlanmış hal (`R&amp;D`).' }
    ]
  }
];
