import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
          <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='shop' element={<Shop/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
          </Router>
    </div>
  )
}

export default App