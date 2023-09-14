import React from 'react';
import './home.scss';

///Import Layouts
import Navbar from '../layout/home/navbar/Navbar';
import Header from '../layout/home/header/Header';
import Services from '../layout/home/services/Services';

const Home = () => {
   return (
      <div className='home_wrapper'>
         {/* NAVBAR START */}
         <Navbar />
         {/* NAVBAR END */}

         {/* HEADER START */}
         <Header />
         {/* HEADER END */}

         {/* SERVICES START */}
         <Services />
         {/* SERVICES END */}

      </div>
   )
}

export default Home