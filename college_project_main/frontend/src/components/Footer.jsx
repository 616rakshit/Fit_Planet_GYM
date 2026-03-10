import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* About Section */}
          <div style={styles.section}>
            <h3 style={styles.heading}>FIT PLANET</h3>
            <p style={styles.text}>
              Transform your fitness journey at our premium gym, where expert personal trainers, state-of-the-art equipment, and customized workout plans help you achieve real results. We offer strength training, weight loss programs, muscle building, cardio workouts, functional training, and group fitness classes in a motivating and hygienic environment. Whether you’re a beginner or a professional athlete, our modern fitness center provides flexible membership plans, nutrition guidance, and personal coaching to support your health, endurance, and overall wellness goals.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/_fit_planet/" style={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" style={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <h4 style={styles.subheading}>QUICK LINKS</h4>
            <ul style={styles.linkList}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/membership" style={styles.link}>Membership</Link></li>
              <li><Link to="/trainers" style={styles.link}>Trainers</Link></li>
              <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.section}>
            <h4 style={styles.subheading}>CONTACT</h4>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <MapPin size={18} color="#d9fb06" />
                <span style={styles.contactText}>B-3/83, Paschim Vihar, Delhi-110063, near Laxmi Optical
                </span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={18} color="#d9fb06" />
                <span style={styles.contactText}>+91 9650161386</span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={18} color="#d9fb06" />
                <span style={styles.contactText}>fitplanet1386@gmail.com</span>
              </div>
              <div style={styles.contactItem}>
                <Clock size={18} color="#d9fb06" />
                <span style={styles.contactText}>18 HRS Access • Open Every Day</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2024 Fit Planet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);
};

const styles = {
  footer: {
    backgroundColor: '#1a1c1b',
    borderTop: '1px solid rgba(63, 72, 22, 0.5)',
    padding: '60px 0 20px'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: '#d9fb06',
    letterSpacing: '0.05em',
    marginBottom: '8px'
  },
  subheading: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#d9fb06',
    letterSpacing: '0.1em',
    marginBottom: '8px'
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#888680',
    marginBottom: '12px'
  },
  socialLinks: {
    display: 'flex',
    gap: '16px'
  },
  socialLink: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#302f2c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d9fb06',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer'
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  link: {
    color: '#888680',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  contactText: {
    fontSize: '0.95rem',
    color: '#888680',
    lineHeight: 1.5
  },
  bottom: {
    paddingTop: '20px',
    borderTop: '1px solid rgba(63, 72, 22, 0.3)',
    textAlign: 'center'
  },
  copyright: {
    fontSize: '0.875rem',
    color: '#888680'
  }
};

// Hover effects via CSS
if (typeof document !== 'undefined') {
  const hoverStyles = `
    footer a:hover {
      color: #d9fb06 !important;
    }
    footer a[aria-label]:hover {
      transform: scale(1.1);
      background-color: #3f4816 !important;
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hoverStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;
