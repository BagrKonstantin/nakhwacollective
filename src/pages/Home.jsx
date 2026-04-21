import React from 'react'
import './Home.css'

const Home = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="home-container snap-child">
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="bg-video"
          onCanPlay={(e) => (e.target.muted = true)}
          src="/videos/home_bg.mp4"
        >
          <source src="/videos/home_bg.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="home-content">
        <h1 className="hero-title">NAKHWA</h1>
        <p className="hero-subtitle">Movement based creative duo</p>
        <p className="hero-description">Founded by Aishwarya Raut and Antonello Sangirardi, collaborating with artists from around the world to create across and through Theatres, site specific, Workshops and film</p>
        <div className="home-nav-buttons">
          <button onClick={() => scrollTo('aishwarya')} className="home-nav-btn">About Us</button>
          <button onClick={() => scrollTo('work-tutto-fumo')} className="home-nav-btn">Our Works</button>
          <button onClick={() => scrollTo('contacts')} className="home-nav-btn">Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Home
