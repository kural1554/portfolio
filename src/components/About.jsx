// src/pages/About.js (or wherever your About component is)
import React from 'react';
import { useInView } from 'react-intersection-observer';
import myCV from '../assets/my-cv.pdf'; 
import heroImg from '../assets/contact-image.png';
import AnimatedDownloadButton from '../components/AnimatedDownloadButton.jsx';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className={`section ${inView ? 'section-visible' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-bg-text="About">About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={heroImg} alt="Portrait of Kuralarasan, frontend developer" />
          </div>
          <div className="about-text">
            <p>
              My name is Kuralarasan, and I hold a Bachelor's degree in Computer Science and Engineering (B.E – CSE). I am currently working as a React.js Developer, where I specialize in building responsive, dynamic, and user-friendly web applications.
            </p>
            <p>
              I have a strong understanding of modern frontend technologies and am passionate about creating seamless user experiences through clean and efficient code. I continuously strive to enhance my skills and stay updated with the latest trends in web development.
            </p>
            <div className="about-stats">
              <p>5 Project complete</p>
            </div>
            
            {/* === REPLACE THE OLD BUTTON WITH THE NEW COMPONENT === */}
            <AnimatedDownloadButton cvPath={myCV} downloadName="Kuralarasan-CV.pdf">
              DOWNLOAD CV
            </AnimatedDownloadButton>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;