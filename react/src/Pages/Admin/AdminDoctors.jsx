import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import AddPatientModal from '../../Components/AddPatientModal';
import AddDoctorModal from '../../Components/AddDoctorModal';
import { host, port } from '../../../config.json';

//icon importları
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';
import EditDoctorModal from '../../Components/EditDoctorModal';

function AdminDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [editModalState, setEditModalState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [selectedDoctor, setSelectedDoctor] = useState();

    useEffect(() => {
        axios.get(`https://${host}:${port}/getDoctors`).then(res => {
            setDoctors(res.data.result);
        })
    }, [modalState, editModalState])






    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = doctors.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(doctors.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const toggleModalState = () => {
        setModalState(!modalState);
    }
    const toggleEditModalState = () => {
        setEditModalState(!editModalState);
    }



    return (
        <Dashboard>


            <div className="container">
                <h2>Doctors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Uzmanlık alanı</th>
                            <th>Çalıştığı Hastane</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(doctor => (
                            <tr key={doctor.personID}>
                                <td>{doctor.name}</td>
                                <td>{doctor.surname}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.hospital}</td>
                                <td>
                                    <CiEdit className='icon' onClick={() => {
                                        const tempDoc = {
                                            id: doctor.personID,
                                            name: doctor.name,
                                            surname: doctor.surname,
                                            password: doctor.password,
                                            specialization: doctor.specialization,
                                            hospital: doctor.hospital
                                        };
                                        setSelectedDoctor(tempDoc);
                                        toggleEditModalState();
                                    }} />
                                    <MdDelete className='icon' />
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
                <button onClick={() => (setModalState(!modalState))}>Add Doctor</button>
                {modalState && (<AddDoctorModal modalfunc={toggleModalState} />)}
                {editModalState && (<EditDoctorModal modalfunc={toggleEditModalState} doctor={selectedDoctor} />)}

            </div>
        </Dashboard>
    );
}

export default AdminDoctors