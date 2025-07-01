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
import { RxArrowRight } from 'react-icons/rx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Navbar/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Routes>
      </div>

      <div className='pre-footer-cta section-padding section-contrast'>
        <h2>Ready to start? Let's go!</h2>
        <a href="/" className='color-white'><RxArrowRight className="react-icon-styling"/></a>
      </div>
      
    <Footer/>
    </>
  )
}

export default App