import React, { useEffect, useState } from 'react';
import './contact.scss';

///IMPORT JQUERY
import $ from 'jquery';

/// IMPORT IMAGES
import Phone from '../../../assets/contact/phone.svg';

///IMPORT PHONE NUMBER
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';

const Contact = () => {

   const [phoneValue, setPhoneValue] = useState(null);
   const [validationErrorActive, setValidationActive] = useState(false);
   const [validationFlag, setValidationFlag] = useState({
      name: true,
      email: true,
      promoCode: false,
      message: true
   });
   const [contactDetails, setContactDetails] = useState({
      name: '',
      email: '',
      promoCode: '',
      message: ''
   });

   /////////////////////--------------HANDLE CHANGES
   const handleChange = (e) => {
      const { name, value } = e.target;

      setContactDetails((prevState) => {
         return {
            ...prevState,
            [name]: value
         }
      });
   }

   const nameHandleChange = (e) => {
      const { name, value } = e.target;

      if (validationErrorActive) {
         if (nameRegex(value)) {
            $('#name__input').css('border', '1px solid #4bb453');
            setFlagItem(name, false);
         } else {
            $('#name__input').css('border', '1px solid #ff9494');
            setFlagItem(name, true);
         }
      }
   }

   $(document).on('input', '.PhoneInputInput', (e) => {

      if (validationErrorActive) {
         if (isValidPhoneNumber(e.target.value)) {
            $('.PhoneInputInput').css('border', '1px solid #4bb453')
         } else {
            $('.PhoneInputInput').css('border', '1px solid #ff9494');
         }
      }
   });

   const emailHandleChange = (e) => {
      const { name, value } = e.target;

      if (validationErrorActive) {
         if (emailRegex(value)) {
            $('#email__input').css('border', '1px solid #4bb453');
            setFlagItem(name, false);
         } else {
            $('#email__input').css('border', '1px solid #ff9494');
            setFlagItem(name, true);
         }
      }
   }

   const promoCodeHandleChange = (e) => {
      const { name, value } = e.target;

      if (validationErrorActive) {
         if (promoCodeRegex(value)) {
            $('#promoCode__input').css('border', '1px solid #4bb453');
            setFlagItem(name, false);
         } else {
            $('#promoCode__input').css('border', '1px solid #ff9494');
            setFlagItem(name, true);
         }
         if(!value) {
            setFlagItem(name, false);
         }
      }
   }

   const messageHandleChange = (e) => {
      const { name, value } = e.target;

      if (validationErrorActive) {
         if (messageRegex(value)) {
            $('#message__input').css('border', '1px solid #4bb453');
            setFlagItem(name, false);
         } else {
            $('#message__input').css('border', '1px solid #ff9494');
            setFlagItem(name, true);
         }
      }
   }

   const setFlagItem = (input, status) => {
      setValidationFlag({ ...validationFlag, [input]: status });
   }

   ///////////////////////---------REGEX
   const nameRegex = (name) => {
      const re = /^(?! )(?=.*[A-Za-z])[A-Za-z ]{3,25}(?<! )$/;
      return re.test(String(name).toLowerCase());
   }

   const emailRegex = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   };

   const promoCodeRegex = (promoCode) => {
      const re = /^[A-Za-z0-9]{6,12}$/;
      return re.test(String(promoCode).toLowerCase());
   }

   const messageRegex = (message) => {
      const re = /^(?! )(?=.*[A-Za-z])[A-Za-z ]{10,200}(?<! )$/;
      return re.test(String(message).toLowerCase());
   }

   console.log(validationFlag)

   //////////////////////----------------FORM HANDLE CLICK
   const formHandleClick = (e) => {
      e.preventDefault();

      if (!validationFlag.name &&
         (phoneValue && isValidPhoneNumber(phoneValue)) &&
         !validationFlag.email &&
         !validationFlag.promoCode &&
         !validationFlag.message
      ) {
         console.log('success');
      } else {
         console.log('error');
         setValidationActive(true);
      }

      if (!nameRegex(contactDetails.name)) {
         $('#name__input').css('border', '1px solid #ff9494');
      } else {
         $('#name__input').css('border', '1px solid #F3F3F3');
      }
      if (phoneValue && isValidPhoneNumber(phoneValue)) {
         $('.PhoneInputInput').css('border', '1px solid #F3F3F3');
      } else {
         $('.PhoneInputInput').css('border', '1px solid #ff9494');
      }
      if (!emailRegex(contactDetails.email)) {
         $('#email__input').css('border', '1px solid #ff9494');
      } else {
         $('#email__input').css('border', '1px solid #F3F3F3');
      }
      if (contactDetails.promoCode && !promoCodeRegex(contactDetails.promoCode)) {
         $('#promoCode__input').css('border', '1px solid #ff9494');
      } else {
         $('#promoCode__input').css('border', '1px solid #F3F3F3');
      }
      if (!messageRegex(contactDetails.message)) {
         $('#message__input').css('border', '1px solid #ff9494');
      } else {
         $('#message__input').css('border', '1px solid #F3F3F3');
      }
   }

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
                           id='name__input'
                           maxLength={25}
                           onChange={(e) => { handleChange(e); nameHandleChange(e) }}
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
                           id='email__input'
                           onChange={(e) => { handleChange(e); emailHandleChange(e) }}
                        />
                     </div>

                     <div className="form_holder__item">
                        <input
                           type="text"
                           name='promoCode'
                           placeholder='Promocode'
                           autoComplete='off'
                           id='promoCode__input'
                           onChange={(e) => { handleChange(e); promoCodeHandleChange(e) }}
                        />
                     </div>

                     <div className="form_holder__item" style={{ marginBottom: '28px' }}>
                        <textarea
                           name="message"
                           placeholder='Comment or questions'
                           autoComplete='off'
                           id='message__input'
                           maxLength={200}
                           onChange={(e) => { handleChange(e); messageHandleChange(e) }}
                        ></textarea>
                     </div>

                     <button type='button' onClick={formHandleClick}>send</button>

                     <span>By clicking on the button you agree to the <a href="#">privacy policy</a></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact