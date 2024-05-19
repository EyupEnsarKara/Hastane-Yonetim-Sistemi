import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import { BiShow } from "react-icons/bi";
import '../css/PatientsModal.css';
import AddMedicalReportModal from './AddMedicalReportModal';
function PatientsModal({ modalfunc, patient }) {
    const doctorId = localStorage.getItem('specID');
    console.log(patient)
    const patientId = patient.patientID;
    const [medicalReports, setMedicalReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [addModalState, setAddModalState] = useState(false);

    useEffect(() => {
        axiosInstance.post('/getPatientMedicalReports', { 'patientId': patientId })
            .then((res) => {
                console.log(res.data)
                if (res.data.results.length > 0)
                    setMedicalReports(res.data.results);
            })
            .catch(err => console.log(err));




    }, [addModalState]);

    const toggleAddModalState = () => {
        console.log(
            "test"
        )
        setAddModalState(!addModalState);
    };



    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = medicalReports.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(medicalReports.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    console.log(doctorId)

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <table style={{ marginTop: '60px' }}>
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
                            report.doctorID == doctorId && (
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
                            )
                        ))}
                    </tbody>
                </table>
                <button onClick={toggleAddModalState}>Add Report</button>
                {addModalState && <AddMedicalReportModal modalfunc={toggleAddModalState} patient={patient} />}
            </div>
        </div>

    );
}

export default PatientsModal;
