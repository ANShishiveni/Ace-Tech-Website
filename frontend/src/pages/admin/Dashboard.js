import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiDocumentText, HiFolder, HiCog, HiMail, HiChartBar, 
  HiUsers, HiEye, HiTrendingUp 
} from 'react-icons/hi';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Blog Posts', value: '24', icon: HiDocumentText, change: '+12%' },
    { label: 'Projects', value: '18', icon: HiFolder, change: '+5%' },
    { label: 'Contact Inquiries', value: '42', icon: HiMail, change: '+28%' },
    { label: 'Page Views', value: '15.2K', icon: HiEye, change: '+18%' },
  ];

  const adminSections = [
    {
      title: 'Blog Management',
      description: 'Create, edit, and manage blog posts',
      icon: HiDocumentText,
      link: '/admin/blog',
      color: 'bg-blue-500'
    },
    {
      title: 'Projects',
      description: 'Manage portfolio projects',
      icon: HiFolder,
      link: '/admin/projects',
      color: 'bg-green-500'
    },
    {
      title: 'Services',
      description: 'Update service offerings',
      icon: HiCog,
      link: '/admin/services',
      color: 'bg-purple-500'
    },
    {
      title: 'Contact Inquiries',
      description: 'View and respond to messages',
      icon: HiMail,
      link: '/admin/contacts',
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { type: 'blog', action: 'New blog post published', time: '2 hours ago' },
    { type: 'contact', action: 'New contact inquiry received', time: '4 hours ago' },
    { type: 'project', action: 'Project "E-Commerce Platform" updated', time: '1 day ago' },
    { type: 'user', action: 'New user registration', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <span className="text-gray-600">Welcome back, {user?.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="text-primary-600 text-xl" />
                </div>
                <span className="text-green-500 text-sm font-medium flex items-center">
                  <HiTrendingUp className="mr-1" />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Admin Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {adminSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={section.link}
                className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 ${section.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 pb-4 border-b last:border-0 last:pb-0">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {activity.type === 'blog' && <HiDocumentText className="text-gray-600" />}
                  {activity.type === 'contact' && <HiMail className="text-gray-600" />}
                  {activity.type === 'project' && <HiFolder className="text-gray-600" />}
                  {activity.type === 'user' && <HiUsers className="text-gray-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/admin/blog/new" className="btn-primary">
            Create New Blog Post
          </Link>
          <Link to="/admin/projects/new" className="btn-secondary">
            Add New Project
          </Link>
          <Link to="/admin/contacts" className="btn-secondary">
            View Contact Inquiries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;