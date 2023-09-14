import React from 'react';
import './navbar.scss';

//IMPORT IMAGES
import NavbarLogo from '../../../assets/logo/navbar_logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img src={NavbarLogo} alt="global allied solutions" />
        </div>

        <div className="navbar__navs">
          <ul>
            <li>Services</li>
            <li>About us</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar