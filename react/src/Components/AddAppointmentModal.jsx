import React from 'react'
import '../css/AddAppointmentModal.css'


function AddAppointmentModal({ modalfunc }) {
    return (
        <div className="modal">
            <div className="overlay" onClick={() => (modalfunc())}></div>
            <div className="modal-content">
                <button className="close-modal">kap</button>
                <h2>Randevu Oluştur</h2>
                <input className='login-input' type="text" placeholder='Name' />
                <input className='login-input' type="text" placeholder='SurName' />
                <input className='login-input' type="password" placeholder='Password' />
                <input className='login-input' type="date" placeholder='Birthdate' />
                <input className='login-input' type="tel" placeholder='Phone Number' />
                <input className='login-input' type="text" placeholder='Address' />

                <button className='login-button'>Add</button>
            </div>
        </div >
    )
}

export default AddAppointmentModal