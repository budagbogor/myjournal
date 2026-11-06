# Scholara - Mesin Pencari & Analitik Jurnal Ilmiah Akademik Kelas Dunia

> **Scholara** adalah platform penelusuran, bedah naskah, dan terjemahan jurnal ilmiah mutakhir yang mengintegrasikan korpus terbuka **OpenAlex** (250+ juta karya ilmiah global) dengan kecerdasan buatan **Google Gemini AI** untuk mempercepat riset akademisi, dosen, dan mahasiswa Indonesia.

---

## 🌟 Fitur Utama & Keunggulan Kelas Dunia

1. **Eksplorasi Korpus Global (OpenAlex Integration + Polite Pool)**
   - Akses instan ke ratusan juta publikasi ilmiah internasional tanpa paywall.
   - Menggunakan klaster **OpenAlex Polite Pool** untuk waktu respon cepat (hingga 10 req/detik) tanpa terhambat batas kuota (*rate limits*).
   - Penelusuran langsung berbasis kata kunci, konsep, penulis, atau **DOI** (otomatis mendeteksi string `10.xxxx/...` atau link `doi.org`).

2. **Terjemahan Akademis Cerdas (Bilingual Translation)**
   - Judul dan abstrak jurnal langsung diterjemahkan ke Bahasa Indonesia baku tanpa menghilangkan akronim umum (AI, DNA, IoT, LLM) dan istilah teknis internasional.
   - Mode beralih cepat (*switch*) antara teks asli bahasa Inggris dan terjemahan Indonesia per naskah atau secara global.

3. **In-App Paper Reader & Bedah Naskah Komprehensif**
   - Penampil dokumen PDF dalam aplikasi (*split-view*) bebas kendala CORS atau `X-Frame-Options` menggunakan secure streaming proxy.
   - Telaah naskah otomatis 6 bagian: Latar Belakang & Motivasi, Kerangka Teoretis, Desain & Metodologi, Temuan Kunci, Implikasi Praktis, serta Kesimpulan.
   - Mode Cetak / Simpan Dossier PDF Bahasa Indonesia siap cetak.

4. **Scholara Research Copilot (Tanya AI Naskah Interaktif)**
   - Berdiskusi langsung dengan AI seputar metodologi, data empiris, kontribusi novelty, serta batasan (*limitations*) naskah yang sedang dibaca.
   - Dilengkapi *prompt chips* cepat untuk pertanyaan standar telaah kritis karya ilmiah.

5. **Generator Sitasi Lengkap & Ekspor Koleksi**
   - Format sitasi instan: **APA 7th, MLA 9th, Chicago, Harvard, BibTeX, dan RIS**.
   - Unduh berkas `.bib` dan `.ris` (kompatibel penuh dengan **Mendeley, Zotero, dan EndNote**).
   - Fitur *Bulk Export* seluruh daftar bacaan tersimpan ke format BibTeX dan RIS dalam 1 klik.

6. **DeepSearch & Live Grounding (Preprint & Terbitan Terkini)**
   - Menggali riset terbaru (terbitan 2024–2026) pada repositori Elsevier/ScienceDirect, Springer, Wiley, IEEE Xplore, DOAJ, arXiv, dan SSRN.

7. **Portal Kurasi Admin & DOI Auto-Fetcher**
   - Pengambilan metadata otomatis dari pengidentifikasi DOI via OpenAlex dan Crossref resmi.
   - Pengaturan mesin AI fleksibel: mendukung Google Gemini (2.5-flash, 2.5-pro, 1.5-flash), OpenAI, dan Anthropic Claude.

---

## 🛡️ Keamanan & Arsitektur Robust

- **Proteksi SSRF (Server-Side Request Forgery)**: Mencegah eksploitasi alamat IP privat / loopback (`localhost`, `127.0.0.1`, subnet 10.x, 192.168.x, 169.254.x).
- **Perlindungan Memori (OOM Guard)**: Pembatasan ukuran file maksimal proxy PDF untuk stabilitas server.
- **Dukungan ESM Penuh**: Build production bersih berbasis ECMAScript Modules (`dist/server.js`) tanpa peringatan runtime.
- **Port Dinamis**: Kompatibel dengan lingkungan cloud seperti Cloud Run, Render, Railway, Fly.io, dan Docker (`process.env.PORT || 3000`).

---

## 🚀 Panduan Memulai Cepat

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Konfigurasi Environment Variable
Salin berkas `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Isi kunci API Gemini Anda:
```env
PORT=3000
GEMINI_API_KEY="KUNCI_GEMINI_API_ANDA"
```
*(Dapatkan kunci gratis di [Google AI Studio](https://aistudio.google.com/)).*

### 3. Menjalankan Mode Pengembangan
```bash
npm run dev
```
Buka browser pada: **http://localhost:3000**

### 4. Build & Jalankan Mode Produksi
```bash
npm run build
npm start
```

---

## 📂 Struktur Proyek

```
myjournal/
├── data/
│   ├── curated_journals.json   # Basis data naskah terkurasi lokal
│   └── ai_settings.json        # Pengaturan model AI tersimpan
├── dist/                       # Output build produksi (Vite + esbuild)
├── index.html                  # Antarmuka SPA Scholara lengkap & responsif
├── package.json                # Skrip dan dependensi aplikasi
├── server.ts                   # Backend Express, AI API client & PDF proxy
├── tsconfig.json               # Konfigurasi TypeScript
├── vite.config.ts              # Konfigurasi Vite bundler
└── .env.example                # Panduan variabel lingkungan
```

---

## 📜 Lisensi
Dikembangkan dengan lisensi [Apache-2.0](LICENSE).

