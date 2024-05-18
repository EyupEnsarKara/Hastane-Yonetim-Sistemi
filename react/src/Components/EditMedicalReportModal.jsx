import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';


function EditMedicalReportModal({ report, modalfunc }) {
    const [editedReport, setEditedReport] = useState(report);
    const [loading, setloading] = useState(true);
    console.log(editedReport)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedReporteditedReport(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axiosInstance.post(`/editMedicalReport`, { editedReport }).then((res) => {
            alert("Bilgiler başarıyla güncellendi.");
            modalfunc(); // Modalı kapat
        });
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={() => modalfunc()}></div>
            <div className="modal-content">
                <span className="close" onClick={modalfunc}>×</span>
                <h2>Edit Report Information - ID: {editedReport.id}</h2>

                <div className="form-group">
                    <label>Patient Name:</label>
                    <span>{editedReport.reportPatientName}</span>
                </div>
                <div className="form-group">
                    <label>Doctor Name:</label>
                    <span>{editedReport.reportDoctorName}</span>
                </div>
                <div className="form-group">
                    <label>Creation Date:</label>
                    <span>{editedReport.reportDate}</span>
                </div>
                <div className="form-group">
                    <label>Report Url:</label>
                    <img src={editedReport.reportUrl} alt='Not Found' onLoad={() => (setloading(false))} onError={() => (setloading(false))} />
                    {loading && <img src='' alt='Yükleniyo' />}

                </div>




                <button className="submit-button" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
}

export default EditMedicalReportModal;
