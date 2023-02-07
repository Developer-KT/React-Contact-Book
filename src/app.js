import React from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header.js'
import Home from './Home.js'
import Services from './Services'
import About from './About.js'
import ContactUs from './Contactus.js'
import Person from './Contact.js'
import Footer from './Footer.js'
import Error from './Error.js'
// import Card from './Card.js'

export default function RouterSetup() {

  return (
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/person/:firstName' element={<Person />} />
          <Route path='*' element={<Error />}></Route>
        </Routes>
        
        <Footer />
      </Router>
  )
}