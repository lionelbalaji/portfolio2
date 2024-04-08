import React from 'react'
import RESUMEBALAJI from '../../assests/RESUMEBALAJI.pdf'
import CV2 from '../../assests/CV2.pdf'
const CTA=() => {
  return (
    <div className='cta'>
       <a href={CV2} download className='btn'>Download CV</a>
       <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
