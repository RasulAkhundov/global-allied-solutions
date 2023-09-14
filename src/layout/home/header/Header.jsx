import React from 'react';
import './header.scss';

// IMPORT IMAGES
import Puzzle from '../../../assets/header/puzzle.png';
import ProblemSolving from '../../../assets/header/problem-solving.svg';

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

            <div className="home_header__wrapper1">
               <div className="text__wrapper">
                  <div className="wrapper__inner">
                     <h2>Global Allied Solutions</h2>
                     <span>Your Partner for Specialized Projects</span>
                  </div>
               </div>

               <div className="image__wrapper">
                  <img src={Puzzle} alt="global allied solutions" />
               </div>
            </div>

            <div className="home_header__wrapper2">
               <div className="text__wrapper">
                  <div className="wrapper__inner">
                     <h2>Are you in search of the
                        perfect solution for a your
                        specialized project? </h2>
                     <span>Look no further! Global Allied Solutions is here to connect you
                        with the finest service providers and solutions across a range
                        of industries. With our unparalleled network of global partners,
                        we are dedicated to ensuring your project's success from
                        inception to completion.</span>
                  </div>
               </div>

               <div className="image__wrapper">
                  <img src={ProblemSolving} alt="" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header