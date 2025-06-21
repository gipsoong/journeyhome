import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nyck6xe', 'template_xuy7f5h', form.current, {
        publicKey: 'cu7IUs7-trdnYI19d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='input-group'>
      <label>Name</label>
      <input type="text" name="user_name" className='form-control'/>
      <label>Email</label>
      <input type="email" name="user_email" className='form-control'/>
      <label>Message</label>
      <textarea name="message" className='form-control'/>
      <input type="submit" value="Send" />
    </form>
  );
};