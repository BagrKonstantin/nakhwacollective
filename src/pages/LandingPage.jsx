import React from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contacts from './Contacts'
import SideNav from '../components/SideNav'

const LandingPage = () => {
  return (
    <div className="app-container snap-parent">
      <SideNav />
      <Home />
      <About />
      <Works />
      <Contacts />
    </div>
  )
}

export default LandingPage
