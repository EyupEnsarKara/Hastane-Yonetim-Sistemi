import React from 'react'
import '../css/MainPage.css'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    const navigate = useNavigate();
    return (
        <div className='MainPage'>
            <button>Login</button>
            <button onClick={() => (navigate('/register'))}>Register</button>
        </div>
    )
}

export default MainPage