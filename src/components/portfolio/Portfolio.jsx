import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


// DO NOT USE THE IMAGES IN PRODUCTION
const data = [{
      id:1,
      image:IMG1,
      title:'Weather Forecast App using Accuweather API',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    },

    {
      id:2,
      image:IMG2,
      title:'To-Do list using node and mongoose',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    },

    {
      id:3,
      image:IMG3,
      title:'A webpage for a e-commerce site',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    },

    {
      id:4,
      image:IMG4,
      title:'Calculator using pure javascript',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    },

    {
      id:5,
      image:IMG5,
      title:'A Blog Site for Biotech Lab',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    },

    {
      id:6,
      image:IMG6,
      title:'Face Recognition System using OpenCV library in Python',
      github: 'https://github.com',
      demo: 'https://dribble.com/Alien_pixels'
    }
  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id ,title , image , github , demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio