import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import NavBar from './Pages/NavBar'
import NotFound from './Pages/NotFound'


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
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </center>
  )
}

export default App
