import React from 'react';
import './services.scss';

/// IMPORT IMAGES
import Service1 from '../../../assets/services/1.svg';
import Service2 from '../../../assets/services/2.svg';
import Service3 from '../../../assets/services/3.svg';
import Service4 from '../../../assets/services/4.svg';

const Services = () => {
   return (
      <div className="home__services" id='home__services'>
         <div className="home_services__inner">

            <div className="services__header">
               <div className="title">
                  <h2>Our Services</h2>
               </div>

               <span>At Global Allied Solutions, we specialize in identifying and delivering top-tier service providers and solutions tailored to your
                  unique needs. Our expertise spans several key sectors:</span>
            </div>

            <div className="services__items">
               <div className="single_services_item__wrapper">
                  <div className="single_services__item">
                     <img src={Service1} alt="" />
                     <span>Construction<br/>
                        & Design</span>
                  </div>
               </div>
               <div className="single_services_item__wrapper">
                  <div className="single_services__item">
                     <img src={Service2} alt="" />
                     <span>Energy</span>
                  </div>
               </div>
               <div className="single_services_item__wrapper">
                  <div className="single_services__item">
                     <img src={Service3} alt="" />
                     <span>International<br/> Trade &<br/> Investments</span>
                  </div>
               </div>
               <div className="single_services_item__wrapper">
                  <div className="single_services__item">
                     <img src={Service4} alt="" />
                     <span>Consulting</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services