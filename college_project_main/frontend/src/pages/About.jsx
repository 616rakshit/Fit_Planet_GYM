import React, { useEffect, useRef, useState } from 'react';
import { SITE_DATA } from '../data/mock';
import { CheckCircle } from 'lucide-react';

const STATS_DATA = [
  { value: 300, suffix: '+', label: 'Active Members' },
  { value: 450, suffix: '+', label: 'Positive Result' },
  { value: 7, suffix: '+', label: 'Experience' },
  { value: 100, suffix: '%', label: 'Result' }
];

const About = () => {
  const statsSectionRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState(STATS_DATA.map(() => 0));

  useEffect(() => {
    let rafId;
    let hasAnimated = false;

    const startAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 1500;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);

        setAnimatedStats(
          STATS_DATA.map((stat) => Math.floor(stat.value * progress))
        );

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="heading-1" style={styles.pageTitle}>
            ABOUT FIT PLANET
          </h1>
          <p className="body-large" style={styles.heroText}>
            Transforming Lives Through Strength, Fitness & Discipline
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <div style={styles.contentGrid}>
            <div style={styles.textBlock}>
              <h2 className="heading-2" style={styles.sectionTitle}>
                OUR MISSION
              </h2>
              <p className="body-medium" style={styles.missionText}>
                {SITE_DATA.about.mission}
              </p>
            </div>
            <div style={styles.textBlock}>
              <h2 className="heading-2" style={styles.sectionTitle}>
                OUR VISION
              </h2>
              <p className="body-medium" style={styles.missionText}>
                {SITE_DATA.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section style={styles.facilitiesSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitleCenter}>
            WORLD-CLASS FACILITIES
          </h2>
          <div style={styles.facilitiesGrid}>
            {SITE_DATA.about.facilities.map((facility, index) => (
              <div key={index} style={styles.facilityCard}>
                <CheckCircle size={24} color="#d9fb06" style={styles.facilityIcon} />
                <p className="body-medium" style={styles.facilityText}>
                  {facility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.valuesSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitleCenter}>
            OUR VALUES
          </h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 className="heading-3" style={styles.valueTitle}>EXCELLENCE</h3>
              <p className="body-small" style={styles.valueText}>
                We strive for the highest standards in equipment, training, and member experience.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 className="heading-3" style={styles.valueTitle}>COMMUNITY</h3>
              <p className="body-small" style={styles.valueText}>
                Building a supportive environment where everyone motivates and inspires each other.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 className="heading-3" style={styles.valueTitle}>INTEGRITY</h3>
              <p className="body-small" style={styles.valueText}>
                Honest guidance, transparent pricing, and genuine care for every member's journey.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 className="heading-3" style={styles.valueTitle}>INNOVATION</h3>
              <p className="body-small" style={styles.valueText}>
                Continuously evolving with the latest fitness trends and training methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection} ref={statsSectionRef}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {STATS_DATA.map((stat, index) => (
              <div key={stat.label} style={styles.statCard}>
                <div style={styles.statNumber}>
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
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
    maxWidth: '1400px',
    margin: '0 auto'
  },
  missionSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '60px'
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  sectionTitle: {
    color: '#d9fb06'
  },
  sectionTitleCenter: {
    textAlign: 'center',
    marginBottom: '60px',
    color: '#d9fb06'
  },
  missionText: {
    color: '#dfddd6',
    lineHeight: 1.8
  },
  facilitiesSection: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  facilitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  },
  facilityCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px',
    backgroundColor: '#302f2c',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease'
  },
  facilityIcon: {
    flexShrink: 0
  },
  facilityText: {
    color: '#dfddd6'
  },
  valuesSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(400px, 300px))',
    justifyContent: 'center',
    gap: '32px'
  },
  valueCard: {
    padding: '40px 50px',
    backgroundColor: '#1a1c1b',
    borderRadius: '8px',
    border: '2px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    cursor: 'pointer'
  },
  valueTitle: {
    marginBottom: '16px',
    color: '#d9fb06',
    textAlign: 'center'
  },
  valueText: {
    color: '#888680',
    lineHeight: 1.6
  },
  statsSection: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px'
  },
  statCard: {
    textAlign: 'center',
    padding: '32px',
    backgroundColor: '#302f2c',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease'
  },
  statNumber: {
    fontSize: '3.5rem',
    fontWeight: 900,
    color: '#d9fb06',
    marginBottom: '12px',
    lineHeight: 1
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#dfddd6',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }
};

// Hover effects
if (typeof document !== 'undefined') {
  const hoverStyles = `
    @media (min-width: 769px) {
      .facility-card:hover {
        transform: translateX(8px);
        background-color: #3f4816;
      }
      .value-card:hover {
        transform: translateY(-8px);
        border-color: #d9fb06;
      }
      .stat-card:hover {
        transform: scale(1.05);
      }
    }
    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr !important;
      }
      .values-grid {
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
    document.querySelectorAll('[style*="facilityCard"]').forEach(el => el.classList.add('facility-card'));
    document.querySelectorAll('[style*="valueCard"]').forEach(el => el.classList.add('value-card'));
    document.querySelectorAll('[style*="statCard"]').forEach(el => el.classList.add('stat-card'));
    document.querySelectorAll('[style*="contentGrid"]').forEach(el => el.classList.add('content-grid'));
    document.querySelectorAll('[style*="valuesGrid"]').forEach(el => el.classList.add('values-grid'));
  }, 100);
}

export default About;
