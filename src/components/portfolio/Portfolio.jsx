import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'WordPress Portfolio',
        github: 'https://github.com',
        demo: 'https://mehranesoft.com/wordpress'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Bootstrap Dashboard',
        github: 'https://github.com',
        demo: 'https://mehranesoft.com/dash'
    },
    {
        id: 3,
        image: IMG7,
        title: 'Restaurant',
        github: 'https://github.com',
        demo: 'https://mehranesoft.com/rest'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Newmorphism',
        github: 'https://github.com',
        demo: 'https://mehranesoft.com/new'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Dynamic Website',
        github: 'https://github.com',
        demo: 'http://mehrane.great-site.net'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Ar React Portfolio',
        github: 'https://github.com',
        demo: 'https://mehweb.000webhostapp.com'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <div data-aos='flip-left' key={id} className="contain">
                                <div className='card'>
                                    <div className="imgBx">
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className="content">
                                        <h3>{title}</h3>
                                        <div className="portfolio__item-cta">
                                            <a href={github} className="btn" target='_blank'>Github</a>
                                            <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
