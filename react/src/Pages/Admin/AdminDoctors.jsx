import React, { useEffect, useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import AddPatientModal from '../../Components/AddPatientModal';
import AddDoctorModal from '../../Components/AddDoctorModal';
import { host, port } from '../../../config.json';

//icon importları
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';

function AdminDoctors() {
    const doktorListesi = [
        { id: 1, ad: "Ahmet", soyad: "Yılmaz", dogumTarihi: "1990-05-15", cinsiyet: "Erkek", uzmanlikAlani: "Hipertansiyon" },
        { id: 2, ad: "Ayşe", soyad: "Kara", dogumTarihi: "1985-10-20", cinsiyet: "Kadın", uzmanlikAlani: "Diyabet" },
        { id: 10, ad: "Mehmet", soyad: "Demir", dogumTarihi: "1992-08-25", cinsiyet: "Erkek", uzmanlikAlani: "Kardiyoloji" },
        { id: 3, ad: "Ali", soyad: "Can", dogumTarihi: "1995-03-12", cinsiyet: "Erkek", uzmanlikAlani: "Ortopedi" },
        { id: 4, ad: "Ayşe", soyad: "Yıldız", dogumTarihi: "1988-07-18", cinsiyet: "Kadın", uzmanlikAlani: "Göz Hastalıkları" },
        { id: 5, ad: "Mehmet", soyad: "Kaya", dogumTarihi: "1993-11-05", cinsiyet: "Erkek", uzmanlikAlani: "Kulak Burun Boğaz" },
        { id: 6, ad: "Fatma", soyad: "Şahin", dogumTarihi: "1991-09-30", cinsiyet: "Kadın", uzmanlikAlani: "Nöroloji" },
        { id: 7, ad: "Ahmet", soyad: "Demir", dogumTarihi: "1987-04-25", cinsiyet: "Erkek", uzmanlikAlani: "Kardiyoloji" },
        { id: 8, ad: "Zeynep", soyad: "Yılmaz", dogumTarihi: "1994-02-15", cinsiyet: "Kadın", uzmanlikAlani: "Dermatoloji" },
        { id: 9, ad: "Mustafa", soyad: "Aydın", dogumTarihi: "1990-06-20", cinsiyet: "Erkek", uzmanlikAlani: "Psikiyatri" },
        { id: 10, ad: "Elif", soyad: "Kara", dogumTarihi: "1989-08-10", cinsiyet: "Kadın", uzmanlikAlani: "Kadın Hastalıkları" },
        { id: 11, ad: "Ali", soyad: "Yılmaz", dogumTarihi: "1992-12-05", cinsiyet: "Erkek", uzmanlikAlani: "Ortopedi" },
        { id: 12, ad: "Ayşe", soyad: "Kara", dogumTarihi: "1986-07-30", cinsiyet: "Kadın", uzmanlikAlani: "Göz Hastalıkları" }

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
    const currentItems = doktorListesi.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(doktorListesi.length / itemsPerPage);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const toggleModalState = () => {
        setModalState(!modalState);
    }


    return (
        <Dashboard>


            <div className="container">
                <h2>Doctors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Doğum Tarihi</th>
                            <th>Cinsiyet</th>
                            <th>Uzmanlık alanı</th>
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
                                <td>{hasta.uzmanlikAlani}</td>
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
                <button onClick={() => (setModalState(!modalState))}>Add Doctor</button>
                {modalState && (<AddDoctorModal modalfunc={toggleModalState} />)}

            </div>
        </Dashboard>
    );
}

export default AdminDoctors