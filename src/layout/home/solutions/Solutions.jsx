import React from 'react';
import './solutions.scss';

/// IMPORT IMAGES
import Solution1 from '../../../assets/solutions/1.svg';
import Solution2 from '../../../assets/solutions/2.svg';
import Solution3 from '../../../assets/solutions/3.svg';
import Solution4 from '../../../assets/solutions/4.svg';
import Solution5 from '../../../assets/solutions/5.svg';

const Solutions = () => {
   return (
      <div className="home__solutions">
         <div className="home_solutions__inner">

            <div className="solutions_header">
               <h2>Why Choose</h2>

               <div className="title">
                  <h2>Global Allied Solutions?</h2>
               </div>
            </div>

            <div className="solutions__items">
               <div className="single_solutions__item">
                  <div className="text__wrapper">
                     <h2>Extensive Global Network: </h2>
                     <span>Our far-reaching network of partners spans the globe, ensuring</span>
                     <span>that we have the right connections to fulfill your project's requirements.</span>
                  </div>
                  <div className="image__wrapper">
                     <img src={Solution1} alt="" />
                  </div>
               </div>
               <div className="single_solutions__item">
                  <div className="text__wrapper">
                     <h2>Tailored Solutions: </h2>
                     <span>We understand that every project is unique. Our approach involves customizing our</span>
                     <span>services to match your specific needs, guaranteeing optimal outcomes.</span>
                  </div>
                  <div className="image__wrapper">
                     <img src={Solution2} alt="" />
                  </div>
               </div>
               <div className="single_solutions__item">
                  <div className="text__wrapper">
                     <h2>Expertise and Experience: </h2>
                     <span>With years of experience in diverse industries, our team possesses the knowledge and</span>
                     <span>insight necessary to guide you through complex projects.</span>
                  </div>
                  <div className="image__wrapper">
                     <img src={Solution3} alt="" />
                  </div>
               </div>
               <div className="single_solutions__item">
                  <div className="text__wrapper">
                     <h2>Reliability: </h2>
                     <span>We are committed to delivering on our promises. Count on us to source reliable service</span>
                     <span>providers who meet the highest standards of quality.</span>
                  </div>
                  <div className="image__wrapper">
                     <img src={Solution4} alt="" />
                  </div>
               </div>
               <div className="single_solutions__item">
                  <div className="text__wrapper">
                     <h2>End-to-End Support: </h2>
                     <span>From the moment you engage with us, we offer comprehensive support, from initial</span>
                     <span>consultation to the successful execution of your project.</span>
                  </div>
                  <div className="image__wrapper">
                     <img src={Solution5} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Solutions