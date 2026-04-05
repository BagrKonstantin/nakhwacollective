import React from 'react'
import './Works.css'

const worksData = [
  {
    id: 5,
    year: '2024',
    title: 'Tutto Fumo',
    description: 'Something is smoking.',
    localVideo: '/videos/tutto_fumo.mp4'
  },
  {
    id: 4,
    year: '2024',
    title: 'Nadī',
    description: 'I mean, aren`t we all crazy sometimes?',
    localVideo: '/videos/nadi.mp4'
  },
  {
    id: 3,
    year: '2024',
    title: 'Tension Funfair',
    description: 'Life like a circus, deep inside, the tension of the realities.',
    localVideo: '/videos/tension_funfair.mp4'
  },
  {
    id: 2,
    year: '2023',
    title: 'My Shop Your Problems',
    description: 'A social commentary about the main disrupting elements of our worlds.',
    youtubeId: 'ARRdNC1AxHc'
  },
  {
    id: 1,
    year: '2023',
    title: 'What About The Rain',
    description: 'Inspired by Indian Monsoons, the hyper reality connects to nature and our society.',
    youtubeId: 'Go5jyB1-w0c'
  }
]

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
              <div className="youtube-wrapper">
                <iframe 
                  className="bg-media youtube-bg"
                  src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${work.youtubeId}&playsinline=1&modestbranding=1`}
                  title={work.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
              </div>
            )}
            <div className="work-overlay"></div>
          </div>
          
          <div className="work-content container">
            <span className="work-year">{work.year}</span>
            <h2 className="work-title">{work.title}</h2>
            <p className="work-description">{work.description}</p>
          </div>
        </section>
      ))}
    </>
  )
}

export default Works
