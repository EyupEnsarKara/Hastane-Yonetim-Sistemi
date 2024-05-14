import React, { useState } from 'react';
import axios from 'axios';
import { host, port } from '../../config.json';
import '../css/AddAppointmentModal.css';

function AddAppointmentModal({ modalfunc }) {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleAddAppointment = () => {
        const newAppointment = {
            name,
            surName,
            password,
            birthdate,
            phoneNumber,
            address
        };

        axios.post(`https://${host}:${port}/addAppointment`, newAppointment)
            .then(res => {
                if (res.data.status === "ok") {
                    alert("Appointment added successfully.");
                    modalfunc(); // Modalı kapat
                } else {
                    alert("An error occurred while adding the appointment.");
                }
            })
            .catch(err => {
                console.error("Error adding appointment:", err);
                alert("An error occurred while adding the appointment.");
            });
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={() => modalfunc()}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={() => modalfunc()}>&times;</button>
                <h2>Randevu Oluştur</h2>
                <input className='login-input' type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
                <input className='login-input' type="text" placeholder='SurName' onChange={e => setSurName(e.target.value)} />
                <input className='login-input' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <input className='login-input' type="date" placeholder='Birthdate' onChange={e => setBirthdate(e.target.value)} />
                <input className='login-input' type="tel" placeholder='Phone Number' onChange={e => setPhoneNumber(e.target.value)} />
                <input className='login-input' type="text" placeholder='Address' onChange={e => setAddress(e.target.value)} />

                <button className='login-button' onClick={handleAddAppointment}>Add</button>
            </div>
        </div >
    );
}

export default AddAppointmentModal;
