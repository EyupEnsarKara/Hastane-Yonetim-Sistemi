const { PatientClass, DoctorClass, AppointmentClass, MedicalReportClass } = require('./classes');

const express = require('express');
const cors = require('cors');
const { host, database, password, user, port, certfileKey, certfile } = require('./config.json')
const mysql = require('mysql2');
const htpps = require('https');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: host,
    database: database,
    password: password,
    user: user
});
const certOptions = {
    key: fs.readFileSync(certfileKey),
    cert: fs.readFileSync(certfile)
};


connection.connect((err) => {
    if (err) {
        console.log("Veritabanına bağlanılamadı.");
        return;
    }
    console.log("Veritabanına bağlanıldı.");

})
const newPatient = new PatientClass(connection, 'John', 'Doe', 'password123', '1990-01-01', 'man', '123456789', '123 Street, City');
newPatient.addToDatabase();


// /addPatient endpoint'i
app.post('/addPatient', (req, res) => {
    const { name, surName, password, birthDate, gender, phoneNumber, address } = req.body;
    const patient = new PatientClass(connection, name, surName, password, birthDate, gender, phoneNumber, address);
    patient.addToDatabase();
    //res.status(200).json({ message: 'Hasta başarıyla eklendi.' });
});

// /addDoctor endpoint'i
app.post('/addDoctor', (req, res) => {
    const { connection, name, surName, password, specialization, hospital } = req.body;
    const doctor = new DoctorClass(connection, name, surName, password, specialization, hospital);
    doctor.addToDatabase();
    //res.status(200).json({ message: 'Doktor başarıyla eklendi.' });
});

// /addAppointment endpoint'i
app.post('/addAppointment', (req, res) => {
    const { connection, patientID, doctorID, date, time } = req.body;
    const appointment = new AppointmentClass(connection, patientID, doctorID, date, time);
    appointment.addToDatabase();
    //res.status(200).json({ message: 'Randevu başarıyla eklendi.' });
});

// /addMedicalReport endpoint'i
app.post('/addMedicalReport', (req, res) => {
    const { connection, patientID, doctorID, report } = req.body;
    const medicalReport = new MedicalReportClass(connection, patientID, doctorID, report);
    medicalReport.addToDatabase();
    //res.status(200).json({ message: 'Tıbbi rapor başarıyla eklendi.' });
});

app.post('/checkLogin', (req, res) => {
    const { connection, username, password, userType } = req.body;

    if (userType === 'patient') {
        connection.query('SELECT * FROM patients WHERE name = ? AND password = ?', [username, password], (err, results) => {
            if (results.length > 0) {
                res.status(200).json({ message: 'Hasta girişi başarılı.' });
            } else {
                res.status(400).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
            }
        });
    } else if (userType === 'doctor') {
        connection.query('SELECT * FROM doctors WHERE name = ? AND password = ?', [username, password], (err, results) => {
            if (results.length > 0) {
                res.status(200).json({ message: 'Doktor girişi başarılı.' });
            } else {
                res.status(400).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
            }
        });
    } else if (userType === 'admin') {
        connection.query('SELECT * FROM doctors WHERE name = ? AND password = ?', [username, password], (err, results) => {
            if (results.length > 0) {
                res.status(200).json({ message: 'Doktor girişi başarılı.' });
            } else {
                res.status(400).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
            }
        });
    } else {
        res.status(400).json({ message: 'Geçersiz kullanıcı türü.' });
    }
});


const server = htpps.createServer(certOptions, app);


// app.listen(port, () => {
//     console.log("Server Started in port:" + port)
// })


server.listen(port, () => {
    console.log("htpps Server Started in port:" + port);
});