import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import NavBar from './Pages/NavBar'
import NotFound from './Pages/NotFound'
import Admin from './Pages/Admin'


function App() {


  return (
    <center>

      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/admin/*' element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </center>
  )
}

export default App
