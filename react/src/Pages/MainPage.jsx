import React from 'react'
import '../css/MainPage.css'
import { useNavigate } from 'react-router-dom'


function MainPage() {
    const navigate = useNavigate();
    return (
        <div className='MainPage'>
            <div class="content">
                <img src="src/assets/heart-attack.png" width="100" height="100" alt="Image is not found" />
            </div>
            <div class="MainPage-desc">
                <p>Hospital</p>
            </div>

        </div>
    )
}

export default MainPage