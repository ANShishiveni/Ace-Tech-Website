import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiTag, FiSearch, FiBookmark, FiShare2, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'innovation', name: 'Innovation' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2024',
      excerpt: 'Explore the emerging trends and technologies that will shape web development in 2024 and beyond.',
      content: 'Web development is evolving rapidly with new frameworks, tools, and methodologies emerging constantly. In 2024, we expect to see significant advancements in AI-powered development tools, improved performance optimization techniques, and enhanced user experience design patterns.',
      category: 'development',
      author: 'David Kim',
      date: '2024-01-20',
      tags: ['Web Development', 'Technology Trends', '2024', 'Frameworks'],
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Designing for Accessibility: Best Practices Every Designer Should Know',
      excerpt: 'Learn essential accessibility principles and how to implement them in your design projects.',
      content: 'Accessibility in design is not just a legal requirement—it\'s a moral imperative. This post covers key principles like color contrast, keyboard navigation, screen reader compatibility, and inclusive design thinking.',
      category: 'design',
      author: 'Emily Rodriguez',
      date: '2024-01-18',
      tags: ['Accessibility', 'UX Design', 'Inclusive Design', 'Best Practices'],
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Computing Trends: From Multi-Cloud to Edge Computing',
      excerpt: 'Discover the latest developments in cloud computing and how they\'re transforming business infrastructure.',
      content: 'Cloud computing continues to evolve with new paradigms like edge computing, serverless architectures, and hybrid cloud solutions. We explore how these trends are reshaping enterprise technology strategies.',
      category: 'technology',
      author: 'Michael Chen',
      date: '2024-01-15',
      tags: ['Cloud Computing', 'Edge Computing', 'Infrastructure', 'Technology'],
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Building High-Performance React Applications',
      excerpt: 'Optimization techniques and best practices for creating fast, responsive React applications.',
      content: 'Performance is crucial for user experience. This guide covers React optimization techniques including code splitting, lazy loading, memoization, and bundle optimization strategies.',
      category: 'development',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
      readTime: '8 min read',
      featured: true
    },
    {
      id: 5,
      title: 'Digital Transformation: A Strategic Guide for Business Leaders',
      excerpt: 'Strategic insights and practical steps for successful digital transformation initiatives.',
      content: 'Digital transformation requires more than just technology adoption. Success depends on cultural change, process redesign, and strategic alignment across the organization.',
      category: 'business',
      author: 'Alex Thompson',
      date: '2024-01-10',
      tags: ['Digital Transformation', 'Strategy', 'Business', 'Leadership'],
      readTime: '10 min read',
      featured: false
    },
    {
      id: 6,
      title: 'AI in Software Development: Current State and Future Prospects',
      excerpt: 'How artificial intelligence is revolutionizing software development processes and workflows.',
      content: 'AI is transforming software development through automated testing, code generation, bug detection, and intelligent project management. We explore current applications and future possibilities.',
      category: 'innovation',
      author: 'Lisa Wang',
      date: '2024-01-08',
      tags: ['AI', 'Software Development', 'Automation', 'Innovation'],
      readTime: '9 min read',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Insights, tutorials, and thought leadership on technology, development, 
              design, and business innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
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
                placeholder="Search blog posts..."
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

            {/* Categories */}
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
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '20px',
                    border: selectedCategory === category.id ? 'none' : '2px solid #d1d5db',
                    backgroundColor: selectedCategory === category.id ? '#2563eb' : 'transparent',
                    color: selectedCategory === category.id ? 'white' : '#374151',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Featured Posts</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our most popular and insightful articles that provide deep insights 
              into technology and business trends.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '40px' }}>
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openPost(post)}
              >
                <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                  <div style={{
                    backgroundColor: '#f3f4f6',
                    padding: '40px',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '2rem', margin: 0 }}>📝</h3>
                  </div>
                  
                  <div>
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      marginBottom: '16px',
                      fontSize: '0.9rem',
                      color: '#6b7280'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiCalendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiUser size={14} />
                        {post.author}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        ⏱️ {post.readTime}
                      </span>
                    </div>
                    
                    <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>
                      {post.title}
                    </h3>
                    
                    <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap',
                      marginBottom: '20px'
                    }}>
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          style={{
                            backgroundColor: '#eff6ff',
                            color: '#2563eb',
                            padding: '6px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="btn btn-primary">
                      Read Full Post
                      <FiArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>All Blog Posts</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Browse through our complete collection of articles, tutorials, and insights.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openPost(post)}
              >
                <div style={{
                  backgroundColor: '#f3f4f6',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ fontSize: '2.5rem', margin: 0 }}>📝</h3>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  fontSize: '0.8rem',
                  color: '#6b7280',
                  justifyContent: 'center'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FiCalendar size={12} />
                    {formatDate(post.date)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ⏱️ {post.readTime}
                  </span>
                </div>
                
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '1.2rem',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6', 
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '20px',
                  justifyContent: 'center'
                }}>
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center'
                }}>
                  <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                    <FiBookmark size={14} />
                  </button>
                  <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                    <FiShare2 size={14} />
                  </button>
                  <button className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                    Read More
                  </button>
                </div>
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
            <h2 style={{ marginBottom: '24px' }}>Stay Informed</h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Get the latest insights delivered to your inbox. Subscribe to our blog 
              newsletter for weekly updates.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-primary">
                Subscribe to Blog
              </button>
              <a href="/contact" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Write for Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
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
              onClick={closePost}
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

            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                backgroundColor: '#f3f4f6',
                padding: '40px',
                borderRadius: '16px',
                marginBottom: '20px'
              }}>
                <h3 style={{ fontSize: '3rem', margin: 0 }}>📝</h3>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiCalendar size={14} />
                  {formatDate(selectedPost.date)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FiUser size={14} />
                  {selectedPost.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ⏱️ {selectedPost.readTime}
                </span>
              </div>
              
              <h2 style={{ marginBottom: '20px' }}>{selectedPost.title}</h2>
              
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                {selectedPost.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              lineHeight: '1.8',
              color: '#374151'
            }}>
              <p>{selectedPost.content}</p>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '40px',
              paddingTop: '20px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button className="btn btn-outline">
                <FiShare2 style={{ marginRight: '8px' }} />
                Share Post
              </button>
              <button className="btn btn-outline">
                <FiBookmark style={{ marginRight: '8px' }} />
                Bookmark
              </button>
              <button className="btn btn-primary" onClick={closePost}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;