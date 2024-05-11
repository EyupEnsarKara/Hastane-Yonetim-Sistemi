import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AdminDashboard from './Admin/AdminDashboard'

function Admin() {
    const navigation = useNavigate();
    const [element, setElement] = useState((<AdminDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const user = localStorage.getItem('user');
        const userType = localStorage.getItem('userType');
        if (!user || userType != 'admin') navigation('/error');
    })


    return (
        <div>
            {element}

        </div>
    )
}

export default Admin