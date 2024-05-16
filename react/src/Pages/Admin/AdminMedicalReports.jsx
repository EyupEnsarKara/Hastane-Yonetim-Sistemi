
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
    const [effect, updateEffect] = useState(false);


    useEffect(() => {

        axiosInstance.post('/getMedicalReports')
            .then((res) => {
                console.log(res)
                setMedicalReports(res.data.result);
            })
            .catch(err => console.log(err))
    }, [effect])

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = medicalReports.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(medicalReports.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const handleDelete = (id) => {
        axiosInstance.post(`/deleteMedicalReport`, { id: id })
            .then(res => {
                if (res.data.result && res.data.result.affectedRows > 0) {
                    alert('Rapor başarıyla silindi.');
                    updateEffect(!effect);
                } else if (res.data.message) {
                    alert(res.data.message.sqlMessage)
                }
            })

    }

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
                                    <AiOutlineEdit />
                                    <MdDelete className='icon' onClick={handleDelete(report.reportID)} />
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

import Dashboard from '../../Components/Dashboard'
import React, { useState, useEffect } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "../../css/AdminMedicalReports.css";
import axiosInstance from '../../axiosInstance';

//icons
import { BiShow } from "react-icons/bi";
import ViewReportModal from '../../Components/ViewReportModal';
import AddMedicalReport from '../../Components/AddMedicalReport';

function AdminMedicalReports() {
    const [medicalReports, setMedicalReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [viewReportModalState, setViewReportModalState] = useState(false);
    const [addReportModalState, setAddReportModalState] = useState(false);

    useState(() => {

        axiosInstance.post('/getMedicalReports')
            .then((res) => {
                console.log(res)
                setMedicalReports(res.data.result);
            })
            .catch(err => console.log(err))
    }, [ViewReportModal, addReportModalState])

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = medicalReports.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(medicalReports.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const toggleViewReportState = () => {
        setViewReportModalState(!viewReportModalState);
    }
    const toggleAddReportState = () => {
        setAddReportModalState(!viewReportModalState);
    }


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
                                    <BiShow className='icon' onClick={toggleViewReportState} />
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
            {viewReportModalState && <ViewReportModal modalfunc={toggleViewReportState} />}
            {addReportModalState && <AddMedicalReport modalfunc={setAddReportModalState} />}


        </Dashboard>
    )
}

export default AdminMedicalReports
