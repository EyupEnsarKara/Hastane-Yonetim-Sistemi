import React, { useState } from 'react';
import '../css/LoginContainer.css';

function LoginContainer() {
    const [active, setActive] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const updateActive = (index) => {
        setActive(index);
    };

    const loginCheck = () => {
        // Giriş kontrolü burada gerçekleştirilebilir
        console.log("Phone Number:", phoneNumber);
        console.log("Password:", password);
    };

    return (
        <div className='loginDiv'>
            <div className='button-container'>
                <button className={`login-type-selector ${active === 'Patient' ? 'active' : ''}`} onClick={() => updateActive('Patient')}>Patient</button>
                <button className={`login-type-selector ${active === 'Doctor' ? 'active' : ''}`} onClick={() => updateActive('Doctor')}>Doctor</button>
                <button className={`login-type-selector ${active === 'Admin' ? 'active' : ''}`} onClick={() => updateActive('Admin')}>Admin</button>
            </div>
            <input className='login-input' type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input className='login-input' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='login-button' onClick={loginCheck}>Click</button>
        </div>
    );
}

export default LoginContainer;