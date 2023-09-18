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
            <a href="#home__services"><li>Services</li></a>
            <a href="#home__about"><li>About us</li></a>
            <a href="#home__contact"><li>Help</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar