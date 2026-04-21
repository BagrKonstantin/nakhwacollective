import React, { useState, useEffect, useCallback } from 'react'
import { worksData } from '../data/works'
import './Home.css'

const Home = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle algorithm
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  useEffect(() => {
    // Collect all localVideo paths from worksData
    const videos = worksData
      .map(work => work.localVideo)
      .filter(video => !!video);
    
    if (videos.length > 0) {
      setPlaylist(shuffleArray(videos));
    }
  }, [shuffleArray]);

  const handleVideoEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentVideo = playlist[currentIndex];

  return (
    <section id="home" className="home-container snap-child">
      <div className="video-background">
        {currentVideo && (
          <video 
            key={currentVideo} // Key change forces fresh video load for smooth transition
            autoPlay 
            muted 
            playsInline 
            className="bg-video"
            onCanPlay={(e) => (e.target.muted = true)}
            onEnded={handleVideoEnded}
            src={currentVideo}
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
        )}
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

