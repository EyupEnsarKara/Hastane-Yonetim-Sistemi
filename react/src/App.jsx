import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import NavBar from './Pages/NavBar'


function App() {
  localStorage.setItem('userType', 'user');
  localStorage.removeItem('userType');


  return (
    <center>

      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </center>
  )
}

export default App
