import React, { useState, useEffect } from 'react'
import DoctorDashboard from './Doctor/DoctorDashboard';
import DoctorAppointments from './Doctor/DoctorAppointments';
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
            case '/doctor/appointments':

                setElement(<DoctorAppointments />);

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