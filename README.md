# 🏥 HospitalDemo - Hastane Yönetim Sistemi

Modern ve kullanıcı dostu bir hastane yönetim sistemi demo projesi. Bu proje, hastanelerin günlük operasyonlarını dijitalleştirmek için geliştirilmiş tam kapsamlı bir web uygulamasıdır.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [API Endpoints](#api-endpoints)
- [Güvenlik](#güvenlik)
- [Katkıda Bulunma](#katkıda-bulunma)

## 🎯 Genel Bakış

HospitalDemo, hastaneler için geliştirilmiş bir demo yönetim sistemidir. Sistem, üç farklı kullanıcı rolü ile çalışır:

- **👨‍💼 Admin (Yönetici)**: Sistemin tam kontrolüne sahiptir
- **👨‍⚕️ Doktor**: Hasta randevularını ve tıbbi raporları yönetir
- **👤 Hasta**: Kendi randevularını görüntüler ve tıbbi raporlarına erişir

## ✨ Özellikler

### Yönetici Özellikleri
- ✅ Tüm hastaları görüntüleme, ekleme, düzenleme ve silme
- ✅ Tüm doktorları görüntüleme, ekleme, düzenleme ve silme
- ✅ Tüm randevuları görüntüleme ve yönetme
- ✅ Tüm tıbbi raporları görüntüleme ve yönetme
- ✅ Dashboard ile istatistiksel verileri görüntüleme

### Doktor Özellikleri
- ✅ Kendi randevularını görüntüleme ve yönetme
- ✅ Hastalarını görüntüleme
- ✅ Tıbbi rapor oluşturma ve düzenleme
- ✅ Dashboard ile kendi istatistiklerini görüntüleme

### Hasta Özellikleri
- ✅ Kendi randevularını görüntüleme
- ✅ Randevu oluşturma
- ✅ Tıbbi raporlarını görüntüleme
- ✅ Kişisel bilgilerini görüntüleme

## 🛠️ Teknolojiler

### Frontend
- **React 18.2.0** - Modern UI kütüphanesi
- **React Router DOM 6.23.0** - Sayfa yönlendirme
- **Axios 1.6.8** - HTTP istekleri
- **Chart.js 4.4.2** - Grafik ve istatistik gösterimi
- **React Icons 5.2.1** - İkon kütüphanesi
- **Vite 5.2.0** - Hızlı geliştirme ortamı

### Backend
- **Node.js** - Sunucu tarafı runtime
- **Express 4.19.2** - Web framework
- **MySQL2 3.9.7** - Veritabanı bağlantısı
- **JWT (jsonwebtoken) 9.0.2** - Kimlik doğrulama
- **Bcrypt 5.1.1** - Şifre hashleme
- **CORS 2.8.5** - Cross-origin kaynak paylaşımı

### Veritabanı
- **MySQL** - İlişkisel veritabanı yönetim sistemi

## 📦 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn
- MySQL veritabanı sunucusu

### Adım 1: Projeyi Klonlayın
```bash
git clone <repository-url>
cd HospitalDemo
```

### Adım 2: Backend Kurulumu
```bash
cd server
npm install
```

### Adım 3: Backend Yapılandırması
`server/config.json` dosyasını düzenleyin:
```json
{
    "host": "localhost",
    "user": "root",
    "password": "şifreniz",
    "database": "Hospital",
    "port": "3306",
    "certfileKey": "localhost-key.pem",
    "certfile": "localhost.pem",
    "secretKey": "güvenli-secret-key"
}
```

### Adım 4: Veritabanı Kurulumu
Veritabanı tablolarını oluşturmak için:
```bash
node initTables.js
```

### Adım 5: Frontend Kurulumu
```bash
cd ../react
npm install
```

### Adım 6: Frontend Yapılandırması
`react/config.json` dosyasını düzenleyin:
```json
{
    "host": "https://localhost",
    "port": 4444,
    "goFileUploadFolderId": "your-folder-id"
}
```

## 🚀 Kullanım

### Backend Sunucusunu Başlatma
```bash
cd server
npm run dev
```
Backend sunucusu varsayılan olarak `https://localhost:4444` adresinde çalışacaktır.

### Frontend Geliştirme Sunucusunu Başlatma
```bash
cd react
npm run dev
```
Frontend uygulaması genellikle `http://localhost:5173` adresinde çalışacaktır.

### Production Build
Frontend için production build oluşturmak:
```bash
cd react
npm run build
```

## 📁 Proje Yapısı

```
HospitalDemo/
├── react/                    # Frontend uygulaması
│   ├── src/
│   │   ├── Components/       # React bileşenleri
│   │   ├── Pages/            # Sayfa bileşenleri
│   │   │   ├── Admin/        # Admin sayfaları
│   │   │   ├── Doctor/       # Doktor sayfaları
│   │   │   └── Patient/      # Hasta sayfaları
│   │   ├── css/              # CSS stilleri
│   │   ├── App.jsx           # Ana uygulama bileşeni
│   │   └── main.jsx          # Giriş noktası
│   ├── public/               # Statik dosyalar
│   └── package.json
│
├── server/                   # Backend uygulaması
│   ├── index.js              # Ana sunucu dosyası
│   ├── classes.js            # Veritabanı sınıfları
│   ├── initTables.js         # Veritabanı tablo oluşturma
│   ├── config.json           # Sunucu yapılandırması
│   └── package.json
│
└── README.md
```

## 🔐 Güvenlik

- **JWT Token Authentication**: Tüm API istekleri JWT token ile korunmaktadır
- **Bcrypt Password Hashing**: Kullanıcı şifreleri bcrypt ile hashlenmektedir
- **HTTPS**: Güvenli bağlantı için HTTPS kullanılmaktadır
- **CORS**: Cross-origin istekler kontrol altındadır
- **Private Routes**: Kullanıcı rolleri için özel route koruması

## 📝 API Endpoints

### Kimlik Doğrulama
- `POST /register` - Yeni kullanıcı kaydı
- `POST /login` - Kullanıcı girişi
- `GET /checkToken` - Token doğrulama

### Hasta İşlemleri
- `GET /patients` - Tüm hastaları listele
- `POST /patients` - Yeni hasta ekle
- `PUT /patients/:id` - Hasta bilgilerini güncelle
- `DELETE /patients/:id` - Hasta sil

### Doktor İşlemleri
- `GET /doctors` - Tüm doktorları listele
- `POST /doctors` - Yeni doktor ekle
- `PUT /doctors/:id` - Doktor bilgilerini güncelle
- `DELETE /doctors/:id` - Doktor sil

### Randevu İşlemleri
- `GET /appointments` - Tüm randevuları listele
- `POST /appointments` - Yeni randevu oluştur
- `PUT /appointments/:id` - Randevu güncelle
- `DELETE /appointments/:id` - Randevu sil

### Tıbbi Rapor İşlemleri
- `GET /medical-reports` - Tüm raporları listele
- `POST /medical-reports` - Yeni rapor oluştur
- `PUT /medical-reports/:id` - Rapor güncelle
- `DELETE /medical-reports/:id` - Rapor sil

## 👥 Kullanıcı Rolleri

### Admin
- Sistemin tam kontrolüne sahiptir
- Tüm kullanıcıları, randevuları ve raporları yönetebilir
- Dashboard üzerinden istatistikleri görüntüleyebilir

### Doktor
- Kendi randevularını yönetebilir
- Hastalarına tıbbi rapor oluşturabilir
- Kendi istatistiklerini görüntüleyebilir

### Hasta
- Randevu oluşturabilir ve görüntüleyebilir
- Kendi tıbbi raporlarını görüntüleyebilir
- Kişisel bilgilerini görüntüleyebilir

## 🐛 Sorun Giderme

### Veritabanı Bağlantı Hatası
- MySQL sunucusunun çalıştığından emin olun
- `server/config.json` dosyasındaki bilgilerin doğru olduğunu kontrol edin

### Port Çakışması
- Backend için farklı bir port kullanmak isterseniz `server/config.json` dosyasını düzenleyin
- Frontend için `react/vite.config.js` dosyasını düzenleyin

### SSL Sertifika Hatası
- HTTPS kullanmak için SSL sertifikalarınızın (`localhost.pem` ve `localhost-key.pem`) `server/` klasöründe olduğundan emin olun

## 📄 Lisans

Bu proje [LICENSE](LICENSE) dosyasında belirtilen lisans altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Bir Pull Request oluşturun

## 📧 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

---

**Not**: Bu proje demo amaçlı geliştirilmiştir. Production ortamında kullanmadan önce güvenlik testlerinden geçirmeniz önerilir.
