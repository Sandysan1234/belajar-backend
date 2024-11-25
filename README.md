# jaga-mental-backend

Backend untuk **Jaga-Mental**, aplikasi yang mendukung pengelolaan kesehatan mental. Proyek ini dibangun menggunakan **Node.js** dengan **Express.js** sebagai framework utama.

---

## Fitur Utama

- **Autentikasi Pengguna**: Mendukung login dan registrasi dengan validasi data.
- **Manajemen Pengguna**: CRUD untuk data pengguna.
- **Manajemen Jurnal**: Pengguna dapat membuat, membaca, memperbarui, dan menghapus jurnal.
- **Prediksi Emosi**: API untuk menganalisis emosi berdasarkan teks yang dimasukkan.
- **Pengujian API**: Pengujian otomatis menggunakan Postman untuk memastikan semua endpoint berfungsi dengan baik.

---

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan backend secara lokal.

### Prasyarat
- Node.js versi 16 atau lebih tinggi
- npm atau pnpm sebagai package manager

### Langkah-langkah

 **Clone repository ini**:
   ```bash
   git clone https://github.com/Jaga-Mental-Dev/jaga-mental-backend.git
   cd jaga-mental-backend
   npm run start //untuk menjalankan
   npm run start-dev //untuk mode developer
   // akan tampil port http://localhost:8080
```

### Api data flow

![WhatsApp Image 2024-11-24 at 19 16 31](https://github.com/user-attachments/assets/9b0cc072-5246-49e4-9c49-316c55d3e644)


1. user membuka aplikasi android lalu melakukan foto selfie
2. aplikasi mengirim foto selfie yang ke main api server
3. main api server melanjutkan ke selfie recognition api
4. foto selfie dianalisis untuk mendeteksi emosi user
5. data emosi dikembalikan ke main api server lalu disimpan dengan data jurnal
#### Selanjutnya
6. user memasukkan teks jurnal ke aplikasi android
7. aplikasi megirim jurnal ke main api server
8. main api server melanjutkan ke text emotion recognition api
9. data jurnal dikembalikan ke main api server
10. data jurnal disimpan ke database jurnal
11. dari main api server output dari jurnal dikirimkan ke andorid app

### Database
![image](https://github.com/user-attachments/assets/f0809c8b-6eaa-45f1-ada9-36ed9db9febb)

### Diagram Architecture Google Cloud Platform
![image](https://github.com/user-attachments/assets/cec0cb5c-1c2a-4e23-9d49-2183e9002664)


