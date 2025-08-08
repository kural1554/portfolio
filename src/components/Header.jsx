import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css"; // Import the new CSS file

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' }, 
  { to: 'education', label: 'Education' }, 
  { to: 'services', label: 'Services' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for navbar scroll effect
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to render navigation links for both desktop and mobile
  const renderNavLinks = () =>
    navLinks.map((link) => (
      <li key={link.to}>
        <Link
          className="nav-link"
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          onClick={closeMenu} // Close menu on link click
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="logo-container">
          <div className="logo-icon-wrapper">
            <div className="blur-bg"></div>
            <div className="logo-icon">
              <div className="logo-icon-inner">
                <div className="gradient-overlay"></div>
                <span className="logo-text-initials">K</span>
              </div>
            </div>
          </div>
          <span className="logo-text">KURALARASAN</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">{renderNavLinks()}</ul>

        {/* Mobile Navigation Button */}
        <button
          id="mobile-menu-button"
          className={isMenuOpen ? "active" : ""}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger-lines">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>{renderNavLinks()}</ul>
      </div>
    </header>
  );
};

export default Header;
