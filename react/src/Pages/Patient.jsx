import React, { useState, useEffect } from 'react'
import PatientDashboard from './Patient/PatientDashboard';
import { useLocation, useNavigate } from 'react-router-dom';


function Patient() {
    const navigate = useNavigate();
    const location = useLocation();
    const [element, setElement] = useState((<PatientDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const user = localStorage.getItem('user');
        const userType = localStorage.getItem('userType');
        if (userType != 'patient') navigate('/error');
        switch (location.pathname) {
            case '/patient':

                setElement(<PatientDashboard />);
                break;
            case '/patient/appointments':

                setElement(<div>patient appointments</div>);

                break;
            case '/patient/results':

                setElement(<div>patient results</div>);

                break;
            default:
                break;
        }
    }, [location.pathname, navigate]);

    return (
        <div>
            {element}

        </div>
    )
}

export default Patient