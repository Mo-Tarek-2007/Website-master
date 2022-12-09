import React, { useState, useEffect } from 'react'
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Loader from 'react-js-loader'
import CenterMode from './components/CenterMode '
import Plans from './components/plans/Plans'

const App = () => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    })

    return (
        <>
            {
                isLoading==true?
                <div className='parent-loader'>
                    <Loader type="box-up" bgColor={"#4db5ff"} title={"Loading..."} color={'#4db5ff'} size={200} timeout={3000} />
                </div>
                :
                <>
                <Header/>
                <Nav/>
                <About/>
                <CenterMode/>
                <Services/>
                <Plans/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
                <Footer/>
                </>
            }
            

        </>
    )
}

export default App
