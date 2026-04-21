import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contacts from './Contacts'
import SideNav from '../components/SideNav'

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Use a small timeout to ensure the DOM is fully rendered and snap-parent is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

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
