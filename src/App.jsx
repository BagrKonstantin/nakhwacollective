import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import WorkDetail from './pages/WorkDetail'
import CollaboratorDetail from './pages/CollaboratorDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/collaborator/:slug" element={<CollaboratorDetail />} />
      </Routes>
    </>
  )
}

export default App
