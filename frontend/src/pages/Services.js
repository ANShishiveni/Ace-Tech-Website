import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud, FiShield, FiTrendingUp, FiUsers, FiDatabase, FiZap } from 'react-icons/fi';

const Services = () => {
  const [selectedService, setSelectedService] = useState('web-development');

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: FiCode,
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive design for all devices',
        'Modern frameworks (React, Vue, Angular)',
        'SEO optimization',
        'Performance optimization',
        'Content management systems',
        'E-commerce solutions'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify'],
      startingPrice: '$5,000',
      color: '#3b82f6'
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      icon: FiSmartphone,
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance monitoring'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '$8,000',
      color: '#10b981'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: FiCloud,
      description: 'Scalable cloud infrastructure and DevOps solutions for modern applications.',
      features: [
        'AWS, Azure, and Google Cloud',
        'Container orchestration',
        'CI/CD pipelines',
        'Monitoring and logging',
        'Auto-scaling',
        'Disaster recovery'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      startingPrice: '$3,000',
      color: '#f59e0b'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: FiShield,
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Vulnerability management',
        'Security monitoring',
        'Compliance consulting',
        'Incident response'
      ],
      technologies: ['OWASP', 'NIST', 'ISO 27001', 'Penetration Testing Tools'],
      startingPrice: '$4,000',
      color: '#ef4444'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: FiTrendingUp,
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      features: [
        'Data visualization dashboards',
        'Predictive analytics',
        'Machine learning models',
        'Real-time reporting',
        'Data warehousing',
        'Business intelligence'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'AWS Redshift'],
      startingPrice: '$6,000',
      color: '#8b5cf6'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      icon: FiUsers,
      description: 'Strategic technology guidance to help your business grow and innovate.',
      features: [
        'Technology strategy',
        'Digital transformation',
        'Architecture review',
        'Technology selection',
        'Project management',
        'Team training'
      ],
      technologies: ['Agile', 'Scrum', 'Project Management', 'Technical Architecture'],
      startingPrice: '$150/hour',
      color: '#06b6d4'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic website or app',
        'Responsive design',
        'SEO optimization',
        '3 months support',
        'Basic analytics',
        'Content management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Custom web application',
        'Advanced features',
        'Database integration',
        'API development',
        '6 months support',
        'Performance optimization',
        'Security features',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per project',
      description: 'For large-scale projects and enterprises',
      features: [
        'Complex enterprise solution',
        'Custom integrations',
        'Scalable architecture',
        'Advanced security',
        '12 months support',
        'Dedicated team',
        'Performance monitoring',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      client: 'Fashion Retailer',
      challenge: 'Outdated platform with poor mobile experience and slow performance.',
      solution: 'Modern React-based platform with mobile-first design and optimized performance.',
      results: [
        '40% increase in mobile conversions',
        '60% improvement in page load speed',
        '25% increase in overall sales'
      ],
      image: '🛍️'
    },
    {
      title: 'Healthcare Management System',
      client: 'Medical Group',
      challenge: 'Manual processes causing delays and errors in patient care.',
      solution: 'Custom web application with automated workflows and real-time updates.',
      results: [
        '50% reduction in administrative time',
        '90% improvement in data accuracy',
        'Improved patient satisfaction scores'
      ],
      image: '🏥'
    },
    {
      title: 'Financial Analytics Dashboard',
      client: 'Investment Firm',
      challenge: 'Complex data scattered across multiple systems with no unified view.',
      solution: 'Real-time analytics dashboard with automated data integration.',
      results: [
        'Real-time decision making capability',
        '30% faster reporting process',
        'Improved investment performance tracking'
      ],
      image: '📊'
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Comprehensive technology solutions designed to drive your business forward. 
              From web development to cybersecurity, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>What We Offer</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our comprehensive suite of services covers every aspect of modern technology needs.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ 
                  cursor: 'pointer',
                  border: selectedService === service.id ? `3px solid ${service.color}` : '2px solid #e5e7eb'
                }}
                onClick={() => setSelectedService(service.id)}
              >
                <div style={{
                  backgroundColor: `${service.color}15`,
                  padding: '24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '20px',
                  color: service.color
                }}>
                  <service.icon size={32} />
                </div>
                
                <h3 style={{ 
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  {service.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    backgroundColor: service.color,
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {service.startingPrice}
                  </span>
                  
                  <span style={{
                    color: '#6b7280',
                    fontSize: '0.8rem'
                  }}>
                    Starting Price
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {selectedServiceData && (
        <section className="section" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  marginBottom: '40px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    backgroundColor: `${selectedServiceData.color}15`,
                    padding: '24px',
                    borderRadius: '16px',
                    color: selectedServiceData.color
                  }}>
                    <selectedServiceData.icon size={40} />
                  </div>
                  
                  <div>
                    <h2 style={{ marginBottom: '12px' }}>
                      {selectedServiceData.title}
                    </h2>
                    <p style={{ 
                      color: '#6b7280', 
                      fontSize: '1.1rem',
                      margin: 0
                    }}>
                      {selectedServiceData.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: '40px' }}>
                  {/* Features */}
                  <div>
                    <h3 style={{ marginBottom: '24px' }}>Key Features</h3>
                    <div style={{ display: 'grid', gap: '16px' }}>
                      {selectedServiceData.features.map((feature, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: selectedServiceData.color,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}>
                            ✓
                          </div>
                          <span style={{ color: '#374151' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 style={{ marginBottom: '24px' }}>Technologies We Use</h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}>
                      {selectedServiceData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: `${selectedServiceData.color}15`,
                            color: selectedServiceData.color,
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '40px',
                  paddingTop: '24px',
                  borderTop: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}>
                  <a href="/contact" className="btn btn-primary">
                    Get Started with {selectedServiceData.title}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Pricing Plans</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Transparent pricing for every business size. Choose the plan that fits your needs.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{
                  position: 'relative',
                  border: plan.popular ? '3px solid #2563eb' : '2px solid #e5e7eb'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h3 style={{ marginBottom: '16px' }}>{plan.name}</h3>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: '#1e293b'
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '1rem'
                    }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', margin: 0 }}>
                    {plan.description}
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.9rem' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Success Stories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              See how we've helped businesses achieve their goals with our technology solutions.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '40px' }}>
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div style={{
                    backgroundColor: '#eff6ff',
                    padding: '40px',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '4rem' }}>
                      {study.image}
                    </div>
                  </div>
                  
                  <div>
                    <h3 style={{ marginBottom: '16px' }}>
                      {study.title}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '16px',
                      color: '#6b7280',
                      fontSize: '0.9rem'
                    }}>
                      <FiUsers size={16} />
                      {study.client}
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ marginBottom: '8px', color: '#374151' }}>
                        The Challenge
                      </h4>
                      <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ marginBottom: '8px', color: '#374151' }}>
                        Our Solution
                      </h4>
                      <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 style={{ marginBottom: '12px', color: '#374151' }}>
                        Results
                      </h4>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <div style={{
                              width: '16px',
                              height: '16px',
                              backgroundColor: '#10b981',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '10px',
                              fontWeight: 'bold'
                            }}>
                              ✓
                            </div>
                            <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Process</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-4" style={{ gap: '32px' }}>
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business needs, goals, and technical requirements.',
                icon: FiUsers
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning, architecture design, and technology selection.',
                icon: FiTarget
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development process with regular updates and client feedback.',
                icon: FiCode
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Thorough testing, deployment, and ongoing support for your solution.',
                icon: FiZap
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div style={{
                  backgroundColor: '#eff6ff',
                  padding: '24px',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  color: '#2563eb'
                }}>
                  <process.icon size={32} />
                </div>
                
                <div style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontWeight: '700'
                }}>
                  {process.step}
                </div>
                
                <h3 style={{ marginBottom: '16px' }}>
                  {process.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  {process.description}
                </p>
              </motion.div>
            ))}
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
              Let's discuss your project and explore how our services can help 
              you achieve your business goals.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="/about" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;