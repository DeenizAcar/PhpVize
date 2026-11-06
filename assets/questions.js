/* Soru bankası.
   type: 'mc' (çoktan seçmeli), 'fill' (boşluk doldurma, kodda ____), 'code' (kod tamamlama, kodda {{1}}..{{4}})
   a: doğru şık indeksi (0 = A). ans / blanks: kabul edilen cevaplar. cs: büyük/küçük harf duyarlı.
   check / expect: soruların PHP 8 ile doğrulanması için; sitede kullanılmaz. */

window.EXAMS = [
  {
    id: 'hoca',
    title: 'Hocanın çalışma soruları',
    desc: 'PHP Çalışma Soruları PDF’indeki 17 soru, birebir.',
    featured: true,
    questions: [
      { type: 'mc', topic: 'atama', q: 'Tarayıcıda ne görünür?',
        code: `$stock = 24;
$stock -= 5;
echo "Kalan: " . $stock;`,
        opts: ['`Kalan: 24`', '`Kalan: 5`', '`Kalan: 19`', '`Kalan: 29`', '`Kalan: 245`'], a: 2,
        exp: '`-=` sonucu saklar: 24 − 5 = 19. Nokta etiketi bu sayıyla birleştirir.', check: 'out' },
      { type: 'mc', topic: 'karsilastirma', q: 'Hangi koşul doğrudur?',
        code: `$rack = "8";
$number = 8;`,
        opts: ['`$rack === 8`', '`$rack == $number`', '`$number === "8"`', '`$rack != 8`', '`$number < 8`'], a: 1,
        exp: 'Sayısal metin ile tam sayı `==` karşılaştırmasında eşittir. Türlerinin farklı olması `===` karşılaştırmasını yanlış yapar.', check: { truthy: true } },
      { type: 'mc', topic: 'kosullar', q: 'Hangi mesaj yazılır?',
        code: `$score = 70;
if ($score >= 85) { echo "A"; }
elseif ($score >= 70) { echo "B"; }
else { echo "C"; }`,
        opts: ['`A`', '`C`', '`AB`', '`B`', '`BC`'], a: 3,
        exp: 'İlk koşul yanlış; ikinci koşul eşitliği de içerdiği için doğrudur. else çalışmaz.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Döngü bittiğinde toplam kaçtır?',
        code: `$sum = 1;
for ($i = 2; $i < 7; $i += 2) {
    $sum += $i;
}
echo $sum;`,
        opts: ['`6`', '`12`', '`13`', '`14`', '`20`'], a: 2,
        exp: 'Döngü 2, 4 ve 6 değerlerini ekler. Başlangıçta 1 bulunduğu için sonuç 13’tür.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Hangi satır 7, 5, 3, 1 sırasını üretir?',
        code: `$level = 7;
while ($level > 0) {
    echo $level . " ";
    /* eksik satır */
}`,
        opts: ['`$level - 2;`', '`$level += 2;`', '`$level--;`', '`$level = 2;`', '`$level -= 2;`'], a: 4,
        exp: 'Her turda saklanan değer iki azalır. Yalnızca `$level - 2` yazılırsa değer hiç değişmez.', check: { sub: '/* eksik satır */', expect: '7 5 3 1' } },
      { type: 'mc', topic: 'mantiksal', q: 'Hangi süre için “Uyarı” yazılır?',
        code: `if ($hours < 2 || $hours > 8) { echo "Uyarı"; }`,
        opts: ['`2`', '`4`', '`8`', '`9`', '`6`'], a: 3,
        exp: '9 üst sınırı aşar. 2 ve 8 sınırda olduklarından iki karşılaştırma da bu değerler için yanlıştır.', check: { v: '$hours', expect: 'Uyarı' } },
      { type: 'mc', topic: 'get', q: '`rota.php?zone=kuzey` adresinde bölgeyi hangi ifade okur?',
        opts: ['`$_GET["kuzey"]`', '`$_POST["zone"]`', '`$_GET["zone"]`', '`$_POST["kuzey"]`', '`$_GET["rota"]`'], a: 2,
        exp: 'Soru işaretinden sonra eşittirin solundaki `zone` anahtar, sağındaki `kuzey` değerdir.', check: { value: "'kuzey'", pre: '$_GET = ["zone" => "kuzey"]; $_POST = [];' } },
      { type: 'mc', topic: 'diziler', q: 'İlk kaydın oda adını hangi ifade verir?',
        code: `$rooms = [
    ["name" => "Mavi", "floor" => 2],
    ["name" => "Sarı", "floor" => 1]
];`,
        opts: ['`$rooms[1]["name"]`', '`$rooms[0]["floor"]`', '`$rooms["name"][0]`', '`$rooms[0]["name"]`', '`$rooms[1]["floor"]`'], a: 3,
        exp: 'Önce `0` ile ilk kaydı, sonra `name` ile o kaydın adını seçeriz. Sonuç Mavi olur.', check: { value: "'Mavi'" } },
      { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda hangi sayı görünür?',
        code: `function remaining($used) {
    return 30 - $used;
}
$free = remaining(12);
echo $free - 2;`,
        opts: ['`18`', '`16`', '`20`', '`28`', '`182`'], a: 1,
        exp: 'Fonksiyon ekrana yazmadan 18 döndürür. Son satır 18’den 2 çıkarır.', check: 'out' },
      { type: 'mc', topic: 'html', q: 'Kullanıcı hangi metni görür?',
        code: `echo htmlspecialchars("R&D", ENT_QUOTES, "UTF-8");`,
        opts: ['`RD`', '`R D`', '`R&amp;D`', '`R&D`', '`R ve D`'], a: 3,
        exp: 'HTML kaynağındaki `&amp;` tarayıcıda bir `&` işareti olarak gösterilir.', check: { php: 'echo htmlspecialchars("R&D", ENT_QUOTES, "UTF-8");', expect: 'R&amp;D' } },

      { type: 'fill', topic: 'yazdirma', q: 'İki metinden tek bir etiket oluştur.',
        code: `$room = "B";
$label = "Stüdyo " ____ $room;`,
        ans: ['.', 'nokta'], exp: 'Nokta (`.`). Birleştirme sonucu `$label` içinde `Stüdyo B` olur.', check: { post: 'echo $label;', expect: 'Stüdyo B' } },
      { type: 'fill', topic: 'karsilastirma', q: '8 saatten kısa çalışmaları seç; tam 8 dahil değil.',
        code: `if ($hours ____ 8) { echo "Kısa"; }`,
        ans: ['<'], exp: '`<`. `<=` yazılırsa tam 8 de seçilir.', check: { pre: '$hours = 7;', expect: 'Kısa' } },
      { type: 'fill', topic: 'mantiksal', q: 'İki koşulun da doğru olmasını sağlayan sembolik operatörü yaz.',
        code: `if ($isOpen ____ $hasSpace) { echo "Uygun"; }`,
        ans: ['&&'], exp: '`&&`. Yalnızca açık olan ve yeri bulunan bir alan uygundur.', check: { pre: '$isOpen = true; $hasSpace = true;', expect: 'Uygun' } },
      { type: 'fill', topic: 'diziler', q: 'İlk kaydı seçen sayısal indeksi yaz.',
        code: `$names = ["Doğu", "Batı"];
echo $names[____];`,
        ans: ['0'], exp: '`0`. İlk eleman Doğu, 1 numaralı eleman Batı’dır.', check: { expect: 'Doğu' } },
      { type: 'fill', topic: 'fonksiyonlar', q: 'Hesabın sonucunu çağıran koda ilet.',
        code: `function doubleMinutes($minutes) {
    ____ $minutes * 2;
}`,
        ans: ['return'], exp: '`return`. Sonuç başka bir hesapta kullanılabilir; `echo` yalnızca yazdırır.', check: { post: 'echo doubleMinutes(4);', expect: '8' } },
      { type: 'fill', topic: 'html', q: 'HTML çıktısında iki tırnak türünü de dönüştüren sabiti yaz.',
        code: `echo htmlspecialchars($note, ____, "UTF-8");`,
        ans: ['ENT_QUOTES'], cs: true, exp: '`ENT_QUOTES`. Bu ayar hem tek hem de çift tırnağı kapsar.', check: { pre: '$note = "a\'b";', expect: 'a&#039;b' } },

      { type: 'code', topic: 'foreach', title: 'Siparişlerin hazırlık süresi',
        q: 'Bir mutfak, yalnızca hazırlıkta olan siparişlerin kalan sürelerini topluyor. Hazırlığı tamamlanmış siparişlerin süresi hesaba katılmayacak. Ekranda “Toplam: 17 dk” görünmesi için boşlukları tamamla.',
        code: `$orders = [
    ["status" => "hazır", "minutes" => 3],
    ["status" => "hazırlıkta", "minutes" => 7],
    ["status" => "hazırlıkta", "minutes" => 10]
];
$total = 0;
foreach ($orders {{1}} $order) {
    if ($order["status"] === "{{2}}") {
        $total {{3}} $order["minutes"];
    }
}
echo "Toplam: " {{4}} $total . " dk";`,
        blanks: [{ ans: ['as'] }, { ans: ['hazırlıkta'], cs: true }, { ans: ['+='] }, { ans: ['.', 'nokta'] }],
        exps: ['`as`: sıradaki sipariş `$order` değişkenine gelir.', '`hazırlıkta`: yalnızca bu durumdaki siparişler seçilir. Tırnaklar kodda verilmiştir.', '`+=`: siparişin dakikası önceki toplama eklenip saklanır.', 'Nokta (`.`): etiket ile sayı birleştirilir.'],
        note: 'Kontrol: ilk kayıt elenir, toplam 0 kalır. İkinci kayıttan sonra 7, üçüncüden sonra 17. Üçüncü boşluğa yalnız `=` yazılsaydı her yeni değer öncekini siler, 17 yerine 10 görünürdü.',
        expect: 'Toplam: 17 dk' }
    ]
  },

  {
    id: 'demo1',
    title: 'Deneme vizesi 1',
    desc: 'Aynı format, yeni sorular.',
    questions: [
      { type: 'mc', topic: 'atama', q: 'Tarayıcıda ne görünür?',
        code: `$balance = 50;
$balance += 15;
$balance - 10;
echo "Bakiye: " . $balance;`,
        opts: ['`Bakiye: 55`', '`Bakiye: 65`', '`Bakiye: 50`', '`Bakiye: 40`', '`Bakiye: 75`'], a: 1,
        exp: '`+= 15` sonucu saklar: 65. `$balance - 10;` hesaplar ama atamadığı için değer 65 kalır.', check: 'out' },
      { type: 'mc', topic: 'karsilastirma', q: 'Hangi koşul **yanlıştır** (false döner)?',
        code: `$code = "15";
$limit = 15;`,
        opts: ['`$code == $limit`', '`$code == 15`', '`$limit === 15`', '`$code === $limit`', '`$code !== $limit`'], a: 3,
        exp: '`$code` metin, `$limit` tam sayı. `===` türü de kontrol ettiği için false. `!==` ise tür farklı olduğundan true döner.', check: { truthy: false } },
      { type: 'mc', topic: 'kosullar', q: 'Hangi mesaj yazılır?',
        code: `$temp = 30;
if ($temp > 30) { echo "Sıcak"; }
elseif ($temp >= 20) { echo "Ilık"; }
else { echo "Soğuk"; }`,
        opts: ['`Sıcak`', '`Ilık`', '`Soğuk`', '`SıcakIlık`', '`IlıkSoğuk`'], a: 1,
        exp: '`30 > 30` yanlış (eşitlik dahil değil). `30 >= 20` doğru → Ilık. Sonraki dal denenmez.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Döngü bittiğinde ekranda hangi sayı görünür?',
        code: `$sum = 0;
for ($i = 1; $i <= 9; $i += 3) {
    $sum += $i;
}
echo $sum;`,
        opts: ['`9`', '`12`', '`13`', '`15`', '`22`'], a: 1,
        exp: '`$i` sırasıyla 1, 4, 7 olur (10 <= 9 yanlış). 0 + 1 + 4 + 7 = 12.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Hangi satır 3, 6, 9, 12 sırasını üretir?',
        code: `$k = 3;
while ($k <= 12) {
    echo $k . " ";
    /* eksik satır */
}`,
        opts: ['`$k + 3;`', '`$k++;`', '`$k += 3;`', '`$k = 3;`', '`$k -= 3;`'], a: 2,
        exp: '`$k += 3;` her turda değeri 3 artırıp saklar. `$k + 3;` saklamadığı için döngü sonsuz olur; `$k++` 3 4 5 … üretir.', check: { sub: '/* eksik satır */', expect: '3 6 9 12' } },
      { type: 'mc', topic: 'mantiksal', q: 'Hangi yaş için mesaj **yazılmaz**?',
        code: `if ($age >= 18 && $age <= 25) { echo "Gençlik indirimi"; }`,
        opts: ['`18`', '`20`', '`25`', '`26`', '`22`'], a: 3,
        exp: '`&&` iki koşulun da doğru olmasını ister. 26 için `26 <= 25` yanlış. 18 ve 25 sınırları dahildir.', check: { v: '$age', expect: '' } },
      { type: 'mc', topic: 'get', q: '`urun.php?kategori=kitap&sayfa=2` adresinde sayfa numarasını hangi ifade okur?',
        opts: ['`$_GET["2"]`', '`$_GET["sayfa"]`', '`$_POST["sayfa"]`', '`$_GET["kategori"]`', '`$_GET["urun"]`'], a: 1,
        exp: '`&` alanları ayırır. `sayfa=2` alanında anahtar `sayfa`, değer `2`’dir.', check: { value: "'2'", pre: '$_GET = ["kategori" => "kitap", "sayfa" => "2"]; $_POST = [];' } },
      { type: 'mc', topic: 'diziler', q: 'İkinci kitabın sayfa sayısını hangi ifade verir?',
        code: `$books = [
    ["title" => "Sefiller", "page" => 540],
    ["title" => "Simyacı", "page" => 190],
    ["title" => "Dune", "page" => 610]
];`,
        opts: ['`$books[2]["page"]`', '`$books[1]["title"]`', '`$books["page"][1]`', '`$books[1]["page"]`', '`$books[0]["page"]`'], a: 3,
        exp: 'İkinci kayıt indeks 1’dir. Önce kayıt `[1]`, sonra alan `["page"]` → 190.', check: { value: '190' } },
      { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda hangi sayı görünür?',
        code: `function discount($price) {
    return $price - 20;
}
$result = discount(100);
echo $result + 5;`,
        opts: ['`80`', '`85`', '`100`', '`105`', '`805`'], a: 1,
        exp: 'Fonksiyon 80 döndürür (ekrana yazmaz). `80 + 5` → 85.', check: 'out' },
      { type: 'mc', topic: 'html', q: 'Kullanıcı tarayıcıda ne görür?',
        code: `echo htmlspecialchars("<b>Not</b>", ENT_QUOTES, "UTF-8");`,
        opts: ['Kalın yazılmış “Not”', 'Yalnızca `Not`', '`<b>Not</b>` (etiketler metin olarak görünür)', '`&lt;b&gt;Not&lt;/b&gt;`', 'Hiçbir şey'], a: 2,
        exp: 'Kaynakta `&lt;b&gt;Not&lt;/b&gt;` oluşur; tarayıcı bunu `<b>Not</b>` metni olarak gösterir. Kalın yazı oluşmaz.' },

      { type: 'fill', topic: 'yazdirma', q: 'Etiketi şehir adıyla birleştir.',
        code: `$city = "İzmir";
echo "Şehir: " ____ $city;`,
        ans: ['.', 'nokta'], exp: 'Nokta (`.`) → `Şehir: İzmir`', check: { expect: 'Şehir: İzmir' } },
      { type: 'fill', topic: 'karsilastirma', q: '18 yaş ve üzerini seç; tam 18 dahil.',
        code: `if ($age ____ 18) { echo "Yetişkin"; }`,
        ans: ['>='], exp: '`>=`. `>` yazılırsa tam 18 seçilmez.', check: { pre: '$age = 18;', expect: 'Yetişkin' } },
      { type: 'fill', topic: 'mantiksal', q: 'Koşullardan en az birinin doğru olması yetsin; sembolik operatörü yaz.',
        code: `if ($isWeekend ____ $isHoliday) { echo "Kapalı"; }`,
        ans: ['||'], exp: '`||` (VEYA): hafta sonu ya da tatil olması yeterlidir.', check: { pre: '$isWeekend = false; $isHoliday = true;', expect: 'Kapalı' } },
      { type: 'fill', topic: 'diziler', q: 'Listedeki üçüncü elemanı (Mavi) seçen indeksi yaz.',
        code: `$colors = ["Kırmızı", "Yeşil", "Mavi"];
echo $colors[____];`,
        ans: ['2'], exp: '`2`. İndeksler 0, 1, 2 diye gider; üçüncü eleman 2’dedir.', check: { expect: 'Mavi' } },
      { type: 'fill', topic: 'fonksiyonlar', q: 'Fonksiyon tanımlayan anahtar kelimeyi yaz.',
        code: `____ area($w, $h) {
    return $w * $h;
}`,
        ans: ['function'], exp: '`function`. Ardından fonksiyon adı ve parantez içinde parametreler gelir.', check: { post: 'echo area(3, 4);', expect: '12' } },
      { type: 'fill', topic: 'html', q: 'Kullanıcı metnini HTML’de güvenli göstermek için kullanılan fonksiyonun adını yaz.',
        code: `echo ____($comment, ENT_QUOTES, "UTF-8");`,
        ans: ['htmlspecialchars'], exp: '`htmlspecialchars`: `<`, `>`, `&` ve tırnakları HTML kodlarına çevirir.', check: { pre: '$comment = "<b>";', expect: '&lt;b&gt;' } },

      { type: 'code', topic: 'foreach', title: 'Kütüphane gecikmeleri',
        q: 'Bir kütüphane, yalnızca hâlâ ödünçte olan (status “odunc”) kitapların gecikme günlerini topluyor. Ekranda “Gecikme: 9 gün” görünmesi için boşlukları tamamla.',
        code: `$loans = [
    ["status" => "odunc", "days" => 4],
    ["status" => "iade", "days" => 6],
    ["status" => "odunc", "days" => 5]
];
$late = {{1}};
foreach ($loans as $loan) {
    if ($loan["status"] {{2}} "odunc") {
        $late += $loan["{{3}}"];
    }
}
echo "Gecikme: " . $late {{4}} " gün";`,
        blanks: [{ ans: ['0'] }, { ans: ['===', '=='] }, { ans: ['days'], cs: true }, { ans: ['.', 'nokta'] }],
        exps: ['`0`: toplam döngüden önce sıfırdan başlar.', '`===` (veya `==`): yalnızca durumu “odunc” olan kayıtlar seçilir.', '`days`: eklenecek gün sayısı bu anahtarda.', 'Nokta (`.`): sayı ile “ gün” metni birleştirilir.'],
        note: 'Kontrol: 4 + 5 = 9. İade edilen kitabın 6 günü eklenmez.',
        expect: 'Gecikme: 9 gün' }
    ]
  },

  {
    id: 'demo2',
    title: 'Deneme vizesi 2',
    desc: 'Aynı format, yeni sorular.',
    questions: [
      { type: 'mc', topic: 'atama', q: 'Tarayıcıda ne görünür?',
        code: `$price = 40;
$count = 3;
$total = $price * $count;
$total -= 20;
echo "Tutar: " . $total . " TL";`,
        opts: ['`Tutar: 120 TL`', '`Tutar: 100 TL`', '`Tutar: 140 TL`', '`Tutar: 20 TL`', '`Tutar: 23 TL`'], a: 1,
        exp: '40 × 3 = 120. `-= 20` saklar → 100.', check: 'out' },
      { type: 'mc', topic: 'karsilastirma', q: 'Hangi koşul doğrudur (true döner)?',
        code: `$x = "5";
$y = 5;
$z = 6;`,
        opts: ['`$x === $y`', '`$y > $z`', '`$x != $y`', '`$y < $z`', '`$z <= $y`'], a: 3,
        exp: '5 < 6 doğru. `$x === $y` tür farkı yüzünden yanlış; `$x != $y` değerler eşit olduğu için yanlış.', check: { truthy: true } },
      { type: 'mc', topic: 'kosullar', q: 'Hangi mesaj yazılır?',
        code: `$stock = 0;
if ($stock > 10) { echo "Bol"; }
elseif ($stock > 0) { echo "Az"; }
else { echo "Tükendi"; }`,
        opts: ['`Bol`', '`Az`', '`Tükendi`', '`AzTükendi`', '`BolAz`'], a: 2,
        exp: '`0 > 10` ve `0 > 0` yanlış → else çalışır.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Ekranda hangi sayı görünür?',
        code: `$total = 0;
for ($i = 5; $i >= 1; $i--) {
    $total += 2;
}
echo $total;`,
        opts: ['`2`', '`5`', '`8`', '`10`', '`12`'], a: 3,
        exp: '`$i` 5, 4, 3, 2, 1 → 5 tur. Her turda 2 eklenir: 10.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Ekranda ne görünür?',
        code: `$p = 1;
while ($p < 10) {
    echo $p . " ";
    $p += 4;
}`,
        opts: ['`1 5`', '`1 5 9`', '`1 5 9 13`', '`1 4 7`', '`5 9`'], a: 1,
        exp: '1 yazılır → 5 → 9 yazılır → 13 olur, 13 < 10 yanlış. 13 yazdırılmaz.', check: 'out' },
      { type: 'mc', topic: 'mantiksal', q: 'Hangi değer için ekrana **hiçbir şey** yazılmaz?',
        code: `if ($km < 10 || $km > 50) { echo "Tarife dışı"; }`,
        opts: ['`5`', '`9`', '`50`', '`51`', '`60`'], a: 2,
        exp: '50 için `50 < 10` de `50 > 50` de yanlış → `||` yanlış. Sınır değeri 50 aralığın içindedir.', check: { v: '$km', expect: '' } },
      { type: 'mc', topic: 'get', q: 'Kullanıcı kutuya Ankara yazıp gönderirse `sonuc.php` içinde değeri hangi ifade okur?',
        code: `<form method="get" action="sonuc.php">
  <input id="kutu" name="sehir">
  <button>Gönder</button>
</form>`,
        opts: ['`$_GET["kutu"]`', '`$_GET["Ankara"]`', '`$_GET["sehir"]`', '`$_POST["sehir"]`', '`$_GET["sonuc"]`'], a: 2,
        exp: 'PHP alanı `name` ile okur: `$_GET["sehir"]`. `id` PHP’yi etkilemez; yöntem get olduğu için `$_POST` değil.', check: { value: "'Ankara'", pre: '$_GET = ["sehir" => "Ankara"]; $_POST = [];', nocode: true } },
      { type: 'mc', topic: 'diziler', q: 'Ekranda hangi sayı görünür?',
        code: `$prices = ["Çay" => 15, "Kahve" => 40, "Su" => 10];
echo $prices["Kahve"] + $prices["Su"];`,
        opts: ['`25`', '`40`', '`50`', '`55`', '`4010`'], a: 2,
        exp: '`$prices["Kahve"]` 40, `$prices["Su"]` 10 → 50. `+` sayıları toplar.', check: 'out' },
      { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda hangi sayı görünür?',
        code: `function addTax($amount) {
    return $amount + 10;
}
echo addTax(5) + addTax(20);`,
        opts: ['`35`', '`45`', '`25`', '`55`', '`1530`'], a: 1,
        exp: '`addTax(5)` 15, `addTax(20)` 30 döndürür → 45.', check: 'out' },
      { type: 'mc', topic: 'html', q: 'Bu satırın ürettiği **HTML kaynağında** hangi metin bulunur?',
        code: `echo htmlspecialchars("Tom & Jerry", ENT_QUOTES, "UTF-8");`,
        opts: ['`Tom & Jerry`', '`Tom &amp; Jerry`', '`Tom and Jerry`', '`Tom Jerry`', '`Tom &lt; Jerry`'], a: 1,
        exp: '`&` kaynakta `&amp;` olur. Kullanıcı ise tarayıcıda yine `Tom & Jerry` görür.', check: 'out' },

      { type: 'fill', topic: 'yazdirma', q: 'Sayıyı “ TL” metniyle birleştir.',
        code: `$sum = 250;
echo "Toplam: " . $sum ____ " TL";`,
        ans: ['.', 'nokta'], exp: 'Nokta (`.`) → `Toplam: 250 TL`', check: { expect: 'Toplam: 250 TL' } },
      { type: 'fill', topic: 'karsilastirma', q: 'Değer **ve** türün aynı olmasını kontrol eden operatörü yaz.',
        code: `if ($input ____ 10) { echo "Tam sayı 10"; }`,
        ans: ['==='], exp: '`===` hem değeri hem türü kontrol eder. `"10" === 10` yanlıştır.', check: { pre: '$input = 10;', expect: 'Tam sayı 10' } },
      { type: 'fill', topic: 'mantiksal', q: 'Puan 1 ile 5 arasında olsun; iki sınır da dahil.',
        code: `if ($rating >= 1 ____ $rating <= 5) { echo "Geçerli puan"; }`,
        ans: ['&&'], exp: '`&&`: aralık içi için iki koşul birden sağlanmalı.', check: { pre: '$rating = 5;', expect: 'Geçerli puan' } },
      { type: 'fill', topic: 'diziler', q: 'Son elemanı (Per) seçen indeksi yaz.',
        code: `$days = ["Pzt", "Sal", "Çar", "Per"];
echo $days[____];`,
        ans: ['3'], exp: '`3`. 4 elemanlı dizide son indeks 3’tür.', check: { expect: 'Per' } },
      { type: 'fill', topic: 'fonksiyonlar', q: 'Hesabın sonucunu çağıran koda geri ver.',
        code: `function half($n) {
    ____ $n / 2;
}
echo half(10) + 1;`,
        ans: ['return'], exp: '`return` 5 değerini geri verir; `5 + 1` → 6.', check: { expect: '6' } },
      { type: 'fill', topic: 'html', q: 'htmlspecialchars’ın son parametresi olan karakter kodlamasını yaz.',
        code: `echo htmlspecialchars($text, ENT_QUOTES, "____");`,
        ans: ['UTF-8'], exp: '`UTF-8`: Türkçe karakterlerin doğru yorumlanmasını sağlayan kodlama.', check: { pre: '$text = "ş";', expect: 'ş' } },

      { type: 'code', topic: 'sayac', title: 'Aktif üyeler',
        q: 'Bir spor salonu yalnızca aktif üyelerin sayısını ve toplam ders saatini hesaplıyor. Ekranda “Aktif: 2 üye, 9 saat” görünmesi için boşlukları tamamla.',
        code: `$members = [
    ["active" => true, "hours" => 4],
    ["active" => false, "hours" => 6],
    ["active" => true, "hours" => 5]
];
$count = 0;
$hours = 0;
foreach ({{1}} as $member) {
    if ($member["active"]) {
        $count{{2}};
        $hours {{3}} $member["hours"];
    }
}
echo "Aktif: " . $count . " üye, " . $hours {{4}} " saat";`,
        blanks: [{ ans: ['$members'], cs: true }, { ans: ['++'] }, { ans: ['+='] }, { ans: ['.', 'nokta'] }],
        exps: ['`$members`: gezilecek dizinin adı.', '`++`: sayaç her aktif üyede bir artar.', '`+=`: saat önceki toplama eklenip saklanır.', 'Nokta (`.`): sayı ile metin birleştirilir.'],
        note: 'Kontrol: aktif üyeler 1. ve 3. kayıt → sayaç 2, toplam 4 + 5 = 9.',
        expect: 'Aktif: 2 üye, 9 saat' }
    ]
  },

  {
    id: 'demo3',
    title: 'Deneme vizesi 3',
    desc: 'Aynı format, yeni sorular.',
    questions: [
      { type: 'mc', topic: 'atama', q: 'Tarayıcıda ne görünür?',
        code: `$level = 3;
$level++;
$level += 10;
echo "Seviye " . $level;`,
        opts: ['`Seviye 13`', '`Seviye 14`', '`Seviye 4`', '`Seviye 3`', '`Seviye 310`'], a: 1,
        exp: '`++` → 4, `+= 10` → 14.', check: 'out' },
      { type: 'mc', topic: 'karsilastirma', q: 'Hangisi bir karşılaştırma **değil**, atamadır?',
        opts: ['`$a == $b`', '`$a = $b`', '`$a === $b`', '`$a != $b`', '`$a <= $b`'], a: 1,
        exp: 'Tek `=` sağdaki değeri soldaki değişkene yazar. Diğerleri true/false üreten karşılaştırmalardır.' },
      { type: 'mc', topic: 'kosullar', q: 'Hangi mesaj yazılır?',
        code: `$minutes = 50;
if ($minutes >= 15) { echo "Kısa"; }
elseif ($minutes >= 45) { echo "Uzun"; }
else { echo "Geçersiz"; }`,
        opts: ['`Kısa`', '`Uzun`', '`KısaUzun`', '`Geçersiz`', '`UzunKısa`'], a: 0,
        exp: 'İlk koşul (50 >= 15) doğru → Kısa. İlk doğru daldan sonra zincirin kalanı denenmez. Doğru sınıflandırma için yüksek eşik önce sınanmalıydı.', check: 'out' },
      { type: 'mc', topic: 'sayac', q: 'Ekranda hangi sayı görünür?',
        code: `$count = 0;
for ($i = 10; $i > 0; $i -= 3) {
    $count++;
}
echo $count;`,
        opts: ['`3`', '`4`', '`5`', '`10`', '`22`'], a: 1,
        exp: '`$i` 10, 7, 4, 1 → 4 tur. Sonra −2 olur, koşul yanlış.', check: 'out' },
      { type: 'mc', topic: 'donguler', q: 'Ekranda ne görünür?',
        code: `$fuel = 20;
$trips = 0;
while ($fuel >= 6) {
    $fuel -= 6;
    $trips++;
}
echo $trips . " sefer, kalan " . $fuel;`,
        opts: ['`3 sefer, kalan 2`', '`4 sefer, kalan -4`', '`3 sefer, kalan 8`', '`2 sefer, kalan 8`', '`20 sefer, kalan 0`'], a: 0,
        exp: '20 → 14 → 8 → 2. Her düşüşte sefer artar: 3. Kalan 2, `2 >= 6` yanlış.', check: 'out' },
      { type: 'mc', topic: 'mantiksal', q: 'Ekranda ne görünür?',
        code: `$isMember = false;
$total = 600;
if ($isMember || $total >= 500) {
    echo "Kargo bedava";
} else {
    echo "Kargo 50 TL";
}`,
        opts: ['`Kargo bedava`', '`Kargo 50 TL`', '`Kargo bedavaKargo 50 TL`', 'Hiçbir şey', 'Hata verir'], a: 0,
        exp: '`||` için bir koşulun doğru olması yeter: `600 >= 500` doğru.', check: 'out' },
      { type: 'mc', topic: 'get', q: 'Kullanıcı kutuya Ankara yazıp gönderince ne olur?',
        code: `<form method="get" action="sonuc.php">
  <input name="sehir">
  <button>Gönder</button>
</form>`,
        opts: ['Adres `sonuc.php?sehir=Ankara` olur.', 'Adres `sonuc.php?Ankara=sehir` olur.', 'Adres değişmez, veri gizli gider.', 'Değer `$_POST["sehir"]` ile okunur.', 'Adres `sehir.php?sonuc=Ankara` olur.'], a: 0,
        exp: 'GET’te veri adrese eklenir: önce `action` dosyası, sonra `?name=değer`.' },
      { type: 'mc', topic: 'diziler', q: 'Ekranda hangi sayı görünür?',
        code: `$scores = [70, 85, 90, 60];
echo $scores[1] + $scores[3];`,
        opts: ['`155`', '`145`', '`160`', '`130`', '`8560`'], a: 1,
        exp: '`[1]` ikinci eleman 85, `[3]` dördüncü eleman 60 → 145.', check: 'out' },
      { type: 'mc', topic: 'fonksiyonlar', q: 'Ekranda hangi sayı görünür?',
        code: `function bonus($points) {
    return $points * 2;
}
$total = 5;
$total += bonus(3);
echo $total;`,
        opts: ['`6`', '`10`', '`11`', '`16`', '`56`'], a: 2,
        exp: '`bonus(3)` 6 döndürür. `5 + 6` → 11.', check: 'out' },
      { type: 'mc', topic: 'html', q: '`htmlspecialchars($note, ENT_QUOTES, "UTF-8")` için hangisi doğrudur?',
        opts: ['Kullanıcının girdiği değerin geçerli olduğunu kanıtlar.', '`ENT_QUOTES` yalnızca çift tırnağı dönüştürür.', '`<` ve `>` karakterlerini `&lt;` ve `&gt;` olarak kodlar.', '`ENT_QUOTES` başına `$` yazılarak kullanılır.', 'Metni tarayıcıda kalın gösterir.'], a: 2,
        exp: 'Fonksiyon gösterimi düzenler, doğrulama yapmaz. `ENT_QUOTES` tek ve çift tırnağı kapsar, `$` almayan bir sabittir.' },

      { type: 'fill', topic: 'yazdirma', q: 'Ad ile soyadını birleştir (sonuç: Ada Yılmaz).',
        code: `$first = "Ada";
$last = "Yılmaz";
$full = $first . " " ____ $last;`,
        ans: ['.', 'nokta'], exp: 'Nokta (`.`). Aradaki boşluk `" "` metniyle eklenir.', check: { post: 'echo $full;', expect: 'Ada Yılmaz' } },
      { type: 'fill', topic: 'karsilastirma', q: 'Değer eşit **değilse** çalışsın (değer karşılaştırması).',
        code: `if ($answer ____ "evet") { echo "Tekrar sor"; }`,
        ans: ['!='], exp: '`!=` değer farklıysa true döner.', check: { pre: '$answer = "hayır";', expect: 'Tekrar sor' } },
      { type: 'fill', topic: 'mantiksal', q: 'Koşulu tersine çevir: dükkân kapalı **değilse** yazsın.',
        code: `if (____$isClosed) { echo "Açık"; }`,
        ans: ['!'], exp: '`!` (DEĞİL): `$isClosed` false ise koşul true olur.', check: { pre: '$isClosed = false;', expect: 'Açık' } },
      { type: 'fill', topic: 'diziler', q: 'İlişkisel dizide anahtarı değere bağlayan işareti yaz.',
        code: `$product = ["ad" => "Kalem", "fiyat" ____ 25];`,
        ans: ['=>'], exp: '`=>` anahtarı değere bağlar. `>=` ile karıştırma.', check: { post: 'echo $product["fiyat"];', expect: '25' } },
      { type: 'fill', topic: 'fonksiyonlar', q: 'Fonksiyonu çağır ve sonucunu sakla (sonuç 36 olmalı).',
        code: `function square($n) {
    return $n * $n;
}
$result = ____(6);`,
        ans: ['square'], cs: false, exp: '`square(6)` çağrısı 36 döndürür.', check: { post: 'echo $result;', expect: '36' } },
      { type: 'fill', topic: 'html', q: '`<` karakteri HTML kaynağında neye dönüşür?',
        code: `echo htmlspecialchars("a < b", ENT_QUOTES, "UTF-8");
// HTML kaynağı: a ____ b`,
        ans: ['&lt;'], exp: '`&lt;` (less than). Tarayıcıda yine `<` görünür.' },

      { type: 'code', topic: 'sayac', title: 'Bütçeye uygun filmler',
        q: 'Bir sinema, fiyatı bütçeye eşit veya bütçeden küçük filmleri sayıyor. Bütçe 200 TL iken ekranda “2 film uygun” görünmesi için boşlukları tamamla.',
        code: `$movies = [
    ["title" => "Dune", "price" => 320],
    ["title" => "Barbie", "price" => 200],
    ["title" => "Up", "price" => 150]
];
$budget = 200;
$matchCount = 0;
foreach ($movies as $movie) {
    if ($movie["price"] {{1}} $budget) {
        $matchCount{{2}};
    }
}
{{3}} $matchCount {{4}} " film uygun";`,
        blanks: [{ ans: ['<='] }, { ans: ['++'] }, { ans: ['echo'] }, { ans: ['.', 'nokta'] }],
        exps: ['`<=`: bütçeye eşit fiyat da uygun (200 <= 200).', '`++`: her uygun filmde sayaç bir artar.', '`echo`: sonucu ekrana yazar.', 'Nokta (`.`): sayı ile metin birleştirilir.'],
        note: 'Kontrol: Barbie (200) ve Up (150) uygun → 2. `<` yazılsaydı Barbie elenir, 1 çıkardı.',
        expect: '2 film uygun' }
    ]
  }
];

