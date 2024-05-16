import React from 'react'

function AddMedicalReport({ modalfunc }) {


    const addPatient = () => {

    };




    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <h2>Hasta Ekle</h2>

            </div>
        </div>
    );
}

export default AddMedicalReport