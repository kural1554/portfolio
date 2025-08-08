import React from 'react';
import { useInView } from 'react-intersection-observer';

import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';
import Project4 from '../assets/project4.jpg';
import Project5 from '../assets/project5.jpg';
import Project6 from '../assets/project6.jpg';

const projects = [
  {
    title: 'TamilNadu Tourism',
    copy: 'Check out these gorgeous TamilNadu tourist spots with beautiful views.',
    image: Project1,
    link: 'https://tamilnadu-tourism.vercel.app/',
    source: 'https://github.com/kural1554/tn-touristguide'
  },
  {
    title: 'To The Beach',
    copy: 'Plan your next beach trip with these fabulous destinations.',
    image: Project2,
    link: 'https://example.com/beach',
    source: 'https://github.com/example/beach'
  },
  {
    title: 'Desert Destinations',
    copy: "It's the desert you've always dreamed of.",
    image: Project3,
    link: 'https://example.com/desert',
    source: 'https://github.com/example/desert'
  },
  {
    title: 'Explore The Galaxy',
    copy: 'Blast off into outer space today!',
    image: Project4,
    link: 'https://example.com/galaxy',
    source: 'https://github.com/example/galaxy'
  },
  {
    title: 'Urban Adventures',
    copy: 'Discover the magic of city skylines and hidden streets.',
    image: Project5,
    link: 'https://example.com/urban',
    source: 'https://github.com/example/urban'
  },
  {
    title: 'Forest Escape',
    copy: "Get lost in nature's beauty deep in the forest.",
    image: Project6,
    link: 'https://example.com/forest',
    source: 'https://github.com/example/forest'
  }
];

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className={`section ${inView ? 'section-visible' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-bg-text="Projects">My Projects</h2>
        <p className="section-subtitle">Here are a few projects I've worked on recently.</p>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="content">
                <h2 className="title">{proj.title}</h2>
                <p className="copy">{proj.copy}</p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Preview
                  </a>
                  <a
                    href={proj.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Source 
                  </a>
                </div>
              </div>

              <div
                className="bg-image"
                style={{ backgroundImage: `url(${proj.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
