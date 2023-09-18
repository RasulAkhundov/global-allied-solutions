import React from 'react';
import './about.scss';

///IMPORT IMAGES
import AboutImage from '../../../assets/about/about.svg';

const About = () => {
   return (
      <div className="home__about" id='home__about'>
         <div className="home_about__inner">

            <div className="about__header__text">
               <div className="text__wrapper">
                  <h2>Your Partner for Excellence</h2>
               </div>

               <div className="text__wrapper">
                  <div className="bordered__box"></div>
                  <h2 style={{ fontSize: '70px', fontFamily: 'Nexa_Bold' }}>Global Allied Solutions</h2>
               </div>
            </div>

            <div className="about__wrapper">

               <div className="wrapper__title">
                  <h2>About Us</h2>
               </div>

               <div className="about__body">
                  <div className="wrapper__1">
                     <img src={AboutImage} alt="" />
                  </div>

                  <div className="wrapper__2">
                     <span>
                        We are the catalysts of innovation, the problem solvers, and the
                        architects of success. Our mission is simple - to transform your ideas
                        into triumphs. With a global network of trusted partners and a team
                        driven by expertise, dedication, and results, we make the
                        extraordinary happen. At Global Allied Solutions, your success is our
                        ultimate goal.
                     </span>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default About