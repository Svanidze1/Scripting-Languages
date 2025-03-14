import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiTranslate2 } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Data from '../db/data'; 

const Navbar = () => {
  const [state, setState] = useState("navBar");
  const [formState, setFormState] = useState(false);
  const [languageMenuState, setLanguageMenuState] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const showNav = () => {
    setState('navBar activeNavbar');
  };

  const removeNav = () => {
    setState('navBar');
  };

  const alterForm = () => {
    setFormState(!formState);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuState(!languageMenuState);
  };

  
  const filterData = () => {
    return Data.filter(item =>
      item.destTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>    
        <div className='logoDiv'>
          <Link to='/' className="logo flex">
            <h1><MdOutlineTravelExplore className="icon" /> Tniggers.</h1>
          </Link>
        </div>
        
        <div className="searchDiv">
          <input
            type="text"
            className="searchInput"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="searchButton"><AiOutlineSearch className="searchIcon" /></button>
        </div>

        <div className={state}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to='/' className='navLink'>Home</Link>
            </li>
            <li className="navItem">
              <Link to='/alloffers' className='navLink'>Tours</Link>
            </li>
            <li className="navItem">
              <Link to='/about' className='navLink'>About</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            <li className="navItem languageLink">
              <a href="#" className="navLink" onClick={toggleLanguageMenu}>
                <RiTranslate2 className="icon" />
                <span>Language</span>
              </a>
              {languageMenuState && (
                <ul className="languageMenu">
                  <li><a href="#">English</a></li>
                  <li><a href="#">German</a></li>
                  <li><a href="#">Georgian</a></li>
                </ul>
              )}
            </li>
            <button onClick={alterForm} className='btn'>
              <a href="#">Login</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>

      {/* Display filtered data only if searchQuery is not empty */}
      {searchQuery && (
        <div className="filtered-data">
          {filterData().map(item => (
            <div key={item.id} className="destination">
              <img src={item.imgSrc} alt={item.destTitle} />
              <div className='destination-things'>
                <h2>{item.destTitle}</h2>
                <p>Price: ${item.fees}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Login Form */}
      <div className="login-page">
        <div className={formState ? "form activeForm" : "form"}>
          <form className="login-form">
            <button action="" className="login-action btn"><FaGoogle />Login with Google</button>
            <button action="" className="login-action btn"><FaFacebookF />Login with Facebook</button>
            <button action="" className="login-action btn"><FaTwitter />Login with Twitter</button>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button className="btn">Login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
