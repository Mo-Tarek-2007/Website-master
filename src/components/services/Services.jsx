import React from 'react'
import "./services.css"
import { MdDesignServices } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import { BsServer } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer?</h5>
            <h2>Services</h2>
            <div className="service__cards">
                <article data-aos='fade-right' className='service__card'>
                    <div className="face front">
                        <MdDesignServices className='service__icon' />
                        <h5>Web Design</h5>
                    </div>
                    <div className="face back">
                        <h5>Web Design</h5>
                        <small>It is the work of everything related to the graphics of the site, from the division of the site, its external shape, the design of banners and icons, and the selection of fonts and colors.</small>
                        <a href="#">Learn More</a>
                    </div>
                </article>
                <article data-aos='fade-up' className='service__card'>
                    <div className="face front">
                        <FaCode className='service__icon' />
                        <h5>Web Development</h5>
                    </div>
                    <div className="face back">
                        <h5>Web Development</h5>
                        <small>It is concerned with everything related to the server, linking databases, designing how the site works itself, and processing the site from all its technical aspects, using special programming languages ​​like many other languages,</small>
                        <a href="#">Learn More</a>
                    </div>
                </article>
                <article data-aos='fade-left' className='service__card'>
                    <div className="face front">
                        <BsServer className='service__icon' />
                        <h5>Hosting</h5>
                    </div>
                    <div className="face back">
                        <h5>Hosting</h5>
                        <small>
                        Web hosting, where hosting means that a server or web server hosts the materials and contents of a particular site and links the domain of this site to the server’s IP address.</small>
                        <a href="#">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services
