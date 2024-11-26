# jaga-mental-backend

Backend untuk **Jaga-Mental**, aplikasi yang mendukung pengelolaan kesehatan mental. Proyek ini dibangun menggunakan **Node.js** dengan **Express.js** sebagai framework utama.

---

## Fitur Utama

- **Autentikasi Pengguna**: Mendukung registrasi dan login dengan validasi data pengguna.
- **Manajemen Pengguna**: CRUD (Create, Read, Update, Delete) untuk data pengguna.
- **Manajemen Jurnal**: Pengguna dapat membuat, membaca, memperbarui, dan menghapus jurnal.
- **Prediksi Emosi**: API untuk menganalisis emosi berdasarkan teks yang dimasukkan.
- **Pengujian API**: Pengujian otomatis menggunakan Postman untuk memastikan semua endpoint berfungsi dengan baik.

---

## Instalasi
### Prasyarat
- Node.js versi 16 atau lebih tinggi
- npm atau pnpm sebagai package manager

### Langkah-langkah
1. Clone repository ini:
   ```bash
   git clone https://github.com/Jaga-Mental-Dev/jaga-mental-backend.git
   cd jaga-mental-backend
   ```
2. Install Dependensi
   ```npm install```
3. Jalankan server:
```
   npm run start 
   npm run start-dev untuk mode developer
   // akan tampil port http://localhost:8080
```

### Api data flow

![WhatsApp Image 2024-11-24 at 19 16 31](https://github.com/user-attachments/assets/9b0cc072-5246-49e4-9c49-316c55d3e644)

1. Deteksi Selfie:
   - Pengguna mengambil foto selfie melalui aplikasi Android.
   - Foto dikirim ke Main API Server.
   - Main API Server mengirimkan data ke Selfie Recognition API untuk mendeteksi emosi pengguna.
   - Data hasil analisis dikembalikan ke Main API Server dan disimpan bersama dengan data jurnal pengguna.
2. Pengelolaan Jurnal:
   - Pengguna memasukkan teks jurnal melalui aplikasi Android.
   - Teks jurnal dikirim ke Main API Server.
   - Main API Server meneruskan teks ke Text Emotion Recognition API.
   - Hasil analisis emosi jurnal disimpan di database dan dikembalikan ke aplikasi Android.


### Database
![image](https://github.com/user-attachments/assets/f0809c8b-6eaa-45f1-ada9-36ed9db9febb)
### Penjelasan:
1. Users Table:
   - Menyimpan data pengguna seperti id, nama, email, dan password.
   - Relasi dengan tabel journals untuk mencatat jurnal milik pengguna.
2. Journals Table:
   - Menyimpan data jurnal pengguna seperti id, user_id, tanggal, teks_jurnal, dan hasil_analisis.
3. Emotions Table:
   - Menyimpan data hasil analisis emosi, baik dari selfie maupun teks jurnal.
   - Kolom type menentukan apakah data berasal dari selfie (selfie) atau teks (text).

Relasi:
Users → Journals: Relasi satu ke banyak, di mana satu pengguna dapat memiliki banyak jurnal.
Journals → Emotions: Relasi satu ke satu, di mana setiap jurnal memiliki hasil analisis emosi.
### Diagram Architecture Google Cloud Platform
![image](https://github.com/user-attachments/assets/cec0cb5c-1c2a-4e23-9d49-2183e9002664)

Penjelasan:

Aplikasi Android:

Front-end utama yang digunakan pengguna untuk berinteraksi dengan sistem.
Main API Server:

Berfungsi sebagai pusat komunikasi antara aplikasi Android dan layanan lainnya.
Mengelola permintaan untuk autentikasi, pengelolaan jurnal, dan analisis emosi.
Selfie Recognition API:

Layanan khusus untuk menganalisis emosi berdasarkan foto selfie pengguna.
Menggunakan model machine learning yang di-host di Google Cloud AI Platform.
Text Emotion Recognition API:

Layanan untuk menganalisis emosi berdasarkan teks jurnal.
Model machine learning untuk analisis teks juga di-host di Google Cloud AI Platform.
Google Cloud Storage:

Menyimpan file seperti foto selfie yang diunggah pengguna.
Google Cloud Firestore:

Digunakan untuk menyimpan data seperti jurnal, hasil analisis, dan metadata pengguna.
Google Cloud Functions:

Fungsi serverless untuk menangani tugas-tugas spesifik seperti pemrosesan data secara asinkron.

---
### Teknologi yang Digunakan
#### Node.js  : Runtime JavaScript untuk backend.
**Express.js**: Framework untuk membangun API RESTful.
**Google Cloud Platform**: Infrastruktur hosting aplikasi, penyimpanan data, dan layanan machine learning.
**Postman**: Alat untuk pengujian API.
**Supabase**: Alternatif backend untuk autentikasi dan manajemen database (opsional).

