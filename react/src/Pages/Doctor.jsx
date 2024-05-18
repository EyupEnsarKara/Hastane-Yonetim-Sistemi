import React, { useState, useEffect } from 'react'
import DoctorDashboard from './Doctor/DoctorDashboard';
import { useLocation, useNavigate } from 'react-router-dom';

function Doctor() {
    const navigation = useNavigate();
    const location = useLocation();
    const [element, setElement] = useState((<DoctorDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const userType = localStorage.getItem('userType');
        if (userType != 'doctor') navigation('/error');

        switch (location.pathname) {
            case '/doctor':
                setElement(<DoctorDashboard />);
                break;
        }
    }, [location.pathname, navigation])

    return (
        <div>
            {element}

        </div>
    )
}

export default Doctor