import React, { useState } from 'react'
import '../../css/AdminDashboard.css'
import Dashboard from '../../Components/Dashboard'

function AdminDashboard() {
    const [count, setCount] = useState(0);
    return (
        <Dashboard>
            <div className='dashboard-total-patients'>
                Total Patients = {count}
            </div>
            <button onClick={() => (setCount(count + 1))}>asd</button>
        </Dashboard>
    )
}

export default AdminDashboard


{/* <div className='dashboard-total-patients'>
                Total Patients
            </div> */}