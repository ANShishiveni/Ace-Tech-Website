'use client'

import { useState } from 'react'
import axios from 'axios'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['hello@acetech.com', 'support@acetech.com'],
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    details: ['123 Tech Street', 'San Francisco, CA 94105'],
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
  },
]

const services = [
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
  'AI & Machine Learning',
  'DevOps & Automation',
  'Cybersecurity',
  'Consulting',
  'Other'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, formData)
      
      if (response.data.success) {
        setStatus('success')
        setResponseMessage(response.data.message)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
      }
    } catch (error: any) {
      setStatus('error')
      setResponseMessage(error.response?.data?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Information
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Multiple ways to reach us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 rounded-lg w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">✓ {responseMessage}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">✗ {responseMessage}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Side Content */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Ace Tech?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response</h4>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600">Most projects completed 2-4 weeks faster than industry average.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ClockIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600">Ongoing support and maintenance for all our solutions.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-600 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Free Consultation</h4>
                  <p className="text-blue-100">
                    Get a free 30-minute consultation to discuss your project requirements and explore solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
                <p className="text-gray-600">Most web development projects take 4-8 weeks, while mobile apps typically require 8-12 weeks. Complex enterprise solutions may take 3-6 months.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive support packages including bug fixes, updates, security patches, and feature enhancements.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What technologies do you work with?</h3>
                <p className="text-gray-600">We specialize in modern technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), and emerging technologies like AI/ML.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do you handle project pricing?</h3>
                <p className="text-gray-600">We provide transparent, fixed-price quotes based on project scope. For larger projects, we offer milestone-based payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}