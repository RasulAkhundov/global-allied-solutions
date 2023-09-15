import React from 'react';
import './footer.scss';

/// IMPORT IMAGES
import Phone from '../../../assets/footer/phone.svg';
import Logo from '../../../assets/footer/logo.svg';

const Footer = () => {

   const date = new Date();
   let year = date.getFullYear();

   return (
      <footer className='footer'>
         <div className="footer__inner">

            <div className="footer_wrapper__1">
               <div className="contact__wrapper">
                  <div className="title">
                     <h2>Contact</h2>
                  </div>

                  <ul className="contact__items">
                     <a href="tel:+359 (88) 866 0862"><li>+359 88 866 0862</li></a>
                     <a href="mailto:tm@gas.com"><li>tm@gas.com</li></a>
                     <li>Sofia 1000, 48,<br /> <br />
                        Hristo Botev Blvd.BULGARIA</li>
                  </ul>
               </div>

               <div className="messenger__wrapper">
                  <div className="title">
                     <h2>Messenger</h2>

                     <div className="icon__box">
                        <img src={Phone} alt="" />
                     </div>
                  </div>

                  <div className="title">
                     <h2>Make an offer</h2>
                  </div>

                  <div className="subscribe__wrapper">
                     <input
                        type="email"
                        autoComplete='off'
                        placeholder='E-mail'
                     />
                     <button type='button'>Subscribe</button>
                  </div>
               </div>
            </div>

            <div className="footer_wrapper__2">
               <div className="logo__wrapper">
                  <img src={Logo} alt="" />
               </div>

               <div className="navs__wrapper">
                  <div className="single_navs__item">
                     <div className="title">
                        <h2>Service</h2>
                     </div>

                     <ul>
                        <li>Construction & Design</li>
                        <li>Energy</li>
                        <li>International Trade<br />
                           & Investments</li>
                        <li>Consulting</li>
                     </ul>
                  </div>

                  <div className="single_navs__item">
                     <div className="title">
                        <h2>Information</h2>
                     </div>
                     
                     <ul>
                        <li>About company</li>
                        <li>News</li>
                        <li>Vacancy</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="rights__wrapper">
               <span>© {year} OW Unity. All rights reserved.</span>
            </div>
         </div>
      </footer>
   )
}

export default Footer