import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqxj4ru', 'template_kyi2xyx', form.current, '3hMH_B3xQVMxsUfrT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      window.alert("succesfull");
  };

  
  return (
      <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>saranshlingwal923@gmail.com</h5>
              <a href="mailto:saranshlingwal923@gmail.com" target="_blank">Send a message</a>
            </article>

             <article className="contact__option">
              <FaGithub className='contact__option-icon'/>
              <h4>Github</h4>
              <h5>SarLin-7757</h5>
              <a href="https://github.com/Sarlin-7757" target="_blank">Follow</a>
            </article>

             <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>Saransh</h5>
              <a href="https://api.whatsapp.com/send?phone+917310653766" target="_blank">Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/> 
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
      </section>
  )
};

export default Contact