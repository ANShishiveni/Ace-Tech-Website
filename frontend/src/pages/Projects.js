import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter, FiEye, FiCode, FiSmartphone, FiBrain, FiCloud } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment processing, and admin dashboard.',
      category: 'web',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      client: 'Fashion Retailer',
      duration: '3 months',
      status: 'completed',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        '40% increase in online sales',
        'Improved user experience with 60% faster page load',
        'Reduced cart abandonment by 25%'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      description: 'A comprehensive healthcare application for patients and doctors, featuring appointment scheduling, telemedicine, prescription management, and health tracking.',
      category: 'mobile',
      image: '🏥',
      technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC', 'Push Notifications'],
      client: 'Healthcare Network',
      duration: '4 months',
      status: 'completed',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        '50,000+ active users',
        '95% user satisfaction rating',
        'Reduced appointment no-shows by 30%'
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent analytics platform that uses machine learning to provide predictive insights, automated reporting, and data visualization for business intelligence.',
      category: 'ai',
      image: '📊',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
      client: 'Financial Services Company',
      duration: '5 months',
      status: 'completed',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        'Improved decision-making accuracy by 35%',
        'Automated 80% of reporting tasks',
        'Real-time insights with 99.9% uptime'
      ]
    },
    {
      id: 4,
      title: 'Cloud Migration Solution',
      description: 'Complete cloud infrastructure migration for a legacy enterprise system, including containerization, CI/CD pipeline setup, and performance optimization.',
      category: 'cloud',
      image: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      client: 'Manufacturing Company',
      duration: '6 months',
      status: 'completed',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system performance by 60%',
        '99.99% uptime achieved'
      ]
    },
    {
      id: 5,
      title: 'Real Estate Management System',
      description: 'A comprehensive property management platform with features for listing management, tenant screening, maintenance tracking, and financial reporting.',
      category: 'web',
      image: '🏠',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3', 'Twilio', 'Chart.js'],
      client: 'Property Management Firm',
      duration: '3 months',
      status: 'completed',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        'Streamlined property management workflow',
        'Reduced administrative overhead by 45%',
        'Improved tenant satisfaction scores'
      ]
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A gamified fitness application that tracks workouts, provides personalized training plans, and integrates with wearable devices for comprehensive health monitoring.',
      category: 'mobile',
      image: '💪',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'ML Kit'],
      client: 'Fitness Startup',
      duration: '4 months',
      status: 'completed',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      results: [
        '100,000+ downloads in first year',
        'Average user engagement: 4.5 sessions/week',
        'Featured in App Store fitness category'
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: FiEye },
    { key: 'web', label: 'Web Development', icon: FiCode },
    { key: 'mobile', label: 'Mobile Apps', icon: FiSmartphone },
    { key: 'ai', label: 'AI & ML', icon: FiBrain },
    { key: 'cloud', label: 'Cloud Solutions', icon: FiCloud }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
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
            className="hero-content"
          >
            <h1 style={{ marginBottom: '24px' }}>
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Explore our portfolio of successful projects that showcase our expertise 
              in delivering innovative technology solutions across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h3 style={{ marginBottom: '24px' }}>Filter by Category</h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`btn ${activeFilter === filter.key ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minWidth: '140px',
                    justifyContent: 'center'
                  }}
                >
                  <filter.icon size={16} />
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Featured Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our most impactful and innovative projects that demonstrate our capabilities.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openProjectModal(project)}
              >
                <div style={{
                  fontSize: '4rem',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  {project.image}
                </div>
                <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.9rem' }}>
                  {project.description.substring(0, 120)}...
                </p>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        backgroundColor: '#f3f4f6',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: '#374151'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span style={{
                      backgroundColor: '#f3f4f6',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: '#374151'
                    }}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#6b7280'
                }}>
                  <span>{project.client}</span>
                  <span>{project.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>All Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Browse through our complete portfolio of successful projects and case studies.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openProjectModal(project)}
                >
                  <div style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '16px'
                  }}>
                    {project.image}
                  </div>
                  <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>
                  <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '0.9rem' }}>
                    {project.description.substring(0, 100)}...
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    marginBottom: '16px'
                  }}>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          backgroundColor: '#f3f4f6',
                          padding: '3px 8px',
                          borderRadius: '16px',
                          fontSize: '0.75rem',
                          color: '#374151'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem',
                    color: '#6b7280'
                  }}>
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="card"
              style={{
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProjectModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#6b7280',
                  zIndex: 1
                }}
              >
                ×
              </button>

              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}>
                  {selectedProject.image}
                </div>
                <h2 style={{ marginBottom: '16px' }}>{selectedProject.title}</h2>
                <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                  {selectedProject.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <a href={selectedProject.liveUrl} className="btn btn-primary">
                    <FiExternalLink style={{ marginRight: '8px' }} />
                    Live Demo
                  </a>
                  <a href={selectedProject.githubUrl} className="btn btn-outline">
                    <FiGithub style={{ marginRight: '8px' }} />
                    View Code
                  </a>
                </div>
              </div>

              <div className="grid grid-2" style={{ gap: '32px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ marginBottom: '16px' }}>Project Details</h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '600' }}>Client:</span>
                      <span>{selectedProject.client}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '600' }}>Duration:</span>
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '600' }}>Status:</span>
                      <span style={{
                        color: selectedProject.status === 'completed' ? '#059669' : '#d97706'
                      }}>
                        {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ marginBottom: '16px' }}>Technologies Used</h3>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          backgroundColor: '#eff6ff',
                          color: '#2563eb',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ marginBottom: '16px' }}>Key Results</h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {selectedProject.results.map((result, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#2563eb',
                        borderRadius: '50%'
                      }} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 style={{ marginBottom: '24px' }}>Ready to Start Your Project?</h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Let's create something amazing together. Our team is ready to bring your vision to life.
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
    </div>
  );
};

export default Projects;