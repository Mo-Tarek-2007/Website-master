import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./skills/skills.css"
import {BsWordpress} from 'react-icons/bs'
import {SiElectron} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {FaLaravel} from 'react-icons/fa'
import {SiSqlite} from 'react-icons/si'
import {DiJqueryLogo} from 'react-icons/di'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <section id='skills'>
                    <h5>What Skills I Have?</h5>
                    <h2>My skills</h2>
                    <Slider {...settings}>
                        <div className="icon">
                            <AiFillHtml5 />
                            <h1>HTML5</h1>
                        </div>
                        <div className="icon">
                            <DiCss3 />
                            <h1>CSS3</h1>
                        </div>
                        <div className="icon">
                            <DiJavascript />
                            <h1>JAVASCRIPT</h1>
                        </div>
                            <div className="icon">
                                <DiJqueryLogo />
                            <h1>JQUERY</h1>
                            </div>
                        <div className="icon">
                            <FaBootstrap />
                            <h1>BOOTSTRAP</h1>
                        </div>
                        <div className="icon">
                            <FaSass />
                            <h1>SASS</h1>
                        </div>
                        <div className="icon">
                            <FaReact />
                            <h1>REACT JS</h1>
                        </div>
                        <div className="icon">
                            <SiPhp />
                            <h1>PHP</h1>
                        </div>
                        <div className="icon">
                            <GrMysql />
                            <h1>MYSQL</h1>
                        </div>
                        <div className="icon">
                            <FaLaravel />
                            <h1>LARAVEL</h1>
                        </div>
                        <div className="icon">
                            <SiSqlite />
                            <h1>SQLITE</h1>
                        </div>
                        <div className="icon">
                            <BsWordpress />
                            <h1>WORDPRESS</h1>
                        </div>
                        <div className="icon">
                            <SiElectron />
                            <h1>ELECTRON JS</h1>
                        </div>
                    </Slider>
                </section>
            </div>
        );
    }
}