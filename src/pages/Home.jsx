import React from 'react';
import './home.scss';

///Import Layouts
import Navbar from '../layout/navbar/Navbar';
import Header from '../layout/header/Header';

const Home = () => {
   return (
      <div className='home_wrapper'>
         {/* NAVBAR START */}
         <Navbar />
         {/* NAVBAR END */}

         {/* HEADER START */}
         <Header />
         {/* HEADER END */}

      </div>
   )
}

export default Home