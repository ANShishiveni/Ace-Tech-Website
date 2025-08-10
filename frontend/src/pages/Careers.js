import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiHeart, FiAward, FiTrendingUp, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
  };

  const openApplicationForm = () => {
    setShowApplicationForm(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'San Francisco, CA',
      department: 'Engineering',
      experience: '5+ years',
      salary: '$120k - $160k',
      description: 'We\'re looking for a Senior Full-Stack Developer to join our growing engineering team. You\'ll work on cutting-edge web applications and help mentor junior developers.',
      requirements: [
        'Strong experience with React, Node.js, and modern JavaScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices',
        'Strong problem-solving skills and attention to detail'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews and technical discussions',
        'Contribute to architectural decisions'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      experience: '3+ years',
      salary: '$90k - $120k',
      description: 'Join our design team to create beautiful, intuitive user experiences that delight our clients and their customers.',
      requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Experience with design tools (Figma, Sketch, Adobe Creative Suite)',
        'Understanding of user-centered design principles',
        'Experience with design systems and component libraries',
        'Knowledge of accessibility standards and best practices'
      ],
      responsibilities: [
        'Create user interface designs and prototypes',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
        'Maintain and evolve our design system',
        'Present design solutions to stakeholders'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'New York, NY',
      department: 'Operations',
      experience: '4+ years',
      salary: '$110k - $140k',
      description: 'Help us build and maintain robust, scalable infrastructure that supports our growing client base.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Knowledge of CI/CD pipelines and automation',
        'Experience with monitoring and logging tools',
        'Understanding of security best practices',
        'Experience with infrastructure as code (Terraform, CloudFormation)'
      ],
      responsibilities: [
        'Manage and optimize cloud infrastructure',
        'Implement and maintain CI/CD pipelines',
        'Monitor system performance and security',
        'Automate deployment and scaling processes',
        'Collaborate with development teams on deployment strategies'
      ]
    },
    {
      id: 4,
      title: 'Product Manager',
      type: 'Full-time',
      location: 'London, UK',
      department: 'Product',
      experience: '4+ years',
      salary: '£70k - £90k',
      description: 'Lead product strategy and development for our client projects, ensuring we deliver exceptional value and user experiences.',
      requirements: [
        'Experience managing software products from concept to launch',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Excellent communication and stakeholder management skills',
        'Understanding of user research and market analysis'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Gather and prioritize product requirements',
        'Work closely with design and development teams',
        'Analyze user feedback and market trends',
        'Ensure successful product delivery and launch'
      ]
    }
  ];

  const benefits = [
    {
      icon: FiHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental coverage, and wellness programs to keep you healthy and happy.'
    },
    {
      icon: FiAward,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference attendance, and career development programs.'
    },
    {
      icon: FiUsers,
      title: 'Collaborative Culture',
      description: 'Work with talented, passionate people in an environment that values teamwork and innovation.'
    },
    {
      icon: FiTrendingUp,
      title: 'Career Advancement',
      description: 'Clear career paths, regular performance reviews, and opportunities for advancement within the company.'
    }
  ];

  const values = [
    'Innovation at the core of everything we do',
    'Customer success is our success',
    'Continuous learning and improvement',
    'Diversity and inclusion in our workplace',
    'Work-life balance and flexibility',
    'Transparency and open communication'
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Build the future with us. We're looking for passionate, talented individuals 
              who want to make a difference in the world of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Culture</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We believe in creating an environment where innovation thrives, collaboration flourishes, 
              and every team member can reach their full potential.
            </p>
          </motion.div>

          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 style={{ marginBottom: '24px' }}>What Makes Us Special</h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#2563eb',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    <span style={{ fontSize: '1.1rem' }}>{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{
                backgroundColor: '#eff6ff',
                padding: '40px',
                borderRadius: '16px',
                border: '2px solid #dbeafe'
              }}>
                <h3 style={{ marginBottom: '20px', color: '#1e40af' }}>
                  "Working at Ace Tech has been an incredible journey. The team is amazing, 
                  the projects are challenging, and the culture of innovation is inspiring."
                </h3>
                <p style={{ color: '#6b7280', margin: 0 }}>
                  — Sarah Chen, Senior Developer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Benefits & Perks</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We take care of our team with comprehensive benefits and perks that support 
              both professional and personal growth.
            </p>
          </motion.div>

          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
                  <benefit.icon size={28} />
                </div>
                <h3 style={{ marginBottom: '16px' }}>{benefit.title}</h3>
                <p style={{ color: '#6b7280', margin: 0 }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Open Positions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Ready to join our team? Check out our current openings and find the perfect role for you.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '24px' }}>
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openJobDetails(job)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h3 style={{ marginBottom: '12px', color: '#1f2937' }}>
                      {job.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      flexWrap: 'wrap',
                      fontSize: '0.9rem',
                      color: '#6b7280'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiBriefcase size={16} />
                        {job.type}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiMapPin size={16} />
                        {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiClock size={16} />
                        {job.experience}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiDollarSign size={16} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {job.department}
                  </div>
                </div>
                
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  {job.description}
                </p>
                
                <button 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    openJobDetails(job);
                  }}
                >
                  View Details
                </button>
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
            <h2 style={{ marginBottom: '24px' }}>Don't See the Right Role?</h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              We're always looking for talented individuals. Send us your resume and let's 
              discuss how you can contribute to our team.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-primary" onClick={() => setShowApplicationForm(true)}>
                Send Resume
              </button>
              <a href="/contact" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="card"
            style={{
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280'
              }}
            >
              ×
            </button>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ marginBottom: '16px' }}>{selectedJob.title}</h2>
              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                color: '#6b7280',
                marginBottom: '20px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiBriefcase size={16} />
                  {selectedJob.type}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiMapPin size={16} />
                  {selectedJob.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiClock size={16} />
                  {selectedJob.experience}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiDollarSign size={16} />
                  {selectedJob.salary}
                </span>
              </div>
              <div style={{
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block'
              }}>
                {selectedJob.department}
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '16px' }}>Job Description</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                {selectedJob.description}
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '16px' }}>Requirements</h3>
              <ul style={{ color: '#6b7280', lineHeight: '1.6', paddingLeft: '20px' }}>
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{req}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '16px' }}>Responsibilities</h3>
              <ul style={{ color: '#6b7280', lineHeight: '1.6', paddingLeft: '20px' }}>
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{resp}</li>
                ))}
              </ul>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <button className="btn btn-primary" onClick={openApplicationForm}>
                Apply Now
              </button>
              <button className="btn btn-outline" onClick={closeModal}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="card"
            style={{
              maxWidth: '600px',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2>Apply for Position</h2>
              <p style={{ color: '#6b7280' }}>
                {selectedJob ? `Apply for: ${selectedJob.title}` : 'Send us your resume and we\'ll be in touch!'}
              </p>
            </div>

            <form style={{ display: 'grid', gap: '20px' }}>
              <div className="grid grid-2" style={{ gap: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your last name"
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
                  Email *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Position of Interest
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a position</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.id}>{job.title}</option>
                  ))}
                  <option value="other">Other (General Application)</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us why you're interested in joining our team..."
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  Resume/CV *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '8px' }}>
                  Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center'
              }}>
                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
                <button type="button" className="btn btn-outline" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Careers;