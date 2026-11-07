/* Linux genel tekrar içeriği.
   Ana kaynak: LINUX_CALISMASORULARI (90 soru). LAB1–LAB4 föyleri yalnızca bu komutları açıklamak için kullanıldı.
   Satır içi biçim: `kod`, **kalın**. */

window.COURSE = {
  id: 'linux',
  lang: 'sh',
  storeKey: 'linuxvize-best',
  reviewLead: 'LAB1–LAB4 komutlarının konu konu özeti. Ana kaynak 90 soruluk çalışma soruları; uygulama föyleri sadece bu komutları açıklamak için kullanıldı.',
  formatTitle: 'Çalışma soruları ve deneme formatı',
  formatNote: 'Linux vizesinin soru sayısı ve puanlaması belirtilmedi. Deneme vizeleri, çalışma soruları gibi 4 şıklı test olarak 20 soru × 5 puan hazırlandı.',
  hocaLink: { href: '#test/hoca', text: 'Hocanın 90 çalışma sorusunu çöz →' },
  testLead: 'Çalışma soruları 4 şıklı test. Deneme vizeleri 20 soru × 5 puan.',
  points: { mc: 5 },
  randomExam: { mc: 20 },
  randomDesc: 'Her açılışta farklı 20 soru: hocanın soruları ve ek sorular, tüm konulardan.'
};

window.EXAM_FORMAT = [
  { range: 'Çalışma soruları', what: '4 şıklı test, cevap anahtarlı', big: '90', small: 'soru' },
  { range: 'Deneme vizeleri', what: 'Aynı tarz, konulara dağılmış', big: '20', small: 'soru × 5 puan' },
  { range: 'Kapsam', what: 'LAB1 – LAB4 komutları', big: '12', small: 'konu' }
];

window.TRAPS = [
  { t: '`help` Bash yerleşikleri · `man` kılavuz sayfası · `whatis` tek satırlık açıklama · `ls --help` (boşluksuz)', topic: 'yardim' },
  { t: '`echo PATH` sadece “PATH” yazar. Değişkenin değeri için `echo "$PATH"`', topic: 'yardim' },
  { t: '`time` komutun süresini ölçer · `date` tarih/saat · `uptime` sistemin açık kalma süresi', topic: 'sistem' },
  { t: '`last` geçmiş oturumlar · `history` komut geçmişi · `whoami` etkin kullanıcı', topic: 'sistem' },
  { t: '`df` dosya sistemi alanı · `du` dosya/dizin kullanımı · `free` RAM ve takas', topic: 'kaynak' },
  { t: '`ps` anlık · `top` canlı · `pstree` ağaç · `pmap PID` bellek haritası', topic: 'surec' },
  { t: '`kill` PID ile · `killall` tam adla · `pkill` ad deseniyle sinyal gönderir', topic: 'is' },
  { t: '`&` arka planda başlatır · `bg %1` durdurulmuş işi arka planda sürdürür · `fg %2` ön plana alır', topic: 'is' },
  { t: '`rmdir` yalnızca **boş** dizin · `rm` dosya · `touch` dosya oluşturur (dizin değil)', topic: 'dizin' },
  { t: '`>` üzerine yazar, `>>` sona ekler · `tee dosya` hem dosyaya hem ekrana · `tee > dosya` sadece dosyaya', topic: 'dosya' },
  { t: '`wc` sırası: satır, kelime, bayt · `head -n 5 dosya` ilk 5, `tail -n 5 dosya` son 5', topic: 'metin' },
  { t: '`cp` kopyalar (kaynak kalır) · `mv` taşır/yeniden adlandırır · `find . -name` canlı, `locate` veritabanı', topic: 'kopya' },
  { t: '`/proc/filesystems` desteklenen · `/proc/mounts` bağlı · `|` bir komutun çıktısını diğerine aktarır', topic: 'proc' },
  { t: '`which` program yolu · `whereis` ikili+kaynak+kılavuz · `/etc/hosts` yerel adlar · `/etc/resolv.conf` DNS', topic: 'ag' },
  { t: 'shutdown `-h` kapat · `-r` yeniden başlat · `-c` iptal · `+10` = 10 dakika. `systemctl restart` = hizmet', topic: 'kapatma' }
];