/* Ek kod tamamlama soruları (kod pratiği ve rastgele vize için) */
window.EXTRA_CODE = [
  { type: 'code', topic: 'foreach', title: 'Açık raflar (Kitapçık s.6)',
    q: 'Bir depoda yalnızca açık raflardaki ürünler sayılacak. Ekranda “Adet: 10” görünmesi için boşlukları tamamla.',
    code: `$bins = [
    ["open" => true,  "units" => 4],
    ["open" => false, "units" => 9],
    ["open" => true,  "units" => 6]
];
$sum = {{1}};
foreach ($bins {{2}} $bin) {
    if ($bin["open"]) {
        $sum += $bin["{{3}}"];
    }
}
echo "Adet: " {{4}} $sum;`,
    blanks: [{ ans: ['0'] }, { ans: ['as'] }, { ans: ['units'], cs: true }, { ans: ['.', 'nokta'] }],
    exps: ['`0`: toplam döngüden önce sıfırlanır.', '`as`: her turda bir raf kaydını `$bin` içine alır.', '`units`: eklenecek stok miktarı bu anahtarda.', 'Nokta (`.`): metin ile sayı birleştirilir.'],
    note: 'Açık raflar 4 ve 6 → 10. Toplama satırı if dışına taşınsaydı 19 olurdu.',
    expect: 'Adet: 10' },
  { type: 'code', topic: 'foreach', title: 'Film gecesi',
    q: 'Bütçesi 250 TL olan kullanıcıya fiyatı bütçeye eşit veya küçük filmleri listele ve sayısını yaz. Film adları HTML için dönüştürülsün.',
    code: `$moviePrices = ["Interstellar" => 180, "Barbie" => 250, "Dune" => 320];
$maxBudget = 250;
$matchCount = 0;
foreach ($moviePrices as $movieTitle {{1}} $ticketPrice) {
    if ($ticketPrice {{2}} $maxBudget) {
        echo htmlspecialchars($movieTitle, {{3}}, "UTF-8") . "<br>";
        $matchCount{{4}};
    }
}
echo $matchCount . " film";`,
    blanks: [{ ans: ['=>'] }, { ans: ['<='] }, { ans: ['ENT_QUOTES'], cs: true }, { ans: ['++'] }],
    exps: ['`=>`: solda anahtar (film adı), sağda değer (fiyat).', '`<=`: bütçeye eşit fiyat da kabul.', '`ENT_QUOTES`: tek ve çift tırnağı dönüştüren sabit.', '`++`: uygun her filmde sayaç artar.'],
    note: 'Ekranda Interstellar ve Barbie alt alta, ardından “2 film”. Dune (320) listelenmez.',
    expect: 'Interstellar<br>Barbie<br>2 film' },
  { type: 'code', topic: 'fonksiyonlar', title: 'Net oturum süreleri (Kitapçık s.5)',
    q: 'Her oturumdan 3 dakika hazırlık süresi düşülüyor. Net sürelerin toplamını hesaplayıp “Net: 37 dk” yazdır.',
    code: `$sessions = [
    ["room" => "A", "minutes" => 18],
    ["room" => "B", "minutes" => 25]
];
function netMinutes($minutes) {
    {{1}} $minutes - 3;
}
$total = 0;
foreach ($sessions as $session) {
    $total {{3}} netMinutes($session["{{2}}"]);
}
echo "Net: " {{4}} $total . " dk";`,
    blanks: [{ ans: ['return'] }, { ans: ['minutes'], cs: true }, { ans: ['+='] }, { ans: ['.', 'nokta'] }],
    exps: ['`return`: hesap sonucu çağıran koda verilir.', '`minutes`: süre alanının anahtarı.', '`+=`: her net süre toplama eklenir.', 'Nokta (`.`): etiket ile sayı birleştirilir.'],
    note: '18 − 3 = 15, 25 − 3 = 22 → 37. `echo` döngüden sonra olduğu için tek sonuç yazılır.',
    expect: 'Net: 37 dk' }
];

