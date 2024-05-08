class PatientClass {
  constructor(connection, name, surname, password, birthDate, gender, phoneNumber, address) {
    this.connection = connection;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  addToDatabase() {
    const sql = `INSERT INTO Patients ( name, surname, password,birthDate, gender, phoneNumber, address) VALUES ( '${this.name}', '${this.surname}','${this.password}' ,'${this.birthDate}', '${this.gender}', '${this.phoneNumber}', '${this.address}')`;
    this.connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Patient eklendi!");
    });
  }

  // Diğer metodlar...
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
    const sql = `INSERT INTO Doctors (name, surname, password,specialization, hospital) VALUES ('${this.name}', '${this.surname}','${this.password}', '${this.specialization}', '${this.hospital}')`;
    this.connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Doctor eklendi!");
    });
  }

  // Diğer metodlar...
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

module.exports = { PatientClass, DoctorClass, AppointmentClass, MedicalReportClass };
