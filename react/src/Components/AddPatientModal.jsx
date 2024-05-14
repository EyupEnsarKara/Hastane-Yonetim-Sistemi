import React, { useState } from 'react';
import '../css/AddPatientModal.css';
import axios from 'axios';
import { host, port } from '../../config.json';
import Select from 'react-select';

function AddPatientModal({ modalfunc }) {
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
            if (res.data.status === "ok") {
                alert("Kullanıcı ekleme başarılı");
                modalfunc();
            }
        });
    };

    const genderOptions = [
        { value: 'woman', label: 'Woman' },
        { value: 'man', label: 'Man' },
    ];

    const handleGenderChange = (selectedOption) => {
        setGender(selectedOption ? selectedOption.value : '');
    };

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <h2>Hasta Ekle</h2>
                <div className="modal-body">
                    <input className='input-field' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='input-field' type="text" placeholder='SurName' value={surName} onChange={(e) => setSurName(e.target.value)} />
                    <input className='input-field' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className='input-field' type="date" placeholder='Birthdate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                    <Select
                        className='input-field'
                        value={genderOptions.find(option => option.value === gender)}
                        onChange={handleGenderChange}
                        options={genderOptions}
                        placeholder="Select Gender"
                        isClearable
                    />
                    <input className='input-field' type="tel" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input className='input-field' type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button className='submit-button' onClick={addPatient}>Ekle</button>
                </div>
            </div>
        </div>
    );
}

export default AddPatientModal;
