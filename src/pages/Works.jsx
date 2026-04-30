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
