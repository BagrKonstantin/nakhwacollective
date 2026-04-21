import React from 'react'
import './About.css'

const collaborators = [
  { name: 'Jodi Rabinowitz', role: 'Light, set and video Designer', image: '/images/jodi Rabinowitz.jpg' },
  { name: 'Nordra', role: 'Composer', image: '/images/Nordra.jpg' },
  { name: 'Dylan Tedaldi', role: 'Multidisciplinary artist', image: '/images/Dylan Tedaldi.jpg' }
];

const About = () => {
  return (
    <>
      <section id="aishwarya" className="snap-child pb-section">
        <div className="bio-section container">
          <div className="bio-image-wrapper">
            <img src="/images/Aishwarya%20Raut.jpg" alt="Aishwarya Raut" className="bio-image" />
          </div>
          <div className="bio-text">
            <div className="bio-header">
              <h2>AISHWARYA RAUT</h2>
              <span className="role">Dancer and Choreographer</span>
            </div>
            <div className="bio-content">
              <p>Aishwarya Raut was born and raised in Mumbai. She trained in India and the UK (Liverpool Institute for Performing Arts). She holds a BA in Dance and an MA in Dance Performance. From 2018 to 2024, she danced with Rambert performing works by leading contemporary choreographers, earning National Dance Awards UK nominations in 2024 and 2025. Aishwarya joined GöteborgsOperans Danskompani in July 2025.</p>
              <p>She has been featured in Dance Magazine and listed in Bachtrack's 'Rising stars in Dance and Choreography:10 to watch 2024-25'</p>
              <p>Aishwarya has performed works by Wim Vandekeybus, Sidi Larbi Cherkaoui, Akram Khan, Sharon Eyal, Ohad Naharin, Ben Duke, Imre and Marne Van Opstal, Alexander Ekman, Hofesh Shechter, Jo Strømgren, Rafael Bonachela, Alonzo King, Jill Johnson, David Raymond and Tiffany Targarthen, Marion Motin, Wayne McGregor.</p>
              <p>Alongside her company work, she continues to work independently as a dancer, choreographer, and teacher across Europe and Asia. Her choreographed works include 'What About The Rain?'(2023) for Resolution festival, 'Tension Funfair' (2024) for Rambert X National Theatre, 'Nadī' (2024) for Thames Water Festival, 'Tutto Fumo' (2024) for Equilibrio Dinamico, 'Lupa' (2025) for Panta Rei Danseteatre.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="antonello" className="snap-child pb-section">
        <div className="bio-section reverse container">
          <div className="bio-image-wrapper">
            <img src="/images/Antonello%20Sangirardi.jpg" alt="Antonello Sangirardi" className="bio-image" />
          </div>
          <div className="bio-text">
            <div className="bio-header">
              <h2>ANTONELLO SANGIRARDI</h2>
              <span className="role">Dancer, choreographer and photographer</span>
            </div>
            <div className="bio-content">
              <p>Antonello Sangirardi is a contemporary dancer, choreographer, and photographer from Bari, Italy. In 2017 he danced with 'Ballet Preljocaj' later joining 'Rambert' from 2018 to 2024. Antonello has toured across UK, Europe, Asia and Australia and performed works by Wim Vandekeybus, Ben Duke, Sidi Larbi Cherkaoui, Imre and Marne Van Opstal, Jill Johnson, Hofesh Shechter, Ohad Naharin, Sharon Eyal, Trisha Brown, Merce Cunningham, Alonzo King, Jo Strømgren, Benoit Swan Pouffer, Ella Rothschild, Angelin Preljocaj, Roberta Ferrara, Brian Ca.</p>
              <p>He has performed with artists such as FKA Twigs, Laura Mvula, Fabian Incardona, Giò Sada, Soprano and for brands including Swiss, Vogue, Ferrari X Chivas. Antonello's choreography credits include 'All The World's Alive Again' by 'H-Magazine' featured on 'Nowness' as assistant choreographer, 'Tutto Fumo' for company Equilibrio Dinamico 2024, 'Nadi' for Thames Water Festival 2024, 'My shop Your problems' for a self produced event in Rambert, in 2023, 'Leoni da Tastiera-Keyboard Lions' for 'Resolution 26' at the Place, London, in 2026.</p>
              <p>He is currently a freelance artist working across UK, Europe and India.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collaborators" className="snap-child collaborators-section pb-section">
        <div className="container" style={{ width: '100%' }}>
          <h2 className="section-title text-center">COLLABORATORS</h2>
          <div className="collaborators-grid">
            {collaborators.map((collab, index) => (
              <div className="collaborator-card" key={index}>
                <div className="collab-image-wrapper">
                  <img src={collab.image} alt={collab.name} className="collab-image" />
                </div>
                <div className="collab-info">
                  <h3>{collab.name}</h3>
                  <span className="collab-role">{collab.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
