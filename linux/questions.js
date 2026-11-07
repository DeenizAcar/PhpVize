/* Linux soru bankası.
   H: LINUX_CALISMASORULARI'ndaki 90 soru (cevap anahtarı açıklamalarıyla).
   N: aynı konulara ek sorular. Deneme vizeleri ikisinden sabit karıştırmayla seçilir.
   a: doğru şık (A, B, C, D). */
(function () {
  var L = { A: 0, B: 1, C: 2, D: 3 };

  // Sabit tohumlu rastgele sayı üreteci: her açılışta aynı sıra
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function h(no, topic, q, opts, a, exp, code) {
    return { type: 'mc', topic: topic, q: q, code: code, opts: opts, a: L[a], exp: exp, src: 'Çalışma sorusu ' + no, no: no };
  }
  function n(topic, q, opts, a, exp, code) {
    return { type: 'mc', topic: topic, q: q, code: code, opts: opts, a: L[a], exp: exp };
  }

  var H = [
    h(1, 'yardim', 'Bash kabuğunda yerleşik komutlar hakkında yardım almak için hangi komut kullanılır?', ['`which`', '`help`', '`man -a`', '`hostname`'], 'B', '`help`, Bash yerleşik komutlarının yardımını verir.'),
    h(2, 'yardim', '`ls` komutunun kılavuz sayfasını açan komut hangisidir?', ['`manual --ls`', '`ls man`', '`helpfile ls`', '`man ls`'], 'D', '`man`, komutun kılavuz sayfasını açar.'),
    h(3, 'yardim', 'Bir komutun kılavuzdaki kısa açıklamasını görüntüleyen komut hangisidir?', ['`ls -l`', '`whereis ls`', '`whatis ls`', '`which ls`'], 'C', '`whatis` kısa kılavuz açıklamalarını gösterir.'),
    h(4, 'yardim', 'Terminaldeki görüntüyü temizlemek için hangi komut kullanılır?', ['`cls`', '`delete`', '`clear`', '`clean`'], 'C', '`clear` terminal ekranını temizler. `cls` Windows komutudur.'),
    h(5, 'yardim', 'Daha önce girilen komutları listelemek için hangi komut kullanılır?', ['`last`', '`pstree`', '`whoami`', '`history`'], 'D', '`history` mevcut kabuğun komut geçmişini listeler. `last` oturum kayıtlarıdır.'),
    h(6, 'sistem', 'Sistemin bilgisayar adını görüntüleyen komut hangisidir?', ['`pwd`', '`hostname`', '`whoami`', '`uname -r`'], 'B', '`hostname` bilgisayarın ağ adını gösterir.'),
    h(7, 'sistem', 'Sistemin ne kadar süredir çalıştığını öğrenmek için hangi komut kullanılır?', ['`time`', '`uptime`', '`last -1`', '`date`'], 'B', '`uptime` çalışma süresini ve yük ortalamalarını gösterir.'),
    h(8, 'sistem', '`time ls` komutunda `time` hangi bilgiyi ölçer?', ['Bilgisayarın açılış tarihini', 'Sistemin güncel saatini', '`ls` komutunun çalışması için geçen süreyi', 'Dosyaların oluşturulma tarihini'], 'C', '`time`, izleyen komutun yürütme süresini ölçer.'),
    h(9, 'sistem', 'Sistemin güncel tarih ve saatini görüntüleyen komut hangisidir?', ['`date`', '`time`', '`cal`', '`uptime`'], 'A', '`date` güncel tarih ve saati görüntüler.'),
    h(10, 'sistem', 'Geçerli ayın takvimini görüntüleyen komut hangisidir?', ['`cal`', '`last`', '`calendarfile`', '`date -r`'], 'A', '`cal` varsayılan olarak geçerli ayın takvimini gösterir.'),
    h(11, 'sistem', 'Geçmiş oturum açma kayıtlarını incelemek için hangi komut kullanılır?', ['`whoami`', '`jobs`', '`last`', '`history`'], 'C', '`last`, sistemin tuttuğu oturum kayıtlarını listeler.'),
    h(12, 'sistem', '`whoami` komutunun çıktısı aşağıdakilerden hangisidir?', ['Bilgisayarın ağ adı', 'Komutu çalıştıran etkin kullanıcının adı', 'Bağlı bütün kullanıcıların listesi', 'Sistemdeki bütün kullanıcıların parolaları'], 'B', '`whoami` etkin kullanıcı kimliğinin adını gösterir.'),
    h(13, 'sistem', 'Çekirdek ve sistem bilgilerini ayrıntılı görüntülemek için hangi komut kullanılır?', ['`whoami -a`', '`uname -a`', '`hostname -f`', '`uname -d`'], 'B', '`uname -a` mevcut sistem bilgilerini topluca görüntüler.'),
    h(14, 'kaynak', 'Bağlı dosya sistemlerindeki kullanılan ve boş alanı görüntüleyen komut hangisidir?', ['`df`', '`pmap`', '`du -s dosya.txt`', '`free`'], 'A', '`df` dosya sistemi düzeyinde disk alanını raporlar.'),
    h(15, 'kaynak', 'RAM ve takas alanının kullanımını görüntüleyen komut hangisidir?', ['`free`', '`lsmod`', '`file`', '`df`'], 'A', '`free` bellek ve takas kullanımını gösterir.'),
    h(16, 'sistem', 'Dağıtımın kimlik ve sürüm bilgilerini görüntülemek için hangi komut uygundur?', ['`pstree -a`', '`uname -p`', '`ls -a`', '`lsb_release -a`'], 'D', '`lsb_release -a` dağıtım bilgilerini raporlar.'),
    h(17, 'surec', 'Süreçlerin işlemci ve bellek kullanımını sürekli güncellenen görünümde izleyen komut hangisidir?', ['`history`', '`ps`', '`top`', '`pmap`'], 'C', '`top` süreç ve kaynak kullanımını etkileşimli olarak izler. `ps` anlık liste verir.'),
    h(18, 'surec', 'Süreçleri geniş kapsamlı bir anlık liste olarak görmek için hangi komut kullanılır?', ['`ps aux`', '`pmap aux`', '`jobs -a`', '`history aux`'], 'A', '`ps aux` birçok süreç hakkında anlık bilgi verir.'),
    h(19, 'surec', 'Süreçlerin üst süreç ve alt süreç ilişkilerini ağaç biçiminde gösteren komut hangisidir?', ['`lsmod`', '`psmap`', '`treeproc`', '`pstree`'], 'D', '`pstree` süreç hiyerarşisini ağaç olarak gösterir.'),
    h(20, 'surec', 'PID değeri 2450 olan sürecin bellek haritasını gösteren komut hangisidir?', ['`map -pid 2450`', '`pmap 2450`', '`psmap 2450`', '`free 2450`'], 'B', '`pmap PID`, belirtilen sürecin bellek eşlemelerini gösterir.'),
    h(21, 'is', 'Mevcut kabuğun yönettiği arka plan ve durdurulmuş işleri listeleyen komut hangisidir?', ['`jobs`', '`free`', '`last`', '`psall`'], 'A', '`jobs` kabuğun iş tablosunu görüntüler.'),
    h(22, 'is', 'PID değeri 2450 olan sürece varsayılan sonlandırma sinyalini gönderen komut hangisidir?', ['`rm 2450`', '`kill 2450`', '`exit 2450`', '`killall PID`'], 'B', '`kill PID` varsayılan olarak SIGTERM gönderir.'),
    h(23, 'is', '`killall ping` komutunun amacı nedir?', ['Adı ping olan ve sinyal gönderme yetkisi bulunan süreçlere sinyal göndermek', 'Sistemdeki bütün süreçleri koşulsuz kapatmak', 'ping programının dosyasını silmek', 'Yalnızca en son açılan terminali kapatmak'], 'A', '`killall` verilen süreç adına göre eşleşen süreçlere sinyal gönderir.'),
    h(24, 'is', 'Adı ping desenine uyan süreçlere sinyal göndermek için hangi komut uygundur?', ['`pkill ping`', '`jobs ping`', '`stopfile ping`', '`pmap ping`'], 'A', '`pkill` süreç adını desenle eşleştirerek sinyal gönderir.'),
    h(25, 'is', 'Bash içinde 1 numaralı durdurulmuş işi arka planda sürdürmek için boşluğa ne gelmelidir?', ['`bg`', '`ps`', '`killall`', '`fg`'], 'A', '`bg %1` durdurulmuş işi arka planda sürdürür. `fg` ön plana alırdı.', '____ %1'),
    h(26, 'is', 'Bash içinde 2 numaralı işi ön plana getiren komut hangisidir?', ['`ps %2`', '`jobs -2`', '`bg %2`', '`fg %2`'], 'D', '`fg %2` ilgili işi ön plana taşır.'),
    h(27, 'is', '`sleep 20 &` komutunun etkisi nedir?', ['Bilgisayarı 20 dakika sonra kapatır', '20 saniye bekleyen işi arka planda başlatır', '20 süreci sonlandırır', 'Terminal geçmişini temizler'], 'B', '`&` işi arka planda başlatır; `sleep 20` yirmi saniye bekler.'),
    h(28, 'yardim', 'PATH ortam değişkeninin değerini görüntülemek için hangi komut kullanılır?', ['`echo PATH`', '`pwd PATH`', '`echo "$PATH"`', '`cat PATH`'], 'C', 'Kabuk `$PATH` ifadesini değişkenin değeriyle değiştirir. `echo PATH` yalnızca “PATH” kelimesini yazar.'),
    h(29, 'dosya', 'Aşağıdaki komutlardan sonra `not.txt` hangi içeriğe sahiptir?', ['İlk satır Merhaba, ikinci satır Linux', 'Yalnızca Linux', 'Dosya boş kalır', 'Yalnızca Merhaba'], 'A', '`>` dosyaya yazar; `>>` mevcut içeriğin sonuna ekler.', 'echo "Merhaba" > not.txt\necho "Linux" >> not.txt'),
    h(30, 'dizin', 'Geçerli dizindeki dosya ve dizinleri listeleyen komut hangisidir?', ['`pwd`', '`cd`', '`ls`', '`mkdir`'], 'C', '`ls` dizin içeriğini listeler.'),
    h(31, 'dizin', 'Geçerli dizin `/home/ogrenci` iken `cd Belgeler` çalıştırılırsa hangi dizine geçilir?', ['`/home/ogrenci/Belgeler`', '`/home/Belgeler`', '`/Belgeler`', '`/home/ogrenci`'], 'A', 'Göreli yol geçerli dizine göre değerlendirilir.'),
    h(32, 'dizin', 'Çalışılan dizinin tam yolunu ekrana yazdıran komut hangisidir?', ['`pwd`', '`whoami`', '`ls`', '`hostname`'], 'A', '`pwd` geçerli çalışma dizininin yolunu verir.'),
    h(33, 'dizin', 'Uygulama adlı yeni bir dizin oluşturan komut hangisidir?', ['`touch Uygulama`', '`cd Uygulama`', '`rmdir Uygulama`', '`mkdir Uygulama`'], 'D', '`mkdir` yeni dizin oluşturur. `touch` dizin değil dosya oluşturur.'),
    h(34, 'dizin', 'Boş olan Deneme dizinini silmek için hangi komut kullanılır?', ['`rmfile Deneme`', '`deldir -all Deneme`', '`mkdir -d Deneme`', '`rmdir Deneme`'], 'D', '`rmdir` boş dizinleri kaldırır.'),
    h(35, 'dizin', '`rapor.txt` dosyasını silen komut hangisidir?', ['`clear rapor.txt`', '`rmdir rapor.txt`', '`rm rapor.txt`', '`exit rapor.txt`'], 'C', '`rm` belirtilen dosyayı kaldırır. `rmdir` dosya değil boş dizin siler.'),
    h(36, 'kopya', 'Geçerli dizin ve alt dizinlerinde adı `rapor.txt` olan dosyaları arayan komut hangisidir?', ["`find -name . rapor.txt`", "`grep rapor.txt .`", "`find . -name 'rapor.txt'`", "`ls -name rapor.txt`"], 'C', '`find . -name`, geçerli dizinden başlayarak ad eşleşmesi arar.'),
    h(37, 'dosya', 'Henüz bulunmayan `bos.txt` dosyası için `touch bos.txt` çalıştırılırsa ne olur?', ['Boş bir dosya oluşturulur', 'Dosya sıkıştırılır', 'Bir dizin oluşturulur', 'Terminal kapatılır'], 'A', '`touch` bulunmayan dosyayı boş olarak oluşturur.'),
    h(38, 'dosya', 'İçeriği bulunan `rapor.txt` için `touch rapor.txt` komutunun normal etkisi nedir?', ['Dosyayı boşaltmak', 'İçeriği koruyarak erişim ve değiştirme zamanlarını güncellemek', 'Dosyayı başka dizine taşımak', 'Dosyayı gzip biçiminde sıkıştırmak'], 'B', '`touch` dosyanın içeriğini değiştirmeden zaman damgalarını günceller.'),
    h(39, 'dosya', '`not.txt` içeriğinin tamamını terminale yazdıran komut hangisidir?', ['`touch not.txt`', '`cd not.txt`', '`cat not.txt`', '`file not.txt`'], 'C', '`cat` dosya içeriğini standart çıktıya yazar.'),
    h(40, 'dosya', '`cat > not.txt` ile metin girilirken yeni ve boş bir giriş satırında Ctrl+D yapılması ne sağlar?', ['Dosyanın silinmesini', 'Girişi sonlandırarak komutun tamamlanmasını', 'Dosyanın otomatik sıkıştırılmasını', 'Komutun arka plana alınmasını'], 'B', 'Boş giriş satırında Ctrl+D standart girdide dosya sonunu bildirir.'),
    h(41, 'metin', 'Bir metin dosyasının satırlarını varsayılan metin sırasına göre görüntüleyen komut hangisidir?', ['`head liste.txt`', '`wc liste.txt`', '`nl liste.txt`', '`sort liste.txt`'], 'D', '`sort` satırları geçerli yerel ayarın sıralama kurallarına göre sıralar.'),
    h(42, 'dosya', 'Standart girdiyi hem `sonuc.txt` dosyasına hem standart çıktıya yazan komut hangisidir?', ['`echo sonuc.txt`', '`cat > sonuc.txt`', '`tee > sonuc.txt`', '`tee sonuc.txt`'], 'D', '`tee` dosya adı verildiğinde girdiyi dosyaya ve standart çıktıya kopyalar.'),
    h(43, 'dosya', '`tee > sonuc.txt` komutunda standart çıktının gittiği yer neresidir?', ['`sonuc.txt` dosyası', 'Süreç tablosu', 'Yalnızca terminal ekranı', '`/proc/cpuinfo` dosyası'], 'A', '`>` standart çıktıyı dosyaya yönlendirdiğinden tee çıktısı ekranda görünmez.'),
    h(44, 'dosya', 'Mevcut `sonuc.txt` içeriğinin sonuna standart girdiyi ekleyen kullanım hangisidir?', ['`tee -d sonuc.txt`', '`tee >> sonuc.txt`', '`tee > sonuc.txt`', '`tee < sonuc.txt`'], 'B', '`>>` standart çıktıyı dosyanın sonuna ekler.'),
    h(45, 'metin', 'Uzun bir dosyayı sayfalar halinde görüntülemek için hangi komut kullanılır?', ['`mv uzun.txt`', '`mkdir uzun.txt`', '`gzip uzun.txt`', '`more uzun.txt`'], 'D', '`more` dosya içeriğini sayfalar halinde görüntüler.'),
    h(46, 'metin', '`less` ile açılmış dosyadan çıkmak için hangi tuşa basılır?', ['Ctrl+Z', '`q`', 'F2', 'Tab'], 'B', '`q`, less görüntüleyicisinden çıkar.'),
    h(47, 'surec', '`fuser rapor.txt` komutunun temel olarak bildirdiği bilgi nedir?', ['Dosyanın satır sayısı', 'Dosyayı kullanan süreçlerin PID değerleri', 'Dosyanın alfabetik sırası', 'Dosyanın sıkıştırma oranı'], 'B', '`fuser` dosyayı kullanan süreçleri bildirir.'),
    h(48, 'metin', '`veri.txt` dosyasının ilk 5 satırını gösteren komut hangisidir?', ['`tail -n 5 veri.txt`', '`head -n veri.txt 5`', '`head -n 5 veri.txt`', '`wc -l 5 veri.txt`'], 'C', '`head -n 5` dosyanın başındaki beş satırı seçer.'),
    h(49, 'metin', '`veri.txt` dosyasının son 5 satırını gösteren komut hangisidir?', ['`nl -n 5 veri.txt`', '`tail -n 5 veri.txt`', '`sort -n 5 veri.txt`', '`head -n 5 veri.txt`'], 'B', '`tail -n 5` dosyanın sonundaki beş satırı seçer.'),
    h(50, 'metin', '`log.txt` içinde HATA metnini içeren satırları seçen komut hangisidir?', ['`file HATA log.txt`', '`find HATA log.txt`', '`wc HATA log.txt`', "`grep 'HATA' log.txt`"], 'D', '`grep` desenle eşleşen satırları görüntüler.'),
    h(51, 'metin', '`wc veri.txt` çıktısı `19 23 150 veri.txt` ise sayılar sırasıyla neyi gösterir?', ['Kelime, satır, karakter sayısını', 'Satır, kelime, bayt sayısını', 'Süreç, bellek, disk miktarını', 'Bayt, dosya, dizin sayısını'], 'B', 'Varsayılan `wc` çıktısı satır, kelime ve bayt sayılarını verir.'),
    h(52, 'metin', 'Dosyanın boş olmayan satırlarını varsayılan olarak numaralandırarak gösteren komut hangisidir?', ['`wc veri.txt`', '`file veri.txt`', '`nl veri.txt`', '`sort veri.txt`'], 'C', '`nl` varsayılan olarak boş olmayan gövde satırlarını numaralandırır.'),
    h(53, 'kopya', '`a.txt` dosyasını koruyup `b.txt` adlı bir kopya oluşturan komut hangisidir?', ['`cat b.txt a.txt`', '`mv a.txt b.txt`', '`cp a.txt b.txt`', '`rm a.txt b.txt`'], 'C', '`cp` kaynak dosyayı koruyarak hedef kopyayı oluşturur. `mv` a.txt’yi ortadan kaldırırdı.'),
    h(54, 'kopya', '`eski.txt` dosyasının adını `yeni.txt` olarak değiştiren komut hangisidir?', ['`touch yeni.txt`', '`cp yeni.txt eski.txt`', '`mv eski.txt yeni.txt`', '`mkdir yeni.txt`'], 'C', '`mv` aynı dizin içinde dosyanın adını değiştirebilir.'),
    h(55, 'kopya', 'Uzantısından bağımsız olarak dosyanın türünü inceleyen komut hangisidir?', ['`file belge`', '`pwd belge`', '`wc belge`', '`ls belge`'], 'A', '`file` dosya türünü içerik ve dosya bilgilerine göre belirler.'),
    h(56, 'kopya', 'Dosya adlarını önceden oluşturulmuş bir veritabanında arayan komut hangisidir?', ['`find .`', '`grep rapor.txt`', '`cat rapor.txt`', '`locate rapor.txt`'], 'D', '`locate` bir dosya adı veritabanından arama yapar. `find` canlı tarar.'),
    h(57, 'kopya', '`rapor.txt` dosyasını gzip biçiminde sıkıştıran komut hangisidir?', ['`gunzip rapor.txt`', '`zipread rapor.txt`', '`file -g rapor.txt`', '`gzip rapor.txt`'], 'D', '`gzip` dosyayı normal kullanımda .gz biçimine sıkıştırır.'),
    h(58, 'kopya', '`rapor.txt.gz` dosyasını açmak için hangi komut kullanılır?', ['`unfile rapor.txt.gz`', '`gunzip rapor.txt.gz`', '`gzip rapor.txt.gz`', '`cat -z rapor.txt.gz`'], 'B', '`gunzip` gzip ile sıkıştırılmış veriyi açar.'),
    h(59, 'kaynak', 'Belgeler dizininin toplam disk kullanımını okunabilir birimlerle gösteren komut hangisidir?', ['`du -sh Belgeler`', '`df -sh Belgeler`', '`lsmod Belgeler`', '`free -sh Belgeler`'], 'A', '`du -s` toplamı, `-h` okunabilir birimleri seçer.'),
    h(60, 'kaynak', 'GNU `du -h --max-depth=1` komutundaki `--max-depth=1` neyi sınırlar?', ['Dosya boyutunu 1 MB ile', 'Dosya sayısını bire', 'Çalışma süresini bir saniyeye', 'Raporlanan dizin derinliğini bir alt düzeye'], 'D', 'Bu seçenek raporun en fazla bir alt dizin düzeyini göstermesini sağlar.'),
    h(61, 'proc', 'Yüklü çekirdek modüllerini listeleyen komut hangisidir?', ['`lsusb`', '`lspci`', '`lsb_release`', '`lsmod`'], 'D', '`lsmod` yüklü çekirdek modüllerini listeler.'),
    h(62, 'proc', 'Çekirdeğin halka tamponundaki mesajlarını görüntüleyen komut hangisidir?', ['`history`', '`last`', '`cal`', '`dmesg`'], 'D', '`dmesg` çekirdek mesajlarını görüntüler; yetki gerekebilir.'),
    h(63, 'ag', 'Ağ arayüzlerini ve IP adreslerini görüntülemek için aşağıdakilerden hangisi uygundur?', ['`uname address`', '`ip address`', '`which address`', '`ip mkdir`'], 'B', '`ip address` ağ arayüzlerinin adres bilgilerini gösterir; `ifconfig` eski bir alternatif araçtır.'),
    h(64, 'ag', 'PATH üzerinden bulunacak `date` programının yolunu gösteren komut hangisidir?', ['`pwd date`', '`whatis date`', '`which date`', '`date --help`'], 'C', '`which` PATH içindeki çalıştırılabilir programı arar.'),
    h(65, 'ag', 'Bir komutun ikili, kaynak ve kılavuz dosyalarının yerlerini arayan komut hangisidir?', ['`whereis ls`', '`whoami ls`', '`whatis ls`', '`which ls`'], 'A', '`whereis` komutla ilgili dosyaları belirli konumlarda arar.'),
    h(66, 'proc', 'Linux çekirdeğinin sürüm ve derleme bilgisini hangi komut gösterir?', ['`cat /etc/hosts`', '`cat /proc/interrupts`', '`cat /proc/version`', '`cat /proc/mounts`'], 'C', '`/proc/version` çekirdek sürüm ve derleme bilgisini içerir.'),
    h(67, 'proc', 'Çekirdeğe yüklenmiş modülleri dosya üzerinden incelemek için hangi komut kullanılır?', ['`less /proc/meminfo`', '`less /proc/modules`', '`less /etc/resolv.conf`', '`less /proc/mounts`'], 'B', '`/proc/modules` yüklü modüllerin bilgilerini sunar.'),
    h(68, 'proc', 'İşlemci modeli ve özelliklerini inceleyen komut hangisidir?', ['`cat /proc/cpuinfo`', '`cat /etc/hosts`', '`cat /proc/mounts`', '`cat /proc/meminfo`'], 'A', '`/proc/cpuinfo` işlemci bilgilerini sunar.'),
    h(69, 'proc', 'RAM ve takas alanına ilişkin ayrıntıları hangi komutla inceleyebilirsiniz?', ['`less /proc/cpuinfo`', '`less /etc/hosts`', '`less /proc/meminfo`', '`less /proc/version`'], 'C', '`/proc/meminfo` bellekle ilgili ayrıntılı bilgileri içerir.'),
    h(70, 'proc', 'Çekirdeğin desteklediği dosya sistemi türlerini gösteren komut hangisidir?', ['`cat /etc/resolv.conf`', '`cat /proc/version`', '`cat /proc/filesystems`', '`cat /proc/cpuinfo`'], 'C', '`/proc/filesystems` desteklenen dosya sistemi türlerini listeler.'),
    h(71, 'proc', 'Bağlı dosya sistemlerini ve bağlama seçeneklerini gösteren komut hangisidir?', ['`less /proc/version`', '`less /proc/meminfo`', '`less /proc/modules`', '`less /proc/mounts`'], 'D', '`/proc/mounts` bağlı dosya sistemlerini raporlar.'),
    h(72, 'proc', 'Kesmelere ilişkin sayaçları incelemek için hangi komut kullanılır?', ['`cat /etc/hosts`', '`cat /proc/version`', '`cat /proc/interrupts`', '`cat /proc/filesystems`'], 'C', '`/proc/interrupts` kesme sayaçları ve ilgili bilgileri sunar.'),
    h(73, 'ag', 'Dosya sistemde mevcutsa açılış günlüğünü inceleyen komut hangisidir?', ['`less /proc/mounts`', '`less /proc/cpuinfo`', '`less /var/log/boot.log`', '`less /etc/resolv.conf`'], 'C', '`/var/log/boot.log` bazı dağıtımlarda açılış günlüğünü tutar.'),
    h(74, 'ag', 'Yerel IP adresi ve bilgisayar adı eşleştirmelerini görüntüleyen komut hangisidir?', ['`cat /etc/resolv.conf`', '`cat /etc/hosts`', '`cat /proc/modules`', '`cat /proc/version`'], 'B', '`/etc/hosts` yerel ad ve IP eşleştirmeleri içerir.'),
    h(75, 'ag', 'Yapılandırılmış DNS sunucusu satırlarını seçen komut hangisidir?', ["`grep 'nameserver' /var/log/boot.log`", "`grep 'nameserver' /etc/resolv.conf`", "`grep 'nameserver' /proc/modules`", "`grep 'nameserver' /proc/cpuinfo`"], 'B', '`/etc/resolv.conf` DNS çözümleyici yapılandırmasını içerir.'),
    h(76, 'proc', '`grep -E "MemTotal|MemAvailable" /proc/meminfo` neyi seçer?', ['Yalnızca DNS sunucularını', 'Yalnızca işlemci frekanslarını', 'Toplam RAM ve kullanılabilir bellek tahmini satırlarını', 'Bağlı USB aygıtlarını'], 'C', '`-E` genişletilmiş düzenli ifadeyi, `|` ise alternatif desenleri belirtir.'),
    h(77, 'proc', '`lspci | grep VGA` komutundaki boru işaretinin görevi nedir?', ['Çıktıyı VGA adlı dosyaya kaydetmek', '`lspci` çıktısını `grep` komutunun girdisine aktarmak', 'İki komutu arka planda başlatmak', 'İlk komut başarısızsa ikinciyi çalıştırmak'], 'B', '`|` ilk komutun standart çıktısını ikinci komutun standart girdisine bağlar.'),
    h(78, 'proc', 'Bağlı USB aygıtlarını listeleyen komut hangisidir?', ['`lsusb`', '`lspci`', '`df`', '`lsmod`'], 'A', '`lsusb` USB aygıtlarını listeler.'),
    h(79, 'kapatma', 'Gerekli yetkiyle sistemi yeniden başlatan komut hangisidir?', ['`sudo reboot`', '`sudo systemctl restart nginx`', '`sudo clear`', '`sudo exitfile`'], 'A', '`reboot` sistemin yeniden başlatılmasını ister.'),
    h(80, 'kapatma', 'systemd kullanan bir sistemde `sudo systemctl restart nginx` ne yapar?', ['Nginx paketini siler', 'Bütün kullanıcı oturumlarını kapatır', 'Bilgisayarı yeniden başlatır', 'Nginx hizmetini yeniden başlatır'], 'D', '`systemctl restart` belirtilen hizmeti yeniden başlatır.'),
    h(81, 'kapatma', 'Sistemi 10 dakika sonra kapatmayı planlayan komut hangisidir?', ['`sudo systemctl restart +10`', '`sudo reboot +10`', '`sudo shutdown -h +10`', '`sudo shutdown -h 10s`'], 'C', '`shutdown +10` zamanı on dakika sonrası olarak yorumlar.'),
    h(82, 'kapatma', 'Planlanmış bir kapatma işlemini iptal eden komut hangisidir?', ['`sudo reboot`', '`sudo shutdown -r now`', '`sudo shutdown -h now`', '`sudo shutdown -c`'], 'D', '`shutdown -c` bekleyen kapatma işlemini iptal eder.'),
    h(83, 'kapatma', 'Sistemi 5 dakika sonra yeniden başlatmayı planlayan komut hangisidir?', ['`sudo shutdown -r +5`', '`sudo shutdown -h +5`', '`sudo reboot -h 5`', '`sudo shutdown -c +5`'], 'A', '`shutdown -r` yeniden başlatmayı, `+5` beş dakika sonrasını belirtir.'),
    h(84, 'yardim', 'Geçerli kabuk oturumundan çıkmak için hangi komut kullanılır?', ['`exit`', '`bg`', '`clear`', '`cd`'], 'A', '`exit` geçerli kabuk oturumunu sonlandırır.'),
    h(85, 'yardim', 'Komutları yetkili olarak çalıştırma ve kullanıcı değiştirme araçlarının doğru eşleştirmesi hangisidir?', ['`sudo`: yetkiyle komut çalıştırma · `su`: kullanıcı değiştirme', '`sudo`: süreç listeleme · `su`: bellek ölçme', '`sudo`: dizin silme · `su`: dizin oluşturma', '`sudo`: dosya sıkıştırma · `su`: dosya açma'], 'A', '`sudo` yetki politikasına göre komut çalıştırır; `su` başka kullanıcı kimliğine geçiş sağlar.'),
    h(86, 'yardim', 'GNU `ls` komutunun kullanım seçeneklerini görüntüleyen doğru yazım hangisidir?', ['`ls -- help 8`', '`ls --help`', '`help -- ls all`', '`ls help --all`'], 'B', '`--help` tek bir seçenek olarak, araya boşluk konmadan yazılır.'),
    h(87, 'proc', 'Çekirdek mesajlarının son 20 satırını gösteren komut hangisidir?', ['`sudo dmesg | head -n 20`', '`sudo dmesg > tail 20`', '`sudo dmesg | wc -l`', '`sudo dmesg | tail -n 20`'], 'D', '`tail -n 20` borudan gelen çıktının son yirmi satırını seçer. `> tail` ise “tail” adlı dosyaya yazardı.'),
    h(88, 'ag', 'Eski ağ araçlarından `ifconfig` komutunun temel kullanım alanı hangisidir?', ['Süreçleri ağaç biçiminde göstermek', 'Ağ arayüzlerini görüntülemek ve yapılandırmak', 'Çekirdek modüllerini derlemek', 'Metin dosyalarını sıralamak'], 'B', '`ifconfig` ağ arayüzlerini yönetmek için kullanılan bir araçtır.'),
    h(89, 'kapatma', 'Gerekli yetkiyle sistemi hemen kapatmayı isteyen komut hangisidir?', ['`sudo shutdown -r +5`', '`sudo systemctl restart nginx`', '`sudo shutdown -c`', '`sudo shutdown -h now`'], 'D', '`-h` kapatmayı, `now` işlemin hemen uygulanmasını ister.'),
    h(90, 'yardim', 'Bash oturumunda `echo "$BASH"` genellikle neyi görüntüler?', ['Bütün kullanıcı adlarını', 'Geçerli dizinin içeriğini', 'Bütün komut geçmişini', 'Bash çalıştırılabilir dosyasının yolunu'], 'D', '`BASH` değişkeni çalışmakta olan Bash örneğinin program yolunu tutar.')
  ];

  var OGR = '# ogrenciler.txt içeriği:\n#   Zeynep 70\n#   Ali 90\n#   Deniz 65\n#   Ece 85\n#   Can 60\n';

  var N = [
    // Yardım
    n('yardim', '`echo PATH` komutu ekrana ne yazar?', ['PATH değişkeninin değerini', 'Yalnızca `PATH` kelimesini', 'Hiçbir şey yazmaz', 'Hata verir'], 'B', '`$` olmadığı için kabuk değişkeni açmaz; düz metin olarak “PATH” yazılır. Değer için `echo "$PATH"`.', null),
    n('yardim', '`ls --help` ile `man ls` arasındaki fark hangisidir?', ['İkisi de aynı kılavuz sayfasını açar', '`--help` komutun kısa kullanım özetini terminale yazar; `man` ayrıntılı kılavuz sayfasını açar', '`man ls` yalnızca Windows’ta çalışır', '`--help` Bash yerleşik komutlarının yardımıdır'], 'B', 'Yerleşik komut yardımı `help`’tir. `man` kılavuz sayfasıdır, `--help` ise programın kendi özeti.'),
    n('yardim', '`man ls` ile açılan kılavuz sayfasından çıkmak için hangi tuşa basılır?', ['`q`', 'Ctrl+D', 'Esc', '`x`'], 'A', 'Kılavuzda boşlukla ilerlenir, `q` ile çıkılır (less ile aynı).'),
    n('yardim', '`help`, `man` ve `whatis` için doğru eşleştirme hangisidir?', ['help: Bash yerleşikleri · man: ayrıntılı kılavuz · whatis: tek satırlık açıklama', 'help: kılavuz · man: yerleşikler · whatis: komut yolu', 'help: komut geçmişi · man: kullanıcı adı · whatis: dosya türü', 'Üçü de aynı işi yapar'], 'A', 'Komut yolu `which`, komut geçmişi `history`, dosya türü `file`.'),
    n('yardim', '`echo "$PATH"` çıktısı neyi gösterir?', ['Geçerli dizini', 'Komutların arandığı dizinleri, `:` ile ayrılmış olarak', 'Kullanıcının ev dizinini', 'Bash programının yolunu'], 'B', 'Örn. `/usr/local/bin:/usr/bin:/bin`. Bash’in yolu `$BASH`, geçerli dizin `pwd`.'),

    // Sistem
    n('sistem', '`time sleep 2` çıktısındaki `real` değeri yaklaşık kaçtır?', ['0 saniye', '2 saniye', '2 dakika', 'Güncel saat'], 'B', '`time` arkasındaki komutun süresini ölçer; `sleep 2` iki saniye bekler.'),
    n('sistem', 'Hangisi doğru eşleştirmedir?', ['`date`: komutun süresi · `time`: güncel tarih', '`uptime`: sistemin ne kadar süredir açık olduğu · `date`: güncel tarih ve saat', '`cal`: oturum kayıtları · `last`: takvim', '`whoami`: makine adı · `hostname`: kullanıcı adı'], 'B', '`time` süre ölçer, `cal` takvim, `last` oturum kayıtları, `whoami` kullanıcı, `hostname` makine adı.'),
    n('sistem', '`last` ile `history` arasındaki fark nedir?', ['`last`: geçmiş oturum açma kayıtları · `history`: kabukta girilen komutlar', 'İkisi de komut geçmişini gösterir', '`last`: son komut · `history`: tüm oturumlar', '`last`: son değiştirilen dosya · `history`: dosya geçmişi'], 'A', 'Kim, ne zaman oturum açtı → `last`. Hangi komutları yazdım → `history`.'),
    n('sistem', '`uname -a` çıktısında hangi bilgi bulunur?', ['Disk doluluk oranı', 'Çekirdek adı, sürümü ve makine bilgileri', 'Komut geçmişi', 'Bağlı USB aygıtları'], 'B', 'Disk `df`, geçmiş `history`, USB `lsusb`.'),
    n('sistem', '`uname -a` ile `lsb_release -a` farkı nedir?', ['`uname -a` çekirdek/sistem bilgisi · `lsb_release -a` dağıtım adı ve sürümü', 'İkisi aynı bilgiyi verir', '`uname -a` RAM miktarı · `lsb_release -a` disk', '`lsb_release -a` kullanıcı listesi'], 'A', 'Dağıtım (Ubuntu 22.04 gibi) → `lsb_release -a`. Çekirdek → `uname -a`.'),

    // Disk ve bellek
    n('kaynak', '`df` ile `du` arasındaki fark nedir?', ['`df`: dosya sistemlerinin toplam/boş alanı · `du`: dosya ve dizinlerin kapladığı alan', '`df`: RAM · `du`: takas', 'İkisi aynıdır', '`df`: süreçler · `du`: kullanıcılar'], 'A', 'RAM ve takas için `free` kullanılır.'),
    n('kaynak', '`free -m` neyi gösterir?', ['Disk alanını MB cinsinden', 'RAM ve takas kullanımını MB cinsinden', 'Boş dosya sayısını', 'Boştaki işlemci çekirdeklerini'], 'B', '`free` bellek komutudur, `-m` birimi MB yapar.'),
    n('kaynak', '`du -sh Belgeler` komutundaki `-s` ve `-h` ne yapar?', ['`-s` sıralar · `-h` yardım açar', '`-s` yalnızca toplamı gösterir · `-h` okunabilir birim kullanır (K, M, G)', '`-s` gizli dosyaları ekler · `-h` ev dizinini seçer', '`-s` sessiz çalışır · `-h` başlık ekler'], 'B', 'Toplam (summary) ve okunabilir (human-readable).'),
    n('kaynak', '`df -h` komutundaki `-h` ne sağlar?', ['Yardım sayfasını açar', 'Boyutları okunabilir birimlerle (K, M, G) gösterir', 'Gizli dosya sistemlerini gösterir', 'Yalnızca ev dizinini gösterir'], 'B', 'df ve du’da `-h` okunabilir birim demektir.'),
    n('kaynak', 'Bir dizindeki alt klasörlerin her birinin boyutunu tek düzey derinlikte görmek için hangisi kullanılır (GNU)?', ['`du -h --max-depth=1 .`', '`df -h --max-depth=1`', '`free -h -d 1`', '`ls --max-depth=1`'], 'A', '`--max-depth=1` raporu bir alt dizin düzeyiyle sınırlar.'),

    // Süreçler
    n('surec', '`ps` ile `top` arasındaki fark nedir?', ['`ps` anlık bir liste verir; `top` sürekli güncellenen canlı bir ekran açar', '`ps` canlıdır, `top` anlık', 'İkisi de yalnızca kabuğun işlerini gösterir', '`top` süreçleri ağaç olarak gösterir'], 'A', 'Ağaç görünümü `pstree`, kabuğun işleri `jobs`.'),
    n('surec', '`top` ekranından çıkmak için hangi tuşa basılır?', ['`q`', 'Ctrl+D', 'Esc', 'Tab'], 'A', 'top, less ve man ekranlarından `q` ile çıkılır.'),
    n('surec', '`pmap` komutu hangi girdiyi alır?', ['Süreç adı (`pmap sleep`)', 'Süreç kimliği, PID (`pmap 2450`)', 'Dosya adı', 'Kullanıcı adı'], 'B', 'pmap süreç adı yerine PID alır.'),
    n('surec', 'PID ile iş numarası (`%1`) arasındaki fark nedir?', ['PID işletim sisteminin süreç numarasıdır; `%1` yalnızca o kabuğun iş tablosundaki numaradır', 'İkisi aynıdır', 'İş numarası tüm sistemde tektir, PID yalnızca kabukta geçerlidir', 'PID yalnızca arka plan işlerinde vardır'], 'A', '`kill 2450` PID ile, `bg %1` / `fg %1` iş numarasıyla çalışır.'),
    n('surec', '`tail -f log.txt` çalışırken başka bir terminalde `fuser log.txt` yazılırsa ne görülür?', ['Hiçbir şey', 'tail sürecinin PID değeri', 'log.txt’nin içeriği', 'log.txt’nin satır sayısı'], 'B', 'fuser dosyayı açık tutan süreçlerin PID’lerini bildirir.'),

    // İş kontrolü
    n('is', 'Ön planda çalışan bir işi sonlandırmadan **duraklatmak** için hangi tuşlar kullanılır?', ['Ctrl+C', 'Ctrl+Z', 'Ctrl+D', 'Ctrl+L'], 'B', 'Ctrl+Z duraklatır (Stopped). Ctrl+C sonlandırır, Ctrl+D girişi bitirir.'),
    n('is', 'Ctrl+C ile Ctrl+Z arasındaki fark nedir?', ['Ctrl+C ön plandaki işi sonlandırır; Ctrl+Z duraklatır', 'İkisi de sonlandırır', 'Ctrl+C duraklatır; Ctrl+Z sonlandırır', 'İkisi de işi arka plana alır'], 'A', 'Duraklatılan iş `bg` ile arka planda, `fg` ile ön planda sürdürülebilir.'),
    n('is', '`jobs` çıktısında aşağıdaki satır görünüyor. İşi arka planda çalışmaya devam ettirmek için ne yazılır?', ['`fg %1`', '`bg %1`', '`kill %1`', '`jobs -1`'], 'B', '`bg` durdurulmuş işi arka planda sürdürür. `fg %1` ön plana alırdı.', '[1]+  Stopped        sleep 600'),
    n('is', '`kill`, `killall` ve `pkill` hedefi nasıl belirler?', ['kill: PID · killall: tam süreç adı · pkill: ad deseni', 'kill: ad · killall: PID · pkill: kullanıcı', 'Üçü de PID alır', 'kill: dosya · killall: dizin · pkill: kullanıcı'], 'A', '`kill 2450`, `killall ping`, `pkill ping`.'),
    n('is', 'Başka bir terminalden başlatılan bir süreç `jobs` çıktısında görünür mü?', ['Evet, `jobs` tüm süreçleri gösterir', 'Hayır; `jobs` yalnızca mevcut kabuğun işlerini gösterir, tüm süreçler için `ps` kullanılır', 'Evet, ama yalnızca root için', 'Sadece PID’si çift ise'], 'B', 'jobs kabuğun iş tablosudur.'),
    n('is', '`kill 2450` varsayılan olarak hangi sinyali gönderir?', ['SIGKILL', 'SIGTERM', 'SIGSTOP', 'SIGHUP'], 'B', 'Cevap anahtarı: “kill PID varsayılan olarak SIGTERM gönderir.”'),

    // Dizin
    n('dizin', 'Komutlardan sonra `pwd` ne yazar?', ['`/home`', '`/home/ogrenci`', '`/`', '`/home/ogrenci/Belgeler`'], 'B', '`cd ..` bir üst dizine çıkar.', 'cd /home/ogrenci/Belgeler\ncd ..\npwd'),
    n('dizin', '`cd ~` komutu nereye götürür?', ['Kök dizine (`/`)', 'Kullanıcının ev dizinine', 'Bir üst dizine', 'Son kullanılan dizine'], 'B', '`~` ev dizinini temsil eder. Kök `/`, bir üst `..`.'),
    n('dizin', '`ls -a` ile `ls` arasındaki fark nedir?', ['`-a` gizli (nokta ile başlayan) girdileri de listeler', '`-a` yalnızca dizinleri listeler', '`-a` ayrıntılı bilgi verir', '`-a` alfabetik sıralar'], 'A', 'Ayrıntılı liste `ls -l`.'),
    n('dizin', 'İçinde dosya bulunan `kaynak` dizininde `rmdir kaynak` çalıştırılırsa ne olur?', ['Dizin içeriğiyle silinir', 'Hata verir; dizin boş olmadığı için korunur', 'Yalnızca içindeki dosyalar silinir', 'Dizin çöp kutusuna taşınır'], 'B', '`rmdir` yalnızca boş dizinleri siler.'),
    n('dizin', '`mkdir matematik fizik kimya` komutunun sonucu nedir?', ['Tek dizin oluşur, adı “matematik fizik kimya”', 'Üç ayrı dizin oluşur', 'Hata verir; tek seferde bir dizin oluşturulur', 'Üç boş dosya oluşur'], 'B', 'mkdir birden çok ad alabilir.'),
    n('dizin', '`ls -l` ne gösterir?', ['Ayrıntılı liste: izinler, sahip, boyut, tarih', 'Yalnızca dizinler', 'Yalnızca gizli dosyalar', 'Dosyaların satır sayıları'], 'A', '`-l` uzun (long) liste biçimidir.'),

    // Dosya ve yönlendirme
    n('dosya', 'Komutlardan sonra ekranda ne görünür?', ['`Merhaba`', '`Linux`', '`Merhaba` ve `Linux` alt alta', 'Hiçbir şey'], 'B', 'İkinci komut da `>` kullandığı için önceki içeriği silip yerine yazar.', 'echo "Merhaba" > not.txt\necho "Linux" > not.txt\ncat not.txt'),
    n('dosya', 'Dolu bir `kayit.txt` için `cat > kayit.txt` yazıp iki satır girdikten sonra Ctrl+D’ye basılırsa ne olur?', ['İki satır eski içeriğin sonuna eklenir', 'Eski içerik silinir; dosyada yalnızca girilen iki satır olur', 'Dosya silinir', 'Hiçbir şey değişmez'], 'B', '`>` üzerine yazar. Eklemek için `cat >> kayit.txt` gerekirdi.'),
    n('dosya', '`tee notlar.txt` ile `cat > notlar.txt` arasındaki fark nedir?', ['`tee` girdiyi hem dosyaya hem ekrana yazar; `cat >` yalnızca dosyaya yazar', 'İkisi aynıdır', '`tee` yalnızca ekrana yazar', '`cat >` ekrana da yazar'], 'A', 'Cevap anahtarı: tee girdiyi dosyaya ve standart çıktıya kopyalar.'),
    n('dosya', '`yeni.txt` yokken `echo "a" >> yeni.txt` çalıştırılırsa ne olur?', ['Hata verir', '`yeni.txt` oluşturulur ve içine a yazılır', 'Ekrana a yazılır', 'Bir dizin oluşturulur'], 'B', '`>` ve `>>` dosya yoksa oluşturur.'),
    n('dosya', 'Komutlardan sonra ekranda ne görünür?', ['`1 sayi.txt`', '`3 sayi.txt`', '`2 sayi.txt`', '`6 sayi.txt`'], 'B', 'İlk satır yazılır, sonraki ikisi eklenir: 3 satır. `wc -l` satır sayısını verir.', 'echo "1" > sayi.txt\necho "2" >> sayi.txt\necho "3" >> sayi.txt\nwc -l sayi.txt'),

    // Metin
    n('metin', '`head -n 2 ogrenciler.txt` ne gösterir?', ['`Zeynep 70` ve `Ali 90`', '`Ece 85` ve `Can 60`', '`Ali 90` ve `Can 60`', 'Yalnızca `Ali 90`'], 'A', 'head baştan seçer. Son iki satır için `tail -n 2`.', OGR + 'head -n 2 ogrenciler.txt'),
    n('metin', '`sort ogrenciler.txt | head -n 1` ne gösterir?', ['`Zeynep 70`', '`Ali 90`', '`Can 60`', '`Elif 95`'], 'B', 'sort alfabetik sıralar (Ali, Can, Deniz, Ece, Zeynep), head ilk satırı alır.', OGR + 'sort ogrenciler.txt | head -n 1'),
    n('metin', '`grep "Deniz" ogrenciler.txt` ne gösterir?', ['`Deniz 65`', 'Tüm satırlar', '`3`', 'Hiçbir şey'], 'A', 'grep desenle eşleşen satırı yazar.', OGR + 'grep "Deniz" ogrenciler.txt'),
    n('metin', '`wc -l ogrenciler.txt` ne gösterir?', ['`10 ogrenciler.txt`', '`5 ogrenciler.txt`', '`40 ogrenciler.txt`', '`2 ogrenciler.txt`'], 'B', '`-l` yalnızca satır sayısını verir: 5. (10 kelime, 40 bayt)', OGR + 'wc -l ogrenciler.txt'),
    n('metin', '`head` komutu `-n` verilmeden çalıştırılırsa kaç satır gösterir?', ['5', '10', '20', 'Dosyanın tamamını'], 'B', 'head ve tail varsayılan olarak 10 satır gösterir.'),
    n('metin', '`less` içinde “Ali” kelimesini aramak için ne yazılır?', ['`/Ali`', '`grep Ali`', '`?find Ali`', 'Ctrl+F Ali'], 'A', 'less içinde `/` arama başlatır, `n` sonraki eşleşmeye geçer, `q` çıkar.'),

    // Kopyalama, arama, sıkıştırma
    n('kopya', 'Komutlardan sonra `ls` ne listeler?', ['Yalnızca `yedek.txt`', '`a.txt` ve `yedek.txt`', 'Yalnızca `a.txt`', 'Hiçbir dosya'], 'B', '`cp` kaynağı korur.', 'touch a.txt\ncp a.txt yedek.txt\nls'),
    n('kopya', 'Komutlardan sonra `ls` ne listeler?', ['Yalnızca `b.txt`', '`a.txt` ve `b.txt`', 'Yalnızca `a.txt`', 'Hiçbir dosya'], 'A', '`mv` dosyayı yeni ada taşır; eski ad kalmaz.', 'touch a.txt\nmv a.txt b.txt\nls'),
    n('kopya', '`gzip rapor.txt` sonrasında dizinde hangi dosya bulunur?', ['`rapor.txt` ve `rapor.txt.gz`', 'Yalnızca `rapor.txt.gz`', 'Yalnızca `rapor.txt`', '`rapor.zip`'], 'B', 'gzip asıl dosyanın yerine .gz dosyasını bırakır. gunzip tersini yapar.'),
    n('kopya', 'Yeni oluşturulan bir dosya `find` ile bulunurken `locate` ile neden bulunamayabilir?', ['`locate` yalnızca dizinleri arar', '`locate` önceden oluşturulmuş bir veritabanında arar; veritabanı güncellenmeden yeni dosya orada yoktur', '`locate` yalnızca root için çalışır', '`find` veritabanını günceller'], 'B', 'find o anki dizin ağacını tarar.'),
    n('kopya', 'Bir dizini içeriğiyle birlikte kopyalamak için hangisi kullanılır?', ['`cp -r veriler yedek/`', '`mv -r veriler yedek/`', '`cp veriler yedek/`', '`gzip veriler`'], 'A', '`-r` (recursive) alt içerikle kopyalar. gzip dizin arşivlemez.'),
    n('kopya', 'Boş bir dosya için `file bos.txt` çıktısı nedir?', ['`bos.txt: empty`', '`bos.txt: directory`', '`bos.txt: gzip compressed data`', 'Hata verir'], 'A', 'file türü içeriğe bakarak belirler; dolu metin dosyası için “ASCII text” der.'),

    // /proc ve donanım
    n('proc', '`/proc/cpuinfo` · `/proc/meminfo` · `/proc/version` sırasıyla neyi içerir?', ['İşlemci · bellek · çekirdek sürümü', 'Bellek · işlemci · dağıtım adı', 'Disk · ağ · kullanıcılar', 'Modüller · kesmeler · sürüm'], 'A', 'Modüller `/proc/modules`, kesmeler `/proc/interrupts`.'),
    n('proc', '`/proc/filesystems` ile `/proc/mounts` farkı nedir?', ['filesystems: çekirdeğin desteklediği türler · mounts: şu an bağlı dosya sistemleri', 'İkisi aynıdır', 'filesystems: disk boyutu · mounts: RAM', 'filesystems: bağlı olanlar · mounts: desteklenenler'], 'A', 'Desteklenen ≠ bağlı.'),
    n('proc', '`lsmod` ile aynı bilgiyi dosya olarak sunan hangisidir?', ['`/proc/modules`', '`/proc/version`', '`/etc/hosts`', '`/proc/mounts`'], 'A', 'lsmod çıktısı ile /proc/modules ilişkili bilgiler sunar.'),
    n('proc', 'Komutlar arasındaki `|` ile `grep -E "A|B"` içindeki `|` arasındaki fark nedir?', ['Komutlar arasındaki `|` çıktıyı diğer komuta aktarır; tırnak içindeki `|` “veya” anlamında alternatif desendir', 'İkisi de çıktı aktarır', 'İkisi de “ve” demektir', 'İkisi de dosyaya yazar'], 'A', 'LAB4 filtreleme mantığı notu.'),
    n('proc', '`lspci` ve `lsusb` neyi listeler?', ['lspci: PCI aygıtları · lsusb: USB aygıtları', 'lspci: süreçler · lsusb: kullanıcılar', 'lspci: modüller · lsusb: dosya sistemleri', 'İkisi de ağ arayüzleri'], 'A', 'Modüller `lsmod`, ağ arayüzleri `ip address`.'),
    n('proc', '`dmesg | head -n 20` ne gösterir?', ['Çekirdek mesajlarının ilk 20 satırını', 'Son 20 satırını', '20 numaralı süreci', '20 satırlık bir dosya oluşturur'], 'A', 'Son 20 satır için `dmesg | tail -n 20`.'),

    // Ağ ve yollar
    n('ag', '`which` ile `whereis` arasındaki fark nedir?', ['which: PATH’te çalıştırılacak programın yolu · whereis: ikili, kaynak ve kılavuz dosyalarının yerleri', 'İkisi aynıdır', 'which: kılavuz · whereis: kısa açıklama', 'which: kullanıcı · whereis: dizin'], 'A', 'Kısa açıklama `whatis`’tir.'),
    n('ag', '`/etc/hosts` ile `/etc/resolv.conf` arasındaki fark nedir?', ['hosts: yerel ad–IP eşleştirmeleri · resolv.conf: DNS sunucusu (nameserver) ayarları', 'İkisi aynıdır', 'hosts: DNS · resolv.conf: yerel adlar', 'hosts: kullanıcılar · resolv.conf: parolalar'], 'A', 'nameserver satırları resolv.conf’tadır.'),
    n('ag', '`ip address` komutunun kısa yazımı hangisidir?', ['`ip a`', '`ipa`', '`ip -address`', '`ifconfig a`'], 'A', 'LAB4: `ip a` aynı bilgiyi verir.'),
    n('ag', '`/etc/hosts` dosyasındaki `127.0.0.1 localhost` satırı neyi ifade eder?', ['localhost adı makinenin kendisini gösteren döngü (loopback) adresine eşlenmiştir', 'DNS sunucusunun adresi', 'Dış ağdaki bir sunucu', 'Ağ geçidinin adresi'], 'A', '127.0.0.1 döngü adresidir; dış ağ adresi değildir.'),
    n('ag', '`which date` çıktısı `/bin/date` ise `/bin/date` yazmak ne yapar?', ['date programını tam yolla çalıştırır; güncel tarih görünür', 'Dosyayı siler', 'O dizine geçer', 'Hata verir'], 'A', 'which yalnızca yolu gösterir; tam yol yazılarak program doğrudan çalıştırılabilir.'),

    // Kapatma
    n('kapatma', '`shutdown` seçenekleri `-h`, `-r` ve `-c` sırasıyla ne yapar?', ['Kapat · yeniden başlat · iptal et', 'Yardım · sil · kopyala', 'Yeniden başlat · kapat · kapat', 'İptal · kapat · yeniden başlat'], 'A', 'halt, reboot, cancel.'),
    n('kapatma', '`sudo shutdown -h +10` ile `sudo shutdown -h now` farkı nedir?', ['`+10` on dakika sonra, `now` hemen kapatır', '`+10` on saniye sonra kapatır', '`+10` saat 10:00’da kapatır', 'Fark yoktur'], 'A', '`+dakika` biçimi göreli süredir.'),
    n('kapatma', '`sudo systemctl restart nginx` ile `sudo reboot` farkı nedir?', ['İlki yalnızca nginx hizmetini, ikincisi bütün sistemi yeniden başlatır', 'İkisi de bilgisayarı yeniden başlatır', 'İlki nginx’i siler', 'İkincisi yalnızca ağı yeniden başlatır'], 'A', 'systemctl hizmet yönetir.'),
    n('kapatma', '`sh` ile açılan bir alt kabuktan, ana oturumu kapatmadan çıkmak için ne yazılır?', ['`exit`', '`logoff`', '`quit`', '`shutdown`'], 'A', '`logoff` standart Linux komutu değildir; kabuktan `exit` ile çıkılır.'),
    n('kapatma', 'Kapatma planlandı, sonra vazgeçildi. Hangi komut sırası doğrudur?', ['`sudo shutdown -h +10` → `sudo shutdown -c`', '`sudo shutdown -c` → `sudo shutdown -h +10`', '`sudo reboot` → `sudo shutdown -c`', '`sudo shutdown -h now` → `sudo shutdown -c`'], 'A', '`-c` yalnızca **bekleyen** bir planı iptal eder; `now` ve `reboot` beklemeden uygulanır.')
  ];

  // Ek soruların şıklarını sabit tohumla karıştır (doğru cevap hep A/B'de kalmasın)
  var shuf = rng(90);
  N.forEach(function (q) {
    var idx = [0, 1, 2, 3];
    for (var i = 3; i > 0; i--) { var j = Math.floor(shuf() * (i + 1)); var x = idx[i]; idx[i] = idx[j]; idx[j] = x; }
    q.opts = idx.map(function (k) { return q.opts[k]; });
    q.a = idx.indexOf(q.a);
  });

  // Konu testleri: önce hocanın soruları (numara sırasıyla), sonra ek sorular
  var TQ = {};
  window.TOPICS.forEach(function (t) { TQ[t.id] = []; });
  H.forEach(function (q) { TQ[q.topic].push(q); });
  N.forEach(function (q) { TQ[q.topic].push(q); });

  // Deneme vizeleri: sabit tohumlu karıştırma, konulara dağıtılmış 3 × 20 soru
  var rand = rng(208);
  var byTopic = window.TOPICS.map(function (t) {
    var list = TQ[t.id].slice();
    for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var x = list[i]; list[i] = list[j]; list[j] = x; }
    return list;
  });
  var order = window.TOPICS.map(function (t) { return t.id; });
  function demo(k) {
    var picked = [], start = k * 4, guard = 0;
    while (picked.length < 20 && guard++ < 100) {
      for (var i = 0; i < byTopic.length && picked.length < 20; i++) {
        var list = byTopic[(start + i) % byTopic.length];
        if (list.length) picked.push(list.shift());
      }
      start += 5;
    }
    return picked.sort(function (a, b) { return order.indexOf(a.topic) - order.indexOf(b.topic) || (a.no || 999) - (b.no || 999); });
  }

  window.TOPIC_QUESTIONS = TQ;
  window.EXAMS = [
    { id: 'hoca', group: 'hoca', mode: 'practice', featured: true, title: 'Hocanın 90 çalışma sorusu', desc: 'LINUX_CALISMASORULARI birebir, cevap anahtarı açıklamalarıyla.', questions: H },
    { id: 'demo1', title: 'Deneme vizesi 1', desc: '20 soru: hocanın soruları ve ek sorular, tüm konulardan.', questions: demo(0) },
    { id: 'demo2', title: 'Deneme vizesi 2', desc: '20 soru, deneme 1 ile çakışmaz.', questions: demo(1) },
    { id: 'demo3', title: 'Deneme vizesi 3', desc: '20 soru, önceki denemelerle çakışmaz.', questions: demo(2) }
  ];
  window.LINUX_RAW = { H: H, N: N };
})();
