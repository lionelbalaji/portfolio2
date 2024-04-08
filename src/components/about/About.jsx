import React from 'react'
import './about.css'
import hoodie from '../../assests/hoodie.jpg'
import { GiAchievement } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know Me</h5>
       <h2>About Me</h2>
       <div className="container about_container">
         <div className="about_me">
          <div className="about_me_image image">
            <img src={hoodie} alt="" />
          </div>
         </div>


       <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiAchievement  className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUsers  className='about_icon'/>
              <h5>Companies</h5>
              <small>2 companies</small>
            </article>
            {/* <article className='about_card'>
              < ImBooks  className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article> */}
          </div>
          <p>
          Looking for a challenging role to utilize and improve my coding skills, That
can contribute to the process development and company's growth as well
as enhance my knowledge by exploring and learning new things
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
       </div>

        
    </section>
  )
}

export default About
