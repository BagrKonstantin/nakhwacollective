import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { worksData } from '../data/works';
import { ArrowLeft, Play, Users, MessageSquare, Info, Calendar } from 'lucide-react';
import './WorkDetail.css';

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const work = worksData.find(w => w.pathId === id);

  if (!work) {
    return (
      <div className="error-page container">
        <h2>Work not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="work-detail-page">
      <button className="back-button" onClick={() => navigate('/')} aria-label="Back to home">
        <ArrowLeft size={24} />
        <span>BACK</span>
      </button>

      {/* Hero Section */}
      <section className="work-hero">
        <div className="hero-bg">
          {work.localVideo ? (
            <video autoPlay loop muted playsInline className="hero-video">
              <source src={work.localVideo} type="video/mp4" />
            </video>
          ) : work.youtubeId ? (
            <div className="hero-youtube-wrapper">
              <iframe
                className="hero-youtube"
                src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${work.youtubeId}&playsinline=1&modestbranding=1`}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ) : (
            <div className="hero-placeholder"></div>
          )}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <span className="hero-year">{work.year}</span>
          <h1 className="hero-title">{work.title}</h1>
          {work.subtitle && <p className="hero-subtitle">{work.subtitle}</p>}
        </div>
      </section>

      <div className="detail-content container">
        {/* About Section */}
        <section className="detail-section about-project">
          <div className="section-header">
            <Info className="section-icon" />
            <h2>ABOUT THE PROJECT</h2>
          </div>
          <p className="project-description">{work.description}</p>
        </section>

        {/* Premier Info */}
        {work.premiere && (
          <section className="detail-section premiere-info">
            <div className="section-header">
              <Calendar className="section-icon" />
              <h2>PREMIERE</h2>
            </div>
            <p className="premiere-text">{work.premiere}</p>
          </section>
        )}

        {/* Credits Section */}
        <section className="detail-section credits-section">
          <div className="section-header">
            <Users className="section-icon" />
            <h2>PEOPLE INVOLVED</h2>
          </div>
          <div className="credits-grid">
            {work.credits.map((credit, idx) => (
              <div key={idx} className="credit-item">
                <span className="credit-label">{credit.label}</span>
                <span className="credit-value">{credit.value}</span>
              </div>
            ))}
          </div>
          
          {work.characters && (
            <div className="characters-container">
              <h3 className="sub-section-title">Characters</h3>
              <div className="credits-grid">
                {work.characters.map((char, idx) => (
                  <div key={idx} className="credit-item">
                    <span className="credit-label">{char.label}</span>
                    <span className="credit-value">{char.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Reviews Section */}
        {work.reviews && work.reviews.length > 0 && (
          <section className="detail-section reviews-section">
            <div className="section-header">
              <MessageSquare className="section-icon" />
              <h2>REVIEWS</h2>
            </div>
            <div className="reviews-list">
              {work.reviews.map((review, idx) => (
                <blockquote key={idx} className="review-card">
                  <p className="review-quote">{review.quote}</p>
                  <cite className="review-source">{review.source}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        )}
      </div>

    </div>
  );
};

export default WorkDetail;
