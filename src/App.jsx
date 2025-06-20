import { useState } from 'react'
import './App.css'
import { FcHome } from "react-icons/fc"
import Form from './components/form'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './pages/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Routes>
      </div>
    <Footer/>
    </>
  )
}

export default App