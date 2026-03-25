import React, { useState } from 'react';
import { SITE_DATA } from '../data/mock';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="heading-1" style={styles.pageTitle}>
            MEMBERSHIP PLANS
          </h1>
          <p className="body-large" style={styles.heroText}>
            Choose the plan that fits your fitness journey
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricingSection}>
        <div style={styles.container}>
          <div className="plans-grid" style={styles.plansGrid}>
            {SITE_DATA.membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                style={{
                  ...styles.planCard,
                  ...(plan.popular ? styles.planCardPopular : {}),
                  ...(selectedPlan === plan.id ? styles.planCardSelected : {})
                }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div style={styles.popularBadge}>MOST POPULAR</div>
                )}
                
                <div style={styles.planHeader}>
                  <h2 className="heading-3" style={styles.planName}>
                    {plan.name}
                  </h2>
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

                <ul style={styles.featuresList}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <Check size={20} color="#d9fb06" style={styles.checkIcon} />
                      <span style={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  ENQUIRE NOW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            ALL MEMBERSHIPS INCLUDE
          </h2>
          <div className="benefits-grid" style={styles.benefitsGrid}>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                ALL YEAR ACCESS
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Work out on your schedule with round-the-clock gym access
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                CERTIFIED TRAINERS SUPPORT
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Guidance from certified fitness professionals to help you train safely and effectively.
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                FREE WIFI
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Stay connected with high-speed internet throughout the facility
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                PARKING
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Complimentary parking for all members
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                STORAGE SPACE
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Secure storage for your belongings during workouts
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                POSING ROOM
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Clean and modern facilities for your posing session 
              </p>
            </div>
            <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                DIET & NUTRITION GUIDANCE
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Basic nutrition tips to support weight loss and muscle gain.
              </p>
            </div>
             <div style={styles.benefitCard}>
              <h3 className="heading-4" style={styles.benefitTitle}>
                HYGIENIC ENVIRONMENT
              </h3>
              <p className="body-small" style={styles.benefitText}>
                Clean and sanitized workout areas for a safe fitness experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <h2 className="heading-2" style={styles.sectionTitle}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="faq-grid" style={styles.faqGrid}>
            <div style={styles.faqItem}>
              <h3 className="heading-5" style={styles.faqQuestion}>
                What are your gym membership plans and pricing options?
              </h3>
              <p className="body-small" style={styles.faqAnswer}>
                We offer flexible monthly, quarterly, and yearly membership plans at affordable prices. Contact us for the latest pricing details and special offers!
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 className="heading-5" style={styles.faqQuestion}>
               Do you help with weight loss and muscle gain programs?
              </h3>
              <p className="body-small" style={styles.faqAnswer}>
                Absolutely, we provide structured programs for weight loss, muscle gain, and body transformation. Our certified trainers will create a personalized fitness plan tailored to your goals and guide you every step of the way.
              </p>  
            </div>
            <div style={styles.faqItem}>
              <h3 className="heading-5" style={styles.faqQuestion}>
                What equipment is available in the gym?
              </h3>
              <p className="body-small" style={styles.faqAnswer}>
                We provide modern cardio machines and a fully equipped strength training area.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 className="heading-5" style={styles.faqQuestion}>
                Do you offer personal training sessions?
              </h3>
              <p className="body-small" style={styles.faqAnswer}>
                Yes, certified personal trainers are available for customized one-on-one training. Contact us to schedule a session and get expert guidance on your fitness journey.
              </p>
            </div>
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
  maxWidth: '1400px',   // ✅ reduce from 1800
  margin: '0 auto',
  padding: '0 20px'
},
pageTitle: {
  marginBottom: '24px',
  fontSize: 'clamp(28px, 5vw, 56px)', // ✅ responsive size
  textAlign: 'center',
  lineHeight: 1.2,
},
  heroText: {
    color: '#888680',
    maxWidth: '700px',
    margin: '0 auto'
  },
  pricingSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c',
    display: 'flex',
    justifyContent: 'center'
  },
plansGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  width: '100%',
  maxWidth: '1200px',   // ✅ controls layout center
  margin: '0 auto',
  justifyItems: 'center'
},
 planCard: {
  backgroundColor: '#1a1c1b',
  padding: '40px 30px',
  borderRadius: '12px',
  border: '2px solid rgba(63, 72, 22, 0.5)',
  position: 'relative',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  maxWidth: '320px',   // ✅ important for proper alignment
},
  planCardPopular: {
    borderColor: '#d9fb06',
    transform: 'scale(1.05)'
  },
  planCardSelected: {
    borderColor: '#d9fb06',
    backgroundColor: '#302f2c',
    transform: 'scale(1.02)',
    boxShadow: '0 12px 30px rgba(217, 251, 6, 0.28)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
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
  featuresList: {
    listStyle: 'none',
    marginBottom: '40px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
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
  benefitsSection: {
    padding: '96px 0',
    backgroundColor: '#1a1c1b'
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '60px',
    color: '#d9fb06'
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px'
  },
  benefitCard: {
    padding: '32px',
    backgroundColor: '#302f2c',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease'
  },
  benefitTitle: {
    marginBottom: '12px',
    color: '#d9fb06'
  },
  benefitText: {
    color: '#888680',
    lineHeight: 1.6
  },
  faqSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '32px'
  },
  faqItem: {
    padding: '32px',
    backgroundColor: '#1a1c1b',
    borderRadius: '8px',
    border: '1px solid rgba(63, 72, 22, 0.5)'
  },
  faqQuestion: {
    marginBottom: '16px',
    color: '#d9fb06'
  },
  faqAnswer: {
    color: '#888680',
    lineHeight: 1.6
  }
};

// Hover effects
if (typeof document !== 'undefined') {
const hoverStyles = `
  @media (min-width: 1024px) {
    .plan-card:hover {
      transform: scale(1.05);
      border-color: #d9fb06;
    }
  }

  @media (max-width: 1024px) {
    .plans-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  @media (max-width: 768px) {
    .plans-grid {
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
    document.querySelectorAll('[style*="planCard"]').forEach(el => el.classList.add('plan-card'));
    document.querySelectorAll('[style*="benefitCard"]').forEach(el => el.classList.add('benefit-card'));
    document.querySelectorAll('[style*="plansGrid"]').forEach(el => el.classList.add('plans-grid'));
    document.querySelectorAll('[style*="faqGrid"]').forEach(el => el.classList.add('faq-grid'));
  }, 100);
}

export default Membership;
