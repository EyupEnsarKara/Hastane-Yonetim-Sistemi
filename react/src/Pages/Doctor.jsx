import React from 'react'
import DoctorDashboard from './Doctor/DoctorDashboard';

function Doctor() {
    const navigation = useNavigate();
    const [element, setElement] = useState((<DoctorDashboard />));

    //kullanıcı filtresi
    useEffect(() => {
        const user = localStorage.getItem('user');
        const userType = localStorage.getItem('userType');
        if (!user || userType != 'doctor') navigation('/error');
    })

    return (
        <div>
            {element}

        </div>
    )
}

export default Doctor