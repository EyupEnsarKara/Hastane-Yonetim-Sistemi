import React from 'react'
import '../css/LoginPage.css'
import axios from 'axios'

function LoginPage() {

    let name = '';
    let surName = '';
    let birthDate = '';
    let gender = '';
    let phoneNumber = '';
    let adress = '';
    const logInfos = () => {
        console.log(name, surName, birthDate, gender, phoneNumber, adress)

    }
    const addPatient = () => {
        axios.post('http://localhost:4444/addPatient', {
            name: name,
            surName: surName,
            birthDate: birthDate,
            gender: gender,
            phoneNumber: phoneNumber,
            adress: adress
        });
    }


    return (
        <div className='loginDiv'>
            <input type="text" placeholder='Name' className='textInput' onChange={(value) => (name = value.target.value)} />
            <input type="text" placeholder='SurName' className='textInput' onChange={(value) => (surName = value.target.value)} />
            <input type="date" placeholder='Birthdate' className='textInput' onChange={(value) => (birthDate = value.target.value)} />
            <select className='textInput' onChange={(value) => (gender = value.target.value)}>
                <option value=''>Select Gender</option>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
            </select>
            <input type="tel" placeholder='Phone Number' className='textInput' onChange={(value) => (phoneNumber = value.target.value)} />
            <input type="text" placeholder='Adress' className='textInput-adress' onChange={(value) => (adress = value.target.value)} />

            <button className='addButton' onClick={addPatient}>Login</button>


        </div>
    )
}

export default LoginPage