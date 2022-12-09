import React, { useEffect } from 'react'
import "./about.css"
import Me from "../../assets/about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section id='about'>
            <h5 data-aos='fade-right'>Get To Know</h5>
            <h2 data-aos='fade-up'>About Me</h2>
            <div className="">
                <div className="about_us">
                    <div className="about_img">
                        <img data-aos='zoom-in' src={Me} alt="about me image" />
                    </div>
                    <div className="about_info">
                        <h5 className="about_subtitle">Some Info About Me</h5>
                        <h3 className="about_title">Web Developer</h3>
                        <p className="about_text">
                        I hold a baccalaureate degree for the year 2004, Mechanical Industry Division as a regular candidate at Jaber Bin Hayyan High School, Al-Masila, an acceptable grade.
I studied computer science at Mohamed Boudiaf University in M'sila - I did not complete the study -.
He holds a baccalaureate for the year 2015, the Division of Experimental Sciences as a free candidate, Al-Masila, with a grade of good.
                        </p>
                        <a href="#" className="about_cta">Contact Me</a>   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
