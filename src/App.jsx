import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Properties from './components/Properties/Properties';
import SingleProperty from './components/Properties/SingleProperty';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/property/:id' element={<SingleProperty/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
