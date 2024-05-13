class PatientClass {

  constructor(connection, name, surname, password, birthDate, gender, phoneNumber, address, id = null) {
    this.connection = connection;
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.address = address;

    if (this.id) {
      this.connection.query(`SELECT p.*, pt.* FROM Patients pt JOIN Persons p ON pt.personID = p.personID WHERE pt.patientID = ${this.id}`, (err, result) => {
        if (err) {
          console.error("Error retrieving patient data:", err);
          throw err;
        }
        if (result.length === 0) {
          console.log("Patient not found!");
          return;
        }
        const patientData = result[0];
        this.name = patientData.name;
        this.surname = patientData.surname;
        this.password = patientData.password;
        this.birthDate = patientData.birthDate;
        this.gender = patientData.gender;
        this.phoneNumber = patientData.phoneNumber;
        this.address = patientData.address;
      });
      console.log("sınıf oluştu atanan bilgiler");
      console.log("Patient ID:", this.id);
      console.log("Patient Name:", this.name);
      console.log("Patient Surname:", this.surname);
      console.log("Patient Password:", this.password);
      console.log("Patient Birth Date:", this.birthDate);
      console.log("Patient Gender:", this.gender);
      console.log("Patient Phone Number:", this.phoneNumber);
      console.log("Patient Address:", this.address);
    }
  }


  addToDatabase() {
    const sql = `INSERT INTO Persons (name, surname, password) VALUES ('${this.name}', '${this.surname}', '${this.password}')`;
    this.connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error adding person:", err);
        throw err;
      }
      console.log("tsttt")
      const personID = result.insertId;
      const patientSql = `INSERT INTO Patients (personID, birthDate, gender, phoneNumber, address) VALUES (${personID}, '${this.birthDate}', '${this.gender}', '${this.phoneNumber}', '${this.address}')`;
      this.connection.query(patientSql, (err, result) => {
        if (err) {
          console.error("Error adding patient:", err);
          throw err;
        }
        console.log("Patient added successfully!");
      });
    });
  }
  update(callback) {
    const sql = `UPDATE Patients pt JOIN Persons p ON pt.personID = p.personID SET 
        p.name = ?, 
        p.surname = ?, 
        p.password = ?, 
        pt.birthDate = ?, 
        pt.gender = ?, 
        pt.phoneNumber = ?, 
        pt.address = ? 
        WHERE pt.patientID = ?`;

    const params = [this.name, this.surname, this.password, this.birthDate, this.gender, this.phoneNumber, this.address, this.id];

    this.connection.query(sql, params, (err, result) => {
      if (err) {
        console.error("Error updating patient data:", err);
        callback(err, null);
        return;
      }
      console.log("Patient data updated successfully.");
      callback(null, result);
    });
  }
  updateDatabase() {
    const sql = `UPDATE Persons SET name = '${this.name}', surname = '${this.surname}', password = '${this.password}' WHERE personID = ${this.id}`;
    this.connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error updating person:", err);
        throw err;
      }
      console.log("Person updated successfully!");
      const patientSql = `UPDATE Patients SET birthDate = '${this.birthDate}', gender = '${this.gender}', phoneNumber = '${this.phoneNumber}', address = '${this.address}' WHERE patientID = ${this.id}`;
      this.connection.query(patientSql, (err, result) => {
        if (err) {
          console.error("Error updating patient:", err);
          throw err;
        }
        console.log("Patient updated successfully!");
      });
    });
  }

}

class DoctorClass {
  constructor(connection, doctorID, name, surname, password, specialization, hospital) {
    this.connection = connection;
    this.doctorID = doctorID;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.specialization = specialization;
    this.hospital = hospital;
  }
  addToDatabase() {
    const sql = `INSERT INTO Persons (name, surname, password) VALUES ('${this.name}', '${this.surname}', '${this.password}')`;
    this.connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error adding person:", err);
        throw err;
      }
      const personID = result.insertId;
      const doctorSql = `INSERT INTO Doctors (personID, specialization, hospital) VALUES (${personID}, '${this.specialization}', '${this.hospital}')`;
      this.connection.query(doctorSql, (err, result) => {
        if (err) {
          console.error("Error adding doctor:", err);
          throw err;
        }
        console.log("Doctor added successfully!");
      });
    });
  }

}

class AppointmentClass {
  constructor(connection, appointmentID, patientID, doctorID, date, time) {
    this.connection = connection;
    this.appointmentID = appointmentID;
    this.patientID = patientID;
    this.doctorID = doctorID;
    this.date = date;
    this.time = time;
  }
  addToDatabase() {
    const sql = `INSERT INTO Appointments (appointmentID, patientID, doctorID, date, time) VALUES (${this.appointmentID}, ${this.patientID}, ${this.doctorID}, '${this.date}', '${this.time}')`;
    this.connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Appointment eklendi!");
    });
  }
}

class MedicalReportClass {
  constructor(connection, reportID, patientID, doctorID, reportDate, content, result) {
    this.connection = connection;
    this.reportID = reportID;
    this.patientID = patientID;
    this.doctorID = doctorID;
    this.reportDate = reportDate;
    this.content = content;
    this.result = result;
  }
  addToDatabase() {
    const sql = `INSERT INTO MedicalReports (reportID, patientID, doctorID, reportDate, content, result) VALUES (${this.reportID}, ${this.patientID}, ${this.doctorID}, '${this.reportDate}', '${this.content}', '${this.result}')`;
    this.connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("MedicalReport eklendi!");
    });
  }
}
class Manager {
  static deletePatient(connection, id) {
    connection.connect();
    const sql = `Delete from Patients where patientID=${id}`;

    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err.message)
      }


      // Veritabanı bağlantısını kapat
      connection.end();

    });

  }
}

module.exports = { PatientClass, DoctorClass, AppointmentClass, MedicalReportClass, Manager };
