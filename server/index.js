const { PatientClass, DoctorClass, AppointmentClass, MedicalReportClass, Manager } = require('./classes');

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



// /addPatient endpoint'i
app.post('/addPatient', (req, res) => {
    const { name, surName, password, birthDate, gender, phoneNumber, address } = req.body;
    console.log(req.body)
    const patient = new PatientClass(connection, name, surName, password, birthDate, gender, phoneNumber, address);
    patient.addToDatabase();
    res.status(200).json({ status: "ok" });

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
    connection.connect;
    const { username, password, userType } = req.body;

    if (userType === 'patient') {
        connection.query('SELECT * FROM persons p JOIN patients pt ON p.personID = pt.personID WHERE p.name = ? AND p.password = ?', [username, password], (err, results) => {

            if (results.length > 0) {
                res.status(200).json({ user: results[0] });
            }
            else {
                res.status(200).json({});
            }
        });
    } else if (userType === 'doctor') {
        connection.query('SELECT * FROM persons p JOIN doctors d ON p.personID = d.personID WHERE p.name = ? AND p.password = ?', [username, password], (err, results) => {
            if (results.length > 0) {
                res.status(200).json({ user: results[0] });
            }
            else {
                res.status(200).json({});
            }
        })
    } else if (userType === 'admin') {
        connection.query('SELECT * FROM persons p JOIN managers m ON p.personID = m.personID WHERE p.name = ? AND p.password = ?', [username, password], (err, results) => {
            if (results.length > 0) {
                res.status(200).json({ user: results[0] });
            }
            else {
                res.status(200).json({});
            }
        })
    }

});
// /editPatient endpoint'i
app.post('/editPatient', (req, res) => {
    const pt = req.body.editedPatient;
    const { id, name, surname, password, birthDate, gender, phoneNumber, address } = pt;
    console.log(pt)
    const patient = new PatientClass(connection, name, surname, password, birthDate, gender, phoneNumber, address, id);
    patient.update((err, result) => {
        if (err) {
            console.log("Error updating patient");
            return;
        }
        console.log("Patient updated succsessfully");
    })

});


app.get('/getPatients', (req, res) => {
    const query = `
        SELECT Patients.*, Persons.name, Persons.surname, Persons.password
        FROM Patients
        INNER JOIN Persons ON Patients.personID = Persons.personID
    `;
    connection.query(query, (err, results) => {
        res.status(200).json({ result: results });
    })
})


app.post('/deletePatient'), (req, res) => {
    const id = 2;
    Manager.deletePatient(connection, id)
}

const server = htpps.createServer(certOptions, app);





server.listen(port, () => {
    console.log("htpps Server Started in port:" + port);
});