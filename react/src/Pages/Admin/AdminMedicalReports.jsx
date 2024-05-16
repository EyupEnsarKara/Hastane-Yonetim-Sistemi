
import Dashboard from '../../Components/Dashboard'
import React, { useState, useEffect } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "../../css/AdminMedicalReports.css";
import axiosInstance from '../../axiosInstance';

//icons
import { BiShow } from "react-icons/bi";

function AdminMedicalReports() {
    const [medicalReports, setMedicalReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useState(() => {

        axiosInstance.post('/getMedicalReports')
            .then((res) => {
                console.log(res)
                setMedicalReports(res.data.result);
            })
            .catch(err => console.log(err))
    }, [])

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = medicalReports.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(medicalReports.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };


    return (
        <Dashboard>
            <div className="container">
                <h2>Medical Reports</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Report ID</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Report URL</th>
                            <th>Creation Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(report => (
                            <tr key={report.reportID}>
                                <td>{report.reportID}</td>
                                <td>{report.patientName + " " + report.patientSurname}</td>
                                <td>{report.doctorName + " " + report.doctorSurname}</td>
                                <td>
                                    <div>{report.reportUrl}</div>
                                    <BiShow className='icon' />
                                </td>
                                <td>{new Date(report.reportDate).toLocaleDateString()}</td>
                                <td>
                                    <button ><AiOutlineEdit /></button>
                                    <button><MdDelete /></button>
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

            </div>


        </Dashboard>
    )
}

export default AdminMedicalReports
