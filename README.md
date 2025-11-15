# 🏥 Hastane Yönetim Sistemi

Modern ve kullanıcı dostu bir hastane yönetim sistemi. Hasta, doktor ve yönetici rolleri için tasarlanmış kapsamlı bir web uygulaması.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Özellikler](#özellikler)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [API Endpoints](#api-endpoints)
- [Veritabanı Yapısı](#veritabanı-yapısı)
- [Giriş Bilgileri](#giriş-bilgileri)
- [Geliştirme](#geliştirme)
- [Canlı Demo](#canlı-demo)

---

## 🎯 Genel Bakış

Bu proje, hastanelerin günlük operasyonlarını dijitalleştirmek için geliştirilmiş kapsamlı bir yönetim sistemidir. Sistem, üç farklı kullanıcı rolü (Yönetici, Doktor, Hasta) için özelleştirilmiş arayüzler ve işlevler sunar.

### Ana Amaçlar
- ✅ Hasta kayıt ve yönetimi
- ✅ Doktor kayıt ve yönetimi
- ✅ Randevu planlama ve takibi
- ✅ Tıbbi rapor yönetimi
- ✅ Rol tabanlı erişim kontrolü
- ✅ Güvenli kimlik doğrulama

---

## ✨ Özellikler

### 👨‍💼 Yönetici Paneli
- Tüm hastaları görüntüleme, ekleme, düzenleme ve silme
- Tüm doktorları görüntüleme, ekleme, düzenleme ve silme
- Tüm randevuları görüntüleme, ekleme, düzenleme ve silme
- Tıbbi raporları görüntüleme ve yönetme
- Sistem istatistikleri ve dashboard

### 👨‍⚕️ Doktor Paneli
- Kendi randevularını görüntüleme
- Hasta bilgilerini görüntüleme
- Tıbbi rapor oluşturma ve düzenleme
- Hasta geçmişini inceleme

### 👤 Hasta Paneli
- Randevu oluşturma ve görüntüleme
- Kendi tıbbi raporlarını görüntüleme
- Doktor seçimi ve randevu planlama
- Kişisel bilgilerini görüntüleme

---

## 🛠 Teknoloji Yığını

### Frontend
- **React 18.2.0** - Kullanıcı arayüzü kütüphanesi
- **Vite 5.2.0** - Hızlı build tool ve dev server
- **React Router DOM 6.23.0** - Sayfa yönlendirme
- **Axios 1.6.8** - HTTP istekleri
- **Chart.js 4.4.2** - Grafik ve istatistik gösterimi
- **React Icons 5.2.1** - İkon kütüphanesi
- **React Select 5.8.0** - Gelişmiş select bileşenleri

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.19.2** - Web framework
- **MySQL2 3.9.7** - Veritabanı bağlantısı
- **JWT (jsonwebtoken) 9.0.2** - Token tabanlı kimlik doğrulama
- **Bcrypt 5.1.1** - Şifre hashleme
- **CORS 2.8.5** - Cross-origin kaynak paylaşımı

### Veritabanı
- **MySQL 8.0** - İlişkisel veritabanı

### DevOps
- **Docker** - Konteynerleştirme
- **Docker Compose** - Çoklu konteyner yönetimi

---

## 📦 Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların sisteminizde yüklü olması gerekir:

- **Docker** (20.10 veya üzeri)
- **Docker Compose** (2.0 veya üzeri)
- **Git** (projeyi klonlamak için)

> 💡 **Not:** Docker yüklü değilse, [Docker Desktop](https://www.docker.com/products/docker-desktop/) indirip kurabilirsiniz.

---

## 🚀 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/yunushanifi84/Hospital-System.git
cd Hospital-System
```

### 2. Docker ile Çalıştırma (Önerilen)

Proje Docker Compose ile yapılandırılmıştır. Tek komutla tüm servisleri başlatabilirsiniz:

```bash
docker compose up
```

Bu komut şunları yapar:
- MySQL veritabanı konteynerini başlatır
- Backend API sunucusunu başlatır (port 4444)
- Frontend React uygulamasını başlatır (port 5173)
- Veritabanı tablolarını otomatik oluşturur
- Varsayılan kullanıcıları ekler

### 3. İlk Başlatma

İlk kez çalıştırıyorsanız, Docker görüntülerini oluşturması biraz zaman alabilir. Tüm servislerin hazır olduğunu görmek için terminal çıktısını kontrol edin.

### 4. Uygulamaya Erişim

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4444
- **MySQL:** localhost:3306

---

## 📖 Kullanım

### İlk Giriş

1. Tarayıcınızda `http://localhost:5173` adresine gidin
2. Ana sayfada giriş formunu görürsünüz
3. Aşağıdaki test hesaplarından biriyle giriş yapın:

### Test Hesapları

#### 👨‍💼 Yönetici
```
Kullanıcı Adı: admin
Şifre: admin
```

#### 👨‍⚕️ Doktor
```
Kullanıcı Adı: Sally
Şifre: sally
```

#### 👤 Hasta
```
Kullanıcı Adı: Raul
Şifre: raul
```

### Yeni Hasta Kaydı

1. Ana sayfada "Kayıt Ol" butonuna tıklayın
2. Gerekli bilgileri doldurun (Ad, Soyad, Şifre, Doğum Tarihi, Cinsiyet, Telefon, Adres)
3. Kayıt işlemini tamamlayın
4. Giriş yaparak hasta panelini kullanmaya başlayın

### Randevu Oluşturma (Hasta)

1. Hasta paneline giriş yapın
2. "Randevularım" sekmesine gidin
3. "Yeni Randevu" butonuna tıklayın
4. Uzmanlık alanını seçin
5. Doktor seçin
6. Tarih ve saat belirleyin
7. Randevuyu kaydedin

### Tıbbi Rapor Oluşturma (Doktor)

1. Doktor paneline giriş yapın
2. "Hastalarım" sekmesine gidin
3. Bir hasta seçin
4. "Rapor Ekle" butonuna tıklayın
5. Rapor URL'sini girin (veya dosya yükleyin)
6. Raporu kaydedin

---

## 📁 Proje Yapısı

```
Hospital-System/
│
├── react-side/                 # Frontend uygulaması
│   ├── src/
│   │   ├── Components/         # React bileşenleri
│   │   │   ├── AddAppointmentModal.jsx
│   │   │   ├── AddDoctorModal.jsx
│   │   │   ├── AddPatientModal.jsx
│   │   │   ├── AddMedicalReportModal.jsx
│   │   │   ├── EditAppointmentModal.jsx
│   │   │   ├── EditDoctorModal.jsx
│   │   │   ├── EditPatientModal.jsx
│   │   │   ├── EditMedicalReportModal.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LoginContainer.jsx
│   │   │   ├── RegisterContainer.jsx
│   │   │   └── ...
│   │   ├── Pages/              # Sayfa bileşenleri
│   │   │   ├── Admin/          # Yönetici sayfaları
│   │   │   ├── Doctor/         # Doktor sayfaları
│   │   │   ├── Patient/        # Hasta sayfaları
│   │   │   ├── MainPage.jsx
│   │   │   └── NavBar.jsx
│   │   ├── css/                # Stil dosyaları
│   │   ├── App.jsx             # Ana uygulama bileşeni
│   │   ├── main.jsx            # Giriş noktası
│   │   ├── axiosInstance.js    # Axios yapılandırması
│   │   └── PrivateRoute.jsx    # Korumalı route bileşeni
│   ├── package.json
│   ├── vite.config.js
│   └── dockerfile
│
├── server-side/                # Backend API
│   ├── index.js                # Ana server dosyası
│   ├── classes.js              # Veritabanı sınıfları
│   ├── db-init.sql             # Veritabanı şeması
│   ├── config.json             # Yapılandırma dosyası
│   ├── package.json
│   └── dockerfile
│
├── docker-compose.yml          # Docker Compose yapılandırması
└── README.md                   # Bu dosya
```

---

## 🔌 API Endpoints

### Kimlik Doğrulama
- `POST /checkLogin` - Kullanıcı girişi
- `GET /checkToken` - Token doğrulama

### Hasta İşlemleri
- `POST /registerPatient` - Hasta kaydı (public)
- `POST /addPatient` - Hasta ekleme (admin)
- `POST /editPatient` - Hasta düzenleme
- `POST /deletePatient` - Hasta silme
- `GET /getPatients` - Tüm hastaları listeleme

### Doktor İşlemleri
- `POST /addDoctor` - Doktor ekleme
- `POST /editDoctor` - Doktor düzenleme
- `POST /deleteDoctor` - Doktor silme
- `GET /getDoctors` - Tüm doktorları listeleme
- `GET /getSpec` - Uzmanlık alanlarını listeleme
- `POST /getDoctorInfoForSpec` - Uzmanlığa göre doktor listesi

### Randevu İşlemleri
- `POST /addAppointment` - Randevu oluşturma
- `POST /editAppointment` - Randevu düzenleme
- `POST /deleteAppointment` - Randevu silme
- `GET /getAppointments` - Tüm randevuları listeleme
- `POST /getMyAppointments` - Kullanıcıya özel randevular

### Tıbbi Rapor İşlemleri
- `POST /addMedicalReport` - Rapor ekleme
- `POST /editMedicalReport` - Rapor düzenleme
- `POST /deleteMedicalReport` - Rapor silme
- `POST /getMedicalReports` - Tüm raporları listeleme
- `POST /getPatientMedicalReports` - Hasta raporlarını listeleme

### Doktor Özel
- `POST /getMyPatients` - Doktorun hastalarını listeleme

> 🔒 **Not:** Çoğu endpoint JWT token gerektirir. Token'ı `Authorization: Bearer <token>` header'ında göndermelisiniz.

---

## 🗄️ Veritabanı Yapısı

### Tablolar

#### Persons
Kullanıcıların temel bilgilerini tutar.
- `personID` (PK)
- `name`
- `surname`
- `password` (bcrypt hash)

#### Patients
Hasta özel bilgileri.
- `patientID` (PK)
- `personID` (FK → Persons)
- `birthDate`
- `gender` (ENUM: 'man', 'woman')
- `phoneNumber`
- `address`

#### Doctors
Doktor özel bilgileri.
- `doctorID` (PK)
- `personID` (FK → Persons)
- `specialization`
- `hospital`

#### Managers
Yönetici bilgileri.
- `managerID` (PK)
- `personID` (FK → Persons)

#### Appointments
Randevu bilgileri.
- `appointmentID` (PK)
- `patientID` (FK → Patients)
- `doctorID` (FK → Doctors)
- `appointmentDateTime`

#### MedicalReports
Tıbbi rapor bilgileri.
- `reportID` (PK)
- `patientID` (FK → Patients)
- `doctorID` (FK → Doctors)
- `reportDate`
- `reportContent` (JSON)
- `reportUrl`

### Veritabanı İlişkileri

```
Persons (1) ──< (1) Patients
Persons (1) ──< (1) Doctors
Persons (1) ──< (1) Managers

Patients (1) ──< (*) Appointments
Doctors (1) ──< (*) Appointments

Patients (1) ──< (*) MedicalReports
Doctors (1) ──< (*) MedicalReports
```

### Güvenlik Özellikleri

- **Trigger'lar:** Aktif randevusu olan hasta/doktor silme işlemleri engellenir
- **Şifre Hashleme:** Hasta ve doktor şifreleri bcrypt ile hashlenir
- **JWT Token:** Tüm API istekleri token ile korunur

---

## 🔐 Giriş Bilgileri

### Varsayılan Kullanıcılar

Sistem ilk kurulumda aşağıdaki test kullanıcılarını otomatik oluşturur:

| Rol | Kullanıcı Adı | Şifre | Açıklama |
|-----|---------------|-------|----------|
| 👨‍💼 Yönetici | `admin` | `admin` | Tam yetkili sistem yöneticisi |
| 👨‍⚕️ Doktor | `Sally` | `sally` | Genel pratisyen doktor |
| 👤 Hasta | `Raul` | `raul` | Test hasta hesabı |

> ⚠️ **Güvenlik Uyarısı:** Üretim ortamında mutlaka varsayılan şifreleri değiştirin!

---

## 💻 Geliştirme

### Geliştirme Modunda Çalıştırma

Docker Compose zaten development modunda çalışır. Dosya değişiklikleri otomatik olarak algılanır ve uygulama yeniden yüklenir.

### Backend Geliştirme

```bash
cd server-side
npm install
npm run dev
```

Backend `http://localhost:4444` adresinde çalışır.

### Frontend Geliştirme

```bash
cd react-side
npm install
npm run dev
```

Frontend `http://localhost:5173` adresinde çalışır.

### Veritabanına Bağlanma

Docker Compose ile çalışırken MySQL'e bağlanmak için:

```bash
docker exec -it hospital-system-mysql-1 mysql -uroot -prootpassword Hospital
```

### Yapılandırma Dosyaları

#### Backend Yapılandırması (`server-side/config.json`)
```json
{
    "host": "mysql",
    "user": "root",
    "password": "rootpassword",
    "database": "Hospital",
    "port": "4444",
    "secretKey": "nom"
}
```

#### Frontend Yapılandırması (`react-side/config.json`)
```json
{
    "host": "http://localhost",
    "port": 4444
}
```

> 💡 **Not:** Docker dışında çalıştırıyorsanız, `host` değerlerini `localhost` olarak güncelleyin.

---

## 🌐 Canlı Demo

Projenin canlı versiyonuna şu adresten erişebilirsiniz:

🔗 **https://hospital.velnom.xyz/**

---

## 📝 Notlar

### Önemli Bilgiler

- Sistem JWT token tabanlı kimlik doğrulama kullanır
- Token süresi 1 saattir
- Aktif randevusu olan hasta/doktor silinemez (veritabanı trigger'ı ile korunur)
- Admin şifreleri şu an için hashlenmemiştir (geliştirme aşamasında)
- Tıbbi raporlar URL formatında saklanır

### Bilinen Sınırlamalar

- Admin şifreleri düz metin olarak saklanmaktadır (güvenlik iyileştirmesi gerekebilir)
- SQL injection koruması için prepared statements kullanılması önerilir
- Dosya yükleme için GoFile entegrasyonu mevcut ancak yapılandırma gerekebilir

---

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

---

## 📄 Lisans

Bu proje açık kaynaklıdır ve eğitim amaçlı geliştirilmiştir.

---

## 👨‍💻 Geliştirici

**Yunus Hanifi**

- GitHub: [@yunushanifi84](https://github.com/yunushanifi84)

---

## 📞 Destek

Sorularınız veya önerileriniz için:
- GitHub Issues kullanabilirsiniz
- Pull Request gönderebilirsiniz

---

## 🎉 Teşekkürler

Bu projeyi kullandığınız için teşekkür ederiz! Herhangi bir sorun yaşarsanız veya öneriniz varsa lütfen iletişime geçin.

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**
