import React from 'react';
import './header.scss';

const Header = () => {
  return (
      <header className='home__header'>
         <div className="home_header__inner">
            <div className="home_header__text">
               <div className="text__wrapper">
                  <h2>Welcome to</h2>
               </div>

               <div className="text__wrapper">
                  <div className="bordered__box"></div>
                  <h2>global allied solutions</h2>
               </div>
            </div>
         </div>
      </header>
  )
}

export default Header