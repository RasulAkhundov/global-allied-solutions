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
                     <a href="mailto:tm@globalalliedsolutions.org"><li>tm@globalalliedsolutions.org</li></a>
                     <a href="https://www.google.com/maps/place/Hristo+Botev+Blvd+48,+1000+Sofia+Center,+Sofia,+Bolqar%C4%B1stan/@42.6972084,23.3128424,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa856a2407eafb:0xd0c78fca2122ef6c!8m2!3d42.6972084!4d23.3154227!16s%2Fg%2F11cs8c1g21?entry=ttu" target='_blank'><li>Sofia 1000, 48,<br /> <br />
                        Hristo Botev Blvd.BULGARIA</li></a>
                  </ul>
               </div>

               <div className="messenger__wrapper">
                  <div className="title">
                     <h2>Messenger</h2>

                     <a href="tel:+359 (88) 866 0862"><div className="icon__box">
                        <img src={Phone} alt="" />
                     </div></a>
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
                        <a href="#home__services"><li>Construction & Design</li></a>
                        <a href="#home__services"><li>Energy</li></a>
                        <a href="#home__services"><li>International Trade<br />
                           & Investments</li></a>
                        <a href="#home__services"><li>Consulting</li></a>
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