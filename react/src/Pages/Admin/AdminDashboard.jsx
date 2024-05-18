import React, { useState } from 'react'
import '../../css/AdminDashboard.css'
import Dashboard from '../../Components/Dashboard'
import axios from 'axios';
import { goFileUploadFolderId } from '../../../config.json'

function AdminDashboard() {
    const [count, setCount] = useState(0);

    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folderId", goFileUploadFolderId);

        axios.post('https://store10.gofile.io/contents/uploadfile', formData, {
            headers: {
                'Authorization': 'Bearer KOHEmxwonfmF3LtUJigY9aiePLis53jw',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleCheck = () => {


        axios.get('https://api.gofile.io/servers', {
            headers: {
                'Authorization': 'Bearer KOHEmxwonfmF3LtUJigY9aiePLis53jw'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }




    return (
        <Dashboard>
            <div className='dashboard-total-patients'>
                Total Patients = {count}
            </div>
            <button onClick={() => (setCount(count + 1))}>asd</button>
            <button onClick={() => {
                confirm("onayla beni");
            }}>asds</button>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Yükle</button>
            <button onClick={handleCheck}>test</button>
            {/* <img src="https://store5.gofile.io/download/web/ce93cb51-f4f1-4bcf-a810-01139ecf9bb1/thumb_image.png" alt="ssss" /> */}
        </Dashboard>
    )
}

export default AdminDashboard


{/* <div className='dashboard-total-patients'>
                Total Patients
            </div> */}