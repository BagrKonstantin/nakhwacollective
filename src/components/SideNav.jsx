import React, { useState, useEffect } from 'react';
import { worksData } from '../data/works';
import './SideNav.css';

export const groupedSections = [
  {
    category: '',
    items: [
      { id: 'home', label: 'Home' }
    ]
  },
  {
    category: 'About Us',
    items: [
      { id: 'aishwarya', label: 'Aishwarya Raut' },
      { id: 'antonello', label: 'Antonello Sangirardi' },
      { id: 'collaborators', label: 'Collaborators' }
    ]
  },
  {
    category: 'Our Works',
    items: worksData.map(work => ({ id: `work-${work.id}`, label: work.title }))
  },
  {
    category: 'Contact us',
    items: [
      { id: 'contacts', label: 'Contacts' }
    ]
  }
];

const allSections = groupedSections.flatMap(g => g.items);

const SideNav = () => {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector('.snap-parent'),
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    allSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update URL hash without adding to history when active section changes
  useEffect(() => {
    if (activeId) {
      const newHash = `#${activeId}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    }
  }, [activeId]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="side-nav">
      {groupedSections.map((group, groupIdx) => (
        <div className="nav-group" key={groupIdx}>
          {group.category && <div className="nav-category">{group.category}</div>}
          <ul className="side-nav-list">
            {group.items.map((section) => (
              <li key={section.id} className="side-nav-item">
                <button
                  className={`nav-dot ${activeId === section.id ? 'active' : ''}`}
                  onClick={() => scrollTo(section.id)}
                  aria-label={`Scroll to ${section.label}`}
                >
                  <span className="nav-label">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
