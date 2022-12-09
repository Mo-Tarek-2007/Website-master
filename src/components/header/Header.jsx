import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/dark.jpg'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.js'


const Header = () => {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Mehrane Menasri</h1>
                    <h5 className='text-light'>
                        I'm a  
                        <span>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                delaySpeed={1000}
                                deleteSpeed={50}
                                words={['Developer', 'Designer']}
                            />
                        </span>
                    </h5>
                    <CTA />

                    <HeaderSocials />

                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
            </header>
        </div>
    )
}

export default Header
