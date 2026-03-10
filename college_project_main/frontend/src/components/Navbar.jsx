import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'MEMBERSHIP', path: '/membership' },
  { name: 'TRAINERS', path: '/trainers' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' }];


  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <Dumbbell size={32} color="#d9fb06" />
          <span style={styles.logoText}>FIT PLANET</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            style={{
              ...styles.navLink,
              ...(isActive(link.path) ? styles.navLinkActive : {})
            }}>

              {link.name}
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          style={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">

          {isOpen ? <X size={28} color="#d9fb06" /> : <Menu size={28} color="#d9fb06" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen &&
      <div style={styles.mobileNav}>
          {navLinks.map((link) =>
        <Link
          key={link.path}
          to={link.path}
          style={{
            ...styles.mobileNavLink,
            ...(isActive(link.path) ? styles.mobileNavLinkActive : {})
          }}
          onClick={() => setIsOpen(false)}>

              {link.name}
            </Link>
        )}
        </div>
      }
    </nav>);

};

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#1a1c1b',
    borderBottom: '1px solid rgba(63, 72, 22, 0.5)',
    padding: '20px 0'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none'
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: '#d9fb06',
    letterSpacing: '0.05em'
  },
  desktopNav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  navLink: {
    color: '#dfddd6',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    transition: 'color 0.3s ease',
    padding: '8px 0'
  },
  navLinkActive: {
    color: '#d9fb06'
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  },
  mobileNav: {
    display: 'none',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px 40px',
    backgroundColor: '#302f2c',
    borderTop: '1px solid rgba(63, 72, 22, 0.5)'
  },
  mobileNavLink: {
    color: '#dfddd6',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    padding: '12px 0',
    transition: 'color 0.3s ease'
  },
  mobileNavLinkActive: {
    color: '#d9fb06'
  }
};

// Media query handling via CSS
const mediaQueryStyles = `
  @media (max-width: 768px) {
    nav > div > div:nth-child(2) {
      display: none !important;
    }
    nav > div > button {
      display: block !important;
    }
    nav > div:last-child {
      display: flex !important;
    }
  }
  @media (min-width: 769px) {
    nav > div > div:nth-child(2) {
      display: flex !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mediaQueryStyles;
  document.head.appendChild(styleSheet);
}

export default Navbar;
