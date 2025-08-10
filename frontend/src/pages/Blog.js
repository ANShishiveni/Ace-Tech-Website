import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { blogAPI } from '../utils/api';
import { Link } from 'react-router-dom';
import { HiCalendar, HiUser, HiEye, HiTag, HiSearch } from 'react-icons/hi';
import { format } from 'date-fns';

const Blog = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const { data: blogs, isLoading } = useQuery(
    ['blogs', page, selectedCategory, searchTerm],
    () => blogAPI.getAll({ 
      page, 
      limit: 9, 
      category: selectedCategory, 
      search: searchTerm 
    }),
    { keepPreviousData: true }
  );

  const categories = [
    'Technology',
    'Development',
    'Design',
    'Business',
    'News'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setPage(1);
  };

  const defaultBlogs = {
    blogs: [
      {
        _id: '1',
        title: 'The Future of AI in Web Development',
        slug: 'future-of-ai-web-development',
        excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences.',
        category: 'Technology',
        tags: ['AI', 'Web Development', 'Future Tech'],
        author: { name: 'John Smith' },
        featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        views: 1250,
        createdAt: new Date('2023-10-15'),
      },
      {
        _id: '2',
        title: 'Best Practices for React Performance',
        slug: 'react-performance-best-practices',
        excerpt: 'Learn the essential techniques to optimize your React applications for better performance, including code splitting, memoization, and more.',
        category: 'Development',
        tags: ['React', 'Performance', 'JavaScript'],
        author: { name: 'Sarah Johnson' },
        featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
        views: 890,
        createdAt: new Date('2023-10-10'),
      },
      {
        _id: '3',
        title: 'Designing for Accessibility',
        slug: 'designing-for-accessibility',
        excerpt: 'A comprehensive guide to creating inclusive designs that work for everyone, regardless of their abilities or disabilities.',
        category: 'Design',
        tags: ['Accessibility', 'UX', 'Design'],
        author: { name: 'Emily Davis' },
        featuredImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
        views: 675,
        createdAt: new Date('2023-10-05'),
      },
      {
        _id: '4',
        title: 'Cloud Migration Strategies for Enterprises',
        slug: 'cloud-migration-strategies',
        excerpt: 'Discover proven strategies for successfully migrating enterprise applications to the cloud while minimizing risks and downtime.',
        category: 'Technology',
        tags: ['Cloud', 'Enterprise', 'Migration'],
        author: { name: 'Michael Chen' },
        featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
        views: 1100,
        createdAt: new Date('2023-09-28'),
      },
      {
        _id: '5',
        title: 'The Rise of No-Code Platforms',
        slug: 'rise-of-no-code-platforms',
        excerpt: 'How no-code and low-code platforms are democratizing software development and enabling businesses to build applications faster.',
        category: 'Business',
        tags: ['No-Code', 'Innovation', 'Business'],
        author: { name: 'John Smith' },
        featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        views: 920,
        createdAt: new Date('2023-09-20'),
      },
      {
        _id: '6',
        title: 'Cybersecurity Trends in 2024',
        slug: 'cybersecurity-trends-2024',
        excerpt: 'Stay ahead of cyber threats with insights into the latest security trends, emerging threats, and protective measures for 2024.',
        category: 'News',
        tags: ['Security', 'Trends', '2024'],
        author: { name: 'Sarah Johnson' },
        featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
        views: 1450,
        createdAt: new Date('2023-09-15'),
      }
    ],
    totalPages: 2,
    currentPage: 1,
    total: 12
  };

  const displayData = blogs?.data || defaultBlogs;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Stay updated with the latest insights, tutorials, and news from the world of technology.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pr-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                >
                  <HiSearch size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <button
              onClick={() => {
                setSelectedCategory('');
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === ''
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setPage(1);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : displayData.blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No articles found.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayData.blogs.map((post, index) => (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.featuredImage || 'https://via.placeholder.com/400x300'}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <HiUser className="mr-1" />
                              {post.author.name}
                            </span>
                            <span className="flex items-center">
                              <HiEye className="mr-1" />
                              {post.views}
                            </span>
                          </div>
                          <span className="flex items-center">
                            <HiCalendar className="mr-1" />
                            {format(new Date(post.createdAt), 'MMM d, yyyy')}
                          </span>
                        </div>
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="mt-4 flex items-center flex-wrap gap-2">
                            <HiTag className="text-gray-400" />
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {displayData.totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    
                    {[...Array(displayData.totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          page === i + 1
                            ? 'bg-primary-600 text-white'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setPage(p => Math.min(displayData.totalPages, p + 1))}
                      disabled={page === displayData.totalPages}
                      className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest tech insights and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;