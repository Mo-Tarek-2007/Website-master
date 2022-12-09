import React from 'react'
import './plans.css'
import {BiChevronsRight} from "react-icons/bi"

const Plans = () => {
    return (
        <section id='pricing'>
            <h5 data-aos='fade-right'>Our Plans?</h5>
            <p className='no-service'>(No service now)</p>
            <h2 data-aos='fade-up'>Pricing</h2>

            <div className="plans_container">
                <div className="price-row">
                    <div data-aos='fade-right' className="price-col">
                        <p>Starter</p>
                        <h3>5000DA <span>/ year</span></h3>
                        <ul>
                            <li><BiChevronsRight /> 1 Website</li>
                            <li><BiChevronsRight /> 10 GB Disk Space</li>
                            <li><BiChevronsRight /> Free Email Address</li>
                            <li><BiChevronsRight /> Basic Web Builder</li>
                            <li><BiChevronsRight /> No SSL Certificate</li>
                            <li><BiChevronsRight /> Limited Support</li>
                        </ul>
                        <button>Add To Cart</button>
                    </div>
                    <div data-aos='fade-up' className="price-col">
                        <p>Advenced</p>
                        <h3>14000DA <span>/ year</span></h3>
                        <ul>
                            <li><BiChevronsRight /> 1 Website</li>
                            <li><BiChevronsRight /> 10 GB Disk Space</li>
                            <li><BiChevronsRight /> Free Email Address</li>
                            <li><BiChevronsRight /> Basic Web Builder</li>
                            <li><BiChevronsRight /> No SSL Certificate</li>
                            <li><BiChevronsRight /> Limited Support</li>
                        </ul>
                        <button>Add To Cart</button>
                    </div>
                    <div data-aos='fade-left' className="price-col">
                        <p>Premium</p>
                        <h3>23000DA <span>/ year</span></h3>
                        <ul>
                            <li><BiChevronsRight /> 1 Website</li>
                            <li><BiChevronsRight /> 10 GB Disk Space</li>
                            <li><BiChevronsRight /> Free Email Address</li>
                            <li><BiChevronsRight /> Basic Web Builder</li>
                            <li><BiChevronsRight /> No SSL Certificate</li>
                            <li><BiChevronsRight /> Limited Support</li>
                        </ul>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans
