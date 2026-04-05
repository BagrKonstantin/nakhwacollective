import React from 'react'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contacts from './pages/Contacts'
import SideNav from './components/SideNav'

function App() {
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

export default App
