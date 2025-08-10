import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTarget, FiHeart, FiTrendingUp, FiGlobe, FiLightbulb, FiShield } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiLightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
      color: '#3b82f6'
    },
    {
      icon: FiHeart,
      title: 'Passion',
      description: 'We\'re passionate about technology and committed to creating solutions that make a difference.',
      color: '#ef4444'
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to user experience.',
      color: '#10b981'
    },
    {
      icon: FiShield,
      title: 'Trust',
      description: 'We build lasting relationships based on trust, transparency, and reliable delivery.',
      color: '#8b5cf6'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former Google engineer with 15+ years of experience in software development and product strategy.',
      image: '👩‍💼',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems with experience at Amazon and Microsoft.',
      image: '👨‍💻',
      linkedin: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning designer with a passion for creating intuitive and beautiful user experiences.',
      image: '👩‍🎨',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Full-stack developer and team leader with expertise in modern web technologies.',
      image: '👨‍🔧',
      linkedin: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      bio: 'Product strategist with experience launching successful SaaS products and mobile apps.',
      image: '👩‍💡',
      linkedin: '#'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Business Development',
      bio: 'Business development expert with a track record of building strategic partnerships.',
      image: '👨‍💼',
      linkedin: '#'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries and technologies.'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Dedicated professionals passionate about technology and innovation.'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently high satisfaction ratings from our valued clients.'
    },
    {
      number: '10+',
      label: 'Years Experience',
      description: 'Over a decade of experience in software development and consulting.'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started as a small team of developers with a vision to create innovative software solutions.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking the beginning of our growth phase.'
    },
    {
      year: '2018',
      title: 'Team Expansion',
      description: 'Grew to 25 team members and opened our second office in New York.'
    },
    {
      year: '2020',
      title: 'International Expansion',
      description: 'Opened our London office and began serving clients across Europe.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched our AI-powered development platform, revolutionizing our development process.'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate and expand, serving clients worldwide with cutting-edge solutions.'
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
              About <span className="gradient-text">Ace Tech</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              We're a team of passionate technologists, designers, and innovators 
              dedicated to transforming ideas into powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '24px' }}>Our Story</h2>
              <p style={{ color: '#6b7280', lineHeight: '1.8', marginBottom: '24px' }}>
                Founded in 2014, Ace Tech began as a small team of developers with a shared vision: 
                to create software solutions that not only solve complex problems but also delight users 
                with exceptional experiences.
              </p>
              <p style={{ color: '#6b7280', lineHeight: '1.8', marginBottom: '24px' }}>
                What started as a three-person startup has grown into a thriving company of 50+ 
                professionals, serving clients across the globe. We've maintained our startup mentality 
                while building the processes and expertise needed to deliver enterprise-grade solutions.
              </p>
              <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                Today, we're proud to have completed over 500 projects, from simple websites to 
                complex enterprise applications, always staying true to our core values of innovation, 
                quality, and client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#eff6ff',
                padding: '60px 40px',
                borderRadius: '20px',
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '6rem',
                marginBottom: '20px'
              }}>
                🚀
              </div>
              <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>
                Innovation at Our Core
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                We believe technology should make life better, simpler, and more efficient. 
                Every project we undertake is an opportunity to push boundaries and create 
                something extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Values</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-2" style={{ gap: '32px' }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div style={{
                  backgroundColor: `${value.color}15`,
                  padding: '24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '24px',
                  color: value.color
                }}>
                  <value.icon size={32} />
                </div>
                
                <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>
                  {value.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: 0
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Meet Our Team</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              The talented individuals who make Ace Tech what it is today.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '20px'
                }}>
                  {member.image}
                </div>
                
                <h3 style={{ marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ 
                  color: '#2563eb', 
                  fontWeight: '600',
                  marginBottom: '16px',
                  fontSize: '0.9rem'
                }}>
                  {member.role}
                </p>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  {member.bio}
                </p>
                
                <a 
                  href={member.linkedin} 
                  className="btn btn-outline"
                  style={{ fontSize: '0.9rem' }}
                >
                  View Profile
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section" style={{ backgroundColor: '#1e293b' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px', color: 'white' }}
          >
            <h2 style={{ marginBottom: '24px' }}>Our Achievements</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
              Numbers that tell the story of our growth and success.
            </p>
          </motion.div>

          <div className="grid grid-4" style={{ gap: '32px' }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', color: 'white' }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {achievement.number}
                </div>
                
                <h3 style={{ 
                  marginBottom: '12px',
                  fontSize: '1.1rem'
                }}>
                  {achievement.label}
                </h3>
                
                <p style={{ 
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Our Journey</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Key milestones that have shaped our company's growth and evolution.
            </p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '40px' }}>
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                  }}
                >
                  <div style={{
                    minWidth: '80px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '20px',
                      fontWeight: '700',
                      fontSize: '1.1rem'
                    }}>
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div style={{
                    flex: 1,
                    padding: '24px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '16px',
                    borderLeft: '4px solid #2563eb'
                  }}>
                    <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>
                      {milestone.title}
                    </h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '24px' }}>Our Culture</h2>
              <p style={{ color: '#6b7280', lineHeight: '1.8', marginBottom: '24px' }}>
                At Ace Tech, we believe that great software comes from great people working in 
                an environment that fosters creativity, collaboration, and continuous learning.
              </p>
              <p style={{ color: '#6b7280', lineHeight: '1.8', marginBottom: '24px' }}>
                We encourage our team to think outside the box, take calculated risks, and 
                always put the user experience first. Our flat organizational structure ensures 
                that every voice is heard and every idea is considered.
              </p>
              <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                We're committed to diversity, inclusion, and creating a workplace where 
                everyone feels valued, supported, and empowered to reach their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-2" style={{ gap: '20px' }}>
                {[
                  { icon: FiUsers, label: 'Collaborative', color: '#3b82f6' },
                  { icon: FiTrendingUp, label: 'Growth-Focused', color: '#10b981' },
                  { icon: FiGlobe, label: 'Global Mindset', color: '#f59e0b' },
                  { icon: FiAward, label: 'Excellence-Driven', color: '#8b5cf6' }
                ].map((item, index) => (
                  <div
                    key={item.label}
                    style={{
                      backgroundColor: 'white',
                      padding: '24px',
                      borderRadius: '16px',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div style={{
                      backgroundColor: `${item.color}15`,
                      padding: '20px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      marginBottom: '16px',
                      color: item.color
                    }}>
                      <item.icon size={24} />
                    </div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>
                      {item.label}
                    </h4>
                  </div>
                ))}
              </div>
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
            <h2 style={{ marginBottom: '24px' }}>Join Our Team</h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              We're always looking for talented individuals who share our passion for 
              technology and innovation. Explore career opportunities with us.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/careers" className="btn btn-primary">
                View Open Positions
              </a>
              <a href="/contact" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;