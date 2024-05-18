import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axiosInstance from '../axiosInstance';
import axios from 'axios';
import { goFileUploadFolderId } from '../../config.json'

function AddMedicalReportModal({ modalfunc }) {
    const [doctorId, setDoctorId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [image, setimage] = useState();
    const [uploadedFileUrl, setUploadedFileUrl] = useState();
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/getDoctors`)
            .then(res => {
                if (res.data.result) {
                    setDoctors(res.data.result);
                } else {
                    alert("An error occurred while fetching doctors.");
                }
            })
            .catch(err => {
                console.error("Error fetching doctors:", err);
                alert("An error occurred while fetching doctors.");
            });

        axiosInstance.get(`/getPatients`)
            .then(res => {
                if (res.data.result) {
                    setPatients(res.data.result);
                } else {
                    alert("An error occurred while fetching patients.");
                }
            })
            .catch(err => {
                console.error("Error fetching patients:", err);
                alert("An error occurred while fetching patients.");
            });

    }, []);

    const doctorOptions = doctors.map((doctor) => ({
        value: doctor.doctorID,
        label: doctor.name,
    }));

    const patientOptions = patients.map((patient) => ({
        value: patient.patientID,
        label: patient.name,
    }));

    const handlePatientChange = (selectedOption) => {
        setPatientId(selectedOption.value);
    };

    const handleDoctorChange = (selectedOption) => {
        setDoctorId(selectedOption.value);
    };

    const uploadFileToGoFile = (item) => {
        setUploading(true); // Set uploading to true when the upload starts
        const formData = new FormData();
        formData.append("file", item);
        formData.append("folderId", goFileUploadFolderId);

        axios.post('https://store10.gofile.io/contents/uploadfile', formData, {
            headers: {
                'Authorization': 'Bearer KOHEmxwonfmF3LtUJigY9aiePLis53jw',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                const { fileId, fileName } = response.data.data;
                setUploadedFileUrl(`https://store5.gofile.io/download/web/${fileId}/thumb_${fileName}`);
                setUploading(false); // Set uploading to false when the upload is done
            })
            .catch(error => {
                console.error(error);
                setUploading(false); // Set uploading to false if an error occurs
            });
    }

    let count = 0;

    const handleAddReport = () => {
        if (!uploadedFileUrl) {
            count++;
            if (count === 1) { // Fix condition to check equality
                alert("Resim dosyası bozuk yada okunamaz halde tekrar deneyiniz.");
                modalfunc();
            }
            return; // Prevent further execution if the file URL is not set
        }

        const axiosData = {
            'patientID': patientId,
            'doctorID': doctorId,
            'reportUrl': uploadedFileUrl
        }

        axiosInstance.post('/addMedicalReport', axiosData).then(res => {
            if (res.data.status) {
                alert("Medical Report successfully added.");
                modalfunc();
            }
        }).catch(err => {
            console.log(err);
            alert(err);
            modalfunc();
        });
    }

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <h2>Add Medical Report</h2>
                <label htmlFor="doctorId">Select Doctor:</label>
                <Select
                    id="doctorId"
                    options={doctorOptions}
                    onChange={handleDoctorChange}
                    placeholder="Select a doctor"
                />

                <label htmlFor="patientId">Select Patient:</label>
                <Select
                    id="patientId"
                    options={patientOptions}
                    onChange={handlePatientChange}
                    placeholder="Select a patient"
                />
                <label htmlFor="img">Image:</label>
                <input
                    type="file"
                    id="img"
                    accept="image/*"
                    onChange={(e) => {
                        uploadFileToGoFile(e.target.files[0]);
                    }}
                />
                <button
                    className="login-button"
                    onClick={handleAddReport}
                    disabled={uploading} // Disable button while uploading
                    style={{ backgroundColor: uploading ? 'red' : 'initial' }} // Change button color
                >
                    {uploading ? 'Uploading...' : 'Add'}
                </button>
            </div>
        </div>
    );
}

export default AddMedicalReportModal;
