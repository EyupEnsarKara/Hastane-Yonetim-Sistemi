import React from 'react'
import '../css/LoginPage.css'

function LoginPage() {
    return (
        <div className='loginDiv'>
            <input type="text" placeholder='Name' className='textInput' />
            <input type="text" placeholder='SurName' className='textInput' />
            <input type="date" placeholder='Birthdate' className='textInput' />
            <input type="text" placeholder='Gender' className='textInput' />
            <select className='textInput'>
                <option value=''>Select Gender</option>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
            </select>

        </div>
    )
}

export default LoginPage