import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaCode, FaCloud } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { servicesAPI, projectsAPI } from '../utils/api';

const Home = () => {
  const { data: services } = useQuery('homeServices', () => servicesAPI.getAll());
  const { data: projects } = useQuery('featuredProjects', () => 
    projectsAPI.getAll({ featured: 'true' })
  );

  const features = [
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'We deliver projects on time with exceptional quality and attention to detail.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology solutions tailored to your business needs.',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in various technologies.',
    },
    {
      icon: FaChartLine,
      title: 'Business Growth',
      description: 'We help businesses scale and grow with strategic technology implementations.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with{' '}
                <span className="gradient-text">Innovative Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We deliver cutting-edge digital solutions that drive growth, efficiency, 
                and success for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get Started
                  <HiArrowRight className="ml-2" />
                </Link>
                <Link to="/projects" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaChartLine className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                      <p className="text-xl font-bold text-gray-900">98.5%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary-200 to-secondary-200 rounded-2xl -z-10 transform rotate-3"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ace Tech?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      {services?.data && services.data.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions to meet your business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.data.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    {service.icon === 'FaCode' && <FaCode className="text-primary-600 text-xl" />}
                    {service.icon === 'FaCloud' && <FaCloud className="text-primary-600 text-xl" />}
                    {service.icon === 'FaRocket' && <FaRocket className="text-primary-600 text-xl" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <Link
                    to="/services"
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Learn More
                    <HiArrowRight className="ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {projects?.data && projects.data.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our recent work and see how we've helped businesses succeed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.data.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link to={`/projects/${project._id}`}>
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.images[0] || 'https://via.placeholder.com/400x300'}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <p className="text-sm mb-1">{project.category}</p>
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.shortDescription}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;