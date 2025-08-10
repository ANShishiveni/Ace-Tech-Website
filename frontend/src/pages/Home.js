import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiPlay, FiUsers, FiAward, FiTrendingUp, FiShield } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Our team of experienced developers, designers, and consultants bring years of industry expertise.'
    },
    {
      icon: FiAward,
      title: 'Quality Assured',
      description: 'We maintain the highest standards of quality in every project, ensuring exceptional results.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge technologies and innovative solutions.'
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Your data and applications are protected with enterprise-grade security measures.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 style={{ marginBottom: '24px' }}>
              Transforming Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              We are a leading technology solutions provider, specializing in web development, 
              mobile apps, AI/ML, and cloud solutions. Let us help you build the future.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/contact" className="btn btn-primary">
                Get Started
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Why Choose Ace Tech?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We combine technical expertise with creative innovation to deliver solutions 
              that drive real business value and growth.
            </p>
          </motion.div>

          <div className="grid grid-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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
                  <feature.icon size={28} />
                </div>
                <h3 style={{ marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', margin: 0 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#2563eb',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#374151',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We offer comprehensive technology solutions to help your business thrive 
              in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {[
              {
                title: 'Web Development',
                description: 'Custom web applications built with modern technologies and best practices.',
                icon: '🌐',
                color: '#3b82f6'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile apps for iOS and Android.',
                icon: '📱',
                color: '#8b5cf6'
              },
              {
                title: 'AI & Machine Learning',
                description: 'Intelligent solutions that leverage AI to solve complex problems.',
                icon: '🤖',
                color: '#06b6d4'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <Link
                  to="/services"
                  style={{
                    color: service.color,
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Learn More
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </motion.div>
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
              fontSize: '1.25rem',
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
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/about" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;