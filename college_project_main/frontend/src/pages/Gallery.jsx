import React, { useState } from 'react';
import { SITE_DATA } from '../data/mock';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="heading-1" style={styles.pageTitle}>
            GALLERY
          </h1>
          <p className="body-large" style={styles.heroText}>
            Experience our state-of-the-art facilities and vibrant community
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={styles.gallerySection}>
        <div style={styles.container}>
          <div style={styles.galleryGrid}>
            {SITE_DATA.gallery.map((item) => (
              <div
                key={item.id}
                style={styles.galleryItem}
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={styles.galleryImage}
                />
                <div style={styles.galleryOverlay}>
                  <span style={styles.overlayText}>{item.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} color="#d9fb06" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              style={styles.lightboxImage}
            />
            <p style={styles.lightboxCaption}>{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.ctaTitle}>
            VISIT US TODAY
          </h2>
          <p className="body-large" style={styles.ctaText}>
            Experience our facilities firsthand with a free tour
          </p>
          <a href="/contact" className="btn-primary" style={{ fontSize: '1.125rem' }}>
            SCHEDULE YOUR VISIT
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh'
  },
  hero: {
    padding: '120px 0 80px',
    backgroundColor: '#1a1c1b',
    textAlign: 'center'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px'
  },
  pageTitle: {
    marginBottom: '24px'
  },
  heroText: {
    color: '#888680',
    maxWidth: '700px',
    margin: '0 auto'
  },
  gallerySection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  },
  galleryItem: {
    position: 'relative',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '8px',
    cursor: 'pointer',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease'
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(26, 28, 27, 0.95), transparent)',
    padding: '40px 20px 20px',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  overlayText: {
    color: '#d9fb06',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  lightboxContent: {
    position: 'relative',
    maxWidth: '1200px',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  closeButton: {
    position: 'absolute',
    top: '-60px',
    right: '0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    transition: 'transform 0.3s ease'
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '8px'
  },
  lightboxCaption: {
    color: '#d9fb06',
    fontSize: '1.125rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  ctaSection: {
    padding: '96px 40px',
    backgroundColor: '#1a1c1b',
    textAlign: 'center'
  },
  ctaTitle: {
    marginBottom: '24px',
    color: '#d9fb06'
  },
  ctaText: {
    marginBottom: '40px',
    color: '#888680'
  }
};

// Hover effects
if (typeof document !== 'undefined') {
  const hoverStyles = `
    @media (min-width: 769px) {
      .gallery-item:hover {
        transform: scale(1.02);
      }
      .gallery-item:hover img {
        transform: scale(1.1);
      }
      .gallery-item:hover .gallery-overlay {
        opacity: 1;
      }
      .close-button:hover {
        transform: scale(1.1);
      }
    }
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
      }
      .gallery-item {
        height: 250px !important;
      }
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hoverStyles;
  document.head.appendChild(styleSheet);
}

// Apply classes
if (typeof document !== 'undefined') {
  setTimeout(() => {
    document.querySelectorAll('[style*="galleryOverlay"]').forEach(el => el.classList.add('gallery-overlay'));
    document.querySelectorAll('[style*="closeButton"]').forEach(el => el.classList.add('close-button'));
    document.querySelectorAll('[style*="galleryGrid"]').forEach(el => el.classList.add('gallery-grid'));
  }, 100);
}

export default Gallery;
