import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import NavBar from './Pages/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <center>

      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='login' element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </center>
  )
}

export default App