window.TOPICS = [
  {
    id: 'yardim',
    title: 'Yardım, kabuk ve değişkenler',
    src: 'Çalışma soruları: 1–5, 28, 84–86, 90 · LAB1',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`help`', 'Bash **yerleşik** komutları hakkında yardım (`help echo`)'],
        ['`man ls`', 'ls’in ayrıntılı **kılavuz sayfası**. Boşlukla ilerlenir, `q` ile çıkılır.'],
        ['`whatis ls`', 'Kılavuzdaki **tek satırlık** kısa açıklama'],
        ['`ls --help`', 'Komutun kendi kullanım özeti. `--help` tek seçenektir, araya boşluk konmaz.'],
        ['`clear`', 'Terminal ekranını temizler (`cls` Windows komutudur)'],
        ['`history`', 'Bu kabukta daha önce girilen komutlar'],
        ['`echo "Merhaba"`', 'Ekrana metin yazar'],
        ['`exit`', 'Geçerli kabuk oturumundan çıkar']
      ] },
      { t: 'code', code:
`echo PATH         # sadece PATH kelimesini yazar
echo "$PATH"      # PATH değişkeninin değeri
echo "$BASH"      # çalışan Bash programının yolu`, out:
`PATH
/usr/local/bin:/usr/bin:/bin
/bin/bash` },
      { t: 'ul', items: [
        '`$` değişkenin **değerini** getirir. `PATH`: komutların arandığı dizinler, aralarında `:` var.',
        '`$BASH`: çalışan Bash’in program yolu. Bash olmayan kabukta boş olabilir.'
      ] },
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`sudo komut`', 'Komutu yetki politikasına göre **yetkili** olarak çalıştırır'],
        ['`su`', 'Başka bir kullanıcıya **geçer** (kullanıcı değiştirme)']
      ] },
      { t: 'tip', text: '“Yerleşik komut yardımı” → `help` · “kılavuz sayfası” → `man` · “kısa açıklama” → `whatis`' },
      { t: 'trap', text: '`ls -- help`, `ls help --all` yanlış. Doğru yazım: `ls --help`. Windows’taki `cls`, `dir` Linux komutu değildir.' }
    ]
  },
  {
    id: 'sistem',
    title: 'Sistem bilgisi, kullanıcı ve zaman',
    src: 'Çalışma soruları: 6–13, 16 · LAB1',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne gösterir'], rows: [
        ['`hostname`', 'Bilgisayarın (ağ) adı'],
        ['`whoami`', 'Komutu çalıştıran **etkin kullanıcının** adı'],
        ['`uname -a`', 'Çekirdek ve sistem bilgileri topluca'],
        ['`lsb_release -a`', 'Dağıtımın kimliği ve sürümü (ör. Ubuntu 22.04)'],
        ['`uptime`', 'Sistemin **ne kadar süredir açık** olduğu ve yük ortalamaları'],
        ['`date`', 'Güncel **tarih ve saat**'],
        ['`time ls`', '`ls` komutunun **çalışma süresini** ölçer'],
        ['`cal`', 'Geçerli ayın takvimi'],
        ['`last`', 'Geçmiş **oturum açma** kayıtları']
      ] },
      { t: 'code', code: `time sleep 2      # sleep 2'nin süresini ölçer`, out:
`real    0m2.003s
user    0m0.001s
sys     0m0.002s` },
      { t: 'trap', text: '`time` saat göstermez; arkasından gelen komutun **süresini** ölçer. Saat için `date`, açık kalma süresi için `uptime`.' },
      { t: 'trap', text: '`last` oturum kayıtları, `history` komut geçmişi, `whoami` etkin kullanıcının adı. `whoami` bilgisayar adını vermez (`hostname`).' },
      { t: 'tip', text: '`uname -a` → çekirdek/sistem · `lsb_release -a` → dağıtım (hangi Linux sürümü)' }
    ]
  },
  {
    id: 'kaynak',
    title: 'Disk ve bellek kullanımı',
    src: 'Çalışma soruları: 14, 15, 59, 60 · LAB1, LAB4',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne gösterir'], rows: [
        ['`df` · `df -h`', 'Bağlı **dosya sistemlerinin** kullanılan ve boş alanı'],
        ['`free` · `free -m`', '**RAM ve takas** (swap) kullanımı. `-m`: MB cinsinden'],
        ['`du -sh Belgeler`', 'Belgeler dizininin **toplam** disk kullanımı. `-s` yalnız toplam, `-h` okunabilir birim (K, M, G)'],
        ['`du -h --max-depth=1 .`', 'Alt dizinleri **bir düzey derinliğe** kadar raporlar (GNU)']
      ] },
      { t: 'code', code: `du -sh Belgeler`, out: `1.1M    Belgeler` },
      { t: 'trap', text: '`df` dosya sistemi · `du` dosya/dizin · `free` bellek. `--max-depth=1` dosya boyutunu ya da sayısını değil **dizin derinliğini** sınırlar.' },
      { t: 'low', text: 'Alpine/BusyBox’ta `--max-depth` yerine `du -h -d 1 .` kullanılır (LAB4).' }
    ]
  },
  {
    id: 'surec',
    title: 'Süreçleri izleme',
    src: 'Çalışma soruları: 17–20, 47 · LAB2',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`ps`', 'Süreçlerin **anlık** listesi'],
        ['`ps aux`', 'Geniş kapsamlı anlık liste (tüm kullanıcıların süreçleri)'],
        ['`top`', 'Süreçleri ve CPU/bellek kullanımını **sürekli güncellenen** ekranda izler. `q` ile çıkılır.'],
        ['`pstree`', 'Üst/alt süreç ilişkileri **ağaç** biçiminde'],
        ['`pmap 2450`', 'PID’si 2450 olan sürecin **bellek haritası**. Ad değil, PID alır.'],
        ['`fuser rapor.txt`', 'Dosyayı kullanan süreçlerin **PID** değerleri']
      ] },
      { t: 'code', code:
`ps aux           # anlık geniş liste
pstree           # süreç ağacı
pmap 2450        # PID 2450'nin bellek haritası`
      },
      { t: 'ul', items: [
        '**PID**: işletim sisteminin süreç numarası. `jobs` çıktısındaki `[1]` ise kabuğun iş numarasıdır (sonraki konu).',
        '`tail -f dosya` çalışırken `fuser dosya` yazılırsa tail sürecinin PID’si görünür.'
      ] },
      { t: 'trap', text: '`ps` anlık fotoğraf, `top` canlı ekran. `pmap` ve `kill` PID alır; süreç **adı** alanlar `killall` ve `pkill`.' }
    ]
  },
  {
    id: 'is',
    title: 'İş kontrolü ve sinyaller',
    src: 'Çalışma soruları: 21–27 · LAB2',
    blocks: [
      { t: 'table', head: ['Komut / tuş', 'Ne yapar'], rows: [
        ['`sleep 20 &`', '`&` işi **arka planda başlatır**. `sleep 20`: 20 saniye bekler.'],
        ['Ctrl+Z', 'Ön plandaki işi **duraklatır** (sonlandırmaz)'],
        ['Ctrl+C', 'Ön plandaki işi **sonlandırır**'],
        ['`jobs`', 'Bu kabuğun yönettiği arka plan ve durdurulmuş işler'],
        ['`bg %1`', '1 numaralı durdurulmuş işi **arka planda** sürdürür'],
        ['`fg %2`', '2 numaralı işi **ön plana** getirir'],
        ['`kill 2450`', 'PID 2450’ye varsayılan sonlandırma sinyali (SIGTERM)'],
        ['`killall ping`', 'Adı **ping** olan (ve yetkin olan) süreçlere sinyal'],
        ['`pkill ping`', 'Adı **ping desenine uyan** süreçlere sinyal']
      ] },
      { t: 'code', code:
`sleep 600       # ön planda; Ctrl+Z ile duraklat
jobs
bg %1           # arka planda sürdür
fg %1           # ön plana al, Ctrl+C ile bitir`, out:
`[1]+  Stopped        sleep 600      ← Ctrl+Z / jobs
[1]+ sleep 600 &                     ← bg %1
sleep 600                            ← fg %1` },
      { t: 'table', head: ['Komut', 'Hedefi nasıl seçer?'], rows: [
        ['`kill`', 'PID ile (`kill 2450`)'],
        ['`killall`', 'Süreç adıyla (`killall ping`)'],
        ['`pkill`', 'Ad deseniyle (`pkill ping`)']
      ] },
      { t: 'trap', text: '`%1` iş numarasıdır (jobs), PID değildir. `killall` bütün süreçleri koşulsuz kapatmaz; yalnızca o ada sahip ve sinyal gönderme yetkin olan süreçleri hedefler. `rm 2450` süreç değil dosya siler.' },
      { t: 'tip', text: '“Durdurulmuş işi arka planda sürdür” → `bg` · “ön plana getir” → `fg` · “arka planda başlat” → `&`' }
    ]
  },
  {
    id: 'dizin',
    title: 'Dizin işlemleri',
    src: 'Çalışma soruları: 30–35 · LAB3',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`ls` · `ls -l` · `ls -a`', 'Listeler · ayrıntılı (izin, boyut, tarih) · gizli girdiler dahil'],
        ['`pwd`', 'Çalışılan dizinin **tam yolu**'],
        ['`cd Belgeler`', 'Göreli yol: geçerli dizinin altındaki Belgeler’e geçer'],
        ['`cd ..`', 'Bir üst dizin'],
        ['`cd ~`', 'Ev dizini'],
        ['`mkdir Uygulama`', 'Yeni dizin (birden çok ad verilebilir: `mkdir a b c`)'],
        ['`rmdir Deneme`', '**Boş** dizini siler'],
        ['`rm rapor.txt`', 'Dosyayı siler (çöp kutusuna gitmez)']
      ] },
      { t: 'code', code:
`pwd
cd Belgeler
pwd
cd ..
pwd`, out:
`/home/ogrenci
/home/ogrenci/Belgeler
/home/ogrenci` },
      { t: 'trap', text: '`rmdir` dolu dizinde hata verir, dizin korunur. Dosya silmek için `rm`. Dizin oluşturmak `mkdir` ile; `touch` dosya oluşturur.' },
      { t: 'tip', text: 'Göreli yol geçerli dizine eklenir: `/home/ogrenci` içinde `cd Belgeler` → `/home/ogrenci/Belgeler`' }
    ]
  },
  {
    id: 'dosya',
    title: 'Dosya oluşturma ve yönlendirme',
    src: 'Çalışma soruları: 29, 37–40, 42–44 · LAB3',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`touch bos.txt`', 'Dosya yoksa **boş dosya** oluşturur. Varsa içeriği korur, sadece zaman damgalarını günceller.'],
        ['`cat not.txt`', 'İçeriğin tamamını terminale yazar'],
        ['`cat > not.txt`', 'Klavyeden girilen satırları dosyaya yazar. Boş satırda **Ctrl+D** girişi bitirir.'],
        ['`echo "x" > not.txt`', '`>` dosyaya **yazar**, eski içerik silinir'],
        ['`echo "x" >> not.txt`', '`>>` dosyanın **sonuna ekler**'],
        ['`tee sonuc.txt`', 'Girdiyi **hem dosyaya hem ekrana** yazar'],
        ['`tee > sonuc.txt`', 'Çıktı dosyaya yönlendirilir, ekranda görünmez'],
        ['`tee >> sonuc.txt`', 'Girdiyi dosyanın sonuna ekler']
      ] },
      { t: 'code', code:
`echo "Merhaba" > not.txt
echo "Linux" >> not.txt
cat not.txt`, out:
`Merhaba
Linux` },
      { t: 'code', code:
`echo "Merhaba" > not.txt
echo "Linux" > not.txt      # yine > : üzerine yazar
cat not.txt`, out: `Linux` },
      { t: 'trap', text: '`>` üzerine yazar, `>>` ekler. `cat > dosya` dolu bir dosyanın eski içeriğini siler. `touch` dolu dosyayı boşaltmaz.' },
      { t: 'tip', text: '`tee` ismini T şeklindeki boru bağlantısından alır: veri ikiye ayrılır, hem dosyaya hem ekrana gider.' }
    ]
  },
  {
    id: 'metin',
    title: 'Metin dosyalarını inceleme',
    src: 'Çalışma soruları: 41, 45, 46, 48–52 · LAB3',
    blocks: [
      { t: 'code', code: `cat ogrenciler.txt`, out:
`Zeynep 70
Ali 90
Deniz 65
Ece 85
Can 60` },
      { t: 'table', head: ['Komut', 'Ne yapar', 'Bu dosyada sonuç'], rows: [
        ['`head -n 2 ogrenciler.txt`', 'İlk 2 satır (n verilmezse 10)', 'Zeynep 70, Ali 90'],
        ['`tail -n 1 ogrenciler.txt`', 'Son satır', 'Can 60'],
        ['`grep \'Ali\' ogrenciler.txt`', 'Desenle eşleşen satırlar', 'Ali 90'],
        ['`sort ogrenciler.txt`', 'Satırları sıralar, dosya değişmez', 'Ali, Can, Deniz, Ece, Zeynep'],
        ['`nl ogrenciler.txt`', 'Boş olmayan satırları numaralar', '1 Zeynep 70 … 5 Can 60'],
        ['`wc ogrenciler.txt`', 'Satır, kelime, bayt sayısı', '`5 10 40 ogrenciler.txt`'],
        ['`more uzun.txt`', 'Sayfa sayfa gösterir', ''],
        ['`less uzun.txt`', 'İleri-geri gezinir, `/Ali` ile arar, `q` ile çıkar', '']
      ] },
      { t: 'code', code: `sort ogrenciler.txt | head -n 1    # sırala, ilk satırı al`, out: `Ali 90` },
      { t: 'trap', text: '`wc` sırası: **satır → kelime → bayt**. `19 23 150 veri.txt` = 19 satır, 23 kelime, 150 bayt.' },
      { t: 'trap', text: 'Sayı `-n`’den hemen sonra gelir: `head -n 5 veri.txt` (`head -n veri.txt 5` yanlış). `head` baştan, `tail` sondan.' }
    ]
  },
  {
    id: 'kopya',
    title: 'Kopyalama, arama ve sıkıştırma',
    src: 'Çalışma soruları: 36, 53–58 · LAB3',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`cp a.txt b.txt`', 'Kopya oluşturur, a.txt **korunur**'],
        ['`cp -r veriler yedek/`', 'Dizini içeriğiyle kopyalar'],
        ['`mv eski.txt yeni.txt`', 'Taşır ya da **yeniden adlandırır**; eski ad kalmaz'],
        ['`file belge`', 'Dosya türünü **içeriğe** bakarak söyler (uzantıdan bağımsız)'],
        ['`find . -name \'rapor.txt\'`', 'Geçerli dizin ve alt dizinlerde **canlı** arama'],
        ['`locate rapor.txt`', 'Önceden oluşturulmuş **veritabanında** dosya adı arar'],
        ['`gzip rapor.txt`', 'Sıkıştırır → `rapor.txt.gz` (asıl dosya kalkar)'],
        ['`gunzip rapor.txt.gz`', 'Açar → `rapor.txt`']
      ] },
      { t: 'code', code:
`gzip rapor.txt
ls
gunzip rapor.txt.gz
ls`, out:
`rapor.txt.gz
rapor.txt` },
      { t: 'trap', text: '`find` sözdizimi: önce başlangıç dizini, sonra koşul → `find . -name \'rapor.txt\'`. `find -name . rapor.txt` ve `ls -name` yanlış.' },
      { t: 'trap', text: 'Yeni oluşturulan dosya `locate` ile bulunamayabilir; veritabanı henüz güncellenmemiştir. `find` o anki dizin ağacını taradığı için bulur.' }
    ]
  },
  {
    id: 'proc',
    title: 'Çekirdek, /proc ve donanım',
    src: 'Çalışma soruları: 61, 62, 66–72, 76–78, 87 · LAB4',
    blocks: [
      { t: 'table', head: ['Dosya / komut', 'İçerik'], rows: [
        ['`/proc/version`', 'Çekirdek **sürümü** ve derleme bilgisi'],
        ['`/proc/cpuinfo`', '**İşlemci** modeli ve özellikleri'],
        ['`/proc/meminfo`', '**RAM ve takas** ayrıntıları (MemTotal, MemAvailable)'],
        ['`/proc/modules`', 'Yüklü çekirdek **modülleri** (lsmod ile aynı bilgi)'],
        ['`/proc/filesystems`', 'Çekirdeğin **desteklediği** dosya sistemi türleri'],
        ['`/proc/mounts`', 'Şu an **bağlı** dosya sistemleri ve bağlama seçenekleri'],
        ['`/proc/interrupts`', '**Kesme** (interrupt) sayaçları'],
        ['`lsmod`', 'Yüklü çekirdek modülleri'],
        ['`dmesg`', 'Çekirdeğin halka tamponundaki mesajlar (yetki gerekebilir)'],
        ['`lspci`', 'PCI aygıtları (ekran kartı vb.)'],
        ['`lsusb`', 'USB aygıtları']
      ] },
      { t: 'code', code:
`lspci | grep VGA                  # | : lspci çıktısını grep'e aktarır
sudo dmesg | tail -n 20           # çekirdek mesajlarının son 20 satırı
grep -E "MemTotal|MemAvailable" /proc/meminfo`, out:
`MemTotal:        2035480 kB      ← son komutun çıktısı
MemAvailable:    1532100 kB` },
      { t: 'trap', text: 'Komutlar arasındaki `|` (boru) bir komutun çıktısını diğerinin girdisine aktarır. Tırnak içindeki `|` (`grep -E`) ise “veya” demektir.' },
      { t: 'tip', text: '/proc dosyaları `cat`, `less` veya `more` ile okunur; soruda önemli olan **dosya adı**. filesystems = desteklenen, mounts = bağlı.' }
    ]
  },
  {
    id: 'ag',
    title: 'Ağ, ad çözümleme ve program yolları',
    src: 'Çalışma soruları: 63–65, 73–75, 88 · LAB4',
    blocks: [
      { t: 'table', head: ['Komut / dosya', 'Ne gösterir'], rows: [
        ['`ip address` (`ip a`)', 'Ağ arayüzleri ve IP adresleri'],
        ['`ifconfig`', 'Eski araç: ağ arayüzlerini görüntüler ve yapılandırır'],
        ['`which date`', 'PATH’te bulunan date programının **yolu** (ör. `/bin/date`)'],
        ['`whereis ls`', 'ls’in **ikili, kaynak ve kılavuz** dosyalarının yerleri'],
        ['`/etc/hosts`', 'Yerel **IP ↔ bilgisayar adı** eşleştirmeleri (127.0.0.1 localhost)'],
        ['`/etc/resolv.conf`', '**DNS** sunucusu ayarları (`nameserver` satırları)'],
        ['`/var/log/boot.log`', 'Açılış günlüğü (her dağıtımda bulunmayabilir)']
      ] },
      { t: 'code', code: `grep 'nameserver' /etc/resolv.conf`, out: `nameserver 8.8.8.8` },
      { t: 'trap', text: '`which` sadece çalıştırılacak programın yolu · `whereis` ikili + kaynak + kılavuz · `whatis` kısa açıklama. Üçü sık karıştırılır.' },
      { t: 'trap', text: '`/etc/hosts` yerel ad–IP eşleştirmeleri; DNS sunucusu ise `/etc/resolv.conf` içinde.' }
    ]
  },
  {
    id: 'kapatma',
    title: 'Hizmet yönetimi ve kapatma',
    src: 'Çalışma soruları: 79–83, 89 · LAB4',
    blocks: [
      { t: 'table', head: ['Komut', 'Ne yapar'], rows: [
        ['`sudo reboot`', 'Sistemi yeniden başlatır'],
        ['`sudo shutdown -h now`', '**Hemen** kapatır'],
        ['`sudo shutdown -h +10`', '**10 dakika sonra** kapatmayı planlar'],
        ['`sudo shutdown -r +5`', '5 dakika sonra **yeniden başlatmayı** planlar'],
        ['`sudo shutdown -c`', 'Planlanmış kapatmayı **iptal** eder'],
        ['`sudo systemctl restart nginx`', 'Sadece **nginx hizmetini** yeniden başlatır (systemd)']
      ] },
      { t: 'tip', text: 'Harf ipucu: `-h` **h**alt (kapat) · `-r` **r**eboot (yeniden başlat) · `-c` **c**ancel (iptal) · `now` hemen · `+10` on dakika sonra' },
      { t: 'trap', text: '`systemctl restart nginx` bilgisayarı değil, yalnızca hizmeti yeniden başlatır. `+10` dakikadır, `10s` değil. `reboot +10` ve `systemctl restart +10` kapatma planlamaz.' }
    ]
  }
];
