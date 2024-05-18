import React, { useState } from 'react'

function ViewReportModal({ modalfunc, report }) {
    const [loading, setloading] = useState(true);
    const { reportUrl } = report
    console.log(reportUrl)


    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <img src={reportUrl} alt="ss" onLoad={() => (setloading(false))} />
                {loading && <img src="" alt="yükleniyo" />}



            </div>
        </div>
    );
}

export default ViewReportModal