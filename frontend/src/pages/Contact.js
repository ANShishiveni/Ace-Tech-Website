import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    'General Inquiry',
    'Sales & Pricing',
    'Technical Support',
    'Partnership Opportunities',
    'Job Opportunities',
    'Media & Press',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSelectedSubject(value);
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setSelectedSubject('');
    }, 3000);
  };

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@acetech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'New York',
      country: 'United States',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (212) 555-0456',
      email: 'nyc@acetech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Digital Lane, London, EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@acetech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1 style={{ marginBottom: '24px' }}>
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Ready to start your next project? Have questions about our services? 
              We'd love to hear from you. Let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card">
                <h2 style={{ marginBottom: '32px' }}>Send us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center',
                      padding: '40px 20px'
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      color: 'white'
                    }}>
                      <FiCheck size={40} />
                    </div>
                    <h3 style={{ marginBottom: '16px', color: '#10b981' }}>
                      Message Sent Successfully!
                    </h3>
                    <p style={{ color: '#6b7280' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gap: '24px' }}>
                      <div className="grid grid-2" style={{ gap: '20px' }}>
                        <div>
                          <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#374151'
                          }}>
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={{
                              width: '100%',
                              padding: '16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '12px',
                              fontSize: '1rem',
                              outline: 'none'
                            }}
                          />
                        </div>
                        
                        <div>
                          <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#374151'
                          }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{
                              width: '100%',
                              padding: '16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '12px',
                              fontSize: '1rem',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontWeight: '600',
                          color: '#374151'
                        }}>
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '16px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontWeight: '600',
                          color: '#374151'
                        }}>
                          Subject *
                        </label>
                        <select
                          value={selectedSubject}
                          onChange={handleSubjectChange}
                          required
                          style={{
                            width: '100%',
                            padding: '16px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            outline: 'none',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="">Select a subject</option>
                          {subjects.map(subject => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontWeight: '600',
                          color: '#374151'
                        }}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          style={{
                            width: '100%',
                            padding: '16px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '16px 32px',
                          fontSize: '1.1rem'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              border: '2px solid transparent',
                              borderTop: '2px solid white',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite'
                            }} />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '24px' }}>Get in Touch</h2>
                <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '32px' }}>
                  We're here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>

                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2563eb'
                    }}>
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '4px' }}>Email</h4>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        <a href="mailto:hello@acetech.com" style={{ color: '#2563eb' }}>
                          hello@acetech.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2563eb'
                    }}>
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '4px' }}>Phone</h4>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        <a href="tel:+1-415-555-0123" style={{ color: '#2563eb' }}>
                          +1 (415) 555-0123
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2563eb'
                    }}>
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '4px' }}>Business Hours</h4>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: '#f8fafc' }}>
                <h3 style={{ marginBottom: '20px' }}>Quick Response</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    ✓ 24h Response
                  </span>
                  <span style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    ✓ Free Consultation
                  </span>
                  <span style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    ✓ Expert Team
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Offices</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Visit us at one of our global offices or reach out remotely.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div style={{
                  backgroundColor: '#eff6ff',
                  padding: '24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  <FiMapPin size={32} style={{ color: '#2563eb' }} />
                </div>
                
                <h3 style={{ marginBottom: '8px', textAlign: 'center' }}>
                  {office.city}
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  {office.country}
                </p>
                
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FiMapPin size={16} style={{ color: '#6b7280' }} />
                    <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                      {office.address}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FiPhone size={16} style={{ color: '#6b7280' }} />
                    <a href={`tel:${office.phone}`} style={{ 
                      fontSize: '0.9rem', 
                      color: '#2563eb',
                      textDecoration: 'none'
                    }}>
                      {office.phone}
                    </a>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FiMail size={16} style={{ color: '#6b7280' }} />
                    <a href={`mailto:${office.email}`} style={{ 
                      fontSize: '0.9rem', 
                      color: '#2563eb',
                      textDecoration: 'none'
                    }}>
                      {office.email}
                    </a>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FiClock size={16} style={{ color: '#6b7280' }} />
                    <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                      {office.hours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Frequently Asked Questions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Find quick answers to common questions about working with us.
            </p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '24px' }}>
              {[
                {
                  question: 'How quickly can you start a project?',
                  answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding options.'
                },
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more.'
                },
                {
                  question: 'Do you provide ongoing support after launch?',
                  answer: 'Yes, we offer various support and maintenance packages to ensure your project continues to perform optimally after launch.'
                },
                {
                  question: 'What technologies do you specialize in?',
                  answer: 'We work with modern technologies including React, Node.js, Python, AWS, and many others. We choose the best tech stack for each specific project.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 style={{ marginBottom: '16px', color: '#1f2937' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1e293b' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <h2 style={{ marginBottom: '24px' }}>Ready to Get Started?</h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Let's discuss your project and explore how we can help bring your vision to life.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#contact-form" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="/services" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Contact;