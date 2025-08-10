import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { servicesAPI } from '../utils/api';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaCloud, FaMobile, FaDatabase, FaShieldAlt, FaChartBar,
  FaRobot, FaPalette, FaCogs, FaUsers 
} from 'react-icons/fa';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';

const Services = () => {
  const { data: services, isLoading } = useQuery('services', servicesAPI.getAll);

  const iconMap = {
    'FaCode': FaCode,
    'FaCloud': FaCloud,
    'FaMobile': FaMobile,
    'FaDatabase': FaDatabase,
    'FaShieldAlt': FaShieldAlt,
    'FaChartBar': FaChartBar,
    'FaRobot': FaRobot,
    'FaPalette': FaPalette,
    'FaCogs': FaCogs,
    'FaUsers': FaUsers,
  };

  const defaultServices = [
    {
      _id: '1',
      title: 'Web Development',
      icon: 'FaCode',
      shortDescription: 'Custom web applications tailored to your business needs',
      description: 'We build responsive, scalable web applications using the latest technologies. From simple websites to complex enterprise solutions, we deliver high-quality products that drive results.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'CMS Integration',
        'Performance Optimization'
      ],
      pricing: { starting: 5000 }
    },
    {
      _id: '2',
      title: 'Mobile App Development',
      icon: 'FaMobile',
      shortDescription: 'Native and cross-platform mobile applications',
      description: 'Create engaging mobile experiences for iOS and Android. We develop native and cross-platform apps that provide seamless user experiences and help you reach your mobile audience.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      pricing: { starting: 8000 }
    },
    {
      _id: '3',
      title: 'Cloud Solutions',
      icon: 'FaCloud',
      shortDescription: 'Scalable cloud infrastructure and migration services',
      description: 'Leverage the power of cloud computing to scale your business. We provide cloud migration, infrastructure setup, and ongoing management to ensure optimal performance and security.',
      features: [
        'Cloud Migration',
        'AWS/Azure/GCP Setup',
        'Serverless Architecture',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Cost Optimization'
      ],
      pricing: { starting: 3000 }
    },
    {
      _id: '4',
      title: 'AI & Machine Learning',
      icon: 'FaRobot',
      shortDescription: 'Intelligent solutions powered by artificial intelligence',
      description: 'Harness the power of AI and machine learning to automate processes, gain insights, and create innovative solutions that give you a competitive edge.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems',
        'Chatbot Development',
        'Data Analysis & Insights'
      ],
      pricing: { starting: 10000 }
    },
    {
      _id: '5',
      title: 'Cybersecurity',
      icon: 'FaShieldAlt',
      shortDescription: 'Protect your digital assets with robust security solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats. We implement best practices and cutting-edge security measures to keep your data safe.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Identity Management',
        'Data Encryption',
        '24/7 Monitoring'
      ],
      pricing: { starting: 4000 }
    },
    {
      _id: '6',
      title: 'UI/UX Design',
      icon: 'FaPalette',
      shortDescription: 'Beautiful, intuitive designs that users love',
      description: 'Create exceptional user experiences with our design services. We focus on user-centered design principles to create interfaces that are both beautiful and functional.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
      ],
      pricing: { starting: 3500 }
    }
  ];

  const displayServices = services?.data || defaultServices;

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive technology solutions designed to help your business thrive in the digital age. 
              From web development to AI integration, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayServices.map((service, index) => {
                const Icon = iconMap[service.icon] || FaCode;
                
                return (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="text-primary-600 text-2xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description || service.shortDescription}
                      </p>
                      
                      {service.features && service.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <HiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.pricing && (
                        <div className="mb-6">
                          <p className="text-gray-600">
                            Starting from{' '}
                            <span className="text-2xl font-bold text-primary-600">
                              ${service.pricing.starting.toLocaleString()}
                            </span>
                          </p>
                        </div>
                      )}
                      
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-all"
                      >
                        Get Started
                        <HiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure project success and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your business needs and project requirements' },
              { number: '02', title: 'Planning', description: 'Creating a detailed roadmap and technical specifications' },
              { number: '03', title: 'Development', description: 'Building your solution with regular updates and feedback' },
              { number: '04', title: 'Deployment', description: 'Launching your project with ongoing support and maintenance' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Experienced team with proven track record',
                  'Cutting-edge technologies and best practices',
                  'Transparent communication and regular updates',
                  'Flexible engagement models to suit your needs',
                  'Post-launch support and maintenance',
                  '100% satisfaction guarantee'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <HiCheckCircle className="text-green-500 text-xl mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Team working"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-primary-100">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/projects"
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;