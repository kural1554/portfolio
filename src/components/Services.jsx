import React from 'react';
// We don't need 'Element' anymore
import { useInView } from 'react-intersection-observer';
import { FaPaintBrush, FaCode, FaChartLine } from 'react-icons/fa';

const servicesData = [
  { icon: <FaPaintBrush />, title: "WEB DESIGN" },
  { icon: <FaCode />, title: "WEB DEVELOPER" },
  { icon: <FaChartLine />, title: "SEO ANALYSIS" },
];

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    // CHANGE: Use <section> with an id and the ref
    <section id="services" ref={ref} className={`section ${inView ? 'section-visible' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-bg-text="Services">Services</h2>
        <p className="section-subtitle">I offer a range of services to build modern, efficient, and user-friendly web applications.</p>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;