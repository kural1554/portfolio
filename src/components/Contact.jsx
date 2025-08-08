import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaInstagram, FaDribbble, FaYoutube,FaGithubSquare,FaLinkedin } from 'react-icons/fa';
import ContactImage from '../assets/contact-image.png';
import { SiGmail } from 'react-icons/si';
const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" ref={ref} className={`contact-section ${inView ? 'section-visible' : ''}`}>
      <div className="contact-wrapper">
        
        {/* LEFT CARD */}
        <div className="contact-card">
          <img src={ContactImage} alt="Profile" className="card-image" />
          <div className="card-content">
            <h3>Kuralarasan</h3>
            <p className="job-title">Programmer, Designer & SEO Analyst</p>
            <div className="signature">kural</div>

            <div className="social-links">
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaGithubSquare /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><SiGmail /></a>

            </div>

            <div className="card-contact">
              <p><FaPaperPlane /> Kuralarasan1554@gmail.com</p>
              <p><FaPhone /> +91 7708061554</p>
              <p><FaMapMarkerAlt /> Karur, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-side">
          <h2>Fragen kostet nichts</h2>
          <p>Schreibe mir unkompliziert über Social Media oder nutze das Kontaktformular.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="E-Mail*" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message*" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
