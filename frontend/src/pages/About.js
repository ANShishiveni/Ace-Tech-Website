import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaBullseye, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: FaHandshake,
      title: 'Partnership',
      description: 'We build lasting partnerships with our clients, working together towards shared success.',
    },
    {
      icon: FaBullseye,
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge technologies to solve complex business challenges.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and lives.',
    },
  ];

  const timeline = [
    { year: '2013', title: 'Founded', description: 'Ace Tech was founded with a vision to transform businesses through technology.' },
    { year: '2015', title: 'First Major Project', description: 'Completed our first enterprise-level project for a Fortune 500 company.' },
    { year: '2017', title: 'Team Expansion', description: 'Grew our team to 25+ talented professionals across various domains.' },
    { year: '2019', title: 'Global Reach', description: 'Expanded services globally, serving clients in 15+ countries.' },
    { year: '2021', title: 'Innovation Award', description: 'Received the Tech Innovation Award for our AI-powered solutions.' },
    { year: '2023', title: 'New Horizons', description: 'Launched new services in cloud computing and blockchain technology.' },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: '15+ years in tech leadership',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Expert in cloud architecture',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Full-stack development guru',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5',
      bio: 'UX/UI design specialist',
    },
  ];

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
              About <span className="gradient-text">Ace Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We are a leading technology solutions provider, dedicated to helping businesses 
              transform and thrive in the digital age through innovative solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in creating lasting partnerships with our 
                clients and delivering exceptional value through our expertise and dedication.
              </p>
              <p className="text-gray-600">
                Our mission extends beyond just providing services – we aim to be strategic 
                partners in our clients' success, helping them navigate the complex digital 
                landscape and achieve their business objectives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be the most trusted and innovative technology partner for businesses worldwide, 
                known for our excellence, integrity, and commitment to client success.
              </p>
              <p className="text-gray-600">
                We envision a future where technology seamlessly integrates with business 
                operations, creating new opportunities and possibilities. Our goal is to be 
                at the forefront of this transformation, leading the way with innovative 
                solutions and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of innovation, growth, and success.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {event.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
                  )}
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals driving innovation and excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;