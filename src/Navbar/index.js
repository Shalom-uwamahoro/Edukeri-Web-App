
import logo from '../Assets/logo.jpg';
import logout from '../Assets/logout.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import React from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='container'>  

        <div className="logo-side">
          <img src={logo} alt="logo" className="logo"/>
          <h1 className='h1'>Edukeri</h1>
        </div>

        <div className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>

          <Link to="/Home" className="nav-link">Home</Link>
          <hr/>
          <Link to="/TeachersOverview" className="nav-link">TeachersOverview</Link>
          <hr/>
          <Link to="/Profile" className="nav-link">Profile</Link>
          <hr/>
        </div>
      
          <button className='logout-button'>Logout <img src={logout}  className='logout-img' alt='logout button'/></button> 
  

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>      
        </div>

  </div>
 
   
  );
}
export default Navbar;