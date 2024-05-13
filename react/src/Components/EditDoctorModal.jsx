import React, { useEffect, useState } from 'react'
import { host, port } from '../../config.json';
import axios from 'axios';
import '../css/EditDoctorModal.css'
function EditDoctorModal({ doctor, modalfunc }) {
    const [editedDoctor, setEditedDoctor] = useState(doctor);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDoctor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = () => {
        axios.post(`https://${host}:${port}/editDoctor`, { editedDoctor }).then((res) => {


            alert("bilgiler başarıyla güncellendi.");
            modalfunc(); // Modalı kapat
        })
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={() => (modalfunc())}></div>
            <div className="modal-content">
                <span className="close" onClick={modalfunc}>&times;</span>
                <h2>Edit Doctor Information Id:${editedDoctor.id}</h2>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={editedDoctor.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    <input type="text" name="surname" value={editedDoctor.surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="text" name="password" value={editedDoctor.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Specialization:</label>
                    <input type="text" name="specialization" value={editedDoctor.specialization} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Hospital:</label>
                    <input type="text" name="hospital" value={editedDoctor.hospital} onChange={handleChange} />
                </div>

                <button onClick={handleSubmit}>Güncelle</button>
            </div>
        </div>
    );
}

export default EditDoctorModal