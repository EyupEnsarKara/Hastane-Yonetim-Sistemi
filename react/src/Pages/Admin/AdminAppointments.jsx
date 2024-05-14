import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import axiosInstance from '../../axiosInstance';
import AddAppointmentModal from '../../Components/AddAppointmentModal';
import { host, port } from '../../../config.json';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function AdminAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [addModalState, setAddModalState] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/getAppointments`).then(res => {
            console.log(res.data);
            setAppointments(res.data.result);
        });
    }, [addModalState]);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const toggleAddModalState = () => {
        setAddModalState(!addModalState);
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = appointments.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(appointments.length / itemsPerPage);

    return (
        <Dashboard>
            <div className="container">
                <h2>Appointments</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(appointment => (
                            <tr key={appointment.appointmentID}>
                                <td>{appointment.doctorName} {appointment.doctorSurname}</td>
                                <td>{appointment.patientName} {appointment.patientSurname}</td>
                                <td>{new Date(appointment.appointmentDateTime).toLocaleDateString()}</td>
                                <td>
                                    <CiEdit />
                                    <MdDelete />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {Array(totalPages).fill().map((_, index) => (
                        <button key={index + 1} id={index + 1} onClick={handleClick}>
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button onClick={toggleAddModalState}>Add Appointment</button>
                {addModalState && <AddAppointmentModal modalfunc={toggleAddModalState} />}
            </div>
        </Dashboard>
    );
}

export default AdminAppointments;
