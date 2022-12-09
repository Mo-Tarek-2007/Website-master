import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {FaLaravel} from 'react-icons/fa'
import {SiJquery} from 'react-icons/si'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have?</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                {/* frontend section */}
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        <div className="experience__details">
                            <AiFillHtml5 className="experience__details-icon" />
                            <div>
                                <h4> HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <DiCss3 className="experience__details-icon" />
                            <div>
                                <h4> CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <FaBootstrap className="experience__details-icon" />
                            <div>
                                <h4> BOOTSTRAP</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <DiJavascript className="experience__details-icon" />
                            <div>
                                <h4> JAVASCRIPT</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <FaReact className="experience__details-icon" />
                            <div>
                                <h4> REACT JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>

                    </div>
                </div>
                 {/* backend section */}
                <div className="experience__backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">

                        <div className="experience__details">
                            <SiPhp className="experience__details-icon" />
                            <div>
                                <h4> PHP</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <GrMysql className="experience__details-icon" />
                            <div>
                                <h4> MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <FaLaravel className="experience__details-icon" />
                            <div>
                                <h4> LARAVEL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        
                        <div className="experience__details">
                            <SiJquery className="experience__details-icon" />
                            <div>
                                <h4> JQUERY</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