/* Konu testleri */
window.TOPIC_QUESTIONS = {
  degiskenler: [
    { type: 'mc', q: 'Hangisi geçerli bir PHP değişken adıdır?',
      opts: ['`$2adet`', '`toplam`', '`$toplam_tutar`', '`$toplam-tutar`', '`$ toplam`'], a: 2,
      exp: 'Değişken `$` ile başlar, ardından harf veya `_` gelir. Rakamla başlayamaz; `-` ve boşluk içeremez. `$` olmadan yazılan `toplam` değişken değildir.' },
    { type: 'mc', q: '`$kod = "14";` satırından sonra `$kod` hangi türdedir?',
      opts: ['`int`', '`float`', '`string`', '`bool`', '`array`'], a: 2,
      exp: 'Tırnak içindeki her değer metindir (string). Rakamlardan oluşması türü değiştirmez.', check: { php: '$kod = "14"; echo gettype($kod);', expect: 'string' } },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$sure = 3.5;
var_dump($sure);`,
      opts: ['`int(3)`', '`float(3.5)`', '`string(3) "3.5"`', '`bool(true)`', '`3.5`'], a: 1,
      exp: '`var_dump` türü ve değeri birlikte gösterir. 3.5 ondalıklı sayıdır: float.', check: 'out' },
    { type: 'mc', q: '`$premium = true;` için hangisi doğrudur?',
      opts: ['`$premium` bir metindir (string).', '`$premium` bool türündedir, değeri doğru (true).', '`$premium` bir tam sayıdır.', '`true` tırnak içinde yazılmalıdır.', 'Tanımlarken tür yazılmalıdır: `bool $premium`.'], a: 1,
      exp: '`true` / `false` bool değerleridir. Tırnak içine alınırsa `"true"` metin olur.' },
    { type: 'mc', q: '`$minutes = "16";` satırından sonra `$minutes === 16` ifadesinin sonucu nedir?',
      opts: ['`true`', '`false`', '`16`', '`"16"`', 'Hata verir'], a: 1,
      exp: 'false. Tırnak içindeki "16" metindir; karşıdaki 16 tam sayıdır. `===` türü de kontrol eder.', check: { php: '$minutes = "16"; var_export($minutes === 16);', expect: 'false' } },
    { type: 'mc', q: '`$Toplam` ve `$toplam` için hangisi doğrudur?',
      opts: ['Aynı değişkendir.', 'Farklı değişkenlerdir; değişken adları büyük/küçük harfe duyarlıdır.', 'İkisi de geçersizdir.', 'Yalnızca `$Toplam` geçerlidir.', 'PHP ikisini birleştirir.'], a: 1,
      exp: '`$quantity` ile `$Quantity` farklı değişkenlerdir; yanlış yazım “Undefined variable” uyarısına yol açar.' },
    { type: 'fill', q: 'Değişkenin türünü ve değerini birlikte gösteren fonksiyonu yaz.',
      code: `$adet = 4;
____($adet);    // int(4)`,
      ans: ['var_dump'], exp: '`var_dump` → `int(4)`', check: { expect: 'int(4)' } }
  ],

  atama: [
    { type: 'mc', q: 'Tarayıcıda ne görünür?',
      code: `$minutes = 14;
$minutes - 3;
$minutes += 2;
echo "Süre: " . $minutes;`,
      opts: ['`Süre: 13`', '`Süre: 16`', '`Süre: 11`', '`Süre: 14`', '`Süre: 142`'], a: 1,
      exp: 'İkinci satır 11’i hesaplar ama hiçbir yere atamaz. Üçüncü satır 14’e 2 ekler: 16.', check: 'out' },
    { type: 'mc', q: 'İkinci satır `$minutes -= 3;` olursa çıktı ne olur?',
      code: `$minutes = 14;
$minutes -= 3;
$minutes += 2;
echo "Süre: " . $minutes;`,
      opts: ['`Süre: 13`', '`Süre: 16`', '`Süre: 11`', '`Süre: 14`', '`Süre: 9`'], a: 0,
      exp: 'Önce 14’ten 3 çıkarılıp 11 saklanır, ardından 2 eklenir: 13.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$x = 10;
$x = $x + 5;
$x -= 3;
echo $x;`,
      opts: ['`10`', '`12`', '`15`', '`7`', '`18`'], a: 1, exp: '10 + 5 = 15, sonra 15 − 3 = 12.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `echo 2 + 3 * 4;`,
      opts: ['`20`', '`14`', '`24`', '`9`', '`234`'], a: 1,
      exp: 'Önce çarpma: 3 × 4 = 12, sonra 2 + 12 = 14. Önce toplama için `(2 + 3) * 4` yazılırdı → 20.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `echo 7 % 2;`,
      opts: ['`3`', '`3.5`', '`1`', '`0`', '`14`'], a: 2, exp: '`%` bölümden kalanı verir: 7 = 2 × 3 + 1 → 1.', check: 'out' },
    { type: 'mc', q: '`$total += 15;` hangisiyle aynı işi yapar?',
      opts: ['`$total = 15;`', '`$total + 15;`', '`$total = $total + 15;`', '`$total == $total + 15;`', '`15 = $total;`'], a: 2,
      exp: '`+=` mevcut değere ekler ve sonucu aynı değişkene yazar.' },
    { type: 'mc', q: 'Hangi satır çalıştıktan sonra `$stock` değeri **değişmez**?',
      code: `$stock = 24;`,
      opts: ['`$stock -= 5;`', '`$stock = $stock - 5;`', '`$stock - 5;`', '`$stock--;`', '`$stock += 1;`'], a: 2,
      exp: '`$stock - 5;` sadece hesaplar, sonucu hiçbir değişkene atamaz.' },
    { type: 'fill', q: '`$score` değerine 10 ekle ve sonucu aynı değişkende sakla (kısa yazım).',
      code: `$score = 40;
$score ____ 10;
echo $score;    // 50`,
      ans: ['+='], exp: '`+=` → `$score = $score + 10`', check: { expect: '50' } },
    { type: 'fill', q: 'Değişkeni bir azalt.',
      code: `$kalan = 3;
$kalan____;
echo $kalan;    // 2`,
      ans: ['--'], exp: '`--` değeri bir azaltır.', check: { expect: '2' } }
  ],

  yazdirma: [
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$room = "B";
$label = "Stüdyo " . $room;
echo $label;`,
      opts: ['`Stüdyo B`', '`StüdyoB`', '`Stüdyo . B`', '`Stüdyo room`', '`B Stüdyo`'], a: 0,
      exp: 'Nokta metinleri birleştirir. Boşluk `"Stüdyo "` metninin içinde olduğu için çıktı `Stüdyo B`.', check: 'out' },
    { type: 'mc', q: 'PHP’de iki metni birleştiren operatör hangisidir?',
      opts: ['`+`', '`&`', '`.`', '`,`', '`&&`'], a: 2, exp: 'Nokta (`.`). `+` sayıları toplar, `&&` mantıksal VE’dir.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `echo "Toplam: " . (4 * 3) . " dk";`,
      opts: ['`Toplam: 12 dk`', '`Toplam: 4 * 3 dk`', '`Toplam: 43 dk`', '`Toplam: (4 * 3) dk`', '`Toplam: 7 dk`'], a: 0,
      exp: 'Parantez içindeki işlem önce hesaplanır (12), sonra metinlerle birleştirilir.', check: 'out' },
    { type: 'mc', q: 'Tarayıcıda nasıl görünür?',
      code: `for ($i = 1; $i <= 3; $i++) {
    echo "Parça " . $i . "<br>";
}`,
      opts: ['`Parça 1 Parça 2 Parça 3` (tek satır)', 'Üç ayrı satır: `Parça 1`, `Parça 2`, `Parça 3`', '`Parça 123`', 'Yalnızca `Parça 3`', '`Parça 1<br>Parça 2<br>Parça 3` (etiketler görünür)'], a: 1,
      exp: '`<br>` tarayıcıda alt satıra geçirir; etiketin kendisi görünmez.' },
    { type: 'mc', q: 'Tarayıcıda ne görünür?',
      code: `echo "A";
echo "B";`,
      opts: ['`A` ve `B` alt alta', '`AB`', '`A B`', '`BA`', '`A.B`'], a: 1,
      exp: 'Kodda alt alta yazmak tarayıcıda alt satıra geçirmez. Alt satır için `<br>` gerekir.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$total = 0;
for ($i = 1; $i <= 3; $i++) {
    $total += 5;
}
echo "Toplam: " . $total;`,
      opts: ['`Toplam: 5Toplam: 10Toplam: 15`', '`Toplam: 15`', '`Toplam: 5`', '`Toplam: 0`', '`Toplam: 555`'], a: 1,
      exp: 'echo döngünün dışında olduğu için yalnızca bir kez, son değerle çalışır.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$a = "5";
$b = "3";
echo $a . $b;`,
      opts: ['`8`', '`53`', '`5 3`', '`5.3`', '`2`'], a: 1,
      exp: 'Nokta toplama yapmaz, yan yana birleştirir: `53`.', check: 'out' },
    { type: 'fill', q: 'Metin ile sayıyı birleştir.',
      code: `$sum = 10;
echo "Adet: " ____ $sum;`,
      ans: ['.', 'nokta'], exp: 'Nokta (`.`) → `Adet: 10`', check: { expect: 'Adet: 10' } },
    { type: 'fill', q: 'Tarayıcıda alt satıra geçiren HTML etiketini yaz.',
      code: `echo "Satır 1" . "____";
echo "Satır 2";`,
      ans: ['<br>', '<br/>', '<br />'], exp: '`<br>`. Kodda Enter’a basmak tarayıcıda alt satıra geçirmez.' }
  ],

  karsilastirma: [
    { type: 'mc', q: 'Hangisi `true` döner?',
      code: `$adet = "3";`,
      opts: ['`$adet === 3`', '`$adet == 3`', '`$adet !== "3"`', '`$adet < 3`', '`$adet > 3`'], a: 1,
      exp: '`==` yalnızca değere bakar: "3" ile 3 eşittir. `===` tür farkı yüzünden false.', check: { truthy: true } },
    { type: 'mc', q: '`$a !== $b` ifadesinin sonucu nedir?',
      code: `$a = "10";
$b = 10;`,
      opts: ['`true`', '`false`', '`10`', '`"10"`', 'Hata verir'], a: 0,
      exp: '`!==` değer **veya** tür farklıysa true döner. Değerler aynı ama türler farklı (string / int).', check: { php: '$a = "10"; $b = 10; var_export($a !== $b);', expect: 'true' } },
    { type: 'mc', q: 'Koşul hangi değer için **çalışmaz**?',
      code: `if ($hours < 8) { echo "Kısa"; }`,
      opts: ['`0`', '`5`', '`7`', '`8`', '`7.5`'], a: 3,
      exp: '`<` sınırı dahil etmez: `8 < 8` yanlış. 8’i de seçmek için `<=` gerekir.', check: { v: '$hours', expect: '' } },
    { type: 'mc', q: '`=`, `==` ve `===` için hangisi doğrudur?',
      opts: ['`=` iki değeri karşılaştırır.', '`==` türü de kontrol eder.', '`===` hem değeri hem türü kontrol eder.', '`===` değişkene değer atar.', '`==` değişkene değer atar.'], a: 2,
      exp: '`=` atama, `==` değer karşılaştırma, `===` değer + tür karşılaştırma.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$x = 5;
if ($x = 10) {
    echo $x;
}`,
      opts: ['`5`', '`10`', 'Hiçbir şey', '`true`', '`1`'], a: 1,
      exp: 'Koşuldaki tek `=` atamadır: `$x`’e 10 yazılır ve 10 doğru kabul edildiği için blok çalışır. Karşılaştırma için `==` / `===` gerekirdi.', check: 'out' },
    { type: 'mc', q: 'Karşılaştırma ifadelerinin sonucu hangi türdedir?',
      opts: ['string', 'int', 'bool (`true` / `false`)', 'float', 'array'], a: 2, exp: 'Her karşılaştırma true ya da false üretir.' },
    { type: 'fill', q: '8 ve altını seç; tam 8 dahil.',
      code: `if ($hours ____ 8) { echo "Uygun"; }`,
      ans: ['<='], exp: '`<=` sınırı dahil eder.', check: { pre: '$hours = 8;', expect: 'Uygun' } },
    { type: 'fill', q: '50’den büyük fiyatları seç; tam 50 dahil değil.',
      code: `if ($price ____ 50) { echo "Pahalı"; }`,
      ans: ['>'], exp: '`>`. `>=` yazılırsa tam 50 de seçilir.', check: { pre: '$price = 51;', expect: 'Pahalı' } }
  ],

  mantiksal: [
    { type: 'mc', q: 'Hangi süre **reddedilir** (Uygun yazılmaz)?',
      code: `if ($minutes >= 15 && $minutes <= 45) { echo "Uygun"; }`,
      opts: ['`15`', '`30`', '`45`', '`46`', '`20`'], a: 3,
      exp: '46 alt sınırı sağlar ama üst sınırı (<= 45) sağlamaz. `&&` ikisini birden ister. 15 ve 45 dahildir.', check: { v: '$minutes', expect: '' } },
    { type: 'mc', q: 'Kabul koşulunda `&&` yerine `||` yazılırsa 46 neden kabul edilir?',
      code: `if ($minutes >= 15 || $minutes <= 45) { echo "Uygun"; }`,
      opts: ['Çünkü 46 üst sınırı aşmaz.', 'Çünkü `46 >= 15` doğrudur ve `||` için bir koşulun doğru olması yeterlidir.', 'Çünkü `||` iki koşulun da doğru olmasını ister.', 'Çünkü PHP sınırları otomatik genişletir.', 'Kabul edilmez, reddedilir.'], a: 1,
      exp: '46 üst sınırı aşar ama alt sınır koşulu doğrudur. `||` için bu yeterlidir.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$premium = true;
$kalanHak = 0;
if ($premium && $kalanHak > 0) {
    echo "İndirme başlayabilir.";
} else {
    echo "İndirme yapılamaz.";
}`,
      opts: ['`İndirme başlayabilir.`', '`İndirme yapılamaz.`', 'İkisi birden', 'Hiçbir şey', 'Hata verir'], a: 1,
      exp: 'Premium olmak yetmez: `0 > 0` yanlış, `&&` false olur → else.', check: 'out' },
    { type: 'mc', q: 'Stok 1–4 arasında **değilse** ürünü atlamak istiyoruz (stok tam sayı). Hangi koşul doğrudur?',
      opts: ['`$stok <= 0 && $stok >= 5`', '`$stok <= 0 || $stok >= 5`', '`$stok > 0 && $stok < 5`', '`$stok > 0 || $stok < 5`', '`!$stok`'], a: 1,
      exp: 'Aralık dışı → `||`. `&&` yazılırsa hiçbir sayı aynı anda hem ≤ 0 hem ≥ 5 olamaz.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$yeniUye = true;
$denemeKullandi = false;
if ($yeniUye && !$denemeKullandi) {
    echo "Deneme açıldı.";
} else {
    echo "Deneme açılamaz.";
}`,
      opts: ['`Deneme açıldı.`', '`Deneme açılamaz.`', 'İkisi birden', 'Hiçbir şey', 'Hata verir'], a: 0,
      exp: '`!false` → true. true && true → true.', check: 'out' },
    { type: 'mc', q: 'Hangisinin sonucu `true`’dur?',
      opts: ['`true && false`', '`false || false`', '`!true`', '`false && true`', '`true || false`'], a: 4,
      exp: '`||` için biri doğruysa yeter.', check: { truthy: true } },
    { type: 'mc', q: '`$delivery = "express";` iken ne yazılır?',
      code: `if ($delivery !== "standard" && $delivery !== "express") {
    echo "Geçersiz teslimat";
}`,
      opts: ['`Geçersiz teslimat`', 'Hiçbir şey yazılmaz', '`express`', '`standard`', 'Hata verir'], a: 1,
      exp: 'express için ilk koşul doğru, ikinci yanlış → `&&` yanlış. Burada `||` yazılsaydı iki geçerli değer de reddedilirdi.', check: { php: '$delivery = "express"; if ($delivery !== "standard" && $delivery !== "express") { echo "Geçersiz teslimat"; }', expect: '' } },
    { type: 'fill', q: 'Bileti varsa **ve** yaşı 18 ya da üstüyse giriş yazılsın.',
      code: `if ($hasTicket ____ $age >= 18) { echo "Giriş"; }`,
      ans: ['&&'], exp: '`&&`: iki koşul birden doğru olmalı.', check: { pre: '$hasTicket = true; $age = 20;', expect: 'Giriş' } },
    { type: 'fill', q: 'Hafta sonu **veya** tatilse “Kapalı” yazılsın.',
      code: `if ($isWeekend ____ $isHoliday) { echo "Kapalı"; }`,
      ans: ['||'], exp: '`||`: biri doğruysa yeter.', check: { pre: '$isWeekend = true; $isHoliday = false;', expect: 'Kapalı' } },
    { type: 'fill', q: 'Koşulu tersine çeviren operatörü yaz: liste boş **değilse**.',
      code: `if (____$isEmpty) { echo "Liste dolu"; }`,
      ans: ['!'], exp: '`!` true’yu false’a, false’u true’ya çevirir.', check: { pre: '$isEmpty = false;', expect: 'Liste dolu' } }
  ],

  kosullar: [
    { type: 'mc', q: 'Hangi mesaj yazılır?',
      code: `$score = 85;
if ($score >= 85) { echo "A"; }
elseif ($score >= 70) { echo "B"; }
else { echo "C"; }`,
      opts: ['`A`', '`B`', '`AB`', '`C`', '`ABC`'], a: 0,
      exp: '85 >= 85 doğru → A. İlk doğru daldan sonra diğerleri denenmez, bu yüzden AB olmaz.', check: 'out' },
    { type: 'mc', q: 'Hangi mesaj yazılır?',
      code: `$minutes = 50;
if ($minutes >= 15) { echo "Kısa"; }
elseif ($minutes >= 45) { echo "Uzun"; }`,
      opts: ['`Kısa`', '`Uzun`', '`KısaUzun`', '`UzunKısa`', 'Hiçbir şey'], a: 0,
      exp: 'İlk dal çalışır. 45 ve üzerini ayrı sınıflandırmak için yüksek eşik önce sınanmalıydı.', check: 'out' },
    { type: 'mc', q: 'if–elseif–else zincirinde en fazla kaç dal çalışır?',
      opts: ['Hiçbiri, her zaman', 'Bir', 'İki', 'Koşulu doğru olan her dal', 'Hepsi'], a: 1,
      exp: 'Yalnızca ilk doğru koşulun dalı (ya da hiçbiri doğru değilse else) çalışır.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$standart = 120;
$ogrenci = true;
if ($ogrenci === true) {
    $ucret = $standart - 30;
} else {
    $ucret = $standart;
}
echo "Ücret: " . $ucret . " TL";`,
      opts: ['`Ücret: 120 TL`', '`Ücret: 90 TL`', '`Ücret: 30 TL`', '`Ücret: 150 TL`', '`Ücret: 12030 TL`'], a: 1,
      exp: 'Koşul doğru → 120 − 30 = 90. Son echo her iki durumda da çalışır.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$toplam = 1000;
if ($toplam > 1000) {
    $kargo = 0;
} else {
    $kargo = 80;
}
echo "Kargo: " . $kargo;`,
      opts: ['`Kargo: 0`', '`Kargo: 80`', '`Kargo: 1000`', '`Kargo: 1080`', 'Hiçbir şey'], a: 1,
      exp: '`1000 > 1000` yanlış → else. Tam 1000’de ücretsiz olsun isteniyorsa `>=` yazılmalı.', check: 'out' },
    { type: 'mc', q: 'Hangi değer için “Sıfır” yazılır?',
      code: `if ($n > 0) { echo "Pozitif"; }
elseif ($n < 0) { echo "Negatif"; }
else { echo "Sıfır"; }`,
      opts: ['`-1`', '`0`', '`1`', '`5`', '`-5`'], a: 1,
      exp: '0 için iki koşul da yanlış → else.', check: { v: '$n', expect: 'Sıfır' } },
    { type: 'fill', q: 'Önceki koşul yanlışsa yeni bir koşul sınayan anahtar kelimeyi yaz.',
      code: `if ($n > 0) { echo "Pozitif"; }
____ ($n < 0) { echo "Negatif"; }
else { echo "Sıfır"; }`,
      ans: ['elseif', 'else if'], exp: '`elseif` (ya da `else if`).', check: { pre: '$n = -3;', expect: 'Negatif' } },
    { type: 'fill', q: 'Hiçbir koşul doğru değilse çalışacak bloğun anahtar kelimesini yaz.',
      code: `if ($stock > 0) { echo "Var"; }
____ { echo "Tükendi"; }`,
      ans: ['else'], exp: '`else`', check: { pre: '$stock = 0;', expect: 'Tükendi' } }
  ],

  donguler: [
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$total = 0;
for ($round = 1; $round <= 3; $round++) {
    $total += $round + 1;
}
echo $total;`,
      opts: ['`6`', '`9`', '`12`', '`3`', '`234`'], a: 1,
      exp: 'Turlarda 2, 3, 4 eklenir: toplam 2 → 5 → 9. echo döngünün dışında, yalnızca 9 yazılır.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$position = 1;
while ($position < 8) {
    echo $position . " ";
    $position += 3;
}`,
      opts: ['`1 4 7`', '`1 4 7 10`', '`1 2 3 4 5 6 7`', '`4 7`', '`1`'], a: 0,
      exp: '1, 4, 7 yazılır. Değer 10 olunca `10 < 8` yanlış, 10 yazılmaz.', check: 'out' },
    { type: 'mc', q: 'Döngü bittiğinde `$position` kaçtır?',
      code: `$position = 1;
while ($position < 8) {
    $position += 3;
}`,
      opts: ['`7`', '`8`', '`10`', '`1`', '`13`'], a: 2,
      exp: 'Son güncellemeden sonra 10 olur; koşul yanlış olduğu için döngü biter.', check: { php: '$position = 1; while ($position < 8) { $position += 3; } echo $position;', expect: '10' } },
    { type: 'mc', q: '`for ($i = 1; $i <= 3; $i++)` döngüsünde gövde kaç kez çalışır, koşul kaç kez kontrol edilir?',
      opts: ['3 / 3', '3 / 4', '4 / 4', '2 / 3', '4 / 3'], a: 1,
      exp: 'Koşul 1, 2, 3 için doğru (3 tur), 4 için de bir kez daha kontrol edilir ve yanlış çıkar.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$birikim = 300;
$hafta = 0;
while ($birikim < 300) {
    $birikim += 100;
    $hafta++;
}
echo "Ek hafta: " . $hafta;`,
      opts: ['`Ek hafta: 0`', '`Ek hafta: 1`', '`Ek hafta: 3`', '`Ek hafta: 300`', 'Döngü bitmez'], a: 0,
      exp: 'Koşul baştan yanlış (300 < 300) → gövdeye hiç girilmez. while sıfır tur çalışabilir.', check: 'out' },
    { type: 'mc', q: 'Bu kodun sorunu nedir?',
      code: `$kalan = 3;
while ($kalan > 0) {
    echo "Kalan: " . $kalan . "<br>";
}`,
      opts: ['Sözdizimi hatası var.', '`$kalan` hiç azalmadığı için döngü bitmez; gövdeye `$kalan--;` eklenmeli.', 'Döngü hiç çalışmaz.', 'Yalnızca bir kez çalışır.', 'Sorun yok; 3, 2, 1 yazar.'], a: 1,
      exp: 'Koşuldaki değişken gövdede değişmezse koşul hep doğru kalır: sonsuz döngü.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `for ($i = 10; $i > 0; $i -= 4) {
    echo $i . " ";
}`,
      opts: ['`10 6 2`', '`10 6 2 -2`', '`10 6`', '`6 2`', '`10 9 8 7`'], a: 0,
      exp: '10, 6, 2 yazılır; sonra −2 olur ve `-2 > 0` yanlış.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$out = "";
for ($i = 1; $i <= 3; $i++) {
    $out = $out . $i;
}
echo $out;`,
      opts: ['`6`', '`123`', '`3`', '`321`', '`1`'], a: 1,
      exp: 'Nokta birleştirir: "" → "1" → "12" → "123".', check: 'out' },
    { type: 'mc', q: 'Hangi durumda `while` daha uygun bir seçimdir?',
      opts: ['1’den 10’a kadar numara üretmek', 'Birikim 300 TL’ye ulaşana kadar her hafta 100 TL eklemek', 'Bir dizideki her elemanı yazdırmak', 'Tam 3 kez çalışan bir döngü', 'Hiçbiri; while kullanılmaz'], a: 1,
      exp: 'Devam koşulu doğrudan hedefi anlatıyorsa while. Sayısal aralık için for, dizi için foreach.' },
    { type: 'fill', q: '20, 40, 60 yazdırması için sayacı her turda 20 artır.',
      code: `for ($ses = 20; $ses <= 60; $ses ____ 20) {
    echo $ses . " ";
}`,
      ans: ['+='], exp: '`+=` → `$ses = $ses + 20`', check: { expect: '20 40 60' } },
    { type: 'fill', q: 'Döngü 1’den 5’e kadar (5 dahil) çalışsın.',
      code: `for ($i = 1; $i ____ 5; $i++) {
    echo $i;
}`,
      ans: ['<='], exp: '`<=` 5’i dahil eder: 12345.', check: { expect: '12345' } }
  ],

  sayac: [
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$prices = [450, 1200, 300];
foreach ($prices as $price) {
    $total = 0;
    $total += $price;
}
echo $total;`,
      opts: ['`1950`', '`300`', '`450`', '`0`', '`1500`'], a: 1,
      exp: 'Toplam her turda sıfırlanıyor; sadece son ekleme (300) kalır. `$total = 0;` döngünün üstüne taşınmalı.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$fiyatlar = [450, 1200, 300];
$toplam = 0;
$adet = 0;
foreach ($fiyatlar as $fiyat) {
    $toplam += $fiyat;
    $adet++;
}
echo $adet . " / " . $toplam;`,
      opts: ['`3 / 1950`', '`1950 / 3`', '`1 / 300`', '`3 / 300`', '`0 / 0`'], a: 0,
      exp: 'Sayaç ürün sayısını (3), toplam fiyatları (1950) tutar.', check: 'out' },
    { type: 'mc', q: 'Soru 17’de üçüncü boşluğa `+=` yerine `=` yazılsaydı ne görünürdü?',
      code: `$orders = [
    ["status" => "hazır", "minutes" => 3],
    ["status" => "hazırlıkta", "minutes" => 7],
    ["status" => "hazırlıkta", "minutes" => 10]
];
$total = 0;
foreach ($orders as $order) {
    if ($order["status"] === "hazırlıkta") {
        $total = $order["minutes"];
    }
}
echo "Toplam: " . $total . " dk";`,
      opts: ['`Toplam: 17 dk`', '`Toplam: 10 dk`', '`Toplam: 7 dk`', '`Toplam: 20 dk`', '`Toplam: 0 dk`'], a: 1,
      exp: '`=` her yeni değeri öncekinin üzerine yazar; son siparişin süresi (10) kalır.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$bins = [
    ["open" => true,  "units" => 4],
    ["open" => false, "units" => 9],
    ["open" => true,  "units" => 6]
];
$sum = 0;
foreach ($bins as $bin) {
    if ($bin["open"]) {
        $sum += $bin["units"];
    }
}
echo "Adet: " . $sum;`,
      opts: ['`Adet: 19`', '`Adet: 10`', '`Adet: 4`', '`Adet: 2`', '`Adet: 6`'], a: 1,
      exp: 'Yalnızca açık raflar toplanır: 4 + 6 = 10.', check: 'out' },
    { type: 'mc', q: 'Toplama satırı if bloğunun dışına (döngünün içine) taşındı. Ekranda ne görünür?',
      code: `$bins = [
    ["open" => true,  "units" => 4],
    ["open" => false, "units" => 9],
    ["open" => true,  "units" => 6]
];
$sum = 0;
foreach ($bins as $bin) {
    if ($bin["open"]) {
        echo "Açık ";
    }
    $sum += $bin["units"];
}
echo "Adet: " . $sum;`,
      opts: ['`Açık Açık Adet: 19`', '`Açık Açık Adet: 10`', '`Adet: 19`', '`Açık Adet: 4`', '`Açık Açık Adet: 9`'], a: 0,
      exp: 'Toplama artık rafın açık olup olmamasından bağımsız: 4 + 9 + 6 = 19. if yalnızca “Açık” yazısını etkiler.', check: 'out' },
    { type: 'mc', q: 'Sayaç ile toplam arasındaki fark hangisidir?',
      opts: ['Sayaç kaç kaydın eşleştiğini, toplam bu kayıtlardaki miktarı tutar.', 'İkisi aynı şeydir.', 'Sayaç `+=`, toplam `++` ile güncellenir.', 'Sayaç döngüden önce, toplam döngü içinde başlatılır.', 'Toplam yalnızca for döngüsünde kullanılır.'], a: 0,
      exp: 'Kitapçık: “Sayaç kaç kaydın eşleştiğini, toplam ise bu kayıtlardaki miktarı söyler.”' },
    { type: 'mc', q: 'Hiç uygun film yoksa “Uygun film yok” mesajı nerede kontrol edilmelidir?',
      opts: ['foreach’in içinde, her turda', 'foreach bittikten sonra: `if ($matchCount === 0)`', 'foreach’ten önce', 'Fiyat koşulunun (if) içinde', 'Hiçbir yerde; PHP otomatik yazar'], a: 1,
      exp: 'Bütün kayıtlar incelenmeden karar verilemez; kontrol döngüden sonra yapılır.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$sum = 0;
for ($i = 1; $i <= 4; $i++) {
    $sum += $i;
    echo $sum . " ";
}`,
      opts: ['`1 3 6 10`', '`10`', '`1 2 3 4`', '`0 1 3 6`', '`4 3 2 1`'], a: 0,
      exp: 'echo döngünün içinde: her turda ara toplam yazılır.', check: 'out' },
    { type: 'fill', q: 'Sayacı bir artır.',
      code: `$count = 0;
foreach ([3, 8, 5] as $n) {
    $count____;
}
echo $count;`,
      ans: ['++'], exp: '`++` her turda bir artırır → 3.', check: { expect: '3' } },
    { type: 'fill', q: 'Toplamın döngüden önceki başlangıç değerini yaz.',
      code: `$total = ____;
foreach ([3, 8, 5] as $n) {
    $total += $n;
}
echo $total;    // 16`,
      ans: ['0'], exp: '`0`: toplam sıfırdan başlar.', check: { expect: '16' } }
  ],

  diziler: [
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$fiyatlar = [450, 1200, 300];
echo $fiyatlar[2];`,
      opts: ['`450`', '`1200`', '`300`', '`3`', '`2`'], a: 2, exp: 'İndeksler 0, 1, 2. `[2]` üçüncü elemandır: 300.', check: 'out' },
    { type: 'mc', q: '`$fiyatlar = [450, 1200, 300];` dizisinin son indeksi ve eleman sayısı nedir?',
      opts: ['Son indeks 3, eleman sayısı 3', 'Son indeks 2, eleman sayısı 3', 'Son indeks 2, eleman sayısı 2', 'Son indeks 3, eleman sayısı 2', 'Son indeks 1, eleman sayısı 3'], a: 1,
      exp: '3 eleman olması 3 numaralı eleman olduğu anlamına gelmez; indeks 0’dan başlar.' },
    { type: 'mc', q: 'İkinci odanın adını döngü kurmadan hangi ifade verir?',
      code: `$sessions = [
    ["room" => "A", "minutes" => 18],
    ["room" => "B", "minutes" => 25]
];`,
      opts: ['`$sessions[2]["room"]`', '`$sessions[1]["room"]`', '`$sessions["room"][1]`', '`$sessions[1]["minutes"]`', '`$sessions[0]["room"]`'], a: 1,
      exp: 'İkinci kayıt `[1]`, alan `["room"]` → B.', check: { value: "'B'" } },
    { type: 'mc', q: '1200 değerini hangi ifade verir?',
      code: `$urun = ["ad" => "Klavye", "fiyat" => 1200];`,
      opts: ['`$urun[1200]`', '`$urun["Fiyat"]`', '`$urun["fiyat"]`', '`$urun[0]`', '`$urun["ad"]`'], a: 2,
      exp: 'Anahtar adı birebir aynı yazılmalı: `"fiyat"`. `"Fiyat"` farklı bir anahtardır.', check: { value: '1200' } },
    { type: 'mc', q: '“Sarı” değerini hangi ifade verir?',
      code: `$rooms = [
    ["name" => "Mavi", "floor" => 2],
    ["name" => "Sarı", "floor" => 1]
];`,
      opts: ['`$rooms[1]["name"]`', '`$rooms["name"][1]`', '`$rooms[2]["name"]`', '`$rooms[0]["name"]`', '`$rooms["Sarı"]`'], a: 0,
      exp: 'Önce kayıt (`[1]`), sonra alan (`["name"]`).', check: { value: "'Sarı'" } },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$rooms = [
    ["name" => "Mavi", "floor" => 2],
    ["name" => "Sarı", "floor" => 1]
];
echo $rooms[1]["floor"] + $rooms[0]["floor"];`,
      opts: ['`3`', '`21`', '`12`', '`2`', '`1`'], a: 0, exp: '1 + 2 = 3.', check: 'out' },
    { type: 'mc', q: 'Bir kaydın tamamı `echo $urun;` ile yazdırılmak istenirse ne olur?',
      opts: ['Bütün alanlar sırayla yazılır.', '“Array to string conversion” uyarısı oluşur; önce alan seçilmelidir (ör. `$urun["ad"]`).', 'Yalnızca ilk alan yazılır.', 'Boş metin yazılır, uyarı olmaz.', 'Dizi silinir.'], a: 1,
      exp: 'Dizinin tamamı metin gibi yazdırılamaz.' },
    { type: 'fill', q: 'Ankara’yı seçen indeksi yaz.',
      code: `$cities = ["İzmir", "Ankara", "Bursa"];
echo $cities[____];`,
      ans: ['1'], exp: '`1`. İzmir 0, Ankara 1, Bursa 2.', check: { expect: 'Ankara' } },
    { type: 'fill', q: 'Anahtarı değere bağlayan işareti yaz.',
      code: `$urun = ["ad" ____ "Mouse", "fiyat" => 450];`,
      ans: ['=>'], exp: '`=>`', check: { post: 'echo $urun["ad"];', expect: 'Mouse' } },
    { type: 'fill', q: 'Dizideki eleman sayısını veren fonksiyonu yaz.',
      code: `$fiyatlar = [450, 1200, 300];
echo ____($fiyatlar);    // 3`,
      ans: ['count'], exp: '`count()` eleman sayısını verir.', check: { expect: '3' } }
  ],

  foreach: [
    { type: 'mc', q: 'Tarayıcıda ne görünür?',
      code: `$fiyatlar = [450, 1200, 300];
foreach ($fiyatlar as $fiyat) {
    echo $fiyat . " TL<br>";
}`,
      opts: ['Alt alta: `450 TL`, `1200 TL`, `300 TL`', 'Tek satırda: `1950 TL`', 'Yalnızca `300 TL`', 'Yalnızca `450 TL`', '`Array TL`'], a: 0,
      exp: 'Her turda sıradaki fiyat `$fiyat`’a gelir ve yazılır; `<br>` alt satıra geçirir.' },
    { type: 'mc', q: '`foreach ($rooms as $room)` satırında `as` ne yapar?',
      opts: ['Diziyi kopyalar.', 'Sıradaki elemanı her turda `$room` değişkenine aktarır.', 'Dizinin eleman sayısını verir.', 'Döngüyü durdurur.', 'Dizinin sonuna eleman ekler.'], a: 1,
      exp: '`as` PHP’nin anahtar kelimesidir; `$room` adını biz seçeriz.' },
    { type: 'mc', q: 'Tarayıcıda ne görünür?',
      code: `$sessions = [
    ["room" => "A", "minutes" => 18],
    ["room" => "B", "minutes" => 25]
];
function netMinutes($minutes) {
    return $minutes - 3;
}
foreach ($sessions as $session) {
    echo netMinutes($session["minutes"]) . "<br>";
}`,
      opts: ['Alt alta `15` ve `22`', 'Alt alta `18` ve `25`', 'Tek satırda `37`', 'Tek satırda `43`', 'Alt alta `A` ve `B`'], a: 0,
      exp: 'Her oturumdan 3 düşülür: 15, sonra 22.', check: { php: '$sessions = [["room" => "A", "minutes" => 18], ["room" => "B", "minutes" => 25]]; function netMinutes($minutes) { return $minutes - 3; } foreach ($sessions as $session) { echo netMinutes($session["minutes"]) . "<br>"; }', expect: '15<br>22<br>' } },
    { type: 'mc', q: 'Tarayıcıda ne görünür?',
      code: `$moviePrices = ["Interstellar" => 180, "Barbie" => 250];
foreach ($moviePrices as $movieTitle => $ticketPrice) {
    echo $movieTitle . ": " . $ticketPrice . " TL<br>";
}`,
      opts: ['Alt alta `Interstellar: 180 TL` ve `Barbie: 250 TL`', 'Alt alta `180: Interstellar TL` ve `250: Barbie TL`', 'Alt alta `0: 180 TL` ve `1: 250 TL`', 'Yalnızca `Barbie: 250 TL`', '`Array: Array TL`'], a: 0,
      exp: '`=>` solundaki değişken anahtarı (film adı), sağındaki değeri (fiyat) alır.', check: { php: '$moviePrices = ["Interstellar" => 180, "Barbie" => 250]; foreach ($moviePrices as $movieTitle => $ticketPrice) { echo $movieTitle . ": " . $ticketPrice . " TL<br>"; }', expect: 'Interstellar: 180 TL<br>Barbie: 250 TL<br>' } },
    { type: 'mc', q: 'foreach içinde `$fiyat++` gibi bir sayaç artırmaya gerek var mı?',
      opts: ['Evet, yoksa döngü sonsuz olur.', 'Hayır; foreach sıradaki elemana kendisi geçer.', 'Evet, indeks elle artırılmalıdır.', 'Sadece ilişkisel dizilerde gerekir.', 'Sadece boş dizilerde gerekir.'], a: 1,
      exp: 'for’daki gibi sayaç yönetilmez; foreach bir sonraki kayda kendisi geçer.' },
    { type: 'mc', q: 'Satışların toplamı için eksik satıra ne yazılmalıdır?',
      code: `$satislar = [800, 350, 1250, 600];
$toplam = 0;
foreach ($satislar as $satis) {
    /* eksik satır */
}
echo $toplam;`,
      opts: ['`$toplam += $satislar;`', '`$toplam += $satis;`', '`$satis += $toplam;`', '`$toplam = $satislar;`', '`$satislar += $satis;`'], a: 1,
      exp: '`$satislar` liste, `$satis` o turdaki tek değerdir. Toplama tek değer eklenir → 3000.', check: { sub: '/* eksik satır */', expect: '3000' } },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$liste = [];
foreach ($liste as $x) {
    echo "X";
}
echo "Bitti";`,
      opts: ['`XBitti`', '`Bitti`', '`X`', 'Hata verir', 'Döngü bitmez'], a: 1,
      exp: 'Boş dizide foreach gövdesi hiç çalışmaz.', check: 'out' },
    { type: 'fill', q: 'Her turda bir rafı `$bin` değişkenine alan anahtar kelimeyi yaz.',
      code: `foreach ($bins ____ $bin) {
    echo $bin . " ";
}`,
      ans: ['as'], exp: '`as`', check: { pre: '$bins = ["A1", "B2"];', expect: 'A1 B2' } },
    { type: 'fill', q: 'Gezilecek diziyi yaz.',
      code: `$satislar = [800, 350];
foreach (____ as $satis) {
    echo $satis . " ";
}`,
      ans: ['$satislar'], cs: true, exp: '`$satislar`: as’den önce dizinin tamamı yazılır.', check: { expect: '800 350' } }
  ],

  get: [
    { type: 'mc', q: '`arama.php?shelf=B4` adresinde B4 değerini hangi ifade okur?',
      opts: ['`$_GET["B4"]`', '`$_GET["shelf"]`', '`$_POST["shelf"]`', '`$_GET["arama"]`', '`$_GET["id"]`'], a: 1,
      exp: 'Eşittirin solu anahtar (`shelf`), sağı değer (`B4`).', check: { value: "'B4'", pre: '$_GET = ["shelf" => "B4"]; $_POST = [];' } },
    { type: 'mc', q: 'PHP bu alanın değerini hangi ifadeyle okur?',
      code: `<form method="get">
  <input id="shelfBox" name="shelf">
  <button>Ara</button>
</form>`,
      opts: ['`$_GET["shelfBox"]`', '`$_GET["shelf"]`', '`$_GET["Ara"]`', '`$_POST["shelf"]`', '`$_GET["input"]`'], a: 1,
      exp: 'PHP alanı `name` değeriyle okur. `id` sayfadaki öğeyi tanımlar.' },
    { type: 'mc', q: 'Bu formda yalnızca `id` değeri `rack` yapılırsa PHP satırı (`$_GET["shelf"]`) değişmeli mi?',
      code: `<form method="get">
  <input id="shelfBox" name="shelf">
  <button>Ara</button>
</form>`,
      opts: ['Evet, `$_GET["rack"]` olmalı.', 'Hayır; `name` hâlâ `shelf` olduğu için anahtar değişmez.', 'Evet, `$_GET["shelfBox"]` olmalı.', 'Form artık çalışmaz.', 'PHP `id` ve `name`’i birleştirir.'], a: 1,
      exp: 'Kitapçık s.4: name hâlâ shelf olduğu için anahtar değişmez.' },
    { type: 'mc', q: 'Kullanıcı 250 girip gönderirse adres nasıl biter?',
      code: `<form action="movieResults.php" method="get">
  <input type="number" name="maxBudget">
  <button type="submit">Film bul</button>
</form>`,
      opts: ['`movieResults.php?maxBudget=250`', '`movieResults.php?250=maxBudget`', '`movieResults.php` (veri adreste görünmez)', '`maxBudget.php?movieResults=250`', '`movieResults.php#250`'], a: 0,
      exp: 'GET’te veri adrese eklenir: `action` dosyası + `?name=değer`.' },
    { type: 'mc', q: '`index.php?maxBudget=300&category=music` adresinde kategoriyi hangi ifade okur?',
      opts: ['`$_GET["music"]`', '`$_GET["category"]`', '`$_GET["maxBudget"]`', '`$_GET["index"]`', '`$_POST["category"]`'], a: 1,
      exp: '`&` alanları ayırır. Kategori alanının anahtarı `category`, değeri `music`.', check: { value: "'music'", pre: '$_GET = ["maxBudget" => "300", "category" => "music"]; $_POST = [];' } },
    { type: 'mc', q: 'Adresteki `?zone=kuzey` için hangisi doğrudur?',
      opts: ['`kuzey` anahtar, `zone` değerdir.', '`zone` anahtar, `kuzey` değerdir.', 'İkisi de anahtardır.', '`?` işaretinden önceki dosya adı anahtardır.', 'Değer `zone=kuzey` metninin tamamıdır.'], a: 1,
      exp: 'Eşittirin solu anahtar, sağı değer.' },
    { type: 'mc', q: '`action` yazılmamış bir form gönderildiğinde veri nereye gider?',
      opts: ['Hiçbir yere gitmez.', 'Formun bulunduğu sayfanın kendisine.', 'index.php’ye.', 'Tarayıcıda saklanır.', 'Hata verir.'], a: 1,
      exp: 'action yoksa form aynı sayfaya gönderilir (kitapçıktaki arama.php örneği).' },
    { type: 'fill', q: 'Veriler adres çubuğunda görünecek şekilde gönderilsin.',
      code: `<form method="____" action="ara.php">`,
      ans: ['get'], exp: '`get`. Veriler `ara.php?...` şeklinde adrese eklenir.' },
    { type: 'fill', q: 'GET ile gelen alanı okuyan PHP dizisini yaz.',
      code: `$shelf = ____["shelf"] ?? "";`,
      ans: ['$_GET'], cs: true, exp: '`$_GET`', check: { pre: '$_GET = ["shelf" => "B4"];', post: 'echo $shelf;', expect: 'B4' } }
  ],

  girdi: [
    { type: 'mc', q: 'Sayfa ilk açıldığında (alan gönderilmemişken) `$shelf` değeri nedir?',
      code: `$shelf = $_GET["shelf"] ?? "";`,
      opts: ['`null`', '`""` (boş metin)', '`"shelf"`', '`0`', 'Hata verir'], a: 1,
      exp: 'Alan yok → `??` sağdaki varsayılanı kullanır: boş metin.', check: { php: '$_GET = []; $shelf = $_GET["shelf"] ?? ""; var_export($shelf);', expect: "''" } },
    { type: 'mc', q: '`??` operatörü ne yapar?',
      opts: ['İki değeri karşılaştırır.', 'Sol taraf yoksa veya null ise sağdaki varsayılan değeri kullanır.', 'İki metni birleştirir.', 'Değeri HTML için dönüştürür.', 'Koşulu tersine çevirir.'], a: 1,
      exp: '`$_GET["x"] ?? ""` → alan gelmediyse boş metin.' },
    { type: 'mc', q: '`?age=25` adresiyle açılan sayfada `$age` değeri nedir?',
      code: `$age = $_GET["age"] ?? 0;`,
      opts: ['`0`', '`"25"`', '`null`', '`""`', '`"age"`'], a: 1,
      exp: 'Alan gönderildiği için `??` sağ tarafı kullanılmaz. Adresten gelen değer metin olarak gelir: "25".', check: { php: '$_GET = ["age" => "25"]; $age = $_GET["age"] ?? 0; var_export($age);', expect: "'25'" } },
    { type: 'mc', q: '`htmlspecialchars()` çağrısı, kullanıcının geçerli bir raf kodu girdiğini kanıtlar mı?',
      opts: ['Evet, geçersiz değerleri siler.', 'Hayır; sadece HTML çıktısındaki gösterimi düzenler, geçerliliği ayrı bir koşul denetler.', 'Evet, ENT_QUOTES bunu sağlar.', 'Sadece sayılar için kanıtlar.', 'Evet, UTF-8 parametresi kontrol eder.'], a: 1,
      exp: 'Kitapçık s.4: fonksiyon gösterimi düzenler, geçerliliği ayrı bir koşul denetler.' },
    { type: 'mc', q: 'Formdaki input’ta `required` ve `min="1"` var. PHP tarafında ayrıca kontrol gerekir mi?',
      opts: ['Hayır, tarayıcı kontrolü yeterlidir.', 'Evet; adres elle değiştirilebilir, PHP de değeri kontrol etmelidir.', 'Hayır, PHP bu kuralları otomatik uygular.', 'Sadece POST’ta gerekir.', 'Sadece metin alanlarında gerekir.'], a: 1,
      exp: 'Tarayıcı kuralları atlanabilir (ör. adres çubuğundan `?maxBudget=0`). Sunucu da kontrol etmeli.' },
    { type: 'mc', q: 'Adet 1–10 arasında olmalı. **Geçersiz** adeti yakalayan koşul hangisidir?',
      opts: ['`$q < 1 && $q > 10`', '`$q < 1 || $q > 10`', '`$q >= 1 || $q <= 10`', '`$q > 1 && $q < 10`', '`$q == 1`'], a: 1,
      exp: 'Aralık dışı → `||`. Bir sayı aynı anda hem 1’den küçük hem 10’dan büyük olamaz.' },
    { type: 'mc', q: '15–45 dakika (iki sınır dahil) kabul ediliyor. Koşulu denemek için hangi değerler en anlamlıdır?',
      opts: ['Sadece 30', '14, 15, 45 ve 46 (sınırlar ve hemen dışı)', 'Sadece 0 ve 100', 'Sadece 15', 'Test gerekmez'], a: 1,
      exp: 'Kitapçık s.2’deki sınır testi tablosu: 14 ret, 15 kabul, 45 kabul, 46 ret.' },
    { type: 'fill', q: 'Alan gönderilmediyse boş metin kullanılsın.',
      code: `$name = $_GET["name"] ____ "";`,
      ans: ['??'], exp: '`??`', check: { pre: '$_GET = [];', post: 'var_export($name);', expect: "''" } }
  ],

  fonksiyonlar: [
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `function calculateTotal($unitPrice, $ticketCount) {
    return $unitPrice * $ticketCount;
}
$totalPrice = calculateTotal(240, 3);
echo $totalPrice;`,
      opts: ['`240`', '`3`', '`720`', '`243`', '`2403`'], a: 2, exp: '240 × 3 = 720 döndürülür, sonra yazdırılır.', check: 'out' },
    { type: 'mc', q: '`calculateTotal(240, 3)` çağrısındaki `240` ve `3` nedir?',
      opts: ['Parametre', 'Argüman (çağrıda gönderilen gerçek değerler)', 'Dönüş değeri', 'Değişken adı', 'Sabit'], a: 1,
      exp: 'Tanımdaki `$unitPrice`, `$ticketCount` parametredir; çağrıda gönderilen değerler argümandır.' },
    { type: 'mc', q: '`return` ile `echo` arasındaki fark hangisidir?',
      opts: ['İkisi de aynıdır.', '`return` değeri çağıran koda verir; `echo` sadece ekrana yazar.', '`echo` değeri çağıran koda verir; `return` ekrana yazar.', '`return` sadece döngülerde kullanılır.', '`echo` fonksiyonu bitirir.'], a: 1,
      exp: 'return’ün sonucu başka hesapta kullanılabilir; echo yalnızca çıktı üretir.' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `function hello() {
    echo "Merhaba";
}
echo "Bitti";`,
      opts: ['`MerhabaBitti`', '`Bitti`', '`Merhaba`', '`BittiMerhaba`', 'Hata verir'], a: 1,
      exp: 'Tanım tek başına çalışmaz; `hello()` hiç çağrılmadı.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `$sessions = [
    ["room" => "A", "minutes" => 18],
    ["room" => "B", "minutes" => 25]
];
function netMinutes($minutes) {
    return $minutes - 3;
}
$total = 0;
foreach ($sessions as $session) {
    $total += netMinutes($session["minutes"]);
}
echo $total;`,
      opts: ['`43`', '`37`', '`40`', '`15`', '`22`'], a: 1,
      exp: '15 + 22 = 37. echo döngüden sonra olduğu için tek sonuç yazılır.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `function addTwo($n) {
    return $n + 2;
}
echo addTwo(addTwo(1));`,
      opts: ['`3`', '`5`', '`4`', '`12`', '`1`'], a: 1, exp: 'İçteki çağrı 3, dıştaki 3 + 2 = 5.', check: 'out' },
    { type: 'mc', q: 'Ekranda ne görünür?',
      code: `function total($a, $b) {
    $sum = $a + $b;
}
$x = total(2, 3);
echo "Sonuç: " . $x;`,
      opts: ['`Sonuç: 5`', 'Yalnızca `Sonuç:` (değer boş)', '`Sonuç: 23`', '`Sonuç: 0`', '`Sonuç: $sum`'], a: 1,
      exp: '`return` yok → fonksiyon null döndürür; null metinde boş görünür.', check: { php: 'function total($a, $b) { $sum = $a + $b; } $x = total(2, 3); echo "Sonuç: " . $x;', expect: 'Sonuç:' } },
    { type: 'fill', q: 'Fonksiyon tanımlayan anahtar kelimeyi yaz.',
      code: `____ doubleMinutes($minutes) {
    return $minutes * 2;
}
echo doubleMinutes(5);`,
      ans: ['function'], exp: '`function`', check: { expect: '10' } },
    { type: 'fill', q: 'Hesabın sonucunu çağıran koda ilet.',
      code: `function netMinutes($minutes) {
    ____ $minutes - 3;
}
echo netMinutes(18);`,
      ans: ['return'], exp: '`return` → 15', check: { expect: '15' } }
  ],

  html: [
    { type: 'mc', q: 'Kullanıcı hangi metni görür?',
      code: `echo htmlspecialchars("R&D", ENT_QUOTES, "UTF-8");`,
      opts: ['`RD`', '`R D`', '`R&amp;D`', '`R&D`', '`R ve D`'], a: 3,
      exp: 'Kaynaktaki `&amp;` tarayıcıda `&` olarak gösterilir.' },
    { type: 'mc', q: 'Bu satırın ürettiği **HTML kaynağında** ne bulunur?',
      code: `echo htmlspecialchars("R&D", ENT_QUOTES, "UTF-8");`,
      opts: ['`R&D`', '`R&amp;D`', '`R&lt;D`', '`RD`', '`R&quot;D`'], a: 1,
      exp: '`&` → `&amp;`. Kaynak ile tarayıcı görünümü farklıdır.', check: 'out' },
    { type: 'mc', q: 'Kullanıcı `<i>Raf</i>` yazarsa tarayıcıda ne görünür?',
      code: `echo htmlspecialchars($shelf, ENT_QUOTES, "UTF-8");`,
      opts: ['İtalik yazılmış “Raf”', '`<i>Raf</i>` (etiketlerle birlikte, italik değil)', 'Yalnızca `Raf`', '`&lt;i&gt;Raf&lt;/i&gt;`', 'Hiçbir şey'], a: 1,
      exp: 'Kitapçık s.4: açı işaretleri kaynakta `&lt;` `&gt;` olur; tarayıcıda etiket işaretleriyle birlikte okunur, italik görünmez.' },
    { type: 'mc', q: '`ENT_QUOTES` ne yapar?',
      opts: ['Yalnızca çift tırnağı dönüştürür.', 'Hem tek hem çift tırnağı dönüştürür.', 'Tırnakları siler.', 'Metni UTF-8’e çevirir.', 'Girdiyi doğrular.'], a: 1,
      exp: 'Tek tırnak `&#039;`, çift tırnak `&quot;` olur.' },
    { type: 'mc', q: '`ENT_QUOTES` ile tek tırnak (`\'`) HTML kaynağında neye dönüşür?',
      opts: ['`&quot;`', '`&#039;`', '`&amp;`', '`&lt;`', 'Değişmez'], a: 1,
      exp: '`&#039;`. Çift tırnak ise `&quot;` olur.', check: { php: 'echo htmlspecialchars("\'", ENT_QUOTES, "UTF-8");', expect: '&#039;' } },
    { type: 'mc', q: 'htmlspecialchars kullanmadan `echo "<b>Dune</b>";` yazılırsa tarayıcıda ne görünür?',
      opts: ['`<b>Dune</b>` metni', 'Kalın yazılmış **Dune**', 'Hiçbir şey', '`&lt;b&gt;Dune`', 'Hata verir'], a: 1,
      exp: 'Tarayıcı `<b>` etiketini yorumlar; Dune kalın görünür. Bu yüzden kullanıcı metni dönüştürülerek yazdırılır.' },
    { type: 'mc', q: 'Hangisi `ENT_QUOTES` sabitinin doğru yazımıdır?',
      opts: ['`$ENT_QUOTES`', '`"ENT_QUOTES"`', '`ENT_QUOTES`', '`ent_quotes`', '`Ent_Quotes`'], a: 2,
      exp: 'Hazır PHP sabitidir: `$` ve tırnak kullanılmaz, büyük harfle yazılır.' },
    { type: 'fill', q: 'Hem tek hem çift tırnağı dönüştüren sabiti yaz.',
      code: `echo htmlspecialchars($note, ____, "UTF-8");`,
      ans: ['ENT_QUOTES'], cs: true, exp: '`ENT_QUOTES`', check: { pre: '$note = "\\"";', expect: '&quot;' } },
    { type: 'fill', q: '`>` karakteri HTML kaynağında neye dönüşür?',
      code: `echo htmlspecialchars("5 > 3", ENT_QUOTES, "UTF-8");
// HTML kaynağı: 5 ____ 3`,
      ans: ['&gt;'], exp: '`&gt;` (greater than).' }
  ]
};
