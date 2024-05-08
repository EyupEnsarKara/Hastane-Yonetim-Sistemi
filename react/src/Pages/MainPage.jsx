import React from 'react'
import '../css/MainPage.css'
import { useNavigate } from 'react-router-dom'


function MainPage() {
    const navigate = useNavigate();
    return (
        <div className='MainPage'>

            <h1 className='MainPage-title'>Welcome to the Main Page</h1>

        </div>
    )
}

export default MainPage