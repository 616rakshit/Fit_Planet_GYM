import React from 'react';
import { SITE_DATA } from '../data/mock';

const Trainers = () => {
  // group trainers by category – this lets us render each column separately
  const grouped = SITE_DATA.trainers.reduce((acc, t) => {
    const cat = t.category || 'General Trainer';
    (acc[cat] = acc[cat] || []).push(t);
    return acc;
  }, {});
  const seoBlurb = {
    'General Trainer':
      'Our general fitness trainer delivers full-body workout plans, strength training guidance, and safe technique coaching to help you build muscle, lose fat, and improve endurance with consistent, results-driven programming.',
    'Personal Trainer':
      'Our personal trainer provides one-on-one coaching, tailored workout programs, and goal-based accountability for weight loss, muscle gain, mobility, and long-term lifestyle transformation.'
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="heading-1" style={styles.pageTitle}>
            MEET OUR TRAINERS
          </h1>
          <p className="body-large" style={styles.heroText}>
            Certified professionals dedicated to your fitness success
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section style={styles.trainersSection}>
        <div style={styles.container}>
          {/* two categories side by side */}
          <div style={styles.categoryWrapper}>
            {Object.entries(grouped).map(([cat, trainers]) => (
              <div key={cat} style={styles.categoryColumn}>
                <h2 className="heading-3" style={styles.categoryTitle}>
                  {cat.toUpperCase()}
                </h2>
                <div style={styles.trainersGrid}>
                  {trainers.map(trainer => (
                    <div key={trainer.id} style={styles.trainerCard}>
                      <div style={styles.seoBlock}>
                        <p className="body-small" style={styles.seoText}>
                          {seoBlurb[trainer.category] || trainer.bio}
                        </p>
                      </div>
                      {/* Removed name/specialization/experience per request */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section style={styles.qualificationsSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            TRAINER QUALIFICATIONS
          </h2>
          <div style={styles.qualGrid}>
            <div style={styles.qualCard}>
              <h3 className="heading-4" style={styles.qualTitle}>
                CERTIFIED PROFESSIONALS
              </h3>
              <p className="body-small" style={styles.qualText}>
                All trainers hold nationally recognized certifications and undergo continuous education
              </p>
            </div>
            <div style={styles.qualCard}>
              <h3 className="heading-4" style={styles.qualTitle}>
                SPECIALIZED EXPERTISE
              </h3>
              <p className="body-small" style={styles.qualText}>
                Each trainer specializes in specific areas to provide expert guidance for your goals
              </p>
            </div>
            <div style={styles.qualCard}>
              <h3 className="heading-4" style={styles.qualTitle}>
                PROVEN RESULTS
              </h3>
              <p className="body-small" style={styles.qualText}>
                Track record of helping hundreds of members achieve their fitness transformations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.ctaTitle}>
            BOOK A PERSONAL TRAINING SESSION
          </h2>
          <p className="body-large" style={styles.ctaText}>
            Get personalized attention and achieve faster results
          </p>
          <a href="/contact" className="btn-primary" style={{ fontSize: '1.125rem' }}>
            SCHEDULE CONSULTATION
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
  categoryWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '60px'
  },
  categoryColumn: {
    backgroundColor: '#1a1c1b',
    borderRadius: '12px',
    padding: '24px'
  },
  categoryTitle: {
    marginBottom: '24px',
    textAlign: 'center',
    color: '#d9fb06'
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
  trainersSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  trainersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px'
  },
  trainerCard: {
    backgroundColor: '#1a1c1b',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    cursor: 'pointer'
  },
  seoBlock: {
    position: 'relative',
    width: '100%',
    minHeight: '220px',
    padding: '28px',
    backgroundColor: '#151615',
    borderBottom: '1px solid rgba(63, 72, 22, 0.5)',
    display: 'flex',
    alignItems: 'center'
  },
  seoText: {
    color: '#dfddd6',
    lineHeight: 1.7
  },
  trainerContent: {
    padding: '32px'
  },
  trainerName: {
    marginBottom: '12px',
    color: '#d9fb06'
  },
  specialization: {
    color: '#dfddd6',
    marginBottom: '8px'
  },
  experience: {
    color: '#888680'
  },
  qualificationsSection: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '60px',
    color: '#d9fb06'
  },
  qualGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  },
  qualCard: {
    padding: '40px 32px',
    backgroundColor: '#302f2c',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease'
  },
  qualTitle: {
    marginBottom: '16px',
    color: '#d9fb06'
  },
  qualText: {
    color: '#888680',
    lineHeight: 1.6
  },
  ctaSection: {
    padding: '96px 40px',
    backgroundColor: '#302f2c',
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
      .trainer-card:hover {
        transform: translateY(-8px);
        border-color: #d9fb06;
      }
      .qual-card:hover {
        transform: translateY(-8px);
        background-color: #3f4816;
      }
    }
    @media (max-width: 768px) {
      .trainers-grid, .qual-grid {
        grid-template-columns: 1fr !important;
      }
      .category-wrapper {
        grid-template-columns: 1fr !important;
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
    document.querySelectorAll('[style*="trainerCard"]').forEach(el => el.classList.add('trainer-card'));
    document.querySelectorAll('[style*="qualCard"]').forEach(el => el.classList.add('qual-card'));
    document.querySelectorAll('[style*="trainersGrid"]').forEach(el => el.classList.add('trainers-grid'));
    document.querySelectorAll('[style*="qualGrid"]').forEach(el => el.classList.add('qual-grid'));
    document.querySelectorAll('[style*="categoryWrapper"]').forEach(el => el.classList.add('category-wrapper'));
  }, 100);
}

export default Trainers;
