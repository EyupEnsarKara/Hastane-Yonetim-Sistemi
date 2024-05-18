import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';


function EditMedicalReportModal({ report, modalfunc }) {
    const [editedReport, setEditedReport] = useState(report);

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
                    <label>Report Url:</label>
                    <input type="text" name="name" value={editedReport.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Patient Name:</label>
                    <input type="text" name="surname" value={editedReport.surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Doctor Name:</label>
                    <span>{editedReport.}</span>
                </div>
                <div className="form-group">
                    <label>Creation Date:</label>
                    <span>{editedReport.reportDate}</span>
                </div>




                <button className="submit-button" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
}

export default EditMedicalReportModal;
