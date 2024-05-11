import React, { useState } from 'react'
import Dashboard from '../../Components/Dashboard'
import "../../css/AdminPatients.css"
function AdminPatients() {

    const hastaListesi = [
        { id: 1, ad: "Ahmet", soyad: "Yılmaz", dogumTarihi: "1990-05-15", cinsiyet: "Erkek", hastalikGecmisi: "Hipertansiyon" },
        { id: 2, ad: "Ayşe", soyad: "Kara", dogumTarihi: "1985-10-20", cinsiyet: "Kadın", hastalikGecmisi: "Diyabet" },
        { id: 3, ad: "Mehmet", soyad: "Demir", dogumTarihi: "1978-03-08", cinsiyet: "Erkek", hastalikGecmisi: "Kolon Kanseri" }
    ];
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [dogumTarihi, setDogumTarihi] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [hastalikGecmisi, setHastalikGecmisi] = useState('');

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
                        {hastaListesi.map(hasta => (
                            <tr key={hasta.id}>
                                <td>{hasta.ad}</td>
                                <td>{hasta.soyad}</td>
                                <td>{hasta.dogumTarihi}</td>
                                <td>{hasta.cinsiyet}</td>
                                <td>{hasta.hastalikGecmisi}</td>
                                <td>
                                    <button onClick={() => handleDuzenle(hasta.id)}>Düzenle</button>
                                    <button onClick={() => handleSil(hasta.id)}>Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Hasta Ekle</h2>
                <form>
                    <input type="text" placeholder="Ad" value={ad} onChange={e => setAd(e.target.value)} />
                    <input type="text" placeholder="Soyad" value={soyad} onChange={e => setSoyad(e.target.value)} />
                    <input type="text" placeholder="Doğum Tarihi" value={dogumTarihi} onChange={e => setDogumTarihi(e.target.value)} />
                    <input type="text" placeholder="Cinsiyet" value={cinsiyet} onChange={e => setCinsiyet(e.target.value)} />
                    <input type="text" placeholder="Hastalık Geçmişi" value={hastalikGecmisi} onChange={e => setHastalikGecmisi(e.target.value)} />
                    <button type="button" onClick={handleEkle}>Ekle</button>
                </form>
            </div>
        </Dashboard>
    );
}
export default AdminPatients