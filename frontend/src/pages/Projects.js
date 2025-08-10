import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { projectsAPI } from '../utils/api';
import { Link } from 'react-router-dom';
import { HiFilter, HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { data: projects, isLoading } = useQuery(['projects', selectedCategory], () => 
    selectedCategory === 'all' 
      ? projectsAPI.getAll() 
      : projectsAPI.getAll({ category: selectedCategory })
  );

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Mobile App', label: 'Mobile Apps' },
    { value: 'AI/ML', label: 'AI/ML' },
    { value: 'Cloud Solutions', label: 'Cloud Solutions' },
    { value: 'Consulting', label: 'Consulting' },
  ];

  const defaultProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      shortDescription: 'Modern e-commerce solution with AI-powered recommendations',
      description: 'Built a comprehensive e-commerce platform featuring real-time inventory management, AI-powered product recommendations, and seamless payment integration. The platform handles thousands of daily transactions with 99.9% uptime.',
      client: 'Fashion Retailer Inc.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'],
      liveUrl: 'https://example.com',
      featured: true,
      completedDate: new Date('2023-08-15')
    },
    {
      _id: '2',
      title: 'Healthcare Mobile App',
      shortDescription: 'Patient management and telemedicine application',
      description: 'Developed a HIPAA-compliant mobile application for healthcare providers and patients. Features include appointment scheduling, secure messaging, video consultations, and electronic health records.',
      client: 'HealthTech Solutions',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
      images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      completedDate: new Date('2023-07-20')
    },
    {
      _id: '3',
      title: 'AI Customer Service Bot',
      shortDescription: 'Intelligent chatbot for customer support automation',
      description: 'Created an AI-powered customer service chatbot that handles 80% of customer inquiries automatically. Uses natural language processing to understand customer intent and provide accurate responses.',
      client: 'TechCorp Global',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'AWS Lambda'],
      images: ['https://images.unsplash.com/photo-1531746790731-6c087fecd65a'],
      featured: true,
      completedDate: new Date('2023-06-10')
    },
    {
      _id: '4',
      title: 'Cloud Migration Project',
      shortDescription: 'Enterprise cloud migration and optimization',
      description: 'Successfully migrated a legacy enterprise system to AWS cloud, resulting in 40% cost reduction and 3x performance improvement. Implemented auto-scaling and disaster recovery.',
      client: 'Enterprise Corp',
      category: 'Cloud Solutions',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa'],
      completedDate: new Date('2023-05-05')
    },
    {
      _id: '5',
      title: 'FinTech Dashboard',
      shortDescription: 'Real-time financial analytics dashboard',
      description: 'Built a real-time financial analytics dashboard for tracking investments, market trends, and portfolio performance. Features advanced data visualization and predictive analytics.',
      client: 'Investment Firm LLC',
      category: 'Web Development',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71'],
      liveUrl: 'https://example.com',
      completedDate: new Date('2023-04-12')
    },
    {
      _id: '6',
      title: 'IoT Smart Home System',
      shortDescription: 'Connected home automation platform',
      description: 'Developed an IoT platform for smart home automation, controlling lights, temperature, security systems, and appliances through a unified mobile interface.',
      client: 'Smart Living Inc.',
      category: 'Mobile App',
      technologies: ['Flutter', 'MQTT', 'Node.js', 'MongoDB', 'Raspberry Pi'],
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64'],
      githubUrl: 'https://github.com',
      completedDate: new Date('2023-03-22')
    }
  ];

  const displayProjects = projects?.data || defaultProjects;

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Explore our successful projects and see how we've helped businesses 
              transform their ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <HiFilter className="text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : displayProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0] || 'https://via.placeholder.com/400x300'}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors inline-flex items-center gap-1"
                            >
                              <HiExternalLink />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors inline-flex items-center gap-1"
                            >
                              <FaGithub />
                              Source
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(project.completedDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-gray-500 text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project._id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1"
                    >
                      View Details
                      <HiCode />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that showcase our experience and expertise
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '95%', label: 'Client Retention' },
              { number: '50+', label: 'Technologies Used' },
              { number: '15+', label: 'Industries Served' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life and create something amazing.
          </p>
          <Link
            to="/contact"
            className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;