import React from 'react'
import '../css/LoginPage.css'
import axios from 'axios'

function LoginPage() {


    let phoneNumber = '';
    let password = '';


    const addPatient = () => {
        axios.post('https://localhost:4444/addPatient', {
            name: name,
            birthDate: birthDate,
            surName: surName,
            gender: gender,
            phoneNumber: phoneNumber,
            address: address
        });
    }


    return (
        <div className='loginDiv'>
            <input type="tel" placeholder='Phone Number' className='textInput' onChange={(value) => (phoneNumber = value.target.value)} />
            <input type="password" placeholder='Password' className='textInput' onChange={(value) => (password = value.target.value)} />

            <button className='addButton' onClick={addPatient}>Login</button>


        </div>
    )
}

export default LoginPage