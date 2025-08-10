import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { blogAPI } from '../utils/api';
import { motion } from 'framer-motion';
import { HiCalendar, HiUser, HiEye, HiTag, HiArrowLeft } from 'react-icons/hi';
import { format } from 'date-fns';

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useQuery(
    ['blogPost', slug],
    () => blogAPI.getBySlug(slug)
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h2>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const blogPost = post?.data || {
    title: 'The Future of AI in Web Development',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing the way we build and design websites. From automated coding to intelligent user experiences, AI is becoming an integral part of modern web development.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Modern development tools are increasingly incorporating AI to help developers write better code faster. These tools can:</p>
      <ul>
        <li>Automatically complete code snippets</li>
        <li>Detect and fix bugs before they cause issues</li>
        <li>Suggest optimizations for better performance</li>
        <li>Generate boilerplate code based on requirements</li>
      </ul>
      
      <h2>Intelligent User Experiences</h2>
      <p>AI enables websites to provide personalized experiences to each user. This includes:</p>
      <ul>
        <li>Personalized content recommendations</li>
        <li>Dynamic UI adjustments based on user behavior</li>
        <li>Intelligent chatbots for customer support</li>
        <li>Predictive search and navigation</li>
      </ul>
      
      <h2>The Future Outlook</h2>
      <p>As AI technology continues to advance, we can expect even more innovative applications in web development. The key is to embrace these technologies while maintaining a focus on user experience and accessibility.</p>
    `,
    category: 'Technology',
    tags: ['AI', 'Web Development', 'Future Tech'],
    author: { name: 'John Smith' },
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    views: 1250,
    createdAt: new Date('2023-10-15'),
  };

  return (
    <article>
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={blogPost.featuredImage || 'https://via.placeholder.com/1200x400'}
          alt={blogPost.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <HiArrowLeft className="mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <span className="flex items-center">
                  <HiUser className="mr-1" />
                  {blogPost.author.name}
                </span>
                <span className="flex items-center">
                  <HiCalendar className="mr-1" />
                  {format(new Date(blogPost.createdAt), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center">
                  <HiEye className="mr-1" />
                  {blogPost.views} views
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Category and Tags */}
              <div className="flex items-center flex-wrap gap-2 mb-8">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {blogPost.category}
                </span>
                {blogPost.tags && blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <HiTag className="mr-1" size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Share on Twitter
                  </button>
                  <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    Share on LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000000000}`}
                  alt="Related post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Related Article Title {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the related article content...
                  </p>
                  <Link
                    to="/blog/related-slug"
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;