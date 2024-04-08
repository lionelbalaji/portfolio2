import React from 'react'
import Nav from './components/nav/Nav';
import Details from './components/details/Details';
import About from './components/about/About';
import Contact from  './components/contact/Contact'
const App = () => {
  return (
    <div>
      <Nav/>
      <Details/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App;
