import React, { useEffect, useState } from 'react';
import './contact.scss';

/// IMPORT IMAGES
import Phone from '../../../assets/contact/phone.svg';

///IMPORT PHONE NUMBER
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';

const Contact = () => {

   const [phoneValue, setPhoneValue] = useState(null);
   const [contactDetails, setContactDetails] = useState({
      name: '',
      email: '',
      promoCode: '',
      message: ''
   });

   console.log(phoneValue);

   return (
      <div className="home__contact" id='home__contact'>
         <div className="home_contact__inner">

            <div className="contact__header__text">
               <div className="text__wrapper">
                  <h2>Get a premium consultation</h2>
               </div>

               <div className="text__wrapper">
                  <h2>by choice of course</h2>
                  <div className="bordered__box"></div>
               </div>

               <div className="text__wrapper">
                  <span>Choose a course according to your criteria
                     and answer questions</span>
               </div>
            </div>

            <div className="contact_form__wrapper">
               <div className="contact_form_wrapper__inner">

                  <div className="form__header">
                     <span>Where to contact you</span>
                     <a href="tel:+359 (88) 866 0862" style={{ textDecoration: 'none' }}><div className="phone__icon">
                        <div className="icon__box">
                           <img src={Phone} alt="" />
                        </div>
                        <span>Phone</span>
                     </div></a>
                  </div>

                  <div className="form__holder">
                     <div className="form_holder__item">
                        <input
                           type="text"
                           name='name'
                           placeholder='Name'
                           autoComplete='off'

                        />
                     </div>

                     <div className="form_holder__item">
                        <PhoneInput
                           placeholder="Enter phone number"
                           value={phoneValue}
                           onChange={setPhoneValue}
                           defaultCountry="AZ"
                           international
                           autoComplete='off'
                           maxLength={phoneValue && (isValidPhoneNumber(phoneValue) ? phoneValue.length : 25)}
                        />
                     </div>

                     <div className="form_holder__item">
                        <input
                           type="email"
                           name='email'
                           placeholder='E-mail'
                           autoComplete='off'
                        />
                     </div>

                     <div className="form_holder__item">
                        <input
                           type="text"
                           name='promo-code'
                           placeholder='Promocode'
                           autoComplete='off'
                        />
                     </div>

                     <div className="form_holder__item" style={{ marginBottom: '28px' }}>
                        <textarea
                        name="message"
                        placeholder='Comment or questions'
                        autoComplete='off'
                        ></textarea>
                     </div>

                     <button type='button'>send</button>

                     <span>By clicking on the button you agree to the <a href="#">privacy policy</a></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact