import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collaboratorsData } from '../data/collaborators';
import { worksData } from '../data/works';
import { ArrowLeft, User, Briefcase, FileText, Layout } from 'lucide-react';
import './CollaboratorDetail.css';

const CollaboratorDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const collaborator = collaboratorsData.find(c => c.slug === slug);

  // Find works this collaborator was involved in
  const relatedWorks = worksData.filter(work => {
    const inCredits = work.credits.some(c => c.value.includes(collaborator?.name));
    const inCharacters = work.characters?.some(c => c.value.includes(collaborator?.name));
    return inCredits || inCharacters;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!collaborator) {
    return (
      <div className="error-page container">
        <h2>Collaborator not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="collaborator-detail-page">
      <button className="back-button" onClick={() => navigate(-1)} aria-label="Back">
        <ArrowLeft size={24} />
        <span>BACK</span>
      </button>

      <div className="collaborator-content container">
        <div className="collaborator-header">
          <div className="collaborator-image-container">
            {collaborator.image ? (
              <img src={collaborator.image} alt={collaborator.name} className="collaborator-image" />
            ) : (
              <div className="collaborator-image-placeholder">
                <User size={64} />
              </div>
            )}
          </div>
          <div className="collaborator-info">
            <h1 className="collaborator-name" style={{ fontFamily: 'var(--font-heading)' }}>{collaborator.name}</h1>
            <div className="collaborator-role-tag">
              <Briefcase size={16} />
              <span>{collaborator.role}</span>
            </div>
          </div>
        </div>

        <div className="collaborator-grid">
          <div className="collaborator-main">
            <section className="detail-section">
              <div className="section-header">
                <FileText className="section-icon" />
                <h2>BIOGRAPHY</h2>
              </div>
              <div className="bio-content">
                <p>{collaborator.bio}</p>
              </div>
            </section>
          </div>

          <aside className="collaborator-sidebar">
            <section className="detail-section">
              <div className="section-header">
                <Layout className="section-icon" />
                <h2>WORKS</h2>
              </div>
              <div className="related-works-list">
                {relatedWorks.length > 0 ? (
                  relatedWorks.map(work => (
                    <Link key={work.id} to={`/work/${work.pathId}`} className="related-work-item">
                      <span className="work-year">{work.year}</span>
                      <span className="work-title">{work.title}</span>
                    </Link>
                  ))
                ) : (
                  <p className="no-works">No works listed.</p>
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorDetail;
