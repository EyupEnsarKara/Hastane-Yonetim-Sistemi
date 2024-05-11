import React, { useState } from 'react'
import '../css/AddPatientModal.css'
import axios from 'axios'
import { host, port } from '../../config.json'

function AddPatientModal({ modalfunc }) {

    // if (status) {
    //     document.body.classList.add('active-modal');
    // }
    // else document.body.classList.remove('active-modal');
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');


    const addPatient = () => {
        axios.post(`https://${host}:${port}/addPatient`, {
            name: name,
            birthDate: birthDate,
            surName: surName,
            password: password,
            gender: gender,
            phoneNumber: phoneNumber,
            address: address
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
                <h2>Hasta Ekle</h2>
                <input className='login-input' type="text" placeholder='Name' onChange={(e) => (setName(e.target.value))} />
                <input className='login-input' type="text" placeholder='SurName' onChange={(e) => (setSurName(e.target.value))} />
                <input className='login-input' type="password" placeholder='Password' onChange={(e) => (setPassword(e.target.value))} />
                <input className='login-input' type="date" placeholder='Birthdate' onChange={(e) => (setBirthDate(e.target.value))} />
                <select className='login-input' onChange={(value) => (setGender(value.target.value))}>
                    <option value="">Select Gender</option>
                    <option value="woman">Woman</option>
                    <option value="man">Man</option>
                </select>
                <input className='login-input' type="tel" placeholder='Phone Number' onChange={(e) => (setPhoneNumber(e.target.value))} />
                <input className='login-input' type="text" placeholder='Address' onChange={(e) => (setAddress(e.target.value))} />

                <button className='login-button' onClick={addPatient}>Click</button>
            </div>
        </div>
    )
}

export default AddPatientModal