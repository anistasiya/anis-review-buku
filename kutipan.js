// ============================================================
// KUTIPAN HARI INI — file khusus kutipan Anis Review
// ============================================================


const daftarKutipanCadangan = [
    {
        teks: "The view you adopt for yourself profoundly affects the way you lead your life.",
        buku: "Mindset",
        penulis: "Carol Dweck"
    },
    {
        teks: "Kita tidak bisa mengendalikan apa yang terjadi, tetapi kita bisa mengendalikan cara kita meresponsnya.",
        teksEN: "We cannot control what happens to us, but we can control how we respond to it.",
        buku: "Filosofi Teras",
        penulis: "Henry Manampiring"
    },
    {
        teks: "Pada suatu sore, di akhir pekan di bulan Maret, Dewi Ayu bangkit dari kuburnya setelah dua puluh satu tahun mati.",
        teksEN: "One afternoon, on a weekend in March, Dewi Ayu rose from her grave after being dead for twenty-one years.",
        buku: "Cantik Itu Luka",
        penulis: "Eka Kurniawan"
    }
];

let daftarKutipan = daftarKutipanCadangan.slice();
let indeksKutipan = 0;

const kamusKutipan = {
    id: { judul: "Kutipan Hari Ini 🌸", tombolAcak: "Kutipan Lain 🎲", nav: "Kutipan", kosong: "Belum ada kutipan. Anis lagi memilih kutipan favoritnya." },
    en: { judul: "Quote of the Day 🌸", tombolAcak: "Another Quote 🎲", nav: "Quotes", kosong: "No quotes yet. Anis is picking her favourites." }
};

function perbaruiBahasaKutipan() {
    const teks = kamusKutipan[bahasaSekarang] || kamusKutipan.id;
    const judul = document.getElementById("judul-kutipan");
    if (judul) judul.innerText = teks.judul;
    const tombol = document.getElementById("tombol-acak-kutipan");
    if (tombol) tombol.innerText = teks.tombolAcak;
    const nav = document.getElementById("nav-kutipan");
    if (nav) nav.innerText = teks.nav;
    tampilkanKutipan(indeksKutipan);
}

function tampilkanKutipan(indeks) {
    const tempatTeks = document.getElementById("teks-kutipan");
    const tempatSumber = document.getElementById("sumber-kutipan");
    if (!tempatTeks || !tempatSumber) return;
    if (daftarKutipan.length === 0) {
        const teks = kamusKutipan[bahasaSekarang] || kamusKutipan.id;
        tempatTeks.innerText = teks.kosong;
        tempatSumber.innerText = "";
        return;
    }
    indeksKutipan = ((indeks % daftarKutipan.length) + daftarKutipan.length) % daftarKutipan.length;
    const kutipan = daftarKutipan[indeksKutipan];
    // Kalau bahasa Inggris aktif dan kutipan punya versi Inggris (teksEN), tampilkan itu;
    // kalau tidak ada teksEN, tampilkan teks aslinya apa adanya
    const teksTampil = (bahasaSekarang === "en" && kutipan.teksEN) ? kutipan.teksEN : kutipan.teks;
    // innerText (bukan innerHTML) supaya teks dari Firebase tidak bisa menyisipkan kode HTML
    tempatTeks.innerText = "“" + teksTampil + "”";
    tempatSumber.innerText = "— " + kutipan.buku + (kutipan.penulis ? ", " + kutipan.penulis : "");
}

function tampilkanKutipanHariIni() {
    // Satu kutipan yang sama sepanjang hari (berdasarkan tanggal lokal), ganti besok
    const sekarang = new Date();
    const hariIni = Math.floor(new Date(sekarang.getFullYear(), sekarang.getMonth(), sekarang.getDate()).getTime() / 86400000);
    tampilkanKutipan(hariIni);
}

function acakKutipan() {
    if (daftarKutipan.length <= 1) { tampilkanKutipan(0); return; }
    let acak = indeksKutipan;
    while (acak === indeksKutipan) {
        acak = Math.floor(Math.random() * daftarKutipan.length);
    }
    tampilkanKutipan(acak);
}

async function ambilKutipan() {
    try {
        const respon = await fetch(`${URL_BRANKAS}/Quotes.json`);
        const data = await respon.json();
        if (data) {
            const daftar = Object.values(data).filter(function(kutipan) {
                return kutipan && typeof kutipan.teks === "string" && kutipan.teks.trim() !== "" && kutipan.buku;
            });
            if (daftar.length > 0) {
                daftarKutipan = daftar;
            }
        }
    } catch (error) {
        console.log("Gagal mengambil kutipan dari Firebase, pakai kutipan cadangan:", error);
    }
    tampilkanKutipanHariIni();
}

// Tampilkan dulu kutipan cadangan supaya kotaknya tidak kosong,
// lalu ambil daftar terbaru dari Firebase
perbaruiBahasaKutipan();
tampilkanKutipanHariIni();
ambilKutipan();

// Kalau bahasa diganti lewat tombol EN/ID, ikutkan teks bagian kutipan
const tombolBahasaKutipan = document.getElementById("tombol-bahasa");
if (tombolBahasaKutipan) {
    tombolBahasaKutipan.addEventListener("click", function() {
        setTimeout(perbaruiBahasaKutipan, 0);
    });
}
