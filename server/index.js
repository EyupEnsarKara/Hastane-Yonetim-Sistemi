const express = require('express');
const cors = require('cors');
const { host, database, password, user, port } = require('./config.json')
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: host,
    database: database,
    password: password,
    user: user
});

connection.connect((err) => {
    if (err) {
        console.log("Veritabanına bağlanılamadı.");
        return;
    }
    console.log("Veritabanına bağlanıldı.");
})


app.post('/addPatient', (req, res) => {
    const { name, surName, birthDate, gender, phoneNumber, adress } = req.body;
    connection.query(`
    INSERT INTO Hastalar (Ad, Soyad, DogumTarihi, Cinsiyet, TelefonNumarasi, Adres)
             VALUES (?, ?, ?, ?, ?, ?)
    `, [name, surName, birthDate, gender, phoneNumber, adress], (err) => {
        if (err)
            console.log("Veri eklemede hata oluştu");
    })
})













app.listen(port, () => {
    console.log("Server Started in port:" + port)
})