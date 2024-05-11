import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import NavBar from './Pages/NavBar'
import NotFound from './Pages/NotFound'
import Admin from './Pages/Admin'
import Patient from './Pages/Patient'
import Doctor from './Pages/Doctor'

function App() {




  return (
    <center>

      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='*' element={<NotFound />} /> */}
            <Route path='admin/*' element={<Admin />} />
            <Route path='patient/*' element={<Patient />} />
            <Route path='doctor/*' element={<Doctor />} />
          </Routes>
        </div>
      </Router>
    </center>
  )
}

export default App
