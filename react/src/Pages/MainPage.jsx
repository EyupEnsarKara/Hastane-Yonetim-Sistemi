import React from 'react'
import '../css/MainPage.css'
import { useNavigate } from 'react-router-dom'
import LoginContainer from '../Components/LoginContainer';

function MainPage() {
    const navigate = useNavigate();
    return (
        <div className='MainPage'>
            <div className="content">
                <img src="src/assets/heart-attack.png" width="100" height="100" alt="Image is not found" />
            </div>
            <div className="MainPage-desc">
                <p>Hospital</p>
            </div>
            <LoginContainer />



        </div>
    )
}

export default MainPage