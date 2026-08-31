let bahasaSekarang = "id"; let bukuTampilSemua = false;

const daftarBuku = [
    {
        id: "buku-1",
        judul: "The Vegetarian",
        penulis: "Han Kang",
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN: ["Fiction"],
        rating: "⭐ 4.7/5",
        gambar: "gambar/buku/veget.jpg", 
        teksReviewID: `Gara-gara sebuah mimpi, Kim Young-hye mendadak berhenti makan daging. Keputusan ekstrem ini ternyata menjadi awal dari runtuhnya kehidupan rumah tangga dan keluarganya.<br><br> The Vegetarian bukan sekadar buku tentang pola makan, tapi juga tentang romansa gelap, dinamika kakak-beradik, dan perjuangan seorang wanita melawan ekspektasi sekitarnya.<br><br> ​Han Kang benar-benar jenius mengemas kisah sekompleks ini jadi satu buku yang epik. Gaya bahasanya yang super detail sukses bikin setiap adegannya terasa sangat nyata.`,

        teksReviewEN:`All because of a dream, Kim Young-hye suddenly stops eating meat. It turns out, this extreme decision is the beginning of the downfall of her marriage and family.<br><br>The Vegetarian isn't just a book about dietary choices. It’s also about dark romance, sibling dynamics, and a woman's struggle against the expectations of everyone around her.<br><br>Han Kang is an absolute genius for packing such a complex story into one epic book. Her super detailed writing style totally makes every single scene feel incredibly real.`
    },
    {
        id: "buku-2",
        judul: "Renjana Azerbaijan",
        penulis: "Sania Rasyid", 
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN: ["Fiction"],
        rating: "⭐ 4.8/5",
        gambar: "gambar/buku/renjana.jpg", 
        teksReviewID: `Iskander adalah sosok pemuda yang pintar, pekerja keras, dan penuh mimpi. Dari usaha kerasnya, dia berhasil mendapatkan kesempatan besar: lanjut S2 ke Azerbaijan. ✈️ <br><br>Tapi ternyata, hidup di sana nggak sesederhana yang dibayangin. Semuanya mulai berubah sejak dia mendengar tentang seorang eksil—seseorang yang terpaksa hidup jauh dari negaranya sendiri karena alasan tertentu.
        Dari situ, hidup Iskander jadi penuh kejadian aneh, misterius, dan menegangkan. 😳 <br><br>Menurut aku, buku ini menarik banget karena nggak cuma cerita soal pendidikan dan mimpi, tapi juga ada sisi misteri yang bikin penasaran sampai akhir. <br><br> 📖 Cocok banget buat kamu yang lagi ngejar mimpi tapi juga suka cerita yang agak “beda”. Kerja keras itu penting, tapi kita juga harus siap menghadapi hal-hal tak terduga dalam hidup.`,
        teksReviewEN: `Iskander is a smart, hardworking guy with big dreams. Thanks to his hard work, he manages to land a huge opportunity: pursuing his master's degree in Azerbaijan. ✈️ <br><br>But it turns out, living there isn't as simple as he imagined. Everything starts to change when he hears about an exile—someone forced to live far from their home country for certain reasons. <br><br>From that moment on, Iskander's life becomes full of weird, mysterious, and thrilling events. 😳 <br><br>I think this book is super interesting because it's not just a story about education and dreams; it also has this mystery aspect that keeps you curious right until the very end.<br><br> 📖 It's absolutely perfect for those of you who are chasing your dreams but also love stories that are a bit "different. Hard work is important, but we also have to be prepared for the unexpected things in life.`
    },
    {
        id: "buku-3",
        judul: "Seporsi Mie Ayam Sebelum Mati",
        penulis: "Brian Khrisna",
        penerbit: "Grasindo",
        genreID: ["Fiksi"], genreEN: ["Fiction"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/ayam.jpg", 
        teksReviewID: `Buku ini mengisahkan seorang pemuda bernama Ale yang harus menghadapi trauma masa kecil serta pengalaman pahit berupa perundungan di lingkungan kerja dan sekitarnya. Semua luka dan perasaan yang ia rasakan dipendam sendirian, hingga akhirnya menumpuk dan berkembang menjadi depresi yang mendalam.<br><br>Upaya untuk mencari bantuan pun tidak selalu berjalan mulus. Psikiater yang ia datangi belum mampu memberikan perubahan yang berarti dalam hidupnya. Kondisi ini membuat Ale semakin merasa putus asa, hingga pada satu titik ia memutuskan untuk mengakhiri hidupnya.<br><br>Namun, sebelum benar-benar melangkah sejauh itu, serangkaian kejadian aneh dan tak terduga mulai terjadi. Ia bertemu dengan orang-orang baru yang secara perlahan mengubah cara pandangnya terhadap kehidupan. Pertemuan-pertemuan tersebut menjadi titik balik bagi Ale untuk melihat harapan yang sebelumnya tidak ia sadari.<br><br>Seiring berjalannya waktu, Ale mulai bangkit kembali. Ia tidak hanya sekadar pulih, tetapi juga berkembang menjadi pribadi yang “berbeda”—lebih kuat, lebih memahami dirinya, dan memiliki arah hidup yang baru.<br><br>Buku ini menyampaikan pesan yang kuat tentang pentingnya memahami kesehatan mental dan tidak memendam perasaan sendirian.<br><br>Ceritanya cukup menyentuh dan realistis, sehingga pembaca dapat ikut merasakan perjalanan emosi tokohnya. Buku ini cocok untuk pembaca yang menyukai kisah reflektif dan penuh makna tentang kehidupan.`,
        teksReviewEn:`This book tells the story of a young guy named Ale, who has to deal with childhood trauma and the painful experience of being bullied at work and in his everyday surroundings. He bottles up all his pain and emotions completely on his own, until everything piles up and spirals into deep depression.<br><br>His efforts to seek help don't really go smoothly either. The psychiatrist he visits hasn't been able to make any meaningful difference in his life. This whole situation leaves Ale feeling increasingly hopeless, to the point where he decides to end his own life.<br><br>Yet, before he actually takes that final step, a series of strange and unexpected events start to unfold. He meets new people who gradually change the way he looks at life. These encounters become a true turning point for Ale, helping him see a glimmer of hope he had never realized was there.<br><br>As time goes by, Ale starts to pick himself back up. He doesn't just recover; he grows into a "different" person—stronger, more self-aware, and guided by a brand-new sense of direction.<br><br>This book delivers a powerful message about how crucial it is to understand mental health and not bottle up our feelings alone. The story is both touching and realistic, making readers genuinely feel the character's emotional journey. It’s definitely a great read for anyone who loves reflective and meaningful stories about life.`

    },
{   id: "buku-4",
        judul: "Aura Queen Indonesia",
        penulis: "Siti Mujiati",
        penerbit: "Jigung Scientia Publisher",
        genreID: ["Self-Improvement","Non-Fiksi"], genreEN: ["Self-Improvement","Non-Fiction"],
        rating: "⭐ 4.3/5",
        gambar: "gambar/buku/siti.jpg", 
        teksReviewID:'Hadir dengan konsep self-guided yang interaktif, buku ini memberikan ruang bagi pembacanya untuk turut menuliskan kisah mereka sendiri melalui format yang unik dan personal.<br><br>Ditulis oleh Siti Mujiati, sosok influencer sekaligus penulis, Aura Queen Indonesia dipersembahkan sebagai bentuk dukungan dan pelukan moral bagi para pembacanya, terkhusus kaum perempuan dan pahlawan devisa, Pekerja Migran Indonesia.<br><br>Dengan gaya bahasa yang santai dan mudah dicerna, buku ini adalah pilihan menarik bagi siapa saja yang sedang mencari media refleksi diri untuk self-discovery maupun journaling.',
        teksReviewEN:  `Featuring an interactive self-guided concept, this book gives readers the space to write down their own stories through a format that feels unique and personal.<br><br>Written by Siti Mujiati, an influencer and author, Aura Queen Indonesia is presented as a form of moral support and a warm hug for its readers—especially for women and our "foreign exchange heroes," the Indonesian Migrant Workers.<br><br>With its casual and easy-to-digest writing style, this book is an awesome pick for anyone looking for a way to self-reflect, dive into self-discovery, or just get into journaling.`
},
{   id: "buku-5",
        judul: "Temple Alley Summer",
        penulis: "Sachiko Kashiwaba",
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.3/5",
        gambar: "gambar/buku/alley2.jpg", 
        teksReviewID: `Kazu adalah anak kelas 5 SD yang tinggal di sebuah rumah tua milik keluarganya. Suatu malam, ia tak sengaja melihat seorang gadis keluar dari kuil di area rumahnya. Kazu yang awalnya mengira gadis itu adalah hantu, terkejut saat tahu bahwa ia ternyata adalah teman sekelasnya.<br><br>Hidup Kazu yang membosankan perlahan mulai berubah semenjak bertemu Akari. Namun, banyak hal janggal yang terjadi di sekitar Akari, hingga membuat Kazu bertanya-tanya: apakah Akari sebenarnya hantu? Apakah mitos tentang Gang Kuil Kimyo yang bisa membuat orang mati hidup kembali itu benar-benar ada?<br><br>Novel fiksi ringan ini cocok untuk kamu yang menyukai bacaan tanpa istilah rumit. Jalan ceritanya santai tapi tidak membosankan, pas untuk bacaan di waktu luang.`,
        teksReviewEN:`Kazu is a 5th-grade boy living in his family's old house. One night, he accidentally spots a girl coming out of a shrine right in his yard. Kazu, who at first thinks she's a ghost, is totally shocked to find out she's actually his classmate.<br><br>His boring life slowly starts to change after meeting Akari. But, with so many weird things happening around her, Kazu can't help but wonder: is Akari actually a ghost? And is the myth about Kimyo Shrine Alley bringing the dead back to life actually true?<br><br>This light fiction novel is perfect for those of you who enjoy an easy read without any complicated terms. The storyline is super chill but never boring, making it a great pick for your free time.`
},
{  id: "buku-6",
        judul: "Sebelum Filsafat",
        penulis: "Fahrudin Faiz",
        penerbit: "MJS Press",
        genreID: ["Filsafat"] , genreEN:["Phylosophy"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/faiz3.jpg", 
        teksReviewID: `Banyak orang bilang bahwa filsafat adalah sesuatu yang harus dihindari, bahkan tak jarang ada yang menganggapnya sesat. Memang, beberapa filsuf memiliki gagasan yang sangat bertolak belakang dengan pemikiran masyarakat pada umumnya. Namun, tak sedikit juga filsuf yang justru berhasil mengubah berbagai persepsi ke arah yang jauh lebih baik.<br><br>Untuk itu, buku Sebelum Filsafat karya Fahruddin Faiz hadir sebagai bekal yang sangat mantap bagi siapa saja yang baru ingin mulai belajar filsafat. Buku ini ditulis dengan bahasa yang ringan dan mudah dipahami, serta dilengkapi dengan langkah-langkah persiapan sebelum kita benar-benar terjun ke dunia filsafat.`,
        teksReviewEn:`A lot of people say that philosophy is something you should steer clear of, and some even consider it misguided. It's true that some philosophers have ideas that totally clash with how society generally thinks. But on the flip side, there are plenty of philosophers who have actually managed to shift our perspectives for the much better.<br><br>That’s exactly why the book Sebelum Filsafat by Fahruddin Faiz serves as such a perfect starter guide for anyone just starting to look into philosophy. This book is written in a light, easy-to-digest way, and it comes complete with the prep steps you need before you actually dive headfirst into the world of philosophy.`
},
{   id: "buku-7",
        judul: "Menghilang Menemukan Jati Diri",
        penulis: "Fahrudin Faiz",
        penerbit: "Noura Book",
        genreID: ["Islam-Populer", "Filsafat"] , genreEN:["Popular-Islam", "Phylosophy"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/faiz.jpg", 
        teksReviewID:`Pernahkah terlintas di benakmu tentang apa sebenarnya tujuan kita berada di bumi ini? Mengapa kita harus lahir dan terjebak dalam rutinitas hidup yang begitu-begitu saja? Serta, apa jadinya jika kita memutuskan untuk menghilang sejenak, atau bahkan lenyap selamanya dari riuhnya dunia?<br><br>Berbagai pertanyaan mendalam tersebut dijawab dan dikemas dengan apik melalui buku Menghilang, Menemukan Jati Diri. Membaca karya ini menyadarkan kita bahwa mengambil jeda dan menepi dari hiruk-pikuk kehidupan bukanlah sebuah kesalahan.<br><br>Dilengkapi dengan pemikiran tokoh-tokoh besar seperti Descartes, Albert Camus, hingga Gandhi, buku ini menjadi bacaan yang sangat tepat untuk memperluas cakrawala pemikiran filosofis kita.`,
        teksReviewEN:`Has it ever crossed your mind what our true purpose on this earth actually is? Why we were born just to get stuck in the same old monotonous routine? And what would happen if we decided to just disappear for a while, or even vanish completely from the noisy, chaotic world?<br><br>These kinds of deep questions are beautifully answered and wrapped up in the book Menghilang, Menemukan Jati Diri. Reading this book makes you realize that taking a pause and stepping away from the hustle and bustle of life is absolutely not a mistake.<br><br>Packed with insights from great minds like Descartes, Albert Camus, and Gandhi, this book is the perfect read to broaden your philosophical horizons.`
} ,
{   id: "buku-8",
        judul: "Jika Kucing Lenyap Dari Dunia Ini",
        penulis: "Genki Kawamura",
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/koceng.jpg", 
        teksReviewID: `Jika kamu tahu hidupmu tinggal menghitung hari, apa yang akan kamu lakukan? Memilih untuk meratapi keadaan, atau justru berusaha sebaik mungkin memanfaatkan sisa waktu untuk menyelesaikan hal-hal yang belum sempat terwujud?<br><br>Pertanyaan itulah yang harus dihadapi oleh tokoh utama dalam novel karya Genki Kawamura ini. Ia bertekad untuk menggunakan sedikit sisa waktunya demi melakukan hal-hal baik. Akan tetapi, ada harga mahal yang menanti; Aloha, sosok iblis pengabul permintaan, mensyaratkan bayaran yang setimpal sebagai ganti atas waktu tersebut.<br><br>Meskipun memiliki unsur fantasi, buku ini sangat cocok bagi penyuka fiksi santai. Alurnya tidak menonjolkan sisi imajinatif yang terlalu liar, melainkan tetap mengalir hangat melalui kisah kehidupan sehari-hari yang sangat dekat dengan kita.`,
        teksReviewEN:`If you knew your days were numbered, what would you do? Would you choose to wallow in your circumstances, or would you try your absolute best to use whatever time you have left to check off those unfulfilled dreams?<br><br>That’s exactly the question the main character has to face in this novel by Genki Kawamura. He is determined to use the little time he has left to do good things. But, there's a heavy price to pay; Aloha, a wish-granting devil, demands a hefty trade in exchange for that extra time.<br><br>Even though it has a touch of fantasy, this book is absolutely perfect for fans of light fiction. The plot doesn't go overboard with wild imagination; instead, it flows warmly through everyday slices of life that feel incredibly close to home.`
    },
{   id: "buku-9",
        judul: "Dallergut : Toko Penjual Mimpi",
        penulis: "Lee Miye",
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN: ["Fiction"],
        rating: "⭐ 4.7/5",
        gambar: "gambar/buku/penny1.jpg", 
        teksReview:`Penny merupakan pegawai magang di toko penjual mimpi milik Tuan Dallergut. Ini adalah pekerjaan yang diimpikan banyak orang, mengingat Dallergut: Toko Penjual Mimpi merupakan toko yang sangat terkenal di dunia mimpi. Setiap harinya, banyak pelanggan datang untuk membeli berbagai genre mimpi yang mereka sukai.<br><br>Penny sangat menikmati pekerjaan barunya karena selalu mendapatkan wawasan baru yang menarik. Namun suatu hari, ia tertimpa masalah serius karena tak sengaja menghilangkan salah satu barang yang merupakan aset penting toko. Apakah Penny berhasil mendapatkan kembali barang tersebut?<br><br>Melalui buku ini, Lee Mi-ye berhasil menghadirkan kisah imajinatif yang berbeda dari novel kebanyakan. Cerita yang mendetail dengan penggambaran visual yang memukau sukses menyihir siapa saja yang membacanya untuk terus membalik halaman sampai akhir.`,
        teksReviewEN: `Penny is an intern at Mr. Dallergut's dream shop. It’s a job many people can only dream of, considering Dallergut Dream Department Store is a super famous spot in the dream world. Every single day, tons of customers drop by to buy whatever dream genres they are into.<br><br>Penny is really enjoying her new job because she constantly picks up fascinating new insights. But one day, she lands in some serious trouble after accidentally losing an item that is a crucial asset to the shop. Will Penny manage to get it back?<br><br>Through this book, Lee Mi-ye truly succeeds in delivering an imaginative story that hits differently compared to most novels out there. The detailed storytelling and stunning visual descriptions will totally enchant anyone reading it, making you want to keep turning the pages right up to the very end.`
} ,

{  id: "buku-10",
        judul: "Dallergut : Toko Penjual Mimpi 2",
        penulis: "Lee Miye",
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/penny2.jpg", 
        teksReviewID:`Sukses dengan seri pertamanya yang menyita banyak perhatian pencinta fiksi, Lee Mi-ye kembali menghadirkan sekuel lewat seri kedua Dallergut: Toko Penjual Mimpi.<br><br>Buku ini melanjutkan kisah Penny yang kini sudah bekerja selama setahun di toko tersebut. Ternyata, masih banyak hal di dunia mimpi yang belum diketahui oleh Penny. Untuk pertama kalinya, ia akhirnya berkesempatan mengunjungi pusat pelayanan publik yang super sibuk melayani klien dari berbagai penjuru.<br><br>Tidak hanya itu, Penny juga mendapat kesempatan langka untuk melihat langsung bagaimana sebuah mimpi diciptakan, serta bertemu dari dekat dengan para pembuat mimpi terkenal yang selama ini hanya bisa ia lihat lewat layar televisi.`,
        teksReviewEN:`Following the huge success of the first book that captured the hearts of fiction lovers, Lee Mi-ye is back with a sequel in the second installment of Dallergut Dream Department Store.<br><br>This book picks up Penny's story, who has now been working at the shop for a full year. It turns out, there are still so many things in the dream world that Penny hasn't figured out yet. For the very first time, she finally gets the chance to visit the super hectic public service center that handles clients from all over the place.<br><br>Not only that, Penny also scores a rare opportunity to see firsthand exactly how a dream is actually made, and gets to meet the famous dream makers up close—people she used to only ever see on her TV screen.`

} ,
{ id: "buku-11",
        judul: "Semoga Semua Kebaikan Ini Bisa Membuatmu Sedikit Lebih Bahagia",
        penulis: "Lucia Song", 
        penerbit: "Penerbit Baca",
        genreID: ["Non-Fiksi"], genreEN:["Non-Fiction"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/lucia.jpg",
        teksReview:'Ada buku yang tidak hanya dibaca, tapi juga dirasakan. Buku ini salah satunya. Di dalamnya, ada banyak perasaan yang mungkin pernah kita alami seperti sedih, lelah, bahagia, rasa bersalah, hingga luka yang diam-diam kita simpan. Semua dirangkai dengan sederhana, tapi tetap menyentuh.<br><br>Lucia Song seperti memeluk pembacanya lewat kata-kata. Kutipannya terasa dekat, seolah memahami apa yang tidak bisa kita ungkapkan. Gaya bahasanya ringan, namun penuh makna.<br><br>Cocok untuk siapa saja yang sedang merasa lelah, atau hanya ingin berhenti sejenak dari hiruk-pikuk kehidupan. Terkadang, yang kita butuhkan hanyalah kata-kata yang membuat kita merasa tidak sendirian. 🤍' ,
        teksReviewEN:`Some books aren't just meant to be read; they're meant to be felt. And this book is definitely one of them. Inside, you'll find so many feelings we've probably all experienced—sadness, exhaustion, happiness, guilt, and even the hidden wounds we quietly keep to ourselves. Everything is written so simply, yet it remains incredibly touching. It genuinely feels like Lucia Song is giving her readers a warm hug through her words.<br><br>The quotes feel so close to home, almost as if they completely understand the things we can't quite put into words. The writing style is super light, but deeply meaningful.<br><br>It’s the perfect pick for anyone feeling drained, or who just wants to hit pause for a moment from the hustle and bustle of life. Sometimes, all we really need are words that make us feel like we aren't alone. 🤍`
    },
{ id: "buku-12",
        judul: "The Power of Patience",
        penulis: "M.J.Ryan", 
        penerbit: "Penerbit Baca",
        genreID: ["Self-Improvement"], genreEN:["Self-Improvement"],
        rating: "⭐ 4.8/5",
        gambar: "gambar/buku/ryan.jpg", 
        teksReviewID:`Mengajarkan arti kesabaran di tengah dunia yang serba terburu-buru, buku ini hadir sebagai pengingat yang manis. Bersabar dengan segala situasi memang tak pernah mudah, terlebih di era yang menuntut kita untuk berlari dua kali lebih cepat.<br><br>Namun, buku ini menyadarkan kita bahwa merasa tertinggal bukan berarti kita gagal; kita hanya berjalan dengan ritme yang sedikit lebih pelan. Melalui berbagai tips menarik dari M.J. Ryan, kita diajak melatih kesabaran dalam menghadapi kerumitan hidup.<br><br>Buku ini menawarkan ketenangan jiwa, sangat sempurna untuk menemani waktu luangmu bersama secangkir teh atau kopi hangat.`,
        teksReviewEN:`Teaching us the meaning of patience in a world that's always in a rush, this book serves as such a sweet reminder. Staying patient in every situation is never easy, especially in an era that constantly pushes us to run twice as fast.<br><br>But this book helps us realize that feeling left behind doesn't mean we’re failing; we’re just moving at our own, slightly slower pace. Through various engaging tips from M.J. Ryan, we're invited to actively practice patience when dealing with life's everyday complexities.<br><br>Offering a real sense of inner peace, this book is absolutely perfect to accompany your downtime alongside a warm cup of tea or coffee.`

},
{ id: "buku-13",
        judul: "Mind Reader",
        penulis: "David J. Lieberman", 
        penerbit: "Penerbit Baca",
        genreID: ["Self-Improvement"], genreEN: ["Self-Improvement"],
        rating: "⭐ 4.2/5",
        gambar: "gambar/buku/mind.jpg", 
        teksReviewID:`Sering kali kita menebak-nebak isi hati dan pikiran orang lain. Pertanyaan seperti, "Apa yang sebenarnya mereka pikirkan tentang saya?" mungkin kerap melintas di benakmu. Jika kamu sering mengalami hal ini, buku Mind Reader adalah bacaan yang tepat.<br><br>Buku ini tidak sekadar mengajarkan cara membaca pikiran orang lain, tetapi juga membekali kita dengan kemampuan untuk memvalidasi kejujuran ucapan mereka—mulai dari mendeteksi rasa marah, sedih, hingga perasaan yang lebih tersembunyi.<br><br>Dilengkapi dengan berbagai contoh kasus di kehidupan sehari-hari, Mind Reader hadir sebagai panduan ampuh yang membuka wawasan dan cara berpikir kita melalui banyak sudut pandang baru.`,
        teksReviewEN: `We often find ourselves trying to guess what's going on in other people's heads. Questions like, "What do they actually think of me?" probably cross your mind a lot.<br><br>If you find yourself doing this often, the book Mind Reader is the absolute perfect read. This book doesn't just teach us how to read people's minds; it also equips us with the skills to validate how honest their words really are—from detecting anger and sadness to uncovering deeply hidden emotions.<br><br>Packed with various relatable examples from everyday life, Mind Reader serves as a powerful guide that truly broadens our horizons and shifts our way of thinking through so many new perspectives.`
},
{  id: "buku-14",    
        judul: "Same as Ever",
        penulis: "Morgan Housel", 
        penerbit: "Penerbit Baca",
        genreID: ["Self-Improvement"], genreEN:["Self-Improvement"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/same.jpg", 
        teksReviewID:`Kita sering kali terlalu terpaku dalam merencanakan masa depan yang serba tidak pasti, baik untuk mengantisipasi situasi yang mendadak sulit maupun kondisi keuangan yang tiba-tiba memburuk.<br><br>Perencanaan itu memang baik, tetapi kita kerap melupakan bahwa banyak hal di dunia ini yang sifatnya akan selalu sama sampai kapan pun—prinsip-prinsip yang bisa terus kita manfaatkan tanpa memedulikan perubahan zaman.<br><br>Lewat karyanya ini, Morgan Housel kembali memukau para pencinta psikologi keuangan. Berbagai pelajaran dari tokoh-tokoh terkenal di dalam buku ini sangat efektif mengajak kita untuk merenungkan kembali cara terbaik dalam mengelola risiko dan peluang.`,
        teksReviewEN:`We often get way too caught up in planning for a completely uncertain future, whether it's bracing for sudden hard times or unexpected financial slumps.<br><br>Planning is great, of course, but we tend to forget that a lot of things in this world will simply never change—timeless principles we can always rely on, no matter what era we're in.<br><br>Through this book, Morgan Housel once again completely wows fans of financial psychology. The various lessons from famous figures packed into this book do an amazing job of making us rethink the absolute best ways to handle risks and opportunities.`
},

{id: "buku-15",    
        judul: "Psychology of Emotion",
        penulis: "David J. Lieberman", 
        penerbit: "Penerbit Baca",
        genreID: ["Self-Improvement"], genreEN:["Self-Improvement"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/david.jpg", 
        teksReviewID:`Mempertahankan ketenangan pikiran dan mengendalikan emosi yang berpotensi merugikan diri sendiri bukanlah perkara yang mudah. Bahkan, mereka yang terbiasa melatih kontrol diri pun adakalanya masih bisa meledak-ledak saat dihadapkan pada situasi tertentu.<br><br> Untuk menjawab tantangan tersebut, psikolog ternama, David J. Lieberman, merangkum sejumlah metode efektif untuk mengelola emosi dengan lebih baik.<br><br>Buku ini memandu pembaca agar tidak mudah terpancing oleh emosi sesaat yang kerap berujung pada penyesalan. Lebih dari itu, Lieberman juga membedah berbagai jenis emosi yang umum ditunjukkan oleh manusia melalui sudut pandang psikologis yang kaya dan menyegarkan.`,
        teksReviewEN:`Keeping your peace of mind and keeping those self-sabotaging emotions in check is definitely no walk in the park. Even people who are super used to practicing self-control can still blow up when faced with certain triggering situations.<br><br>To tackle this exact struggle, renowned psychologist David J. Lieberman has put together a bunch of highly effective methods to help us manage our emotions way better.<br><br>This book guides you so you don't easily get triggered by those split-second emotions that usually just end up in regret. On top of that, Lieberman also breaks down the different kinds of everyday human emotions through a rich and totally refreshing psychological perspective.`
},
{ id: "buku-16",    
        judul: "The Art of Going Slow",
        penulis: "Damon Zahariades", 
        penerbit: "Penerbit Baca",
        genreID: ["Self-Improvement"], genreEN:["Self-Improvement"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/slow.jpg", 
        teksReviewID:`Apakah Anda merasa terjebak dalam budaya kerja yang masif, terbelenggu rutinitas monoton, dan selalu dituntut untuk menyelesaikan segala sesuatu dalam waktu singkat? Ditambah lagi, isi kepala Anda terus-menerus dijejali informasi, baik dari lingkungan kerja maupun linimasa?<br><br>Jika demikian, buku ini adalah oase yang tepat bagi Anda untuk sejenak menepi dari hiruk-pikuk kehidupan yang melelahkan dan mulai menikmati masa kini dengan lebih tenang. Sebuah pengingat yang menyadarkan bahwa tidak semua hal harus kita pikirkan; adakalanya suatu informasi cukup diketahui sesaat untuk kemudian dilupakan.<br><br>The Art of Going Slow adalah bacaan luar biasa yang wajib Anda tamatkan setidaknya sekali seumur hidup.`,
        teksReviewEN:`Do you ever feel stuck in the endless hustle culture, tied down by a monotonous routine, and constantly pressured to get everything done in record time? On top of that, is your brain constantly bombarded with information, whether from work or your social media feeds?<br><br>If so, this book is the perfect oasis for you to take a step back from the exhausting hustle and bustle of life and start enjoying the present moment with a lot more peace. It’s a gentle reminder that we don't actually have to overthink every single thing; sometimes, it’s completely fine to just acknowledge a piece of information for a second and then let it go.<br><br>The Art of Going Slow is an absolutely incredible read that you have to finish at least once in your lifetime.`
},
{   id: "buku-17",    
        judul: "Gaya Hidup",
        penulis: "Fahrudin Faiz", 
        penerbit: "MJS Press",
        genreID: ["Filsafat"], genreEN:["Phylosophy"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/hidup.jpg", 
        teksReviewID:`Buku ini mengajak kita untuk kembali memaknai hakikat sebenarnya dari hidup kita. Gaya hidup seperti apakah yang sedang kita jalani saat ini? Apakah hedonisme yang berfokus pada kesenangan berlebih, heroisme yang terkadang membuat kita lupa diri karena terlalu fokus membantu orang lain, atau minimalisme yang memaksimalkan apa yang kita miliki?<br><br>Atau, mungkinkah kita condong pada asketisme? Bagiku, asketisme adalah yang paling ideal karena mampu menyaring nilai-nilai yang sesuai dengan kebutuhan diri kita dan membuang hal-hal yang cenderung merugikan.<br><br>Semua pembahasan komprehensif ini dirangkum secara luar biasa dalam buku seri Ngaji Filsafat karya Fahruddin Faiz.`,
        teksReviewEN:`This book invites us to rethink the true essence of our lives. What kind of lifestyle are we actually living right now? Is it hedonism, which focuses on excessive pleasure? Heroism, which sometimes makes us lose ourselves because we're too focused on helping everyone else? Or minimalism, which maximizes what we already have?<br><br>Or, could it be that we lean more towards asceticism? Personally, I think asceticism is the most ideal one because it helps us filter in the values that truly fit our needs and weed out the things that only bring us down.<br><br>All of these comprehensive discussions are brilliantly wrapped up in the Ngaji Filsafat series by Fahruddin Faiz.`
},
{   id: "buku-18",    
        judul: "Filsafat Moral",
        penulis: "Fahrudin Faiz", 
        penerbit: "Mizan",
        genreID: ["Filsafat"], genreEN:["Phylosophy"],
        rating: "⭐ 4.4/5",
        gambar: "gambar/buku/moral.jpg", 
        teksReviewID:`Ironisnya, semakin maju sebuah peradaban dan semakin canggih teknologi yang memudahkan kehidupan, tingkat moralitas manusia justru kian menurun, baik terhadap sesama manusia maupun makhluk ciptaan Tuhan lainnya.<br><br>Buku ini menjabarkan secara komprehensif bahwa moralitas manusia memiliki pengaruh yang sangat vital bagi kelangsungan hidup di bumi. Kita diajak menyadari bahwa perkara moral jauh lebih kompleks daripada sekadar anjuran berbuat baik. Faktor lingkungan sekitar, dinamika isu sosial, hingga intervensi dari sebuah negara memegang peranan penting dalam membentuk moralitas individu.<br><br>Dengan mengambil perspektif luas dari pemikiran Al-Ghazali hingga Hans Jonas, Fahruddin Faiz sukses menguraikan proses kompleks di balik terbentuknya moral seseorang.`,
        teksReviewEN:`Ironically, as civilization advances and technology makes our lives so much easier, human morality actually seems to be on the decline—not just toward our fellow humans, but toward all of God's creations.<br><br>This book lays out comprehensively just how vital human morality is for the survival of life on Earth. It makes us realize that morality is way more complex than just a simple reminder to "be good." Things like our environment, the dynamics of social issues, and even state interventions play huge roles in shaping an individual's morals.<br><br>By bringing in a wide range of perspectives—from the teachings of Al-Ghazali all the way to Hans Jonas—Fahruddin Faiz totally succeeds in breaking down the complex process behind how a person's morality is built.`
},
{    id: "buku-19",    
        judul: "Seni Merayu Tuhan",
        penulis: "Husein Ja'far Al Hadar", 
        penerbit: "Mizan",
        genreID: ["Islam-Populer" , "Filsafat"], genreEN:["Popular-Islam","Phylosophy"],
        rating: "⭐ 4.3/5",
        gambar: "gambar/buku/habib.jpg", 
        teksReviewID:`Habib Jafar, atau yang belakangan akrab disapa "Habib Industri", dikenal luas berkat metode dakwahnya yang out of the box, santai, dan sangat dekat dengan anak muda.<br><br>Dalam buku ini, beliau menyentuh sebuah keresahan yang pasti pernah kita rasakan: kenapa doa kita seolah belum dikabulkan? Kita merasa sudah berdoa setiap hari, namun Tuhan seolah tidak mendengarkan. Pertanyaan seperti "Apakah Tuhan benar-benar ada?" atau "Kenapa Tuhan seolah menahan permintaan kita?" dijawab dengan sangat menyejukkan di sini.<br><br>Habib Jafar menjelaskan bahwa Tuhan selalu dekat dan mendengar doa kita. Hanya saja, kita tidak berhak "mendikte" Tuhan. Alih-alih menuntut, kita seharusnya merayu-Nya—ibarat seorang karyawan yang sedang merayu atasannya untuk meminta kenaikan gaji atau jabatan.<br><br>Semua pesan ini dibungkus apik dengan suntikan unsur filsafat yang ringan, menjadikannya bacaan yang asyik dan sangat pas bagi orang awam. Bener-bener recommended buat kamu yang pengen bacaan berbobot yang santai`,
        teksReviewEN:`Habib Jafar—who has recently been affectionately nicknamed "Habib Industri"—is widely known for his out-of-the-box, laid-back preaching style that really connects with young people.<br><br>In this book, he touches on a frustration we've all definitely felt at some point: why does it seem like our prayers aren't being answered? We feel like we've been praying every single day, yet it seems as if God isn't listening. Questions like "Is God really there?" or "Why does God seem to be holding back on granting our requests?" are answered in such a soothing and comforting way here.<br><br>Habib Jafar explains that God is always close and always hears our prayers. It's just that we don't have the right to "dictate" to God. Instead of demanding things, we should be gently persuading or sweet-talking Him—kind of like an employee trying to charm their boss for a raise or a promotion.<br><br>All of these messages are beautifully wrapped up with a touch of light philosophy, making it a super enjoyable read that is absolutely perfect for everyday people. I totally recommend this if you're looking for a substantial read that still feels incredibly chill!`

},
{   id: "buku-20",    
        judul: "Filsafat Kebahagiaan",
        penulis: "Fahrudin Faiz", 
        penerbit: "Mizan",
        genreID: ["Filsafat"], genreEN:["Phylosophy"],
        rating: "⭐ 4.2/5",
        gambar: "gambar/buku/bahagia.jpg", 
        teksReviewID:`Apa yang terlintas di benak Anda ketika mendengar kata "bahagia"? Seperti apakah wujud kebahagiaan itu sebenarnya? Faktanya, sebagian besar orang tidak mampu mendeskripsikannya dengan rumusan yang pasti.<br><br>Kebahagiaan adalah hal yang subjektif; bisa jadi sesuatu yang membahagiakan bagi kita, justru terasa kurang menyenangkan bagi orang lain, dan begitu pula sebaliknya. Melalui karya Filsafat Kebahagiaan, Fahruddin Faiz kembali memukau pembaca dengan merangkum secara halus pemikiran para filsuf besar, mulai dari Plato, Al-Farabi, Al-Ghazali, hingga tokoh kebanggaan Indonesia, Ki Ageng Suryomentaram.<br><br>Hebatnya, masing-masing dari mereka menawarkan teori bahagia yang masih sangat relevan untuk diaplikasikan di era modern ini.`,
        teksReviewEN:`What comes to mind when you hear the word "happiness"? What does happiness actually look like? The truth is, most people can't really pin it down with an exact formula. Happiness is totally subjective; what brings us joy might not feel so great for someone else, and vice versa.<br><br>Through his work Filsafat Kebahagiaan, Fahruddin Faiz once again wows readers by smoothly summarizing the thoughts of great philosophers—ranging from Plato, Al-Farabi, and Al-Ghazali, all the way to Indonesia's own pride, Ki Ageng Suryomentaram.<br><br>The amazing part is, each of them offers a theory of happiness that is still incredibly relevant to apply in our modern era.`
},
{    id: "buku-21",    
        judul: "Menjadi Manusia Menjadi Hamba",
        penulis: "Fahrudin Faiz", 
        penerbit: "Noura Book",
        genreID: ["Islam-Populer"], genreEN:["Popular-Islam"],
        rating: "⭐ 4.3/5",
        gambar: "gambar/buku/Hamba.jpg", 
        teksReviewID:`Seri Ngaji Filsafat kali ini menyoroti fenomena krisis spiritual manusia modern yang perlahan kehilangan sisi kemanusiaannya akibat arus dehumanisasi. Perkembangan teknologi yang kian mutakhir tanpa disadari menjadi celah bagi manusia untuk menjauh dari Tuhan, bahkan hingga taraf "menuhankan" AI (Kecerdasan Buatan)—entitas yang dianggap mahatahu dan mampu memecahkan segala hal.<br><br>Fahruddin Faiz membedah keresahan ini dengan sangat bernas. Beliau mengajak pembaca untuk merenung dan kembali pulang pada fitrah sejati kita: menjalani kodrat sebagai manusia seutuhnya, serta menjadi hamba yang hanya berserah dan menyembah kepada Tuhan.`,
        teksReviewEN:`This time around, the Ngaji Filsafat series shines a light on the spiritual crisis of modern humans, who are slowly losing their human touch thanks to the sweeping wave of dehumanization.<br><br>Without us even realizing it, the rapid rise of cutting-edge technology has created a gap that distances us from God. It's even reached the point where people are practically "worshipping" AI (Artificial Intelligence)—treating it like this all-knowing entity that can solve literally anything.<br><br>Fahruddin Faiz breaks down this unsettling reality so brilliantly. He invites readers to take a step back, reflect, and return to our true nature: fully embracing our destiny as human beings, and living as humble servants who only surrender to and worship God.`
},
{    id: "buku-22",    
        judul: "Filsafat Seni Islam",
        penulis: "Fahrudin Faiz", 
        penerbit: "Mizan",
        genreID: ["Filsafat"], genreEN:["Phylosophy"],
        rating: "⭐ 4.4/5",
        gambar: "gambar/buku/seni.jpg", 
        teksReviewID:`Kerap kali muncul anggapan di masyarakat bahwa Islam adalah agama yang kaku dan penuh dengan aturan mutlak. Memang ada benarnya, namun kita sering lupa bahwa esensi Islam adalah rahmatan lil 'alamin, pembawa rahmat bagi semesta alam.<br><br>Aturan-aturan yang tersemat di dalamnya selalu memiliki landasan atau hikmah di baliknya, bukan sekadar perintah dogmatis tanpa alasan. Tata hukum dan nilai-nilai Islam ini telah dikaji oleh banyak pihak, yang pada akhirnya mengamini keindahan agama ini—salah satunya terwujud lewat seni. <br><br>Meskipun perdebatan mengenai seni di kalangan ulama masih ada, tidak sedikit tokoh besar dan filsuf yang justru menyoroti betapa kayanya nilai seni dalam Islam. Melalui karya ini, Fahruddin Faiz sukses merangkum gagasan-gagasan mendalam dari tokoh sekaliber Seyyed Hossein Nasr hingga Hazrat Inayat Khan, serta mengubah materi yang terkesan berat menjadi sebuah penjelajahan intelektual yang sangat mengasyikkan.`,
        teksReviewEN:`There's this common assumption in society that Islam is a rigid religion packed with absolute rules. While there is some truth to that, we often forget that the true essence of Islam is rahmatan lil 'alamin—a blessing for the entire universe.<br><br>The rules embedded within it always have a solid foundation or hidden wisdom behind them; they aren't just arbitrary dogmatic commands without a reason. Islamic laws and values have been studied by so many people, who ultimately agree on the sheer beauty of this religion—which, among other things, comes to life through art.<br><br>Even though debates about art still exist among scholars, quite a few great figures and philosophers actually highlight just how rich the artistic values in Islam really are.<br><br>Through this work, Fahruddin Faiz successfully wraps up the profound ideas from heavyweights like Seyyed Hossein Nasr to Hazrat Inayat Khan, turning a seemingly heavy subject into a highly engaging intellectual adventure.`
},
{   id: "buku-23",    
        judul: "Filsafat Kebohongan",
        penulis: "Lars Svendsen", 
        penerbit: "Penerbit Baca",
        genreID: ["Filsafat","Self-Improvement"], genreEN:["Phylosophy","Self-Improvement"],
        rating: "⭐ 4.2/5",
        gambar: "gambar/buku/bohong.jpg", 
        teksReviewID:`Pernahkah Anda berbohong kepada seseorang dengan dalih demi kebaikan bersama, atau yang lumrah dikenal sebagai white lies? Pertanyaannya, bagaimana jika justifikasi tersebut justru membuat kita menormalisasi kebohongan itu sendiri? Apakah kebohongan semacam itu masih bisa ditoleransi?<br><br>Lebih jauh lagi, pernahkah terlintas keraguan: apakah orang-orang di sekitar kita benar-benar tulus, atau mereka pun sedang menyembunyikan kebohongan yang sama? Lewat buku ini, Lars Svendsen, seorang filsuf terkemuka asal Norwegia, membedah secara mendalam filosofi di balik tindakan berbohong.<br><br>Sebagai pelengkap yang sangat aplikatif, Svendsen juga memaparkan sejumlah tanda psikologis untuk mendeteksi apabila seseorang sedang berbohong kepada kita.`,
        teksReviewEN:`Have you ever lied to someone claiming it was for the greater good, or what we usually call a "white lie"? But the real question is: what if that exact justification actually leads us to normalize lying itself? Can we really still tolerate that kind of lie?<br><br>Taking it a step further, has the doubt ever crossed your mind: are the people around us actually being genuine, or are they hiding the exact same lies?<br><br>In this book, prominent Norwegian philosopher Lars Svendsen takes a deep dive into the philosophy behind the act of lying. As a super practical bonus, Svendsen also lays out several psychological signs to help us spot when someone is lying to our face.`
},
{   id: "buku-24",    
        judul: "Tuhan Ada Di Hatimu",
        penulis: "Husein Ja'far Al Hadar", 
        penerbit: "Mizan",
        genreID: ["Islam-Populer", "Filsafat"], genreEN:["Popular-Islam","Phylosophy"],
        rating: "⭐ 4.4/5",
        gambar: "gambar/buku/habib1.jpg", 
        teksReview:`Hadir untuk merespons berbagai fenomena modern seputar eksistensi Sang Pencipta, Habib Jafar—yang juga dikenal sangat menjunjung tinggi nilai toleransi—menyajikan sebuah bacaan ringan yang pesannya sangat membekas di hati.<br><br>Buku ini menuntun kita untuk menjawab keresahan tentang "keberadaan Tuhan" melalui pemahaman yang indah: bagi seorang yang beriman, Tuhan sejatinya bersemayam di dalam hatinya. Kita tidak perlu lelah mencari ke sana kemari atau menuntut bukti-bukti konkret, karena kehadiran-Nya selalu nyata. Terselip campur tangan Tuhan di setiap kebaikan yang kita temui, dan selalu ada kehendak Tuhan di balik setiap ujian yang kita hadapi. Pesan pembawaannya yang damai inilah yang membuat karyanya sukses menjadi buku bestseller.`,
        teksReviewEN:`Stepping in to respond to the various modern phenomena surrounding the existence of the Creator, Habib Jafar—who is also highly respected for his strong values of tolerance—serves up a light read with a message that truly sticks with you.<br><br>This book guides us in answering our doubts about "God's existence" through such a beautiful realization: for a believer, God truly resides right in their own heart.<br><br>We don't need to wear ourselves out looking high and low or demanding concrete proof, because His presence is always real. God's hand is subtly at work in every good thing we stumble upon, and His will is always behind every single challenge we face.This peaceful and soothing delivery is exactly what propelled his work to become a massive bestseller.`
},
{    id: "buku-25",    
        judul: "Human Act",
        penulis: "Han Kang", 
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.8/5",
        gambar: "gambar/buku/human.jpg", 
        teksReviewID: `Mengambil latar belakang tragedi Gwangju di Korea Selatan pada tahun 1980, novel ini menyajikan kisah pilu yang sangat menyentuh tentang seseorang yang putus asa mencari keberadaan sahabatnya. Isu politik antara pemerintah dengan masyarakat yang berkecamuk membuat suasana semakin mencekam.<br><br>Han Kang dengan brilian membungkus salah satu kepingan sejarah paling kelam di Korea ini melalui nuansa penceritaan yang berbeda dan sarat akan emosi. Lewat karya memukau ini, Han Kang kembali membuktikan kepiawaiannya yang selalu sukses membuat para pencinta sastra jatuh cinta pada setiap tulisannya.`,
        teksReviewEN:`Set against the backdrop of the 1980 Gwangju tragedy in South Korea, this novel delivers a heartbreakingly touching story about someone desperately searching for their best friend.<br><br>The raging political conflict between the government and the citizens makes the whole atmosphere feel incredibly tense and gripping. Han Kang brilliantly captures one of the darkest chapters in Korean history through a totally unique and emotionally charged storytelling style.<br><br>Through this stunning piece of work, Han Kang once again proves her absolute mastery, always managing to make literature lovers fall head over heels for everything she writes.`
},
{   id: "buku-26",    
        judul: "Hujan",
        penulis: "Tere Liye", 
        penerbit: "SABAKGRIP",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.2/5",
        gambar: "gambar/buku/hujan.jpg", 
        teksReviewID:'Mengambil latar jauh di peradaban modern masa depan, novel ini menceritakan kisah Esok dan Lail, dua remaja penyintas bencana alam dahsyat yang menyapu bersih hampir seperempat populasi dunia. Mereka berhasil lolos dari stasiun kereta bawah tanah yang runtuh dan menimbun semua orang, termasuk ibunda Lail. Sempat kehilangan semangat akibat tragedi tersebut, Lail perlahan mencoba bertahan hidup bersama Esok yang setia mendampinginya di pengungsian.<br><br>Namun, takdir memaksa mereka berpisah ketika Esok yang jenius mendapat kesempatan untuk bersekolah di luar kota. Ditinggal sosok terdekatnya, Lail berusaha tegar dengan menyibukkan diri dalam berbagai kegiatan. Waktu pun berlalu, dan drama mulai terbangun saat takdir kembali mempertemukan mereka. Akankah Esok dan Lail akhirnya bersatu? <br><br>Ditulis oleh Tere Liye, novel remaja ini menjadi bukti nyata kepiawaiannya dalam merajut cerita yang siap menguras air mata.',
        teksReviewEN: `Set way in the advanced future, this novel tells the story of Esok and Lail, two teenage survivors of a massive natural disaster that wiped out nearly a quarter of the world's population. They barely managed to escape a collapsing subway station that buried everyone inside, including Lail's own mother.<br><br>After losing her will to live following the tragedy, Lail slowly tries to pick up the pieces and survive alongside Esok, who faithfully stays by her side at the refugee camp. But fate eventually forces them apart when the genius Esok gets an incredible opportunity to go to school out of town.<br><br>Left behind by the person closest to her, Lail tries to stay strong by keeping herself super busy with all sorts of activities. Time goes by, and the drama really starts to build up when fate brings them together once again. Will Esok and Lail finally end up together?<br><br>Written by Tere Liye, this young adult novel is absolute proof of his mastery in weaving a story that is guaranteed to be a real tear-jerker.`
} ,
{   id: "buku-27",    
        judul: "Kota Romantika",
        penulis: "Ilham Mazalan", 
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.7/5",
        gambar: "gambar/buku/roman.jpg", 
        teksReviewID:'Pernahkah terlintas di benakmu sebuah kota utopia yang indah, di mana setiap harinya hanya dipenuhi oleh keriangan dan tawa bahagia? Inilah Kota Romantika, sebuah tempat yang menjunjung tinggi keindahan, keselamatan, dan kegembiraan sebagai pedoman hidup penghuninya. Tak ada hari tanpa perayaan yang meriah.<br><br>Namun, bagaimana jika segala utopia itu hanyalah ilusi semu yang menipu? Seperti hukum alam yang abadi, bahwa di mana ada sukacita, di sanalah dukacita akan membayangi.<br><br>Melalui buku ini, penulis secara jenius melukiskan kontrasnya sebuah realita; menguliti duka yang tersembunyi di balik gemerlap kemewahan Kota Romantika. Semua bermula dari kecurigaan Nur Balqis, seorang gadis yang baru saja kehilangan kedua orang tuanya dan memercayai bahwa mereka telah berubah menjadi bintang di langit malam. Lewat kacamata Balqis, pembaca diajak perlahan-lahan menyusuri sisi gelap dari kehidupan kota yang selama ini memabukkan warganya.',
        teksReviewEN:`Have you ever pictured a beautiful utopian city, where every single day is filled with nothing but pure joy and happy laughter?<br><br>Welcome to Romantika City—a place that holds beauty, safety, and joy as the ultimate guiding principles for its people. Not a single day goes by without a vibrant celebration. But, what if all that utopian perfection is actually just a deceptive illusion? Like an eternal law of nature: wherever there is joy, sorrow is bound to cast its shadow.<br><br>Through this book, the author brilliantly paints the stark contrast of reality, peeling back the layers of sorrow hidden beneath the glitz and glamour of Romantika City. It all begins with the growing suspicions of Nur Balqis, a young girl who has just lost both her parents and firmly believes they have turned into stars in the night sky.<br><br>Through Balqis's eyes, readers are slowly taken on a journey to uncover the dark side of a city life that has been completely intoxicating its citizens.`
},
{  id: "buku-28",    
        judul: "Laut Bercerita",
        penulis: "Leila S. Chudori", 
        penerbit: "KPG (Kepustakaan Populer Gramedia)",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.8/5",
        gambar: "gambar/buku/laut.jpg", 
        teksReviewID:'Membawa pembaca menyelami kelamnya sejarah, kisah ini berpusat pada kepedihan aktivis mahasiswa bernama Biru Laut. Ia disiksa secara keji oleh militer karena dilabeli sebagai "pembuat onar" perongrong stabilitas negara yang kala itu dikuasai oleh rezim otoriter. Hingga akhirnya, takdir tragis menjemput Laut dan menenggelamkannya dalam sunyinya dasar samudra. Hebatnya, kisah ini dinarasikan langsung oleh sang laut, yang seakan bersimpati dan menentang segala ketidakadilan terhadap rakyat kecil<br><br>Melalui novel ini, kita diajak menyaksikan beratnya perjuangan para aktivis mahasiswa demi membebaskan Indonesia dari kediktatoran—sebuah perlawanan yang diwarnai oleh kegigihan, romansa, dan pahitnya pengkhianatan.<br><br>Leila S. Chudori secara brilian mengangkat tragedi penculikan aktivis era Soeharto dan mengemasnya dengan sudut pandang yang segar tanpa menghilangkan esensi sejarahnya. Sebuah mahakarya yang wajib dibaca!',
        teksReviewEN:`Taking readers on a deep dive into the dark depths of history, this story centers on the heartbreaking journey of a student activist named Biru Laut. He is brutally tortured by the military after being branded a "troublemaker" who undermined the stability of a nation ruled by an authoritarian regime at the time.<br><br>Until finally, a tragic fate catches up to Laut, plunging him into the silent depths of the ocean. The most amazing part? This story is narrated directly by the sea itself, which feels as if it sympathizes with him and fiercely opposes all the injustices thrown at everyday people.<br><br>Through this novel, we're invited to witness just how incredibly heavy the struggle was for student activists fighting to free Indonesia from dictatorship—a resistance deeply colored by sheer perseverance, romance, and the bitter sting of betrayal.<br><br>Leila S. Chudori brilliantly brings the tragic kidnappings of activists during the Soeharto era to light, wrapping it in such a fresh perspective without ever losing the true essence of its history. An absolute masterpiece that you simply have to read!`
},
{   id: "buku-29",    
        judul: "Love for Imperfect Things",
        penulis: "Haemin Sunim", 
        penerbit: "POP (Imprint KPG)",
        genreID: ["Self-Improvement", "Non-Fiksi"], genreEN:["Self-Improvement","Non-Fiction"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/love.jpg", 
        teksReviewID:'Dikenal sebagai seorang biksu dan penulis kenamaan asal Korea Selatan, Haemin Sunim telah melakukan perjalanan ke berbagai penjuru dunia untuk membagikan khotbah yang menggugah jiwa. Banyak orang yang datang kepadanya untuk membagikan keluh kesah dan berkonsultasi tentang lika-liku kehidupan.<br><br>Seluruh kebijaksanaan dari interaksi tersebut kemudian beliau abadikan dalam goresan pena yang begitu indah dan menenangkan. Membaca setiap lembar buku ini terasa seolah kita sedang dibawa menyusuri hutan yang hening dan damai, memberikan jeda bagi pikiran yang lelah. Ini adalah sebuah mahakarya yang sangat direkomendasikan untuk dibaca setidaknya sekali seumur hidup.',
        teksReviewEN:`Widely known as a renowned South Korean monk and author, Haemin Sunim has traveled all over the world to share his soul-stirring teachings. So many people have come to him to pour out their struggles and seek advice on the unpredictable ups and downs of life.<br><br>He then beautifully captured all the wisdom gathered from these interactions into such soothing, gracefully written words. Reading through the pages of this book truly feels like taking a gentle stroll through a quiet and peaceful forest, offering a much-needed breather for an exhausted mind. It’s an absolute masterpiece that I highly recommend reading at least once in your lifetime.`
},  
{  id: "buku-30",
        judul: "Good Vibes, Good Life",
        penulis: "Vex King", 
        penerbit: "Penerbit Baca",
        genreID: ["Non-Fiksi", "Self-Improvement"], genreEN:["Non-Fiction","Self-Improvement"],
        rating: "⭐ 4.4/5",
        gambar: "gambar/buku/good.jpg", 
        teksReviewID:'Hidup berdampingan di tengah masyarakat yang beragam acap kali membuat kita tanpa sadar sekadar bergerak mengikuti arus. Kita sering kali dihadapkan pada tuntutan untuk melakukan hal-hal yang tidak sejalan dengan keinginan hati, terdesak oleh keadaan, hingga akhirnya mengabaikan perasaan diri sendiri.<br><br>Lewat karyanya ini, Vex King hadir untuk mengingatkan pentingnya self-love atau mencintai diri sendiri. Dengan merawat diri secara utuh, kita mampu memancarkan energi positif yang secara perlahan akan menyingkirkan energi negatif di sekeliling kita. Buku ini memandu pembaca untuk mulai merangkai kebiasaan-kebiasaan produktif yang selaras dengan tujuan hidup sejati, tanpa goyah oleh lingkungan sekitar yang kerap menjadi distraksi.',
        teksReviewEN:`Living in a diverse society often makes us unconsciously just go with the flow. We're constantly faced with demands to do things that don't really align with what our hearts want, backed into a corner by circumstances, to the point where we end up completely ignoring our own feelings.<br><br>Through this book, Vex King steps in to remind us just how crucial self-love really is. By wholeheartedly taking care of ourselves, we can radiate a positive energy that will slowly but surely push away the negativity around us.<br><br>This book guides readers to start building productive habits that actually align with our true life goals, without getting swayed by the surrounding environment that so often serves as a massive distraction.`
},
{   id: "buku-31",
        judul: "Mindset",
        penulis: "Carol S. Dweck", 
        penerbit: "Penerbit Baca",
        genreID: ["Non-Fiksi", "Self-Improvement"], genreEN:["Non-Fiction","Self-Improvement"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/mindset.jpg", 
        teksReviewID:'Pernahkah Anda bertanya-tanya mengapa hidup seolah terasa jalan di tempat? Anda mungkin merasa sudah melakukan berbagai upaya maksimal, namun perubahan yang signifikan tak kunjung datang. Melalui buku ini, Carol Dweck, seorang psikolog kenamaan dengan rekam jejak penelitian selama hampir dua dekade, mengupas tuntas pertanyaan seputar kepribadian manusia yang berpusat pada pola pikir (mindset). <br><br>Dweck menjabarkan secara komprehensif bahwa manusia pada dasarnya terbagi ke dalam dua kutub pola pikir: fixed mindset (pola pikir tetap) dan growth mindset (pola pikir tumbuh). Buku ini juga diperkaya dengan studi kasus dari berbagai tokoh ternama, memperlihatkan secara nyata bagaimana jenis pola pikir yang mereka adopsi memberikan dampak krusial terhadap kesuksesan bisnis maupun lintasan hidup mereka.',
        teksReviewEN:`Have you ever wondered why life sometimes feels like it's stuck in a rut? You might feel like you've tried your absolute hardest, yet that major breakthrough just never seems to arrive.<br><br>Through this book, Carol Dweck—a renowned psychologist with nearly two decades of research under her belt—takes a deep dive into questions about human personality, all centered around the concept of "mindset." <br><br>Dweck comprehensively lays out how people basically fall into two main mindset camps: the fixed mindset and the growth mindset.Packed with case studies from various famous figures, this book clearly shows how the specific mindset they adopt plays a massive role in their business success and their overall life trajectory.`
},
{   id: "buku-31",
        judul: "The Art oF Spending Money",
        penulis: "Karya: Morgan Housel", 
        penerbit: "Penerbit: Penerbit Baca",
        genreID: ["Self-Improvement","keuangan"], genreEN:["Non-Fiction","Finance"],
        rating: "⭐ 4.4/5",
        gambar: "gambar/buku/money.jpg", 
        teksReviewID:'Setelah sukses dengan The Psychology of Money, Morgan Housel kembali menghadirkan buku keuangan yang lebih berfokus pada bagaimana cara kita mengelola uang itu sendiri.<br><br>Buku ini tidak serta-merta mengajarkan cara instan untuk menjadi kaya, tetapi mengupas sisi lain di balik uang yang selama ini kerap membelenggu hidup kita. Kita diajak menyadari bahwa uang bukanlah segalanya, melainkan sebuah entitas yang jauh lebih kompleks daripada itu. Lebih lanjut, Housel juga mengangkat berbagai isu sosial yang sangat lekat dengan seni mengelola keuangan.',
        teksReviewEN:`Following the massive success of The Psychology of Money, Morgan Housel returns with another financial book that focuses more on how we actually manage the money itself.<br><br>This book doesn't necessarily offer a get-rich-quick scheme; instead, it peels back the hidden layers of money that have so often kept our lives in shackles. We are invited to realize that money isn't everything, but rather a far more complex entity than that.<br><br>Furthermore, Housel also tackles various social issues that are deeply intertwined with the art of managing finances.`
},
{    id: "buku-32",
        judul: "50 Tahun Meniti Jalan Kembali",
        penulis: "Fahrudin Faiz", 
        penerbit: "MJS Press",
        genreID: ["Non-Fiksi" , "Filsafat"], genreEN:["Non-Fiction","Phylosophy"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/faiz1.jpg", 
        teksReviewID:`Buku terbaru karya filsuf terkemuka Indonesia, Fahruddin Faiz, ini menceritakan perjalanan hidup beliau hingga berada di titik sekarang. Di usianya yang telah banyak menelan suka duka, beliau merefleksikan bahwa hidup kini hanya memiliki satu tujuan utama: Tuhan. Kisah hidup yang tak selalu mulus ini dikemas dengan apik melalui gaya bahasa yang santai.<br><br>Sangat direkomendasikan bagi kalian yang baru ingin berkenalan dengan dunia filsafat lewat bacaan yang ringan.`,
        teksReviewEN:`This latest book by Indonesia's prominent philosopher, Fahruddin Faiz, tells the story of his life's journey up to where he is today.At his age, having weathered so many of life's ups and downs, he reflects that his life now holds only one main ultimate purpose: God. This not-always-smooth life story is beautifully wrapped in a relaxed, conversational tone.<br><br>It is highly recommended for those of you who want to dip your toes into the world of philosophy through a light and easy read.`
},
{    id: "buku-33",
        judul: "Psychology of Money",
        penulis: "Morgan Housel", 
        penerbit: "Penerbit Baca",
        genreID: ["Non-Fiksi" , "Keuangan"], genreEN:["Non-Fiction","Finance"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/money1.jpg", 
        teksReviewID:'Apakah Anda kerap berasumsi bahwa kekayaan hanya berpihak pada mereka yang terlahir dengan privilege? Faktanya, meski mungkin sulit dipercaya, tidak sedikit individu dari latar belakang sederhana yang justru jauh lebih mahir mengendalikan uang dibandingkan mereka yang terlahir bergelimang harta.<br><br>Lewat karya ini, Morgan Housel mengajak kita menyelami berbagai kisah nyata tentang orang-orang yang salah memaknai hakikat uang, yang pada akhirnya justru membawa mereka pada kejatuhan finansial. Sebuah pengingat yang sangat berharga tentang perilaku manusia terhadap uang, menjadikannya sebuah buku psikologi keuangan yang wajib dibaca.',
        teksReviewEN:`Have you ever assumed that building wealth is a game only for those born with privilege? The truth is, though it might be hard to believe, quite a few individuals from humble backgrounds are actually way better at mastering their money compared to those born into riches.<br><br>Through this work, Morgan Housel invites us to dive into real-life stories of people who completely misunderstood the true essence of money—a mistake that ultimately led them straight to financial ruin.It serves as a deeply valuable reminder about human behavior when it comes to money, making it an absolute must-read book on financial psychology.`
} ,
{   id: "buku-34",
        judul: "Filosofi Teras",
        penulis: "Henry Manampiring", 
        penerbit: "Penerbit Buku Kompas",
        genreID: ["Non-Fiksi" , "Filsafat"], genreEN:["Non-Fiction","Phylosophy"],
        rating: "⭐ 4.5/5",
        gambar: "gambar/buku/teras.jpg", 
        teksReviewID:'Buku ini dijamin akan mengubah total persepsi Anda tentang ilmu filsafat. Sering kali, masyarakat menganggap filsafat sebagai sesuatu yang kaku dan penuh dengan istilah rumit. Namun, Henry Manampiring berhasil mematahkan stigma tersebut. Dengan latar belakang yang sama sekali bukan dari bidang filsafat, ia mampu mengemas filosofi zaman Yunani Kuno menjadi bacaan yang sangat relevan untuk konteks masa kini. Ia juga memperkenalkan kerangka berpikir S-T-A-R yang terbukti transformatif dalam mempelajari dan menerapkan filosofi Stoa (Filosofi Teras).<br><br>Sebuah mahakarya yang sangat direkomendasikan bagi siapa pun yang ingin mendalami filsafat melalui gaya penulisan yang kekinian dan mudah dicerna.',
        teksReviewEN:`This book is guaranteed to completely flip your perception of philosophy. More often than not, people view philosophy as something rigid and packed with complicated jargon. But Henry Manampiring successfully shatters that stigma. Despite having absolutely no background in philosophy, he manages to wrap Ancient Greek philosophy into a highly relevant read for today's modern context. He also introduces the S-T-A-R thinking framework, which has proven to be truly transformative in learning and applying Stoicism (Filosofi Teras).<br><br>A highly recommended masterpiece for anyone looking to dive deep into philosophy through a fresh, contemporary, and easily digestible writing style.`

} ,
{   id: "buku-35",
        judul: "Sisi Tergelap Surga",
        penulis: "Brian Khrisna", 
        penerbit: "Gramedia Pustaka Utama ",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.6/5",
        gambar: "gambar/buku/surga.jpg", 
        teksReviewID:'Bukan rahasia lagi bahwa di balik gemerlap dan megahnya sebuah kota metropolitan, selalu tersimpan realita gelap yang jarang tersorot. Di tempat itulah banyak orang terpaksa mempertaruhkan segalanya, bahkan harga diri, sekadar untuk bertahan hidup satu hari lagi. <br><br>Buku ini merekam berbagai fragmen kehidupan yang memilukan sekaligus menghangatkan hati: mulai dari perjuangan ayah yang bertaruh nyawa demi putrinya, ketangguhan seorang wanita demi sang anak, paradoks preman berwajah garang namun berhati lembut, hingga potret keluarga yang bertahan hidup hanya dengan berserah pada belas kasih Tuhan. Secara epik, Brian Khrisna merajut semua kepingan nostalgia tentang tempat tinggalnya di masa lalu menjadi sebuah karya yang sukses menggugah empati.',
        teksReviewEN:`It's no secret that behind the glitz and grandeur of a metropolitan city, there always lies a dark reality that rarely gets the spotlight. It is in these very places that so many people are forced to put everything on the line, even their own pride and dignity, just to make it through another day.<br><br>This book beautifully captures various fragments of life that are simultaneously heartbreaking and heartwarming:from a father fighting tooth and nail for his daughter, the fierce resilience of a woman for her child, the paradox of a tough-looking thug with a heart of gold, all the way to a portrait of a family surviving solely by leaning on God's grace. Brian Khrisna epically weaves all these nostalgic pieces of his past neighborhood into a stunning piece of work that successfully stirs up deep empathy.`
},
{   id: "buku-36",
        judul: "Love on the Second Read",
        penulis: "Mica De Leon", 
        penerbit: "Penerbit Baca",
        genreID: ["Fiksi"], genreEN:["Fiction"],
        rating: "⭐ 4.3/5",
        gambar: "gambar/buku/love2.jpg", 
        teksReviewID:`Buku ini mengikuti kisah Emma, seorang pencinta kucing yang bekerja di industri penerbitan, saat ia menerima proyek krusial yang mempertaruhkan nasib perusahaannya. Tuntutan profesional memaksanya berkolaborasi dengan Kip, rekan kerja yang sebelumnya ia anggap kaku dan membosankan. Interaksi intens perlahan menumbuhkan kedekatan di antara mereka. Sayangnya, kenaifan Emma dalam memaknai cinta berujung pada miskomunikasi, membuat hubungan mereka merenggang tepat sebelum tenggat waktu penyelesaian tugas. Konflik pun memuncak dengan intervensi dari mantan kekasih Emma yang obsesif serta kembalinya mantan kekasih Kip yang memesona.<br><br>Ditulis oleh penulis asal Filipina, novel romansa ringan ini menyuguhkan warna segar melalui eksplorasi di balik layar dunia penerbitan buku. Sebuah latar yang dijamin akan membuat para penikmat literasi merasa sangat terhubung dengan alur ceritanya.`, 
        teksReviewEN:`This book follows the story of Emma, a cat lover working in the publishing industry, as she takes on a crucial project that puts the fate of her company on the line. Professional demands force her to collaborate with Kip, a coworker she previously brushed off as stiff and boring. However, their intense interactions slowly spark a close bond between them. Unfortunately, Emma's naivety when it comes to love leads to a major miscommunication, driving a wedge between them right before their project deadline. The conflict peaks with the intervention of Emma's obsessive ex-boyfriend and the sudden return of Kip's dazzling ex-girlfriend.<br><br>Written by a Filipino author, this light romance novel offers a refreshing vibe through its behind-the-scenes exploration of the book publishing world. It is a setting that is absolutely guaranteed to make literature lovers feel deeply connected to the storyline.`
}


];

console.log("Kabel JS berhasil tersambung! Data buku siap diproses:", daftarBuku);

function cetakBuku() {
    const rakBuku = document.getElementById("review-buku");
    if (rakBuku) {
        rakBuku.innerHTML = "";

        daftarBuku.forEach(function(buku , index) {
            let styleSembunyi = (!bukuTampilSemua && index >= 3) ? 'display: none;' : '';
            let penandaBukuEkstra = index >= 3 ? 'buku-ekstra' : '';

            const kotakBuku = `
            <div class="kartu-review kartu-khusus-buku ${buku.genreID.join(' ').toLowerCase()} ${penandaBukuEkstra}" style="${styleSembunyi}">
                <img src="${buku.gambar}" alt="Cover ${buku.judul}" style="width: 100%; height:250px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
                <h3>${buku.judul}</h3>
                <p class="penulis">${bahasaSekarang === 'id' ? 'Karya:' : 'Author:'} ${buku.penulis}</p>
                <p class="penerbit" style="color: #888; font-size: 14px; margin-top: -10px;">${bahasaSekarang === 'id' ? 'Penerbit:' : 'Publisher:'} ${buku.penerbit}</p>
                <p class="genre">${(bahasaSekarang === 'id' ? buku.genreID : buku.genreEN).join(', ')}</p>
                <p class="rating">${buku.rating}</p>
                <div data-lyket-type="like" data-lyket-id="${buku.id}" data-lyket-namespace="review-buku-anis" data-lyket-template="twitter" data-lyket-color-primary="#ff3b5c"></div>
                <button class="tombol-baca" onclick="bukaModal('${buku.id}')">${bahasaSekarang === 'id' ? 'Baca Review 📖' : 'Read Review 📖'}</button>
            </div>
            
            <div id="${buku.id}" class="modal" style="display: none;">
                <div class="isi-modal">
                    <span class="tombol-tutup" onclick="tutupModal('${buku.id}')">&times;</span>
                    <h2>${buku.judul}</h2>
                    <p class="teks-review">${bahasaSekarang === 'id' ? buku.teksReviewID : buku.teksReviewEN}</p>
                </div>
            </div>
        `;

    rakBuku.innerHTML += kotakBuku;
}); 
    //  Pemanggil Lyket
    const mesinLyket = document.getElementById("mesin-lyket");
        if (mesinLyket) {
            let linkLyket = mesinLyket.src.split('&waktu=')[0]; 
            mesinLyket.remove(); // mesin lama

            const mesinBaru = document.createElement("script");
            mesinBaru.id = "mesin-lyket";
            mesinBaru.src = linkLyket + "&waktu=" + new Date().getTime(); 
            
            mesinBaru.onload = function() {
            window.dispatchEvent(new Event("DOMContentLoaded"));
            window.dispatchEvent(new Event("load"));
            }

            document.body.appendChild(mesinBaru);
        }
    }
}

function ubahTema() {
    document.body.classList.toggle("tema-gelap");
}

const daftarPuisi = [
    {
        id: "puisi-1",
        judulId: "Garuda di Atas Khatulistiwa",
        teksPuisiId: `Mentari pagi, mulai tersenyum kembali \n Menyingkap penguasa kegelapan di malam hari \n Suara jantung kehidupan baru turut menghiasi \n Suasana syahdu, di bumi pertiwi \n \n Puluhan tahun sudah nusantara melangkah \n Membangun jembatan persatuan dengan keringat dan darah \n Perjuangan menuju harapan baru yang mulai merekah \n Perlahan menghapus batas merah yang ditancapkan penjajah \n \n Garuda… \n Ratusan tahun sudah engkau hanya bertengger di puncak menara \n Menutup mata dengan semua ketidakpastian yang ada \n Kini, saatnya engkau bentangkan sayap pusaka \n Terbang, melintasi cakrawala dunia \n Walaupun terik dan badai membasahi pelupuk mata \n \n Garuda… \n Tunjukkanlah pada mereka kegagahanmu yang masih tersisa \n Semangat lajumu yang kian membara \n Demi mewujudkan cita-cita bangsa yang mulia \n Impian ibu pertiwi, Indonesia Merdeka.`,
        
        judulEn : "Garuda Above the Equator" ,
        teksPuisiEn: `The morning sun begins to smile anew \n Unveiling the dark sovereign of the night \n The heartbeat of a new life graces \n The serene soul of our motherland \n For decades, the archipelago has marched onward \n Building bridges of unity with sweat and blood \n A struggle towards a new hope, now in bloom \n Slowly erasing the red borders staked by the colonizers \n \n Garuda… \n For centuries, you merely perched upon the highest tower \n Closing your eyes to all the lingering uncertainties \n Now is the time to spread your sacred wings \n Fly, soaring across the world's horizon \n Even as scorching heat and storms drench your eyes \n \n Garuda… \n Show them the majesty you still possess \n Your advancing spirit that burns ever brighter \n To realize the noble ideals of our nation \n The dream of the motherland, an Independent Indonesia.`
    } ,
    {
        id: "puisi-2",
        judulId : "Serpihan Dunia Fana",
        teksPuisiId: `Terdampar di jantung sebuah kota \n Tempat hingar bingar kehidupan dunia yang fana \n Keramaian yang tak pernah kujumpai sebelumnya \n Tempat dimana aku harus mengejar cahaya \n Agar tidak tertinggal dengan mereka \n Entah akupun tidak tahu siapa mereka \n \n Banyak hal yang dianggap tabu olehku, \n perlahan tapi pasti bisa aku pahami \n Semangat untuk terus berkembang dan berdaya guna, \n akan terus aku kobarkan hingga nanti \n \n Memang tidak semua hal bisa aku kuasai, \n tapi aku akan terus berusaha setiap hari \n dan berkembang menjadi lebih baik lagi \n Semua kegagalan akan aku rangkul dengan sepenuh hati \n Tidak mengenal jatuh, karena aku akan selalu bangkit lagi.`,

        judulEn : "Fragments of an Ephemeral World",
        teksPuisiEn : `Stranded in the heart of a city \n Amidst the clamor of this ephemeral life \n A crowd unlike any I have ever known \n A place where I must chase the light \n To keep from falling behind them \n Though I know not even who they are \n \n Many things I once deemed taboo, \n Slowly but surely, I come to understand \n The spirit to keep growing and be of worth, \n I will keep ablaze until the very end \n \n True, I cannot master it all, \n But I will keep striving every single day \n And evolve to be even better \n Every failure, I will embrace with all my heart \n Knowing no fall, for I will always rise again`

    } ,

    { id: "puisi-3",
        judulId: "Negeri Merdeka",
        teksPuisiId:`Bagi orang kampung sepertiku yang masih lugu, \n bentuk kemerdekaan adalah bebas dari penjajah \n Dan mampu berdiri di kaki sendiri \n Ada pula yang bilang bahwa sejatinya kita belum merdeka, \n jika tikus berdasi masih menguasai bumi pertiwi \n \n Keadilan hukum yang terkesan samar, \n menjadi celah banyak orang untuk mengakali demokrasi \n Berbagai pandangan kritis dari para pengamat dalam negeri, \n turut mewarnai serba-serbi kejelasan tentang kemerdekaan yang hakiki \n Dampak globalisasi dari seluruh penjuru bumi, \n memaksa setiap penghuni tiap jengkal tanah air Indonesia \n untuk terus maju dan meningkatkan literasi \n Agar tidak terjerumus ke dalam lembah kebodohan \n dan rentan terprovokasi \n Tumbuh menjadi generasi baru yang mampu membangun negeri \n Generasi yang memanfaatkan teknologi, \n Bukan hanya sekedar mengusap layar tanpa arti`,

        judulEn : "An Independent Nation",
        teksPuisiEn: `To a simple villager like me, \n The shape of freedom is liberation from the colonizers \n And the strength to stand on our own two feet. \n Yet some say we are not truly free, \n If tie-wearing rats still rule the motherland \n \n The blurry lines of legal justice \n Become a loophole for many to manipulate democracy \n Various critical voices from within the nation \n Color the discourse on what constitutes true freedom. \n The tide of globalization from all corners of the earth \n Forces every soul on every inch of Indonesian soil \n To keep moving forward and elevate our literacy. \n \n So we do not plunge into the valley of ignorance \n And become vulnerable to provocation. \n Growing into a new generation capable of building the nation, \n A generation that harnesses technology, \n Rather than merely swiping screens without meaning.`
    } ,
];

function cetakPuisi() {
    const rakPuisi = document.getElementById('rak-puisi');

    if (rakPuisi) {
        rakPuisi.innerHTML = "";
        daftarPuisi.forEach(function(puisi) {
            const kotakPuisi = `
            <div class="kartu-review" style="width: 250px;"> 
                <h3 style="margin-top: 20px;">${bahasaSekarang === 'id' ? puisi.judulId : puisi.judulEn}</h3>

                <button class="tombol-baca" onclick="bukaModal('${puisi.id}')">${bahasaSekarang === 'id' ? 'Baca Puisi 📜' : 'Read Poem 📜'}</button>
            </div>
            
            <div id="${puisi.id}" class="modal">

                <div class="isi-modal karya-orisinal" style="max-width: 500px;">
                    <span class="tombol-tutup" onclick="tutupModal('${puisi.id}')">&times;</span>
                    
                    <h2 style="text-align: center; font-style: normal; margin-bottom: 20px;">${bahasaSekarang === 'id' ? puisi.judulId : puisi.judulEn}</h2>
                    
                    <!-- white-space: pre-line bikin spasi/enter dari JS terbaca rapi di HTML -->
                    <div style="text-align: center; font-style: italic; line-height: 2; white-space: pre-line;">
                        ${bahasaSekarang === 'id' ? puisi.teksPuisiId : puisi.teksPuisiEn}
                    </div>
                    
                    <hr style="border: 0; border-top: 1px dashed #ccc; margin: 40px 0 20px 0;">
                    <p style="text-align: center; font-size: 12px; color: #aaa; font-style: normal; margin: 0;">
                        © 2026 Hak Cipta Milik Anis. Tidak untuk disalin atau didistribusikan ulang.
                    </p>
                </div>
            </div>
        `;
            rakPuisi.innerHTML += kotakPuisi;
        });
    }
}
function filterBuku(genreYangDipilih) {
    let semuaKartu = document.querySelectorAll('.kartu-khusus-buku');
    
    semuaKartu.forEach(kartu => {
        if (genreYangDipilih === 'semua') {
            kartu.style.display = 'block'; 
        } else {
            if (kartu.classList.contains(genreYangDipilih)) {
                kartu.style.display = 'block'; 
            } else {
                kartu.style.display = 'none'; 
            }
        }
    });
}
function tampilkanSemuaBuku() {
    bukuTampilSemua = true;
    let bukuEkstra = document.querySelectorAll('.buku-ekstra');
    bukuEkstra.forEach(function(buku) {
        buku.style.display = 'block';
    });
    // Sembunyikan tombol 'Lihat Selengkapnya' karena sudah tidak dipakai
    document.getElementById('wadah-tombol-tampil').style.display = 'none';
}

const kotakCari = document.getElementById("kolomCari");

kotakCari.addEventListener('input', function(e) {
    const teksKetik = e.target.value.toLowerCase();

    let semuaKartuBuku = document.querySelectorAll('.kartu-khusus-buku');

    semuaKartuBuku.forEach(kartu => {

        const judul = kartu.querySelector('h3').innerText.toLowerCase();
        const penulis = kartu.querySelector('.penulis').innerText.toLowerCase();

        if (judul.includes(teksKetik) || penulis.includes(teksKetik)) {
            kartu.style.display = ''; 
        } else {
            kartu.style.display = 'none';
        }
    });
});
const sensorGerak = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('muncul');
        }
    });
});

setTimeout(() => {
    const semuaKartuAnimasi = document.querySelectorAll('.kartu-review');
    
    semuaKartuAnimasi.forEach(kartu => {
        kartu.classList.add('sembunyi');
        sensorGerak.observe(kartu);
    });
}, 500);

const kamus = {
    id: {
        navAbout: "Tentangku", navReview: "Review Buku", navRajutan: "Galeri Rajutan", navTulisan: "Proyek Tulisanku", navKontak: "Kontak" ,
        judulUtama: "Selamat Datang di Halaman Pribadi Anis",
        bukuBaca: "Buku Yang Sudah Selesai Kubaca 📖",
        judulProyek: "Proyek Tulisanku ✍🏻 ",
        judulUtama1: "Review Buku Bagus Dari Banyak Penulis Terkenal,",
        judulUtama2:"Hasil Rajutan, Hingga Karya Tulisan",
        aboutMe: "Tentang Penulis 🌸",
        aboutMe1:"Halo! Aku Anis, seorang penikmat buku yang suka merangkai kata. Membaca adalah caraku menjelajahi dunia tanpa harus beranjak dari tempat duduk. Selain membaca, aku juga suka belajar hal-hal baru setiap harinya. Di halaman ini, aku membagikan pemikiran, perasaan, dan ulasan dari buku-buku yang sudah menemaniku. Di halaman ini juga aku ingin membagikan berbagai kerajinan tangan yang aku buat sendiri dan beberapa proyek tulisan pribadiku.",
        aboutMe2: "Aku harap halaman ini bisa memberikan motivasi kecil bagi siapa saja, bahwa segala sesuatu tidak ada yang mustahil, apabila kita mau belajar dan berusaha.",
        book1:"Semua Buku", book2:"Fiksi", book3:"Filsafat" , book4 : "Islam-Populer", book5:"Keuangan", book6:"Non-Fiksi", book7:"Self-Improvement",
        teksCari:"🔍 Cari judul atau penulis buku...",
        teksTampil: "Lihat Selengkapnya 📚",
        rajutanku:"Galeri Rajutanku🌸", rajut1:"Tulip Pastel🪷🌷", rajut2:"Koleksi rajutan bunga dengan warna-warna pastel yang ceria",
        rajut3:"Tulip Biru💙", rajut4:"Koleksi rajutan bunga tulip bernuansa biru yang menenangkan.", rajut5:"Tulip Ungu🪻", rajut6:"Koleksi rajutan bunga tulip bernuansa ungu yang lembut.", rajut7:"Bunga Matahari🌻", rajut8:"Koleksi rajutan bunga matahari yang indah", rajut9:"Keychain Rajut😍" , rajut10:"Koleksi aksesoris gantungan kunci dan mini crochet", KirimAnis:"Send Your Love to Anis 💐",
        InputNama:"Your Name" , InputEmail:"Your Email" , InputTeks:"Tulis Pesan Kamu di Sini 👇🏻" , KirimPesan:"Kirim Pesan 🚀", TeksFooter:"Hak Cipta &copy; 2026 Halaman Pribadi Anis. Dibuat dengan 💖 dan semangat belajar." ,
        Lihat1:"Lihat Detail 👀", Lihat2:"Lihat Detail 👀",Lihat3:"Lihat Detail 👀",Lihat4:"Lihat Detail 👀",Lihat5:"Lihat Detail 👀"

    },
    en: {
        navAbout:"About Me", navReview: "Book Reviews", navRajutan: "Crochet Gallery", navTulisan: "My Writings", navKontak : "Contact",
        judulUtama: "Welcome to Anis's Personal Page" ,
        bukuBaca: "My Book Reviews 📖",
        judulProyek: "My Writing Projects",
        judulUtama1:"Reviews of Great Books by Renowned Authors,",
        judulUtama2:"Crochet Creations, and Written Works",
        aboutMe: "About Me 🌸",
        aboutMe1: `Hello! I'm Anis, a book lover who enjoys weaving words together. Reading is my way of exploring the world without ever having to leave my seat. Besides reading, I also love learning new things every single day.",
        aboutMe2: "In this space, I share my thoughts, feelings, and reviews of the books that have kept me company. I also want to use this page to share various handmade crafts I’ve created myself, along with a few of my personal writing projects.`,
        aboutMe2 : `I hope this space can offer a little motivation to anyone visiting, a reminder that nothing is impossible if we are willing to learn and put in the effort.`,
        book1:"All books", book2:"Fiction", book3:"Philosophy" , book4 : "Popular-Islam", book5:"Finance", book6:"Non-Fiction", book7:"Self-Improvement",
        teksCari:"🔍 Search book title or author..",
        teksTampil: "Show More 📚",
        rajutanku:"My Crochet Gallery🌸", rajut1:"Floral Tulips🪷🌷" , rajut2:"Handmade Pink and floral Crochet Collection", rajut3:"Blue Tulips💙",rajut4:"Handmade Charming Blue Crochet Collections", rajut5:"Purple Tulips🪻", rajut6:"Handmade beautiful purple collections", rajut7:"Sunflowers and yellow tone🌻" , rajut8:"A Radiant Collection of Crocheted Sunflowers", rajut9:"Keychain Crochet😍",rajut10:"Cute Mini Crochet & Keychain Accessories", KirimAnis:"Send Your Love to Anis 💐",
        InputNama:"Your Name" , InputEmail:"Your Email" , InputTeks:"Your Massages 👇🏻" , KirimPesan:"Send Your Massages 🚀", TeksFooter:"Copyright © 2026 Anis's Personal Page. Crafted with 💖 and a love for learning.",
        Lihat1:"Show More 👀", Lihat2:"Show More 👀",Lihat3:"Show More 👀",Lihat4:"Show More 👀",Lihat5:"Show More 👀"
    } 
};

function ubahBahasa() {
    const tombol = document.getElementById("tombol-bahasa");

    if (bahasaSekarang === "id") {
        bahasaSekarang = "en";
        tombol.innerHTML = "ID";

    } 
    else {
        bahasaSekarang = "id";
        tombol.innerHTML = "EN";
    }
    document.getElementById("nav-kontak").innerText = kamus[bahasaSekarang].navKontak; 
    document.getElementById("nav-about").innerText = kamus[bahasaSekarang].navAbout; 
    document.getElementById("nav-review").innerText = kamus[bahasaSekarang].navReview; 
    document.getElementById("nav-rajutan").innerText = kamus[bahasaSekarang].navRajutan; 
    document.getElementById("nav-tulisan").innerText = kamus[bahasaSekarang].navTulisan; 
    document.getElementById("judul-utama").innerText = kamus[bahasaSekarang].judulUtama; 
    document.getElementById("buku-baca").innerText = kamus[bahasaSekarang].bukuBaca; 
    document.getElementById("judul-proyek").innerText = kamus[bahasaSekarang].judulProyek;
    document.getElementById("judul-utama1").innerText = kamus[bahasaSekarang].judulUtama1; 
    document.getElementById("judul-utama2").innerText = kamus[bahasaSekarang].judulUtama2; 
    document.getElementById("about1").innerText = kamus[bahasaSekarang].aboutMe; 
    document.getElementById("about2").innerText = kamus[bahasaSekarang].aboutMe1; 
    document.getElementById("about3").innerText = kamus[bahasaSekarang].aboutMe2; 
    document.getElementById("book1").innerText = kamus[bahasaSekarang].book1; 
    document.getElementById("book2").innerText = kamus[bahasaSekarang].book2;
    document.getElementById("book3").innerText = kamus[bahasaSekarang].book3; 
    document.getElementById("book4").innerText = kamus[bahasaSekarang].book4; 
    document.getElementById("book5").innerText = kamus[bahasaSekarang].book5; 
    document.getElementById("book6").innerText = kamus[bahasaSekarang].book6; 
    document.getElementById("book7").innerText = kamus[bahasaSekarang].book7; 
    document.getElementById("kolomCari").placeholder = kamus[bahasaSekarang].teksCari; 
    document.getElementById("rajutanku").innerText = kamus[bahasaSekarang].rajutanku;
    document.getElementById("rajut1").innerText = kamus[bahasaSekarang].rajut1;
    document.getElementById("rajut2").innerText = kamus[bahasaSekarang].rajut2; 
    document.getElementById("rajut3").innerText = kamus[bahasaSekarang].rajut3;
    document.getElementById("rajut4").innerText = kamus[bahasaSekarang].rajut4;
    document.getElementById("rajut5").innerText = kamus[bahasaSekarang].rajut5;
    document.getElementById("rajut6").innerText = kamus[bahasaSekarang].rajut6;
    document.getElementById("rajut7").innerText = kamus[bahasaSekarang].rajut7;
    document.getElementById("rajut8").innerText = kamus[bahasaSekarang].rajut8;
    document.getElementById("rajut9").innerText = kamus[bahasaSekarang].rajut9;
    document.getElementById("rajut10").innerText = kamus[bahasaSekarang].rajut10;
    document.getElementById("kirim-pesan").innerText = kamus[bahasaSekarang].KirimAnis;
    document.getElementById("input-nama").innerText = kamus[bahasaSekarang].InputNama;
    document.getElementById("input-email").innerText = kamus[bahasaSekarang].InputEmail;
    document.getElementById("input-pesan").innerText = kamus[bahasaSekarang].InputTeks;
    document.getElementById("tombol-send").innerText = kamus[bahasaSekarang].KirimPesan;
    document.getElementById("teks-footer").innerText = kamus[bahasaSekarang].TeksFooter;
    document.getElementById("lihat1").innerText = kamus[bahasaSekarang].Lihat1;
    document.getElementById("lihat2").innerText = kamus[bahasaSekarang].Lihat2;
    document.getElementById("lihat3").innerText = kamus[bahasaSekarang].Lihat3;
    document.getElementById("lihat4").innerText = kamus[bahasaSekarang].Lihat4;
    document.getElementById("lihat5").innerText = kamus[bahasaSekarang].Lihat5;


    const teksTampil = document.getElementById("teks-tampil");
    if (teksTampil) {
    teksTampil.innerText = kamus[bahasaSekarang].teksTampil;
    }

cetakPuisi(); cetakBuku();
    
} cetakPuisi() ; cetakBuku();
