import React, { useState } from 'react'

function ViewReportModal({ modalfunc }) {
    const [loading, setloading] = useState(true);



    return (
        <div className="modal">
            <div className="modal-overlay" onClick={modalfunc}></div>
            <div className="modal-content">
                <button className="close-modal" onClick={modalfunc}>✖</button>
                <img src="https://store5.gofile.io/download/web/204fb917-d064-48f3-a870-8738c2b1b889/thumb_image (4).png" alt="ss" onLoad={() => (setloading(false))} />
                {loading && <img src="" alt="yükleniyo" />}



            </div>
        </div>
    );
}

export default ViewReportModal