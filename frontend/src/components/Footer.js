import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News', path: '/news' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', path: '/services#web' },
        { name: 'Mobile Development', path: '/services#mobile' },
        { name: 'AI & ML', path: '/services#ai' },
        { name: 'Cloud Solutions', path: '/services#cloud' },
        { name: 'UI/UX Design', path: '/services#design' },
        { name: 'Consulting', path: '/services#consulting' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/projects' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Support', path: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR', path: '/gdpr' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/ace-tech', label: 'GitHub' },
    { icon: FiTwitter, url: 'https://twitter.com/ace_tech', label: 'Twitter' },
    { icon: FiLinkedin, url: 'https://linkedin.com/company/ace-tech', label: 'LinkedIn' },
    { icon: FiInstagram, url: 'https://instagram.com/ace_tech', label: 'Instagram' }
  ];

  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}>A</span>
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                Ace Tech
              </span>
            </div>
            
            <p style={{
              marginBottom: '24px',
              color: '#9ca3af',
              lineHeight: '1.6'
            }}>
              Leading technology solutions provider specializing in web development, 
              mobile apps, AI/ML, and cloud solutions. We help businesses 
              transform and grow in the digital age.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
                color: '#9ca3af'
              }}>
                <FiMail size={16} />
                <span>hello@ace-tech.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
                color: '#9ca3af'
              }}>
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#9ca3af'
              }}>
                <FiMapPin size={16} />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#374151',
                    borderRadius: '8px',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#374151';
                    e.target.style.color = '#9ca3af';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white'
              }}>
                {section.title}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '12px' }}>
                    <Link
                      to={link.path}
                      style={{
                        color: '#9ca3af',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#2563eb';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#9ca3af';
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '40px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Stay Updated
          </h3>
          <p style={{
            color: '#9ca3af',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px'
          }}>
            Subscribe to our newsletter for the latest tech insights, project updates, and industry trends.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '12px 16px',
                border: '2px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#1f2937',
                color: 'white',
                fontSize: '16px'
              }}
            />
            <button
              className="btn btn-primary"
              style={{
                whiteSpace: 'nowrap'
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#9ca3af',
            margin: 0
          }}>
            © {currentYear} Ace Tech. All rights reserved.
          </p>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: 0
          }}>
            Made with ❤️ for the future of technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;