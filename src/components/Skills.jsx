import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import javascriptIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import seoIcon from "../assets/seo.png";

const skillsData = [
  { name: "HTML", percentage: 90, icon: htmlIcon },
  { name: "JavaScript", percentage: 85, icon: javascriptIcon },
  { name: "CSS", percentage: 85, icon: cssIcon },
  { name: "React", percentage: 80, icon: reactIcon },
  { name: "Python", percentage: 75, icon: pythonIcon },
  { name: "Django", percentage: 70, icon: djangoIcon },
  { name: "SEO", percentage: 85, icon: seoIcon },
];

const SkillCard = ({ name, percentage, icon, index, inView }) => {
  const radius = 30; // circle size
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000; // 1 second
      const increment = percentage / (duration / 16); // based on ~60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          start = percentage;
          clearInterval(timer);
        }
        setDisplayPercent(Math.floor(start));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, percentage]);

  return (
    <div
      className={`skill-card ${inView ? "fade-in" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Skill icon */}
      <div className="skill-icon">
        <img src={icon} alt={name} />
      </div>

      {/* Skill info */}
      <div className="skill-info">
        <h3>{name}</h3>
        <p>Professional experience</p>
      </div>

      {/* Circular percentage */}
      <div className="circle-progress">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="rgba(255,255,255,0.1)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="var(--secondary)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={inView ? strokeDashoffset : circumference}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{
              transition: "stroke-dashoffset 1s ease",
            }}
          />
        </svg>
        <span className="circle-text">{displayPercent}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className={`section ${inView ? "section-visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title" data-bg-text="Skills">
          My Skills
        </h2>
        <p className="section-subtitle">Technologies I'm proficient in</p>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              {...skill}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
