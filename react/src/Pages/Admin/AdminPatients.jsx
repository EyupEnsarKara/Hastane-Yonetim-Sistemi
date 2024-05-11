import React, { useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import "../../css/AdminPatients.css"
import AddPatientModal from '../../Components/AddPatientModal';


//icon importları
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function AdminPatients() {

    const hastaListesi = [
        { id: 1, ad: "Ahmet", soyad: "Yılmaz", dogumTarihi: "1990-05-15", cinsiyet: "Erkek", hastalikGecmisi: "Hipertansiyon" },
        { id: 2, ad: "Ayşe", soyad: "Kara", dogumTarihi: "1985-10-20", cinsiyet: "Kadın", hastalikGecmisi: "Diyabet" },
        { id: 3, ad: "Mehmet", soyad: "Demir", dogumTarihi: "1978-03-08", cinsiyet: "Erkek", hastalikGecmisi: "Kolon Kanseri" },
        { id: 4, ad: "Ali", soyad: "Can", dogumTarihi: "1992-07-25", cinsiyet: "Erkek", hastalikGecmisi: "Astım" },
        { id: 5, ad: "Fatma", soyad: "Yıldız", dogumTarihi: "1980-12-10", cinsiyet: "Kadın", hastalikGecmisi: "Kalp Hastalığı" },
        { id: 6, ad: "Ayhan", soyad: "Koç", dogumTarihi: "1995-02-18", cinsiyet: "Erkek", hastalikGecmisi: "Şeker Hastalığı" },
        { id: 7, ad: "Zeynep", soyad: "Aydın", dogumTarihi: "1988-09-05", cinsiyet: "Kadın", hastalikGecmisi: "Tiroid Hastalığı" },
        { id: 8, ad: "Murat", soyad: "Şahin", dogumTarihi: "1975-06-30", cinsiyet: "Erkek", hastalikGecmisi: "Romatoid Artrit" },
        { id: 9, ad: "Gizem", soyad: "Yılmaz", dogumTarihi: "1993-11-12", cinsiyet: "Kadın", hastalikGecmisi: "Multipl Skleroz" },
        { id: 10, ad: "Emre", soyad: "Kaya", dogumTarihi: "1983-04-22", cinsiyet: "Erkek", hastalikGecmisi: "Alzheimer" },
        { id: 11, ad: "John", soyad: "Doe", dogumTarihi: "1998-09-01", cinsiyet: "Erkek", hastalikGecmisi: "Alerji" },
        { id: 12, ad: "Jane", soyad: "Smith", dogumTarihi: "1995-12-25", cinsiyet: "Kadın", hastalikGecmisi: "Migren" },
        { id: 13, ad: "Michael", soyad: "Johnson", dogumTarihi: "1987-07-10", cinsiyet: "Erkek", hastalikGecmisi: "Depresyon" },
        { id: 14, ad: "Emily", soyad: "Brown", dogumTarihi: "1992-03-18", cinsiyet: "Kadın", hastalikGecmisi: "Anksiyete" },
        { id: 15, ad: "David", soyad: "Wilson", dogumTarihi: "1989-06-05", cinsiyet: "Erkek", hastalikGecmisi: "Obezite" },
        { id: 16, ad: "Olivia", soyad: "Taylor", dogumTarihi: "1994-11-12", cinsiyet: "Kadın", hastalikGecmisi: "Asthma" },
        { id: 17, ad: "Daniel", soyad: "Anderson", dogumTarihi: "1986-04-22", cinsiyet: "Erkek", hastalikGecmisi: "Şeker Hastalığı" },
        { id: 18, ad: "Sophia", soyad: "Thomas", dogumTarihi: "1991-08-15", cinsiyet: "Kadın", hastalikGecmisi: "Tiroid Hastalığı" },
        { id: 19, ad: "James", soyad: "Harris", dogumTarihi: "1984-02-28", cinsiyet: "Erkek", hastalikGecmisi: "Romatoid Artrit" },
        { id: 20, ad: "Ava", soyad: "Clark", dogumTarihi: "1997-10-07", cinsiyet: "Kadın", hastalikGecmisi: "Multipl Skleroz" },
        { id: 21, ad: "William", soyad: "Lewis", dogumTarihi: "1983-05-14", cinsiyet: "Erkek", hastalikGecmisi: "Alzheimer" },
        { id: 22, ad: "Isabella", soyad: "Walker", dogumTarihi: "1996-01-30", cinsiyet: "Kadın", hastalikGecmisi: "Hipertansiyon" },
        { id: 23, ad: "Benjamin", soyad: "Hall", dogumTarihi: "1988-09-23", cinsiyet: "Erkek", hastalikGecmisi: "Diyabet" },
        { id: 24, ad: "Mia", soyad: "Young", dogumTarihi: "1993-07-16", cinsiyet: "Kadın", hastalikGecmisi: "Kolon Kanseri" },
        { id: 25, ad: "Alexander", soyad: "Allen", dogumTarihi: "1985-12-03", cinsiyet: "Erkek", hastalikGecmisi: "Astım" },
        { id: 26, ad: "Charlotte", soyad: "King", dogumTarihi: "1990-02-20", cinsiyet: "Kadın", hastalikGecmisi: "Kalp Hastalığı" },
        { id: 27, ad: "Henry", soyad: "Scott", dogumTarihi: "1982-11-08", cinsiyet: "Erkek", hastalikGecmisi: "Şeker Hastalığı" },
        { id: 28, ad: "Amelia", soyad: "Baker", dogumTarihi: "1995-06-25", cinsiyet: "Kadın", hastalikGecmisi: "Tiroid Hastalığı" },
        { id: 29, ad: "Sebastian", soyad: "Ward", dogumTarihi: "1987-03-12", cinsiyet: "Erkek", hastalikGecmisi: "Romatoid Artrit" },
        { id: 30, ad: "Evelyn", soyad: "Lopez", dogumTarihi: "1992-09-29", cinsiyet: "Kadın", hastalikGecmisi: "Multipl Skleroz" },
        { id: 31, ad: "Jack", soyad: "Green", dogumTarihi: "1984-04-16", cinsiyet: "Erkek", hastalikGecmisi: "Alzheimer" },
        { id: 32, ad: "Grace", soyad: "Adams", dogumTarihi: "1991-01-03", cinsiyet: "Kadın", hastalikGecmisi: "Hipertansiyon" },
        { id: 33, ad: "Owen", soyad: "Campbell", dogumTarihi: "1986-08-20", cinsiyet: "Erkek", hastalikGecmisi: "Diyabet" },
        { id: 34, ad: "Lily", soyad: "Hill", dogumTarihi: "1993-05-07", cinsiyet: "Kadın", hastalikGecmisi: "Kolon Kanseri" },
        { id: 35, ad: "Daniel", soyad: "Russell", dogumTarihi: "1985-12-24", cinsiyet: "Erkek", hastalikGecmisi: "Astım" },
        { id: 36, ad: "Zoe", soyad: "Cook", dogumTarihi: "1990-02-10", cinsiyet: "Kadın", hastalikGecmisi: "Kalp Hastalığı" },
        { id: 37, ad: "Matthew", soyad: "Parker", dogumTarihi: "1982-09-27", cinsiyet: "Erkek", hastalikGecmisi: "Şeker Hastalığı" },
        { id: 38, ad: "Chloe", soyad: "Turner", dogumTarihi: "1995-06-14", cinsiyet: "Kadın", hastalikGecmisi: "Tiroid Hastalığı" },
        { id: 39, ad: "Samuel", soyad: "Carter", dogumTarihi: "1987-03-01", cinsiyet: "Erkek", hastalikGecmisi: "Romatoid Artrit" },
        { id: 40, ad: "Penelope", soyad: "James", dogumTarihi: "1992-09-18", cinsiyet: "Kadın", hastalikGecmisi: "Multipl Skleroz" },
        { id: 41, ad: "Joseph", soyad: "Phillips", dogumTarihi: "1984-04-05", cinsiyet: "Erkek", hastalikGecmisi: "Alzheimer" },
        { id: 42, ad: "Avery", soyad: "Morris", dogumTarihi: "1991-01-22", cinsiyet: "Kadın", hastalikGecmisi: "Hipertansiyon" },
        { id: 43, ad: "Leah", soyad: "Watson", dogumTarihi: "1986-08-09", cinsiyet: "Kadın", hastalikGecmisi: "Diyabet" },
        { id: 44, ad: "Gabriel", soyad: "Brooks", dogumTarihi: "1993-05-26", cinsiyet: "Erkek", hastalikGecmisi: "Kolon Kanseri" },
    ];
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [dogumTarihi, setDogumTarihi] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [hastalikGecmisi, setHastalikGecmisi] = useState('');
    const [modalState, setModalState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = hastaListesi.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(hastaListesi.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const toggleModalState = () => {
        setModalState(!modalState);
    }


    const handleEkle = () => {
        if (!ad || !soyad || !dogumTarihi || !cinsiyet || !hastalikGecmisi) return;
        onHastaEkle({ ad, soyad, dogumTarihi, cinsiyet, hastalikGecmisi });
        setAd('');
        setSoyad('');
        setDogumTarihi('');
        setCinsiyet('');
        setHastalikGecmisi('');
    };

    const handleSil = (id) => {

    };

    const handleDuzenle = (id) => {
        onHastaDuzenle(id);
    };


    return (
        <Dashboard>


            <div className="container">
                <h2>Hasta Listesi</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Doğum Tarihi</th>
                            <th>Cinsiyet</th>
                            <th>Hastalık Geçmişi</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(hasta => (
                            <tr key={hasta.id}>
                                <td>{hasta.ad}</td>
                                <td>{hasta.soyad}</td>
                                <td>{hasta.dogumTarihi}</td>
                                <td>{hasta.cinsiyet}</td>
                                <td>{hasta.hastalikGecmisi}</td>
                                <td>
                                    <CiEdit className='icon' />
                                    <MdDelete className='icon' />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <div>
                    {Array(totalPages).fill().map((_, index) => (
                        <button key={index + 1} id={index + 1} onClick={handleClick}>
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button onClick={() => (setModalState(!modalState))}>Hasta Ekle</button>
                {modalState && (<AddPatientModal modalfunc={toggleModalState} />)}

            </div>
        </Dashboard>
    );
}
export default AdminPatients