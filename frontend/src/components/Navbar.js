import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services#web' },
        { name: 'Mobile Development', path: '/services#mobile' },
        { name: 'AI & ML', path: '/services#ai' },
        { name: 'Cloud Solutions', path: '/services#cloud' },
        { name: 'UI/UX Design', path: '/services#design' },
        { name: 'Consulting', path: '/services#consulting' }
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
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
              fontSize: '20px',
              fontWeight: 'bold',
              color: isScrolled ? '#111827' : 'white'
            }}>
              Ace Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }} className="desktop-nav">
            {navItems.map((item, index) => (
              <div key={item.name} style={{ position: 'relative' }}>
                {item.dropdown ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span style={{
                      fontWeight: '500',
                      transition: 'color 0.3s ease',
                      color: isScrolled ? '#374151' : 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {item.name}
                    </span>
                    <FiChevronDown style={{
                      transition: 'transform 0.3s ease',
                      transform: activeDropdown === index ? 'rotate(180deg)' : 'none'
                    }} />
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            marginTop: '8px',
                            width: '192px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #f3f4f6',
                            padding: '8px 0'
                          }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              style={{
                                display: 'block',
                                padding: '8px 16px',
                                color: '#374151',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#eff6ff';
                                e.target.style.color = '#2563eb';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#374151';
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      fontWeight: '500',
                      transition: 'color 0.3s ease',
                      color: isScrolled ? '#374151' : 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = isScrolled ? '#2563eb' : 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = isScrolled ? '#374151' : 'rgba(255, 255, 255, 0.9)';
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'none' }} className="desktop-cta">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'block',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              border: 'none',
              background: 'transparent',
              color: isScrolled ? '#374151' : 'white',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isScrolled ? '#f3f4f6' : 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                backgroundColor: 'white',
                borderTop: '1px solid #f3f4f6'
              }}
              className="mobile-nav"
            >
              <div style={{
                padding: '16px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(index)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px 16px',
                            color: '#374151',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f9fafb';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          {item.name}
                          <FiChevronDown style={{
                            transition: 'transform 0.3s ease',
                            transform: activeDropdown === index ? 'rotate(180deg)' : 'none'
                          }} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                backgroundColor: '#f9fafb'
                              }}
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  style={{
                                    display: 'block',
                                    padding: '8px 32px',
                                    color: '#6b7280',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#f3f4f6';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '8px 16px',
                          color: '#374151',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#f9fafb';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div style={{
                  padding: '16px',
                  paddingTop: '16px'
                }}>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      display: 'block'
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;