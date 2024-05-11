import React, { useState, useEffect } from 'react'
import PatientDashboard from './Patient/PatientDashboard';
import { useNavigate } from 'react-router-dom';


function Patient() {
    const navigation = useNavigate();

    const [element, setElement] = useState((<PatientDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const user = localStorage.getItem('user');
        const userType = localStorage.getItem('userType');
        if (!user || userType != 'patient') navigation('/error');
    })

    return (
        <div>
            {element}

        </div>
    )
}

export default Patient