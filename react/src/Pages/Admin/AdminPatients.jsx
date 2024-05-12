import React, { useState, useEffect } from 'react'
import Dashboard from '../../Components/Dashboard'
import "../../css/AdminPatients.css"
import AddPatientModal from '../../Components/AddPatientModal';
import axios from 'axios';
import { host, port } from '../../../config.json';
import EditPatientModal from '../../Components/EditPatientModal';

//icon importları
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function AdminPatients() {

    const [patients, setPatients] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [editModalState, setEditModalState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [selectedPatient, setSelectedPatient] = useState();




    useEffect(() => {
        axios.get(`https://${host}:${port}/getPatients`).then(res => {

            setPatients(res.data.result);
        }).catch(err => console.log(err))
    }, [modalState])
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = patients.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(patients.length / itemsPerPage);

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
                <h2>Hasta Listesi</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Person ID</th>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Telefon Numarası</th>
                            <th>Doğum Tarihi</th>
                            <th>Cinsiyet</th>
                            <th>Hastalık Geçmişi</th>
                            <th>İşlemler</th>
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
                                    <CiEdit className='icon' onClick={() => {
                                        toggleEditModalState();
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
                <button onClick={() => (setModalState(!modalState))}>Hasta Ekle</button>
                {modalState && (<AddPatientModal modalfunc={toggleModalState} />)}
                {editModalState && (<EditPatientModal modalfunc={toggleEditModalState} patient={selectedPatient} />)}
            </div>
        </Dashboard>
    );
}
export default AdminPatients