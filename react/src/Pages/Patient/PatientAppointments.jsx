import React, { useState, useEffect } from 'react';
import Dashboard from '../../Components/Dashboard';
import "../../css/AdminPatients.css";
import axiosInstance from '../../axiosInstance'



function PatientAppointment() {
    const [myAppointments, setMyAppointments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        axiosInstance.get(`/getMyAppointments`)
            .then(res => {
                setMyAppointments(res.data.result);
            })
            .catch(err => console.log(err))
    }, [])

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = myAppointments.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(myAppointments.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };



    return (
        <Dashboard>
            <div className="container">
                <h2>Randevularım</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Randevu Bölümü</th>
                            <th>Doctor Adı</th>
                            <th>Randevu Tarihi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(hasta => (
                            <tr key={hasta.personID}>
                                <td>{hasta.personID}</td>
                                <td>{hasta.name}</td>
                                <td>{hasta.surname}</td>
                                <td>{hasta.phoneNumber}</td>
                                <td>{new Date(hasta.birthDate).toLocaleDateString()}</td>
                                <td>{hasta.gender}</td>
                                <td>{hasta.address}</td>
                                <td className='iconstab'>
                                    <AiOutlineEdit className='icon' onClick={() => {
                                        const pati = {
                                            id: hasta.personID,
                                            name: hasta.name,
                                            surname: hasta.surname,
                                            password: hasta.password,
                                            phoneNumber: hasta.phoneNumber,
                                            birthDate: new Date(new Date(hasta.birthDate).getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                                            gender: hasta.gender,
                                            address: hasta.address
                                        };
                                        setSelectedPatient(pati);
                                        toggleEditModalState();
                                    }} />
                                    <MdDelete className='icon' onClick={() => handleDelete(hasta.patientID)} />
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
                <button onClick={toggleModalState}>Hasta Ekle</button>
                {modalState && <AddPatientModal modalfunc={toggleModalState} />}
                {editModalState && <EditPatientModal modalfunc={toggleEditModalState} patient={selectedPatient} />}
            </div>
        </Dashboard>
    );
}

export default AdminPatients;
