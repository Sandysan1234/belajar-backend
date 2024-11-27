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
* Node.js versi 16 atau lebih tinggi
* npm sebagai package manager

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
```
Server akan berjalan di http://localhost:8080.

## Api data flow


![WhatsApp Image 2024-11-24 at 19 16 31](https://github.com/user-attachments/assets/9b0cc072-5246-49e4-9c49-316c55d3e644)

1. Deteksi Selfie:
   * Pengguna mengambil foto selfie melalui aplikasi Android.
   * Foto dikirim ke Main API Server.
   * Main API Server mengirimkan data ke Selfie Recognition API untuk mendeteksi emosi pengguna.
   * Data hasil analisis dikembalikan ke Main API Server dan disimpan bersama dengan data jurnal pengguna.
2. Pengelolaan Jurnal:
   * Pengguna memasukkan teks jurnal melalui aplikasi Android.
   * Teks jurnal dikirim ke Main API Server.
   * Main API Server meneruskan teks ke Text Emotion Recognition API.
   * Hasil analisis emosi jurnal disimpan di database dan dikembalikan ke aplikasi Android.


### Database
![image](https://github.com/user-attachments/assets/f0809c8b-6eaa-45f1-ada9-36ed9db9febb)
### Penjelasan:
1. Users Table:
   * Menyimpan data pengguna seperti id, nama, email, dan password.
   * Relasi dengan tabel journals untuk mencatat jurnal milik pengguna.
2. Journals Table:
   * Menyimpan data jurnal pengguna seperti id, user_id, tanggal, teks_jurnal, dan hasil_analisis.
3. Emotions Table:
   * Menyimpan data hasil analisis emosi, baik dari selfie maupun teks jurnal.
   * Kolom type menentukan apakah data berasal dari selfie (selfie) atau teks (text).

Relasi:
Users → Journals: Relasi satu ke banyak, di mana satu pengguna dapat memiliki banyak jurnal.
Journals → Emotions: Relasi satu ke satu, di mana setiap jurnal memiliki hasil analisis emosi.
### Diagram Architecture Google Cloud Platform

![Backend Database (2)](https://github.com/user-attachments/assets/c6d61ca4-d903-441f-ad75-b892ab1bfce2)


**Penjelasan:**

1. User
   * Pengguna akhir (user) berinteraksi dengan sistem melalui Aplikasi Android atau web.
   * Mereka dapat mengunggah data, seperti foto selfie atau jurnal teks, yang akan diproses oleh sistem backend.
2. Firebase Auth
   * Digunakan untuk autentikasi pengguna, memastikan hanya pengguna terverifikasi yang dapat mengakses layanan.
   * Mendukung metode login seperti email-password atau autentikasi pihak ketiga (Google Sign-In).
3. Google Cloud Run
   * Menjalankan aplikasi backend secara serverless.
   * Cloud Run memproses permintaan pengguna, berinteraksi dengan database, dan memanggil layanan lainnya seperti API analisis emosi.
   * Mendukung beban kerja tinggi dengan penskalaan otomatis.
4. Supabase
   * Merupakan database relasional yang digunakan untuk menyimpan data aplikasi.
   * Data yang disimpan meliputi informasi pengguna, jurnal yang ditulis, dan hasil analisis emosi.
   * Tabel dalam database:
        * Users Table: Informasi pengguna (ID, nama, email, dll.).
        * Journals Table: Jurnal teks pengguna.
        * Emotions Table: Hasil analisis emosi dari selfie atau teks jurnal.
5. Text Emotion Recognition API
   * Model machine learning atau layanan API eksternal yang digunakan untuk menganalisis emosi berdasarkan teks jurnal.
   * Hasil analisis berupa kategori emosi seperti "sedih", "bahagia", "marah", dll.
6. Selfie Recognition API
   * Model machine learning atau layanan API eksternal yang digunakan untuk mendeteksi emosi pengguna dari foto selfie.
   * Hasil analisis berupa kategori emosi atau metrik seperti "tersenyum", "sedih", "neutral".
7. Aplikasi Android
   * Frontend aplikasi yang digunakan oleh pengguna untuk mengakses layanan.
   * Mengirim data selfie atau teks jurnal ke backend melalui API yang di-host di Cloud Run.
   * Menampilkan hasil analisis emosi dari backend kepada pengguna.


---
### Teknologi yang Digunakan
**Node.js**  : Runtime JavaScript untuk backend.

**Express.js**: Framework untuk membangun API RESTful.

**Google Cloud Platform**: Infrastruktur hosting aplikasi, penyimpanan data, dan layanan machine learning.

**Postman**: Alat untuk pengujian API.

**Supabase**: Alternatif backend untuk autentikasi dan manajemen database (opsional).

