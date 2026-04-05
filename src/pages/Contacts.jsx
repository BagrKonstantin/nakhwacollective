import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <section id="contacts" className="snap-child contacts-section">
      <div className="contacts-content container">
        <h2 className="contacts-title">CONTACT</h2>
        
        <div className="contacts-grid">
          <div className="contact-group">
            <h3>Locations</h3>
            <p>London, Bari</p>
            <p>Mumbai, Göteborg</p>
          </div>
          
          <div className="contact-group">
            <h3>Email</h3>
            <a href="mailto:aishwarya.raut1@outlook.com">aishwarya.raut1@outlook.com</a>
            <a href="mailto:antonellosan@outlook.com">antonellosan@outlook.com</a>
          </div>

          <div className="contact-group">
            <h3>Phone</h3>
            <a href="tel:+447832149448">+44 7832149448</a>
          </div>

          <div className="contact-group">
            <h3>Instagram</h3>
            <a href="https://instagram.com/aishwarya_raut" target="_blank" rel="noreferrer">@aishwarya_raut</a>
            <a href="https://instagram.com/antonello_san" target="_blank" rel="noreferrer">@antonello_san</a>
          </div>
        </div>
        
        <div className="footer-credits">
          <p>© {new Date().getFullYear()} Nakhwa Collective. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contacts
