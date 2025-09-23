import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navbar from './components/Navbar'
import About from './pages/AboutPage/About'
import Login from './pages/LoginSignup/Login'
import Footer from './components/Footer'
import HelpCenter from './pages/HelpCenter/HelpCenter'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
       <Navbar />
       <Routes>
         {/* Landing page */}
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
         <Route path='/helpCenter' element={<HelpCenter />} />
       </Routes>
       <Footer />
     </Router>
  )
}



export default App
