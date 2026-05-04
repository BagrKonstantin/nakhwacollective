import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { worksData } from '../data/works';
import { collaboratorsData } from '../data/collaborators';
import { ArrowLeft, Play, Users, MessageSquare, Info, Calendar, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './WorkDetail.css';

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const work = worksData.find(w => w.pathId === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const renderLinkedValue = (value) => {
    if (!value) return null;
    const parts = value.split(/(,\s*|\s+and\s+)/);
    
    return parts.map((part, index) => {
      const trimmedPart = part.trim();
      const collaborator = collaboratorsData.find(c => c.name.toLowerCase() === trimmedPart.toLowerCase());
      
      if (collaborator) {
        return (
          <Link key={index} to={`/collaborator/${collaborator.slug}`} className="collaborator-link">
            {part}
          </Link>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleKeyDown = useCallback((e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex(prev => (prev + 1) % work.photos.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => (prev - 1 + work.photos.length) % work.photos.length);
      }
    } else if (isVideoModalOpen) {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    }
  }, [selectedImageIndex, isVideoModalOpen, work?.photos?.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!work) {
    return (
      <div className="error-page container">
        <h2>Work not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedImageIndex + 1) % work.photos.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedImageIndex - 1 + work.photos.length) % work.photos.length);
  };

  return (
    <div className="work-detail-page">
      <button className="back-button" onClick={() => navigate(`/#work-${work.id}`)} aria-label="Back to home">
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
          <div className="hero-text">
            <span className="hero-year">{work.year}</span>
            <h1 className="hero-title">{work.title}</h1>
            {work.subtitle && <p className="hero-subtitle">{work.subtitle}</p>}
          </div>
          {work.fullVideo && (
            <button className="watch-full-button" onClick={() => setIsVideoModalOpen(true)}>
              <Play size={20} fill="currentColor" />
              <span>WATCH EXCERPT</span>
            </button>
          )}
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
                <span className="credit-value">{renderLinkedValue(credit.value)}</span>
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
                    <span className="credit-value">{renderLinkedValue(char.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Photos Section */}
        {work.photos && work.photos.length > 0 && (
          <section className="detail-section photos-section">
            <div className="section-header">
              <Camera className="section-icon" />
              <h2>PHOTOS</h2>
            </div>
            <div className="photos-grid">
              {work.photos.map((photo, idx) => (
                <div key={idx} className="photo-item" onClick={() => setSelectedImageIndex(idx)}>
                  <img src={photo} alt={`${work.title} - ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

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

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={32} />
          </button>
          
          <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous image">
            <ChevronLeft size={48} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={work.photos[selectedImageIndex]} 
              alt={`${work.title} - Full screen`} 
              className="lightbox-image"
            />
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {work.photos.length}
            </div>
          </div>
          
          <button className="lightbox-nav next" onClick={nextImage} aria-label="Next image">
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && work.fullVideo && (
        <div className="lightbox-overlay video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <button className="lightbox-close" onClick={() => setIsVideoModalOpen(false)} aria-label="Close">
            <X size={32} />
          </button>
          
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video 
              autoPlay 
              controls 
              className="full-video-player"
              src={work.fullVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};


export default WorkDetail;

