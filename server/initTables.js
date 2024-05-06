const mysql = require('mysql2');

// Veritabanına bağlan
const connection = mysql.createConnection({
    host: 'localhost',       // Veritabanı sunucunuzun IP adresi veya 'localhost'
    user: 'root',            // Veritabanı kullanıcı adı
    password: '1436XYzt+++',    // Veritabanı şifresi
    database: 'Hospital'      // Veritabanı adı (oluşturulmuş olmalı)
});

// Bağlantıyı doğrula
connection.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanılamadı:', err.stack);
        return;
    }
    console.log('Veritabanına başarıyla bağlanıldı.');
});

// SQL tablolarını oluştur
const createTables = () => {
    const sqlCommands = [
        `CREATE TABLE IF NOT EXISTS Hastalar (
            HastaID INT PRIMARY KEY AUTO_INCREMENT,
            Ad VARCHAR(50) NOT NULL,
            Soyad VARCHAR(50) NOT NULL,
            DogumTarihi DATE NOT NULL,
            Cinsiyet ENUM('Erkek', 'Kadin') NOT NULL,
            TelefonNumarasi VARCHAR(15),
            Adres TEXT
        );`,

        `CREATE TABLE IF NOT EXISTS Doktorlar (
            DoktorID INT PRIMARY KEY AUTO_INCREMENT,
            Ad VARCHAR(50) NOT NULL,
            Soyad VARCHAR(50) NOT NULL,
            UzmanlikAlani VARCHAR(100),
            CalistigiHastane VARCHAR(100)
        );`,

        `CREATE TABLE IF NOT EXISTS Yoneticiler (
            YoneticiID INT PRIMARY KEY AUTO_INCREMENT,
            Ad VARCHAR(50),
            Soyad VARCHAR(50)
        );`,

        `CREATE TABLE IF NOT EXISTS Randevular (
            RandevuID INT PRIMARY KEY AUTO_INCREMENT,
            HastaID INT,
            DoktorID INT,
            RandevuTarihi DATE NOT NULL,
            RandevuSaati TIME NOT NULL,
            FOREIGN KEY (HastaID) REFERENCES Hastalar(HastaID),
            FOREIGN KEY (DoktorID) REFERENCES Doktorlar(DoktorID)
        );`,

        `CREATE TABLE IF NOT EXISTS TibbiRaporlar (
            RaporID INT PRIMARY KEY AUTO_INCREMENT,
            HastaID INT,
            DoktorID INT,
            RaporTarihi DATE NOT NULL,
            RaporIcerigi TEXT,
            RaporURL VARCHAR(255),
            RaporJSON JSON,
            FOREIGN KEY (HastaID) REFERENCES Hastalar(HastaID),
            FOREIGN KEY (DoktorID) REFERENCES Doktorlar(DoktorID)
        );`
    ];

    sqlCommands.forEach((sql, index) => {
        connection.query(sql, (err) => {
            if (err) {
                console.error(`Tablo oluşturulurken hata oluştu (SQL Komutu #${index + 1}):`, err);
            } else {
                console.log(`Tablo başarıyla oluşturuldu (SQL Komutu #${index + 1}).`);
            }
        });
    });
};

// Tabloları oluştur
createTables();

// Bağlantıyı kapat
connection.end((err) => {
    if (err) {
        console.error('Bağlantı kapatılamadı:', err);
    } else {
        console.log('Veritabanı bağlantısı kapatıldı.');
    }
});
