import React from 'react';
import './home.scss';

///Import Layouts
import Navbar from '../layout/home/navbar/Navbar';
import Header from '../layout/home/header/Header';
import Services from '../layout/home/services/Services';
import Solutions from '../layout/home/solutions/Solutions';
import Contact from '../layout/home/contact/Contact';
import Footer from '../layout/home/footer/Footer';

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

         {/* SOLUTIONS START */}
         <Solutions />
         {/* SOLUTIONS END */}

         {/* CONTACT START */}
         <Contact />
         {/* CONTACT END */}

         {/* FOOTER START */}
         <Footer />
         {/* FOOTER END */}

      </div>
   )
}

export default Home