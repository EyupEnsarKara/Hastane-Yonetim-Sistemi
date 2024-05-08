import React, { useState } from 'react';
import '../css/LoginContainer.css';

function LoginContainer() {
    const [active, setActive] = useState(0);
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
                <button className={`login-type-selector ${active === 0 ? 'active' : ''}`} onClick={() => updateActive(0)}>Patient</button>
                <button className={`login-type-selector ${active === 1 ? 'active' : ''}`} onClick={() => updateActive(1)}>Doctor</button>
                <button className={`login-type-selector ${active === 2 ? 'active' : ''}`} onClick={() => updateActive(2)}>Admin</button>
                <div className="slider" style={{ transform: `translateX(${active * 100}%)` }}></div>
            </div>
            <input className='login-input' type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input className='login-input' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='login-button' onClick={loginCheck}>Click</button>
        </div>
    );
}

export default LoginContainer;