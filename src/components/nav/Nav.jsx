import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {MdCastForEducation} from "react-icons/md"
import {RiCustomerServiceLine} from "react-icons/ri"
import {IoIosImages} from "react-icons/io"
import {VscCommentDiscussion} from "react-icons/vsc"
import {RiMessage2Line} from "react-icons/ri"
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
            {/* <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <MdCastForEducation/> </a> */}
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiCustomerServiceLine/> </a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <IoIosImages/> </a>
            {/* <a href="#testimonials" onClick={()=>setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <VscCommentDiscussion/> </a> */}
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <RiMessage2Line/> </a>
        </nav>
    )
}

export default Nav
