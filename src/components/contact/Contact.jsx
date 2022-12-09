import React from 'react'
import "./contact.css"
import {SiGmail} from 'react-icons/si'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gncf7ms', 'template_hbltbnb', form.current, 'Fb9cTJ1cmZe3iuSeN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">

                    <article data-aos='zoom-in' className="contact__option">
                        <div>
                            <SiGmail className="contact__option-icon"/>
                        </div>
                        <div className='box'>
                            <h4>Email</h4>
                            <h5>mehranemen@gmail.com</h5>
                            <a href="mailto:mehranemen@gmail.com" target="_blank">Send A Message</a>
                        </div>
                    </article>

                    <article data-aos='zoom-in' className="contact__option">
                        <div>
                            <RiMessengerLine className="contact__option-icon"/>
                        </div>
                        <div className='box'>
                            <h4>Messenger</h4>
                            <h5>Mehrane Menasri</h5>
                            <a href="https://m.me/100055225800369" target="_blank">Send A Message</a>
                        </div>
                    </article>

                    <article data-aos='zoom-in' className="contact__option">
                        <div>
                            <BsWhatsapp className="contact__option-icon"/>
                        </div>
                        <div className='box'>
                            <h4>WhatsApp</h4>
                            <h5>+213 781 411 509</h5>
                            <a href="https://api.whatsapp.com/send?phone=+213781411509" target="_blank">Send A Message</a>
                        </div>

                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input data-aos='flip-left' type="text" name='name' placeholder='Your Full Name' required />
                    <input data-aos='flip-left' type="email" name='email' placeholder='Your Email' required />
                    <textarea data-aos='flip-left' name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
