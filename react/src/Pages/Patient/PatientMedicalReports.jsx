import Dashboard from '../../Components/Dashboard';
import React, { useState, useEffect } from 'react';
//import "../../css/PatientMedicalReports.css";
import axiosInstance from '../../axiosInstance';

//icons
import { BiShow } from "react-icons/bi";
import ViewReportModal from '../../Components/ViewReportModal';
import AddMedicalReportModal from '../../Components/AddMedicalReportModal';

function PatientMedicalReports() {
    const [medicalReports, setMedicalReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [viewReportModalState, setViewReportModalState] = useState(false);
    const [selectedReport, setSelectedReport] = useState();
    const [addModalState, setAddModalState] = useState(false);

    useEffect(() => {
        const personID = localStorage.getItem('personID');
        axiosInstance.post('/getPatientMedicalReports', { 'id': personID })
            .then((res) => {
                console.log(res.data)
                if (res.data.results.length > 0)
                    setMedicalReports(res.data.results);
            })
            .catch(err => console.log(err));
    }, [addModalState]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = medicalReports.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(medicalReports.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const toggleViewReportState = () => {
        setViewReportModalState(!viewReportModalState);
    };
    const toggleAddModalState = () => {
        setAddModalState(!addModalState);
    };

    return (
        <Dashboard>
            <div className="container">
                <h2>Medical Reports</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Report ID</th>
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
                                <td>{report.name + " " + report.surname}</td>
                                <td>
                                    <div>{report.reportURL}</div>
                                    <BiShow className='icon' onClick={() => {
                                        const tempReport = {
                                            reportID: report.reportID,
                                            reportDoctorName: report.name + " " + report.surname,
                                            reportUrl: report.reportURL,
                                            reportDate: new Date(report.reportDate).toLocaleDateString()
                                        }
                                        setSelectedReport(tempReport);
                                        toggleViewReportState();
                                    }} />
                                </td>
                                <td>{new Date(report.reportDate).toLocaleDateString()}</td>
                                <td>
                                    <BiShow className='icon' onClick={() => {
                                        const tempReport = {
                                            reportID: report.reportID,
                                            reportDoctorName: report.doctorName + " " + report.doctorSurname,
                                            reportUrl: report.reportURL,
                                            reportDate: new Date(report.reportDate).toLocaleDateString()
                                        }
                                        setSelectedReport(tempReport);
                                        toggleViewReportState();
                                    }} />
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
                <button onClick={toggleAddModalState}>Add Report</button>
                {viewReportModalState && <ViewReportModal modalfunc={toggleViewReportState} report={selectedReport} />}
                {addModalState && <AddMedicalReportModal modalfunc={toggleAddModalState} />}
            </div>
        </Dashboard>
    )
}

export default PatientMedicalReports;
