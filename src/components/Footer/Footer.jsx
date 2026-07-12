import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Info & MSME */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <img src="/favicon.png" alt="Albedrix Logo" />
              <div>
                <h3>ALBEDRIX SYSTEMS</h3>
                <p>Engineering the Future</p>
              </div>
            </div>

            <div className="footer-msme">
              <img src="/MSME.png" alt="MSME Logo" className="msme-logo" />
              <span>Registered Company</span>
            </div>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/albedrix-systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/albedrixsystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/albedrix_systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:albedrixsystems@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick links list */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-vertical-links">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
            </div>
          </div>

          {/* Capabilities/Services */}
          <div className="footer-column">
            <h4>Capabilities</h4>
            <div className="footer-vertical-links">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Embedded Systems</Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Edge AI Integration</Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>IoT Platforms</Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Full Stack Engineering</Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Intelligent Automation</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <div className="footer-contact-info">
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:albedrixsystems@gmail.com">albedrixsystems@gmail.com</a>
              </p>
              <p>
                <i className="fab fa-linkedin-in"></i>
                <a href="https://www.linkedin.com/company/albedrix-systems" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
              <p>
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/albedrix_systems" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Albedrix Systems — All rights reserved.</p>
          <p className="developer-credit">
            Designed & Developed by <a href="https://abubackar.netlify.app/" target="_blank" rel="noopener noreferrer">Abubackar Siddiq S</a> & <a href="https://nikeshbabu-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Nikesh Babu S</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
