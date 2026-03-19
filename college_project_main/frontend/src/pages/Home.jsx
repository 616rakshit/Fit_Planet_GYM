import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SITE_DATA } from '../data/mock';
import { Zap, Users, Clock, Award, Check } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [enquiry, setEnquiry] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const shown = sessionStorage.getItem('homeEnquiryShown');
    if (!shown) {
      const timer = window.setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('homeEnquiryShown', '1');
      }, 800);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiry((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!enquiry.name.trim()) nextErrors.name = 'Name is required';
    if (!enquiry.phone.trim()) nextErrors.phone = 'Phone is required';
    if (!enquiry.email.trim()) nextErrors.email = 'Email is required';
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    navigate('/contact', { state: { name: enquiry.name, phone: enquiry.phone, email: enquiry.email } });
  };

  return (
    <div>
      {showModal && (
        <div style={styles.modalOverlay} aria-modal="true" role="dialog" aria-label="Enquiry Form">
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <div>
                <h3 style={{ margin: 0 }}>Quick Enquiry</h3>
                <p style={{ margin: '4px 0 8px', color: '#d9fb06', fontSize: '0.9rem' }}>
                  Enter your basic details and continue to enquiry.
                </p>
              </div>
              <button style={styles.closeButton} onClick={() => setShowModal(false)} aria-label="Close">×</button>
            </div>
            <form onSubmit={handleEnquirySubmit} style={{ display: 'grid', gap: '8px' }}>
              <input
                name="name"
                value={enquiry.name}
                onChange={handleEnquiryChange}
                placeholder="Name"
                style={{ ...styles.modalInput, ...(errors.name ? styles.inputError : {}) }}
              />
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
              <input
                name="phone"
                value={enquiry.phone}
                onChange={handleEnquiryChange}
                placeholder="Phone"
                style={{ ...styles.modalInput, ...(errors.phone ? styles.inputError : {}) }}
              />
              {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
              <input
                name="email"
                value={enquiry.email}
                onChange={handleEnquiryChange}
                placeholder="Email"
                style={{ ...styles.modalInput, ...(errors.email ? styles.inputError : {}) }}
              />
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
              <button className="btn-primary" type="submit" style={{ width: '100%' }}>Submit and Continue</button>
              <button type="button" className="btn-secondary" style={{ width: '100%' }} onClick={() => setShowModal(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section" style={styles.hero}>
        <div className="hero-bg" style={styles.heroBackground}>
          <img
            src={SITE_DATA.hero.image}
            alt="Gym Interior"
            style={styles.heroImage}
          />
          <div style={styles.heroOverlay}></div>
        </div>
        <div className="hero-content" style={styles.heroContent}>
          <h1 className="brand-display" style={styles.heroTitle}>
            {SITE_DATA.hero.title}
          </h1>
          <h2 className="heading-2" style={styles.heroSubtitle}>
            {SITE_DATA.hero.subtitle}
          </h2>
          <p className="body-large" style={styles.heroDescription}>
            {SITE_DATA.hero.description}
          </p>
          <div className="hero-buttons" style={styles.heroButtons}>
            <Link to="/membership" className="btn-primary">
              {SITE_DATA.hero.cta}
            </Link>
            <Link to="/contact" className="btn-secondary">
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whySection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            WHY CHOOSE US
          </h2>
          <div className="why-grid" style={styles.whyGrid}>
            {SITE_DATA.whyChooseUs.map((item, index) => {
              const icons = [
                <Zap size={40} color="#d9fb06" key={index} />,
                <Users size={40} color="#d9fb06" key={index} />,
                <Clock size={40} color="#d9fb06" key={index} />,
                <Award size={40} color="#d9fb06" key={index} />
              ];
              return (
                <div key={item.id} style={styles.whyCard}>
                  <div style={styles.whyIcon}>{icons[index]}</div>
                  <h3 className="heading-5" style={styles.whyTitle}>
                    {item.title}
                  </h3>
                  <p className="body-small" style={styles.whyDescription}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section style={styles.membershipPreview}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            MEMBERSHIP PLANS
          </h2>
          <div className="membership-grid" style={styles.membershipGrid}>
            {SITE_DATA.membershipPlans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  ...styles.planCard,
                  ...(plan.popular ? styles.planCardPopular : {})
                }}
              >
                {plan.popular && (
                  <div style={styles.popularBadge}>MOST POPULAR</div>
                )}

                <div style={styles.planHeader}>
                  <h3 className="heading-3" style={styles.planName}>
                    {plan.name}
                  </h3>
                  {plan.oldPrice && (
                    <div style={styles.oldPrice}>
                      <span style={styles.oldPriceText}>{plan.oldPrice}</span>
                    </div>
                  )}
                  <div style={styles.planPricing}>
                    <span style={styles.priceAmount}>{plan.price}</span>
                    <span style={styles.priceDuration}>/{plan.duration}</span>
                  </div>
                </div>

                <ul style={styles.featureList}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <Check size={20} color="#d9fb06" style={styles.checkIcon} />
                      <span style={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  VIEW DETAILS
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section style={styles.testimonialsSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            SUCCESS STORIES
          </h2>
          <div className="testimonials-grid" style={styles.testimonialsGrid}>
            {SITE_DATA.testimonials.map((testimonial) => (
              <div key={testimonial.id} style={styles.testimonialCard}>
                <div style={styles.quoteIcon}>"</div>
                <p className="body-medium" style={styles.testimonialText}>
                  {testimonial.text}
                </p>
                <p className="heading-5" style={styles.testimonialAuthor}>
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 className="heading-1" style={styles.ctaTitle}>
            READY TO START YOUR TRANSFORMATION?
          </h2>
          <p className="body-large" style={styles.ctaText}>
            Join hundreds of members who've already transformed their lives
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1.25em 2.5em' }}>
            GET STARTED TODAY
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    // Layout is handled via .hero-section in App.css
  },
  heroBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  heroImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0
  },
  heroOverlay: {
    opacity: 0.7,
    background: 'linear-gradient(135deg, #000, transparent)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  heroContent: {
    // Layout and spacing handled via .hero-content in App.css
  },
  heroTitle: {
    marginBottom: '16px'
  },
  heroSubtitle: {
    marginBottom: '24px',
    color: '#dfddd6'
  },
  heroDescription: {
    marginBottom: '32px',
    maxWidth: '600px'
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 9999,
    padding: '12px'
  },
  modalContent: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#1b1b1b',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.15)',
    padding: '18px',
    boxShadow: '0 18px 45px rgba(0,0,0,0.45)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px'
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.4rem',
    cursor: 'pointer'
  },
  modalInput: {
    width: '100%',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    backgroundColor: '#101010',
    color: '#fff',
    fontSize: '0.95rem',
    padding: '10px'
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: '0.8rem',
    margin: '0'
  },
  inputError: {
    borderColor: '#ff4d4d'
  },
  whySection: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  container: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 40px'
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  },
  whyCard: {
    backgroundColor: '#302f2c',
    padding: '40px 32px',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer'
  },
  whyIcon: {
    marginBottom: '20px'
  },
  whyTitle: {
    marginBottom: '12px',
    color: '#d9fb06'
  },
  whyDescription: {
    color: '#888680'
  },
  membershipPreview: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  membershipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
    gap: '40px',
    alignItems: 'stretch',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    justifyItems: 'center'
  },
  planCard: {
    backgroundColor: '#1a1c1b',
    padding: '40px 40px',
    borderRadius: '12px',
    border: '2px solid rgba(63, 72, 22, 0.5)',
    position: 'relative',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px'
  },
  planCardPopular: {
    borderColor: '#d9fb06',
    transform: 'scale(1.05)'
  },
  popularBadge: {
    position: 'absolute',
    top: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#d9fb06',
    color: '#1a1c1b',
    padding: '6px 15px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.1em'
  },
  planHeader: {
    marginBottom: '32px'
  },
  planName: {
    marginBottom: '16px',
    color: '#d9fb06',
    whiteSpace: 'nowrap'
  },
  planPricing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    gap: '8px'
  },
  oldPrice: {
    marginBottom: '8px'
  },
  oldPriceText: {
    fontSize: '1.25rem',
    color: '#888680',
    textDecoration: 'line-through',
    fontWeight: 400
  },
  priceAmount: {
    fontSize: '3.5rem',
    fontWeight: 900,
    color: '#d9fb06',
    lineHeight: 1
  },
  priceDuration: {
    fontSize: '1rem',
    color: '#888680'
  },
  featureList: {
    listStyle: 'none',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  checkIcon: {
    flexShrink: 0,
    marginTop: '2px'
  },
  featureText: {
    color: '#dfddd6',
    fontSize: '1rem',
    lineHeight: 1.5
  },
  trainersPreview: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  trainersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    marginBottom: '48px'
  },
  trainerCard: {
    backgroundColor: '#302f2c',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer'
  },
  trainerImageWrapper: {
    width: '100%',
    height: '320px',
    overflow: 'hidden'
  },
  trainerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  trainerInfo: {
    padding: '24px'
  },
  trainerSpecialization: {
    color: '#d9fb06',
    marginTop: '8px',
    marginBottom: '4px'
  },
  trainerExperience: {
    color: '#888680'
  },
  ctaCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  testimonialsSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  },
  testimonialCard: {
    backgroundColor: '#1a1c1b',
    padding: '32px',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    position: 'relative'
  },
  quoteIcon: {
    fontSize: '4rem',
    color: '#d9fb06',
    opacity: 0.3,
    lineHeight: 1,
    marginBottom: '16px'
  },
  testimonialText: {
    marginBottom: '24px',
    color: '#dfddd6'
  },
  testimonialAuthor: {
    color: '#d9fb06',
    fontSize: '1rem'
  },
  ctaSection: {
    padding: '120px 40px',
    backgroundColor: '#1a1c1b',
    textAlign: 'center'
  },
  ctaTitle: {
    marginBottom: '24px'
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
      .why-card:hover {
        transform: translateY(-8px);
        background-color: #3f4816;
      }
      .trainer-card:hover {
        transform: translateY(-8px);
        background-color: #3f4816;
      }
      .trainer-card:hover img {
        transform: scale(1.1);
      }
      .plan-card:hover {
        transform: scale(1.05);
        border-color: #d9fb06;
      }
    }
    .feature-item::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #d9fb06;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      .hero-content {
        padding: 80px 20px 60px !important;
      }
      .hero-buttons {
        flex-direction: column;
      }
      .btn-primary, .btn-secondary {
        width: 100%;
      }
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hoverStyles;
  document.head.appendChild(styleSheet);
}

// Apply classes dynamically
if (typeof document !== 'undefined') {
  setTimeout(() => {
    const whyCards = document.querySelectorAll('[style*="whyCard"]');
    whyCards.forEach(card => card.classList.add('why-card'));
    
    const trainerCards = document.querySelectorAll('[style*="trainerCard"]');
    trainerCards.forEach(card => card.classList.add('trainer-card'));
    
    const planCards = document.querySelectorAll('[style*="planCard"]');
    planCards.forEach(card => card.classList.add('plan-card'));
    
    const heroContent = document.querySelector('[style*="heroContent"]');
    if (heroContent) heroContent.classList.add('hero-content');
    
    const heroButtons = document.querySelector('[style*="heroButtons"]');
    if (heroButtons) heroButtons.classList.add('hero-buttons');
  }, 100);
}

export default Home;
