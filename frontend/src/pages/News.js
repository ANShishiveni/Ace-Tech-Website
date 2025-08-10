import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiTag, FiArrowRight, FiSearch, FiFilter, FiShare2, FiBookmark } from 'react-icons/fi';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'company', name: 'Company Updates', count: 8 },
    { id: 'industry', name: 'Industry News', count: 6 },
    { id: 'technology', name: 'Technology', count: 5 },
    { id: 'partnerships', name: 'Partnerships', count: 3 },
    { id: 'awards', name: 'Awards & Recognition', count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Ace Tech Named Top 100 Technology Companies of 2024',
      excerpt: 'We\'re excited to announce that Ace Tech has been recognized as one of the top 100 technology companies in the industry for 2024. This recognition reflects our commitment to innovation and excellence.',
      category: 'awards',
      date: '2024-01-15',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
      author: 'Sarah Johnson',
      tags: ['Awards', 'Recognition', 'Technology']
    },
    {
      id: 2,
      title: 'New Partnership with CloudTech Solutions Expands Our Cloud Services',
      excerpt: 'We\'re thrilled to announce a strategic partnership with CloudTech Solutions that will significantly expand our cloud infrastructure and managed services capabilities.',
      category: 'partnerships',
      date: '2024-01-12',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      author: 'Michael Chen',
      tags: ['Partnerships', 'Cloud Services', 'Infrastructure']
    },
    {
      id: 3,
      title: 'The Future of AI in Enterprise Software Development',
      excerpt: 'As artificial intelligence continues to evolve, we explore how it\'s transforming enterprise software development and what this means for businesses looking to stay competitive.',
      category: 'technology',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      author: 'Dr. Emily Rodriguez',
      tags: ['AI', 'Enterprise Software', 'Innovation']
    },
    {
      id: 4,
      title: 'Ace Tech Opens New Office in London to Serve European Market',
      excerpt: 'We\'re expanding our global presence with a new office in London, UK. This strategic move will allow us to better serve our European clients and tap into the region\'s growing tech ecosystem.',
      category: 'company',
      date: '2024-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
      author: 'David Thompson',
      tags: ['Expansion', 'Global Growth', 'European Market']
    },
    {
      id: 5,
      title: 'Industry Report: Digital Transformation Trends for 2024',
      excerpt: 'Our latest industry analysis reveals the key digital transformation trends that will shape business technology in 2024, from cloud adoption to AI integration.',
      category: 'industry',
      date: '2024-01-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      author: 'Analytics Team',
      tags: ['Digital Transformation', 'Industry Trends', '2024']
    },
    {
      id: 6,
      title: 'Success Story: How We Helped RetailCorp Increase Online Sales by 300%',
      excerpt: 'Discover how our custom e-commerce solution helped RetailCorp transform their online presence and achieve remarkable growth in digital sales.',
      category: 'company',
      date: '2024-01-03',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      author: 'Case Study Team',
      tags: ['Success Story', 'E-commerce', 'Retail']
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
              <span className="gradient-text">News</span> & Updates
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Stay up to date with the latest company news, industry insights, 
              and technology trends from Ace Tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <FiSearch style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280'
              }} />
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'flex-end'
              }}
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: 'white'
                }}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2>Featured News</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
              style={{ cursor: 'pointer' }}
              onClick={() => openArticle(filteredArticles[0])}
            >
              <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                <div>
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px',
                    fontSize: '0.9rem',
                    color: '#6b7280'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiCalendar size={16} />
                      {formatDate(filteredArticles[0].date)}
                    </span>
                    <span>{filteredArticles[0].readTime}</span>
                    <span style={{
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {categories.find(c => c.id === filteredArticles[0].category)?.name}
                    </span>
                  </div>
                  
                  <h3 style={{ 
                    marginBottom: '16px', 
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    {filteredArticles[0].title}
                  </h3>
                  
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {filteredArticles[0].excerpt}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    {filteredArticles[0].tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: '#f3f4f6',
                          color: '#374151',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#2563eb',
                    fontWeight: '600'
                  }}>
                    Read Full Article
                    <FiArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Latest News</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Stay informed with our latest company updates, industry insights, and technology news.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {filteredArticles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openArticle(article)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '20px'
                  }}
                />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '16px',
                  fontSize: '0.9rem',
                  color: '#6b7280'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FiCalendar size={16} />
                    {formatDate(article.date)}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '1.2rem',
                  lineHeight: '1.4'
                }}>
                  {article.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {article.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                  {article.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2563eb',
                  fontWeight: '600'
                }}>
                  Read More
                  <FiArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section" style={{ backgroundColor: '#eff6ff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
          >
            <h2 style={{ marginBottom: '24px' }}>Stay Updated</h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '32px',
              color: '#374151'
            }}>
              Subscribe to our newsletter to receive the latest news, insights, and updates 
              directly in your inbox.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  border: '2px solid #dbeafe',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
            
            <p style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              marginTop: '16px'
            }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
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
              maxWidth: '900px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={closeArticle}
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

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '32px'
              }}
            />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCalendar size={16} />
                {formatDate(selectedArticle.date)}
              </span>
              <span>{selectedArticle.readTime}</span>
              <span style={{
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {categories.find(c => c.id === selectedArticle.category)?.name}
              </span>
            </div>

            <h2 style={{ marginBottom: '24px', fontSize: '2rem', lineHeight: '1.3' }}>
              {selectedArticle.title}
            </h2>

            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '32px'
            }}>
              {selectedArticle.excerpt}
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}>
              {selectedArticle.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              borderTop: '1px solid #e5e7eb',
              paddingTop: '24px'
            }}>
              <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiShare2 size={16} />
                Share
              </button>
              <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiBookmark size={16} />
                Bookmark
              </button>
              <button className="btn btn-primary" onClick={closeArticle}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default News;