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

                <button className="submit-button" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
}

export default EditMedicalReportModal;
