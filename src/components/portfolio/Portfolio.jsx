
import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assests/portfolio1.jpg'
import portfolio2 from '../../assests/portfolio2.jpg'
import portfolio3 from '../../assests/portfolio3.jpg'
import portfoliophoto from '../../assests/portfoliophoto.png'
import todolistphoto from '../../assests/todolistphoto.png'
import portfolio6 from '../../assests/portfolio6.jpg'
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:portfoliophoto,
      title:'Personal-Portfolio',
      github:'https://github.com/lionelbalaji/all_react_projects.git',
      demo:" https://lionelbalaji.github.io/newportfolioproject/"
    },
    {
      id:2,
      image:portfolio2,
      title:'Shopping-Cart',
      github:'https://github.com/lionelbalaji/all_react_projects.git',
      demo:"https://dribbble.com/alien-pixels"
    },{
      id:3,
      image:todolistphoto,
      title:'ToDo List',
      github:'https://github.com/lionelbalaji/all_react_projects.git',
      demo:"https://dribbble.com/alien-pixels"
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
         
          data.map(({id,image,title,github,demo}) =>{
            return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item_image">
             <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
           ) })
        }
      </div>
    </section>
  )
  
}

export default Portfolio
