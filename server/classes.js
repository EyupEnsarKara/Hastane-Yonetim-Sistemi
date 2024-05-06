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
  }
  
  