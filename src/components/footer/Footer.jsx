import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiUpwork} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Mehrane</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><IoLogoTwitter/></a>
                <a href="https://www.upwork.com/"><SiUpwork/></a>
                <a href="https://github.com/"><AiFillGithub/></a>
            </div>
            <div className="footer__copy">
                <small>Created By <b>MEHRANE MENASRI</b> 2022 May, M'sila - Algeria.</small>
            </div>
        </footer>
    )
}

export default Footer
