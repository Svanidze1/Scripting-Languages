import React from 'react';
import './app.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Main from './Components/Main/main';
import Contact from './Contact';
import AllOffers from './AllOffers';

const App = () => {
  return (
    <>
    <Navbar />
      {/* <Main /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/alloffers' element={<AllOffers/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App