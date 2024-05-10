import React from 'react';
import '../css/NavBar.css';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <nav className="navbar">
            {currentPath !== '/' && (
                <div className="navbar-container">
                    <a onClick={() => (navigate('/'))} className="navbar-logo">

                        <img src="src/assets/heart-attack.png" width="60" height="60" alt="Image not found." />

                    </a>
                    <ul className="navbar-menu">
                        {currentPath.includes('/admin') && (
                            <>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/admin'))} className="navbar-link">Dashboard</a>
                                </li>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/admin/patients'))} className="navbar-link">Patients</a>
                                </li>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/admin/doctors'))} className="navbar-link">Doctors</a>
                                </li>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/admin/appointments'))} className="navbar-link">Appointments</a>
                                </li>
                            </>
                        )}

                        {userType === 'user' && (
                            <>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/profile'))} className="navbar-link">Profile</a>
                                </li>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/settings'))} className="navbar-link">Settings</a>
                                </li>
                            </>
                        )}

                        {!userType && (
                            <>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/login'))} className="navbar-link">Login</a>
                                </li>
                                <li className="navbar-item">
                                    <a onClick={() => (navigate('/register'))} className="navbar-link">Sign up</a>
                                </li>
                            </>
                        )}


                    </ul>
                </div>
            )}

        </nav>
    );
}

export default NavBar;


{/* <li className="navbar-item">
                        <a onClick={() => (navigate('/login'))} className="navbar-link">Login</a>
                    </li>
                    <li className="navbar-item">
                        <a onClick={() => (navigate('/register'))} className="navbar-link">Sign up</a>
                    </li> */}
