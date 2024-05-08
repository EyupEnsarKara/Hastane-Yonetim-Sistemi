import React from 'react';
import '../css/NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a onClick={() => (navigate('/'))} className="navbar-logo">
                    <img src="src/assets/heart-attack.png" width="60" height="60" alt="Image not found." />
                </a>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a onClick={() => (navigate('/login'))} className="navbar-link">Login</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => (navigate('/register'))} className="navbar-link">Sign up</a>
                    </li>
                    {/* Daha fazla link eklemek için buraya ekleyebilirsiniz */}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
