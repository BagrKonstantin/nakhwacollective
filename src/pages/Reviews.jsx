import React from 'react';
import { worksData } from '../data/works';
import './Reviews.css';

const Reviews = () => {
  // Extract all reviews from worksData
  const allReviews = worksData.reduce((acc, work) => {
    if (work.reviews && work.reviews.length > 0) {
      const reviewsWithWorkInfo = work.reviews.map(review => ({
        ...review,
        workTitle: work.title,
        workId: work.id
      }));
      return [...acc, ...reviewsWithWorkInfo];
    }
    return acc;
  }, []);

  return (
    <section id="reviews" className="reviews-section snap-child">
      <div className="reviews-bg">
        <div className="reviews-overlay"></div>
      </div>
      
      <div className="reviews-content container">
        <div className="section-header">
          <span className="section-subtitle">What They Say</span>
          <h2 className="section-title">Reviews</h2>
        </div>

        <div className="reviews-grid">
          {allReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="quote-icon">“</div>
              <p className="review-quote">{review.quote}</p>
              <div className="review-meta">
                <span className="review-source">{review.source}</span>
                <span className="review-work">{review.workTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
