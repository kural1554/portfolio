import React from 'react';
// We don't need 'Element' anymore
import { useInView } from 'react-intersection-observer';

const resumeData = [
    { date: "2020-2024", title: "B.E- Computer Science and Engineering", company: "CHETTINAD COLLEGE OF ENGINEERING & TECHNOLOGY" },
    { date: "2025- Present", title: "React Js Developer", company: "SPK TECHNOLOGIES" },
    { date: "2024-2024", title: "Web Developer - Internship", company: "MEDIA WAVE TECHNOLOGIES" },
];

const Resume = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    // CHANGE: Use <section> with an id and the ref
    <section id="experience" ref={ref} className={`section ${inView ? 'section-visible' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-bg-text="Experience">Experience</h2>
        <p className="section-subtitle">
          With a keen eye for detail and a love for clean code, I turn concepts into powerful digital experiences — always focused on performance, usability, and design.
        </p>
        <div className="resume-container">
          {resumeData.map((item, index) => (
            <div className="resume-item" key={index}>
              <p className="date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;