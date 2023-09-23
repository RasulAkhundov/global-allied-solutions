import React, { useEffect } from 'react';
import './menu.scss';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../../stores/menu';

///IMPORT IMAGES
import Close from '../../assets/icons/menu_close.png';

const Menu = () => {

   const dispatch = useDispatch();
   const { menuActive } = useSelector(state => state.menu);

   $('body, html').on('click', () => {
      menuClose();
   });

   function menuClose() {
      dispatch(setMenu(false));
      $('.menu__wrapper').removeClass('menu__open');
      $('.menu__wrapper').addClass('menu__close');
   }

   return (
      <div className='menu__wrapper'
         style={{
            right: menuActive ? '0' : '-250px',
            boxShadow: menuActive ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : 'none'
         }}
         onClick={(e) => e.stopPropagation()}
      >
         <img src={Close} alt="global allied solutions" onClick={menuClose} />
         <ul>
            <a href="#home__services"><li onClick={menuClose}>Services</li></a>
            <a href="#home__about"><li onClick={menuClose}>About us</li></a>
            <a href="#home__contact"><li onClick={menuClose}>Help</li></a>
         </ul>
      </div>
   )
}

export default Menu