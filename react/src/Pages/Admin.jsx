import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AdminDashboard from './Admin/AdminDashboard'
import NotFound from './NotFound'
import AdminPatients from './Admin/AdminPatients';
function Admin() {
    const navigate = useNavigate();
    const location = useLocation();
    const [element, setElement] = useState((<AdminDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const user = localStorage.getItem('user');
        const userType = localStorage.getItem('userType');

        if (!user || userType !== 'admin') {
            navigate('/error'); // Doğru yönlendirme fonksiyonunu kullanmalısınız.
        }

        switch (location.pathname) {
            case '/admin':
                setElement(<AdminDashboard />)
                break;
            case '/admin/patients':
                console.log("patients");
                setElement(<AdminPatients />);
                break;
            case '/admin/doctors':
                console.log("doctors");
                setElement(<div>olduu2</div>);

                break;
            case '/admin/appointments':
                console.log("appointments");
                setElement(<div>olduu3</div>);

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

export default Admin