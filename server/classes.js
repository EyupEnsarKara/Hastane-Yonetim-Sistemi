class Patient {
  constructor(patientID, name, surname, birthDate, gender, phoneNumber, address) {
    this.patientID = patientID;
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
  addToDatabase() {
    const sql = `INSERT INTO Patients (patientID, name, surname, birthDate, gender, phoneNumber, address) VALUES (${this.patientID}, '${this.name}', '${this.surname}', '${this.birthDate}', '${this.gender}', '${this.phoneNumber}', '${this.address}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Patient eklendi!");
    });
  }
  // Randevu ekleme metodu
  addAppointment(appointment) {
    // Burada randevu eklenirken ilgili veritabanı tablosuna eklemeniz gerekir.
  }

  // Tıbbi rapor ekleme metodu
  addMedicalReport(medicalReport) {
    // Burada tıbbi rapor eklenirken ilgili veritabanı tablosuna eklemeniz gerekir.
  }
}

class Doctor {
  constructor(doctorID, name, surname, specialization, hospital) {
    this.doctorID = doctorID;
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.hospital = hospital;
  }
  addToDatabase() {
    const sql = `INSERT INTO Doctors (doctorID, name, surname, specialization, hospital) VALUES (${this.doctorID}, '${this.name}', '${this.surname}', '${this.specialization}', '${this.hospital}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Doctor eklendi!");
    });
  }

  // Randevu ekleme metodu
  addAppointment(appointment) {
    // Burada doktorun randevu tablosuna randevu eklenirken ilgili veritabanı tablosuna eklemeniz gerekir.
  }
}

class Appointment {
  constructor(appointmentID, patientID, doctorID, date, time) {
    this.appointmentID = appointmentID;
    this.patientID = patientID;
    this.doctorID = doctorID;
    this.date = date;
    this.time = time;
  }
  addToDatabase() {
    const sql = `INSERT INTO Appointments (appointmentID, patientID, doctorID, date, time) VALUES (${this.appointmentID}, ${this.patientID}, ${this.doctorID}, '${this.date}', '${this.time}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Appointment eklendi!");
    });
  }
}

class MedicalReport {
  constructor(reportID, patientID, doctorID, reportDate, content, result) {
    this.reportID = reportID;
    this.patientID = patientID;
    this.doctorID = doctorID;
    this.reportDate = reportDate;
    this.content = content;
    this.result = result;
  }
  addToDatabase() {
    const sql = `INSERT INTO MedicalReports (reportID, patientID, doctorID, reportDate, content, result) VALUES (${this.reportID}, ${this.patientID}, ${this.doctorID}, '${this.reportDate}', '${this.content}', '${this.result}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("MedicalReport eklendi!");
    });
  }
}


