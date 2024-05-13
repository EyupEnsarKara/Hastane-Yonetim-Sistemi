import React, { useState } from 'react';
import '../css/EditPatientModal.css';
import { host, port } from '../../config.json';
import axios from 'axios';

function EditPatientModal({ patient, modalfunc }) {
    const [editedPatient, setEditedPatient] = useState(patient);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPatient(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = () => {
        console.log(editedPatient)
        axios.post(`https://${host}:${port}/editPatient`, { editedPatient }).then((res) => {


            alert("bilgiler başarıyla güncellendi.");
            modalfunc(); // Modalı kapat
        })
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={() => (modalfunc())}></div>
            <div className="modal-content">
                <span className="close" onClick={modalfunc}>&times;</span>
                <h2>Edit Patient Information Id:${editedPatient.id}</h2>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={editedPatient.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    <input type="text" name="surname" value={editedPatient.surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="text" name="password" value={editedPatient.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Birth Date:</label>
                    <input type="date" name="birthDate" value={editedPatient.birthDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={editedPatient.gender} onChange={handleChange}>
                        <option value="male">Erkek</option>
                        <option value="female">Kadın</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={editedPatient.phoneNumber} onChange={handleChange} />
                </div>


                <div className="form-group">
                    <label>Hastalık Geçmişi:</label>
                    <textarea name="address" value={editedPatient.address} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Güncelle</button>
            </div>
        </div>
    );
}

export default EditPatientModal