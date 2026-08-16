# ☁️ Cloud4Learn — Website Edukasi Cloud Computing (Tugas UAS Pemrograman Web)

**Cloud4Learn** adalah website platform kursus online bertema **Cloud Computing** — mencakup **Public Cloud, Private Cloud, dan Hybrid Cloud** — dibangun sebagai proyek Ujian Akhir Semester (UAS) mata kuliah Pemrograman Web. Website ini menampilkan seluruh komponen HTML, CSS, dan JavaScript yang telah dipelajari selama satu semester, termasuk panel kuis interaktif untuk menguji pemahaman pengunjung.

> *"Learn Cloud. Build Your Future."*

🔗 **Live Demo:** (https://cloud4learn.vercel.app/)
🔗 **Vlog Presentasi (YouTube):** (https://youtu.be/q6Fp0x9QQGU)
🔗 **Repository:** (https://github.com/arialifiandi/uas)

---

## 👥 Anggota Kelompok & Pembagian Tugas

| No | Nama | NIM | Tanggung Jawab Utama | Tanggung Jawab Tambahan |
|----|------|-----|----------------------|--------------------------|
| 1 | Ari Alifiandi | 250401010424 | [isi: index] | [isi: tugas tambahan, misal Git & Hosting] |
| 2 | Jeni Ayu Lestari | 250401010431 | [isi: course] | [isi: bagian course] |
| 3 | Reikhal Akbar Damanik | 250401010423 | [isi: kontak] | [isi: tugas tambahan] |
| 4 | Nabil Maulidan | 250401010401 | [isi: about] | [isi: tugas tambahan] |

> Detail rundown harian & pembagian tugas ada di `rundown_cloud4learn.xlsx`.

---

## 🎯 Tema & Konsep Aplikasi

**Tema:** Edukasi — platform belajar Cloud Computing (Public Cloud, Private Cloud, Hybrid Cloud)

**Konsep desain:** "Ruang Kelas & Papan Tulis" — menggunakan palet warna hijau chalkboard, aksen emas seperti kapur, dan kartu konten bergaya katalog perpustakaan, untuk membangun suasana akademik yang khas dan tidak generik. Warna dipilih bukan sekadar estetika, tapi juga mempertimbangkan psikologi warna (hijau = ketenangan & kepercayaan, cocok untuk konteks belajar) dan kenyamanan mata (kontras teks memenuhi standar keterbacaan WCAG, background tidak putih/hitam pekat).

---

## 🗂️ Struktur File

```
cloud4learn/
├── index.html                     # Halaman Beranda — pengenalan 3 model cloud
├── courses.html                    # Halaman Daftar Kursus & Jadwal (AWS, Azure, GCP, VMware, Hybrid)
├── about.html                       # Halaman Tentang — perbandingan Public vs Private vs Hybrid Cloud + profil tim
├── contact.html                      # Halaman Kontak & Form Pendaftaran/Konsultasi
├── quiz.html                          # Panel Kuis — 5 soal pilihan ganda seputar cloud computing
├── style.css                           # Seluruh styling (Custom CSS)
├── script.js                            # Seluruh logika interaktif (JavaScript)
├── Foto_Ari.jpg                          # Foto profil anggota
├── Foto_Jeni.jpg                          # Foto profil anggota
├── Foto_Reikhal.jpg                        # Foto profil anggota
├── Foto_Nabil.jpg                           # Foto profil anggota
├── materi-cloud_iaas-paas-saas__mp3.mp3      # Audio materi kelas (IaaS/PaaS/SaaS)
├── rundown_cloud4learn.xlsx                      # Rundown & pembagian tugas kelompok
└── README.md                                   # Dokumentasi proyek (file ini)
```

---

## ✅ Checklist Komponen Website (Sesuai Ketentuan Tugas)

| Komponen | Lokasi | Keterangan |
|---|---|---|
| Heading (h1–h4) | Semua halaman | Judul halaman & judul section |
| Paragraph | Semua halaman | Deskripsi konten |
| Text formatting | `about.html` | `<b>`, `<i>`, `<u>`, `<mark>` |
| Image | Semua halaman | Foto ilustrasi, foto anggota tim, kartu kursus |
| Link | Navbar, footer, tombol CTA | Navigasi antar halaman |
| Table | `courses.html`, `about.html` | Tabel jadwal kelas & tabel perbandingan model cloud |
| List (ordered) | `courses.html` | Silabus kelas |
| List (unordered) | `index.html`, `about.html` | Daftar fitur & nilai perusahaan |
| Form | `contact.html` | Form pendaftaran (text, email, tel, select, radio, checkbox, textarea) |
| Video | `index.html` | Video pengantar (embed YouTube) di hero |
| Audio | `courses.html` | Cuplikan materi audio IaaS/PaaS/SaaS |
| CSS | `style.css` | Layout, warna, tipografi, animasi, responsive design |
| JavaScript | `script.js` | Lihat detail di bawah, termasuk logika panel kuis |

---

## ⚙️ Apa Itu `script.js` dan Untuk Apa?

`script.js` berisi **seluruh logika interaktif** website ini — bagian yang membuat halaman bisa "bereaksi" terhadap klik, scroll, atau input pengguna. Tanpa file ini di-load, HTML dan CSS tetap tampil, tapi semua fitur interaktif **tidak akan berfungsi** (termasuk seluruh isi `quiz.html`, karena soal-soalnya dirender oleh JavaScript, bukan ditulis manual di HTML).

| Fitur | Fungsi |
|---|---|
| Dark/Light mode toggle | Mengganti tema terang/gelap dan menyimpan preferensi di `localStorage` |
| Navbar mobile toggle | Membuka/menutup menu navigasi di layar kecil |
| Accordion FAQ | Membuka/menutup jawaban pertanyaan secara dinamis |
| Validasi form real-time | Mengecek nama, email, nomor telepon, dan pilihan kelas sebelum form terkirim |
| Testimonial slider | Slide testimoni otomatis setiap 5 detik + navigasi titik (dots) |
| Counter animasi statistik | Angka statistik bertambah otomatis saat elemen terlihat di layar (Intersection Observer) |
| Tombol back-to-top | Muncul saat scroll ke bawah, klik untuk kembali ke atas halaman |
| **Panel kuis (`quiz.html`)** | Merender 5 soal satu per satu, mengecek jawaban benar/salah, menghitung skor, progress bar, dan halaman hasil akhir beserta pembahasan |
| Tahun otomatis di footer | Menampilkan tahun berjalan secara otomatis |

---

## 🚀 Cara Menjalankan Secara Lokal

1. Unduh/clone seluruh folder proyek — pastikan semua file (HTML, CSS, JS, foto, audio) ada dalam satu folder yang sama.
2. Buka file `index.html` langsung di browser, atau gunakan extension **Live Server** di VS Code untuk auto-reload saat kode diedit.
3. Tidak memerlukan instalasi server tambahan — website ini murni HTML, CSS, dan JavaScript statis.
4. Pastikan koneksi internet aktif karena sebagian gambar dan video menggunakan sumber CDN eksternal (Unsplash, YouTube embed, Google Fonts).

---

## 🌐 Cara Deploy (Hosting)

Website ini di-deploy menggunakan **[isi: GitHub Pages / Netlify / Vercel]**.

Langkah yang dilakukan:
1. [isi langkah 1, misal: "Push seluruh folder termasuk foto & audio ke repository GitHub"]
2. [isi langkah 2, misal: "Aktifkan GitHub Pages di Settings > Pages, pilih branch main"]
3. [isi langkah 3, misal: "Tunggu proses build selesai, akses melalui link yang diberikan"]
4. Website diuji ulang di beberapa perangkat (desktop & mobile) untuk memastikan tampilan responsif, foto tim, audio materi, dan panel kuis berjalan baik.

> ⚠️ **Penting:** nama file di GitHub bersifat *case-sensitive* dan tidak boleh mengandung spasi tanpa encoding. Pastikan nama file foto/audio yang di-push ke repository **persis sama** (termasuk huruf besar/kecil) dengan yang dipanggil di kode HTML — kalau beda sedikit saja, gambar/audio tidak akan muncul saat online walau tampil normal di komputer sendiri.

---

## 📸 Screenshot Aplikasi

> Tempelkan screenshot tiap halaman di sini sebelum dikumpulkan.

- Beranda (`index.html`)
- Daftar Kursus (`courses.html`)
- Tentang, Perbandingan Model Cloud & Profil Tim (`about.html`)
- Kontak & Pendaftaran (`contact.html`)
- Panel Kuis — tampilan soal (`quiz.html`)
- Panel Kuis — tampilan hasil akhir (`quiz.html`)
- Tampilan Dark Mode
- Tampilan Mobile/Responsive

---

## 📝 Catatan Pengerjaan

- Seluruh kode ditulis manual sesuai materi kuliah pertemuan 1 sampai terakhir.
- Pembagian kerja dilakukan per halaman agar kontribusi tiap anggota dapat dipertanggungjawabkan secara individu — rincian harian ada di `rundown_cloud4learn.xlsx`.
- Proses penggabungan kode dilakukan melalui [isi: Git branch masing-masing / berbagi file manual], dengan [isi nama] sebagai penanggung jawab penggabungan akhir.

---

© 2026 Cloud4Learn — Tugas UAS Pemrograman Web. *Learn Cloud. Build Your Future.*
