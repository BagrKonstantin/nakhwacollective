import React from 'react'
import { Link } from 'react-router-dom'
import { worksData } from '../data/works'
import './Works.css'

const Works = () => {
  return (
    <>
      {worksData.map((work) => (
        <section id={`work-${work.id}`} key={work.id} className="work-section snap-child">
          <div className="work-bg">
            {work.localVideo ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="bg-media"
              >
                <source src={work.localVideo} type="video/mp4" />
              </video>
            ) : work.youtubeId ? (
              <div className="youtube-wrapper">
                <iframe 
                  className="bg-media youtube-bg"
                  src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${work.youtubeId}&playsinline=1&modestbranding=1`}
                  title={work.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
              </div>
            ) : (
              <div className="bg-media placeholder-bg"></div>
            )}
            <div className="work-overlay"></div>
          </div>
          
          <div className="work-content container">
            <span className="work-year">{work.year}</span>
            <h2 className="work-title">{work.title}</h2>
            <p className="work-description">{work.subtitle || work.description}</p>
            <Link to={`/work/${work.pathId}`} className="discover-btn">
              DISCOVER PROJECT
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

export default Works
