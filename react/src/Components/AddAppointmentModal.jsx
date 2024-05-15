import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host, port } from '../../config.json';
import '../css/AddAppointmentModal.css';
import axiosInstance from '../axiosInstance';
import Select from 'react-select';

function AddAppointmentModal({ modalfunc }) {
    const [appointmentDateTime, setAppointmentDateTime] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    useEffect(() => {
        axiosInstance.get(`/getDoctors`)
            .then(res => {
                if (res.data.result) {
                    setDoctors(res.data.result);
                } else {
                    alert("An error occurred while fetching doctors.");
                }
            })
            .catch(err => {
                console.error("Error fetching doctors:", err);
                alert("An error occurred while fetching doctors.");
            });

        axiosInstance.get(`/getPatients`)
            .then(res => {
                if (res.data.result) {
                    setPatients(res.data.result);
                } else {
                    alert("An error occurred while fetching patients.");
                }
            })
            .catch(err => {
                console.error("Error fetching patients:", err);
                alert("An error occurred while fetching patients.");
            });

    }, []);


    const handleAddAppointment = () => {
        console.log(appointmentDateTime);
        console.log(doctorId);
        console.log(patientId);
        if (!appointmentDateTime || !doctorId || !patientId) {
            alert("Please fill in all fields.");
            return;
        }

        const newAppointment = {
            date: appointmentDateTime,
            doctorID: doctorId,
            patientID: patientId
        };

        axiosInstance.post(`/addAppointment`, newAppointment)
            .then(res => {
                if (res.data.status === "ok") {
                    alert("Appointment added successfully.");
                    modalfunc();
                } else {
                    alert("An error occurred while adding the appointment.");
                }
            })
            .catch(err => {
                console.error("Error adding appointment:", err);
                alert("An error occurred while adding the appointment.");
            });
    };

    const handleDateTimeChange = (e) => {

        const selectedDateTime = new Date(e.target.value);

        const formattedDateTime = selectedDateTime.toISOString().slice(0, 16);

        setAppointmentDateTime(formattedDateTime);
    };
    const handleDoctorChange = (selectedOption) => {
        setDoctorId(selectedOption.value);
    };

    const doctorOptions = doctors.map((doctor) => ({
        value: doctor.doctorID,
        label: doctor.name,
    }));
    const handlePatientChange = (selectedOption) => {
        setPatientId(selectedOption.value);

    };
    const patientOptions = patients.map((patient) => ({
        value: patient.patientID,
        label: patient.name,

    }));

    return (
        <div className="modal">
            <div className="overlay" onClick={() => modalfunc()}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={() => modalfunc()}>&times;</button>
                <h2>Randevu Oluştur</h2>

                <label htmlFor="appointmentDateTime">Appointment Date & Time:</label>
                <input
                    type="datetime-local"
                    id="appointmentDateTime"
                    value={appointmentDateTime}
                    onChange={handleDateTimeChange}
                />
                {confirmationMessage && <p>{confirmationMessage}</p>}

                <label htmlFor="doctorId">Select Doctor:</label>
                <Select
                    id="doctorId"
                    options={doctorOptions}
                    onChange={handleDoctorChange}
                    placeholder="Select a doctor"
                />

                <label htmlFor="patientId">Select Patient:</label>
                <Select
                    id="patientId"
                    options={patientOptions}
                    onChange={handlePatientChange}
                    placeholder="Select a patient"
                />

                <button className="login-button" onClick={handleAddAppointment}>Add</button>
            </div>
        </div>
    );
}

export default AddAppointmentModal;
