import React from 'react'
import axios from 'axios'
import { host, port } from '../../config.json'


function RegisterPage() {
    let name = '';
    let surName = '';
    let birthDate = '';
    let gender = '';
    let phoneNumber = '';
    let address = '';
    let password = '';
    const addPatient = () => {
        axios.post(`https://${host}:${port}/addPatient`, {
            name: name,
            birthDate: birthDate,
            surName: surName,
            password: password,
            gender: gender,
            phoneNumber: phoneNumber,
            address: address
        });
    }

    return (
        <div className='loginDiv'>
            <input type="text" placeholder='Name' className='textInput' onChange={(value) => (name = value.target.value)} />
            <input type="text" placeholder='SurName' className='textInput' onChange={(value) => (surName = value.target.value)} />
            <input type="password" placeholder='password' className='textInput' onChange={(value) => (password = value.target.value)} />
            <input type="date" placeholder='Birthdate' className='textInput' onChange={(value) => (birthDate = value.target.value)} />
            <select className='textInput' onChange={(value) => (gender = value.target.value)}>
                <option value=''>Select Gender</option>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
            </select>
            <input type="tel" placeholder='Phone Number' className='textInput' onChange={(value) => (phoneNumber = value.target.value)} />
            <input type="text" placeholder='Address' className='textInput-adress' onChange={(value) => (address = value.target.value)} />

            <button className='addButton' onClick={addPatient}>Login</button>


        </div>
    )
}

export default RegisterPage