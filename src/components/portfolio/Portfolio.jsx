
import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assests/portfolio1.jpg'
import beverageapp from '../../assests/beverageapp.png'
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
      image:beverageapp,
      title:'responsive-beverage-app',
      github:'https://github.com/lionelbalaji/responsive-beverage-app.git',
      demo:"https://lionelbalaji.github.io/responsive-beverage-app/"',
    },{
      id:3,
      image:todolist,
      title:'ToDo List',
      github:'https://github.com/lionelbalaji/all_react_projects.git',
      demo:" https://lionelbalaji.github.io/Todolist/"
    },{
      id:4,
      image:foodphoto,
      title:'Food-Delivery-App-Design',
      github:'https://github.com/lionelbalaji/food-delivery-app-design.git',
      demo:"https://lionelbalaji.github.io/food-delivery-app-design/"
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
