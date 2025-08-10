import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { projectsAPI } from '../utils/api';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiCalendar, HiTag } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { format } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetail = () => {
  const { id } = useParams();
  const { data: project, isLoading, error } = useQuery(
    ['project', id],
    () => projectsAPI.getById(id)
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project not found</h2>
          <p className="text-gray-600 mb-4">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectData = project?.data || {
    title: 'E-Commerce Platform',
    description: 'Built a comprehensive e-commerce platform featuring real-time inventory management, AI-powered product recommendations, and seamless payment integration. The platform handles thousands of daily transactions with 99.9% uptime.',
    shortDescription: 'Modern e-commerce solution with AI-powered recommendations',
    client: 'Fashion Retailer Inc.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis', 'Docker'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    completedDate: new Date('2023-08-15'),
    features: [
      'Real-time inventory management system',
      'AI-powered product recommendations',
      'Multi-payment gateway integration',
      'Advanced analytics dashboard',
      'Mobile-responsive design',
      'SEO optimization'
    ],
    results: {
      conversionRate: '+45%',
      pageLoadTime: '-60%',
      monthlyRevenue: '+120%',
      userSatisfaction: '4.8/5'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <HiArrowLeft className="mr-2" />
              Back to Projects
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {projectData.category}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <HiCalendar className="mr-1" />
                    {format(new Date(projectData.completedDate), 'MMMM yyyy')}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {projectData.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {projectData.shortDescription}
                </p>
                
                <div className="mb-8">
                  <p className="text-gray-700 font-medium mb-2">Client:</p>
                  <p className="text-gray-900 text-lg">{projectData.client}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {projectData.liveUrl && (
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      <HiExternalLink className="mr-2" />
                      View Live Site
                    </a>
                  )}
                  {projectData.githubUrl && (
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-xl overflow-hidden shadow-2xl"
                >
                  {projectData.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${projectData.title} screenshot ${index + 1}`}
                        className="w-full h-96 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 text-lg mb-8">
                {projectData.description}
              </p>
              
              {projectData.features && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {projectData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {projectData.results && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Results & Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Object.entries(projectData.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          {value}
                        </div>
                        <p className="text-gray-600 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Similar Solution?</h3>
                <p className="text-gray-600 mb-4">
                  We can help you build a similar solution tailored to your specific needs.
                </p>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Projects
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
                  alt="Related project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Related Project {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of another project...
                  </p>
                  <Link
                    to={`/projects/${i}`}
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;