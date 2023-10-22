import React from 'react';
import './navbar.scss';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../../stores/menu';

//IMPORT IMAGES
import NavbarLogo from '../../../assets/logo/navbar_logo.svg';
import NavbarLogoMob from '../../../assets/logo/navbar_logo_mob.svg';

const Navbar = () => {

  const dispatch = useDispatch();

  function menuOpen() {
    dispatch(setMenu(true));
      $('.menu__wrapper').removeClass('menu__close');
      $('.menu__wrapper').addClass('menu__open');
  }

  return (
    <div className='navbar'>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img src={NavbarLogo} alt="global allied solutions" />
          <img src={NavbarLogoMob} alt="global allied solutions" />
        </div>

        <div className="navbar__navs">
          <ul>
            <a href="#home__services"><li>Services</li></a>
            <a href="#home__about"><li>About us</li></a>
            <a href="#home__contact"><li>Help</li></a>
          </ul>
        </div>

        <div className="navbar__burger" onClick={(e) => {menuOpen(); e.stopPropagation()}}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar