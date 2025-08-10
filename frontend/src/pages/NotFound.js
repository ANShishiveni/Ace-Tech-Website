import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft, FiSearch, FiMail } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '8rem',
                fontWeight: '900',
                color: '#2563eb',
                marginBottom: '24px',
                lineHeight: 1
              }}
            >
              404
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ marginBottom: '24px' }}
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '1.25rem',
                maxWidth: '600px',
                margin: '0 auto 40px',
                opacity: 0.8
              }}
            >
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '60px'
              }}
            >
              <Link to="/" className="btn btn-primary">
                <FiHome style={{ marginRight: '8px' }} />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-outline"
              >
                <FiArrowLeft style={{ marginRight: '8px' }} />
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Need Help Finding Something?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Here are some ways to get back on track and find what you're looking for.
            </p>
          </motion.div>

          <div className="grid grid-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#eff6ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2563eb'
              }}>
                <FiSearch size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Search Our Site</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Use our search functionality to find the content you're looking for.
              </p>
              <Link to="/" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                Search Now
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#f0fdf4',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#10b981'
              }}>
                <FiHome size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Browse Categories</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Explore our main sections to discover relevant content and services.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                  Services
                </Link>
                <Link to="/projects" className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                  Projects
                </Link>
                <Link to="/about" className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                  About
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#fef3c7',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#f59e0b'
              }}>
                <FiMail size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Contact Support</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Can't find what you need? Our team is here to help you navigate.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                Get Help
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Popular Pages</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              These are some of our most visited pages that might be what you're looking for.
            </p>
          </motion.div>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 style={{ marginBottom: '16px' }}>Our Services</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                Discover our comprehensive range of technology services including web development, 
                mobile apps, cloud solutions, and digital transformation.
              </p>
              <Link to="/services" className="btn btn-primary">
                View Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 style={{ marginBottom: '16px' }}>Featured Projects</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                Explore our portfolio of successful projects and case studies across various 
                industries and technologies.
              </p>
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
            </motion.div>
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
            <h2 style={{ marginBottom: '24px' }}>Still Can't Find What You Need?</h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Let us help you navigate our site or answer any questions you might have.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Support
              </Link>
              <Link to="/" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;