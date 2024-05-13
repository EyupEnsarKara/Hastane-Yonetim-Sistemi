import React, { useState } from 'react'
import '../css/AddPatientModal.css'
import axios from 'axios'
import { host, port } from '../../config.json'
function AddDoctorModal({ modalfunc }) {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [password, setPassword] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [hospital, setHospital] = useState('');



    const addPatient = () => {
        axios.post(`https://${host}:${port}/addDoctor`, {
            name: name,
            surName: surName,
            password: password,
            specialization: specialization,
            hospital: hospital
        }).then(res => {
            if (res.data.status == "ok") {
                alert("kullanıcı ekleme başarılı");
                modalfunc();
            }
        })
    };


    return (
        <div className="modal">
            <div className="overlay" onClick={() => (modalfunc())}></div>
            <div className="modal-content">
                <button className="close-modal">kap</button>
                <h2>Add Doctor</h2>
                <input className='login-input' type="text" placeholder='Name' onChange={(e) => (setName(e.target.value))} />
                <input className='login-input' type="text" placeholder='SurName' onChange={(e) => (setSurName(e.target.value))} />
                <input className='login-input' type="password" placeholder='Password' onChange={(e) => (setPassword(e.target.value))} />
                <input className='login-input' type="text" placeholder='Specialization' onChange={(e) => (setSpecialization(e.target.value))} />
                <input className='login-input' type="text" placeholder='Hospital' onChange={(e) => (setHospital(e.target.value))} />


                <button className='login-button' onClick={addPatient}>Click</button>
            </div>
        </div>
    )
}

export default AddDoctorModal