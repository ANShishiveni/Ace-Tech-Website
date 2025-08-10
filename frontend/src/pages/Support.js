import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiMail, FiPhone, FiClock, FiSearch, FiChevronDown, FiChevronUp, FiBook, FiUsers, FiCode } from 'react-icons/fi';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Ace Tech services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or give us a call. We\'ll schedule a consultation to understand your needs and provide a customized solution. You can also browse our services page to learn more about what we offer.'
    },
    {
      id: 2,
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. Our team has expertise in full-stack development, mobile apps, and enterprise solutions. We stay current with the latest technologies to deliver cutting-edge solutions.'
    },
    {
      id: 3,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex enterprise applications can take 3-6 months or more. We provide detailed timelines during the planning phase and keep you updated throughout the development process.'
    },
    {
      id: 4,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer various support and maintenance packages to ensure your project continues to run smoothly. This includes bug fixes, updates, security patches, and feature enhancements. We\'re committed to long-term partnerships with our clients.'
    },
    {
      id: 5,
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing options including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and ongoing support needs. We provide detailed quotes after understanding your requirements.'
    },
    {
      id: 6,
      question: 'Can you work with existing systems and integrate with third-party services?',
      answer: 'Absolutely! We have extensive experience integrating with existing systems, APIs, and third-party services. We can work with your current infrastructure and ensure seamless integration with tools like CRM systems, payment gateways, and more.'
    }
  ];

  const supportChannels = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      color: '#3b82f6'
    },
    {
      icon: FiMail,
      title: 'Email Support',
      description: 'Send us a detailed message and get a response within hours',
      availability: '24/7',
      responseTime: '2-4 hours',
      color: '#10b981'
    },
    {
      icon: FiPhone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate',
      color: '#f59e0b'
    }
  ];

  const resources = [
    {
      icon: FiBook,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/documentation',
      color: '#8b5cf6'
    },
    {
      icon: FiUsers,
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      link: '#',
      color: '#06b6d4'
    },
    {
      icon: FiCode,
      title: 'Code Examples',
      description: 'Ready-to-use code snippets and tutorials',
      link: '/documentation',
      color: '#84cc16'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

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
              <span className="gradient-text">Support</span> Center
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              We're here to help! Find answers to common questions, get technical support, 
              or connect with our team for personalized assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <div style={{ position: 'relative' }}>
              <FiSearch style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280',
                fontSize: '20px'
              }} />
              <input
                type="text"
                placeholder="Search for help topics, questions, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '20px 20px 20px 60px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '16px',
                  fontSize: '1.1rem',
                  outline: 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>How Can We Help You?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Choose the support channel that works best for you. Our team is ready to assist 
              with any questions or technical issues.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
                style={{ cursor: 'pointer' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: `${channel.color}20`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: channel.color
                }}>
                  <channel.icon size={36} />
                </div>
                
                <h3 style={{ marginBottom: '16px', fontSize: '1.3rem' }}>
                  {channel.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6', 
                  marginBottom: '20px' 
                }}>
                  {channel.description}
                </p>
                
                <div style={{
                  backgroundColor: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{ marginBottom: '8px' }}>
                    <strong>Availability:</strong> {channel.availability}
                  </div>
                  <div>
                    <strong>Response Time:</strong> {channel.responseTime}
                  </div>
                </div>
                
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Get Help Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
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
              Find quick answers to common questions. Can't find what you're looking for? 
              Contact our support team for personalized assistance.
            </p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ marginBottom: '16px' }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.1rem',
                    color: '#1f2937'
                  }}>
                    {faq.question}
                  </h3>
                  {expandedFaq === faq.id ? (
                    <FiChevronUp size={20} color="#6b7280" />
                  ) : (
                    <FiChevronDown size={20} color="#6b7280" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid #e5e7eb',
                      color: '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Helpful Resources</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our documentation, community resources, and code examples to 
              get the most out of our platform.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: `${resource.color}20`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: resource.color
                }}>
                  <resource.icon size={28} />
                </div>
                
                <h3 style={{ marginBottom: '16px' }}>{resource.title}</h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6', 
                  marginBottom: '20px' 
                }}>
                  {resource.description}
                </p>
                
                <a href={resource.link} className="btn btn-outline">
                  Explore
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section" style={{ backgroundColor: '#1e293b' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <h2 style={{ marginBottom: '24px' }}>Still Need Help?</h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Can't find the answer you're looking for? Our support team is here to help 
              with any questions or technical issues.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1.1rem'
              }}>
                <FiMail size={20} />
                support@acetech.com
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1.1rem'
              }}>
                <FiPhone size={20} />
                (123) 456-7890
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1.1rem'
              }}>
                <FiClock size={20} />
                Mon-Fri, 9AM-6PM EST
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
              <a href="/documentation" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;