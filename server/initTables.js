const mysql = require('mysql2');

// Veritabanına bağlan
const connection = mysql.createConnection({
    host: 'localhost',       // Veritabanı sunucunuzun IP adresi veya 'localhost'
    user: 'root',            // Veritabanı kullanıcı adı
    password: 'E@1q2w3e4r',    // Veritabanı şifresi
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
        `CREATE TABLE IF NOT EXISTS Patients (
            patientID INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            surname VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            birthDate DATE NOT NULL,
            gender ENUM('man', 'woman') NOT NULL,
            phoneNumber VARCHAR(15),
            address TEXT
        );`,

        `CREATE TABLE IF NOT EXISTS Doctors (
            doctorID INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            surname VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            specialization VARCHAR(100),
            hospital VARCHAR(100)
        );`,

        `CREATE TABLE IF NOT EXISTS Managers (
            managerID INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50),
            surname VARCHAR(50),
            password VARCHAR(255) NOT NULL
        );`,

        `CREATE TABLE IF NOT EXISTS Appointments (
            appointmentID INT PRIMARY KEY AUTO_INCREMENT,
            patientID INT,
            doctorID INT,
            appointmentDate DATE NOT NULL,
            appointmentTime TIME NOT NULL,
            FOREIGN KEY (patientID) REFERENCES Patients(patientID),
            FOREIGN KEY (doctorID) REFERENCES Doctors(doctorID)
        );`,

        `CREATE TABLE IF NOT EXISTS MedicalReports (
            reportID INT PRIMARY KEY AUTO_INCREMENT,
            patientID INT,
            doctorID INT,
            reportDate DATE NOT NULL,
            reportContent TEXT,
            reportURL VARCHAR(255),
            reportJSON JSON,
            FOREIGN KEY (patientID) REFERENCES Patients(patientID),
            FOREIGN KEY (doctorID) REFERENCES Doctors(doctorID)
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
