import React, { useState } from 'react';
import { SITE_DATA } from '../data/mock';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.plan) newErrors.plan = 'Please select a plan';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Mock submission (will be replaced with API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        plan: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 className="heading-1" style={styles.pageTitle}>
            GET IN TOUCH
          </h1>
          <p className="body-large" style={styles.heroText}>
            Start your fitness journey today. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.contentGrid}>
            {/* Contact Information */}
            <div style={styles.infoColumn}>
              <h2 className="heading-3" style={styles.columnTitle}>
                VISIT US
              </h2>
              
              <div style={styles.contactDetails}>
                <div style={styles.contactItem}>
                  <div style={styles.iconWrapper}>
                    <MapPin size={24} color="#d9fb06" />
                  </div>
                  <div>
                    <p className="heading-5" style={styles.contactLabel}>Address</p>
                    <p className="body-small" style={styles.contactValue}>
                      {SITE_DATA.contact.address}
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.iconWrapper}>
                    <Phone size={24} color="#d9fb06" />
                  </div>
                  <div>
                    <p className="heading-5" style={styles.contactLabel}>Phone</p>
                    <p className="body-small" style={styles.contactValue}>
                      {SITE_DATA.contact.phone}
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.iconWrapper}>
                    <Mail size={24} color="#d9fb06" />
                  </div>
                  <div>
                    <p className="heading-5" style={styles.contactLabel}>Email</p>
                    <p className="body-small" style={styles.contactValue}>
                      {SITE_DATA.contact.email}
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.iconWrapper}>
                    <Clock size={24} color="#d9fb06" />
                  </div>
                  <div>
                    <p className="heading-5" style={styles.contactLabel}>Hours</p>
                    <p className="body-small" style={styles.contactValue}>
                      {SITE_DATA.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={styles.mapContainer}>
                <iframe
                  src={SITE_DATA.contact.mapEmbed}
                  width="100%"
                  height="300"
                  style={styles.map}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gym Location"
                ></iframe>
              </div>
            </div>

            {/* Enquiry Form */}
            <div style={styles.formColumn}>
              <h2 className="heading-3" style={styles.columnTitle}>
                SEND US AN ENQUIRY
              </h2>

              {isSuccess && (
                <div style={styles.successMessage}>
                  <CheckCircle size={24} color="#d9fb06" />
                  <p>Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      ...(errors.name ? styles.inputError : {})
                    }}
                    placeholder="Your full name"
                  />
                  {errors.name && <span style={styles.errorText}>{errors.name}</span>}
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.label}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        ...styles.input,
                        ...(errors.phone ? styles.inputError : {})
                      }}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
                  </div>

                  <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        ...styles.input,
                        ...(errors.email ? styles.inputError : {})
                      }}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="plan" style={styles.label}>
                    Interested Plan *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    style={{
                      ...styles.select,
                      ...(errors.plan ? styles.inputError : {})
                    }}
                  >
                    <option value="">Select a plan</option>
                    <option value="monthly">Monthly - ₹2,999</option>
                    <option value="quarterly">Quarterly - ₹7,999</option>
                    <option value="yearly">Yearly - ₹24,999</option>
                  </select>
                  {errors.plan && <span style={styles.errorText}>{errors.plan}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Tell us about your fitness goals..."
                    rows="5"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '1.125rem' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT ENQUIRY'}
                </button>
              </form>
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
  contactSection: {
    padding: '96px 0',
    backgroundColor: '#302f2c'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '60px'
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  columnTitle: {
    marginBottom: '8px',
    color: '#d9fb06'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  contactItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
  },
  iconWrapper: {
    flexShrink: 0,
    padding: '8px'
  },
  contactLabel: {
    marginBottom: '4px',
    color: '#d9fb06'
  },
  contactValue: {
    color: '#dfddd6',
    lineHeight: 1.6
  },
  mapContainer: {
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(63, 72, 22, 0.5)'
  },
  map: {
    border: 'none',
    display: 'block'
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    backgroundColor: '#3f4816',
    borderRadius: '8px',
    border: '2px solid #d9fb06',
    color: '#dfddd6'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#dfddd6',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  input: {
    padding: '14px 16px',
    backgroundColor: '#1a1c1b',
    border: '2px solid rgba(63, 72, 22, 0.5)',
    borderRadius: '8px',
    color: '#dfddd6',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Inter, Arial, sans-serif'
  },
  select: {
    padding: '14px 16px',
    backgroundColor: '#1a1c1b',
    border: '2px solid rgba(63, 72, 22, 0.5)',
    borderRadius: '8px',
    color: '#dfddd6',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Inter, Arial, sans-serif',
    cursor: 'pointer'
  },
  textarea: {
    padding: '14px 16px',
    backgroundColor: '#1a1c1b',
    border: '2px solid rgba(63, 72, 22, 0.5)',
    borderRadius: '8px',
    color: '#dfddd6',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Inter, Arial, sans-serif',
    resize: 'vertical',
    minHeight: '120px'
  },
  inputError: {
    borderColor: '#ff4444'
  },
  errorText: {
    fontSize: '0.85rem',
    color: '#ff4444'
  }
};

// Focus and hover effects
if (typeof document !== 'undefined') {
  const interactionStyles = `
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #d9fb06 !important;
    }
    input::placeholder, textarea::placeholder {
      color: #888680;
    }
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr !important;
      }
      .form-row {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = interactionStyles;
  document.head.appendChild(styleSheet);
}

// Apply classes
if (typeof document !== 'undefined') {
  setTimeout(() => {
    document.querySelectorAll('[style*="contentGrid"]').forEach(el => el.classList.add('content-grid'));
    document.querySelectorAll('[style*="formRow"]').forEach(el => el.classList.add('form-row'));
  }, 100);
}

export default Contact;
