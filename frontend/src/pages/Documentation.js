import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBook, FiDownload, FiSearch, FiCopy, FiCheck } from 'react-icons/fi';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState(null);

  const sections = [
    { id: 'getting-started', name: 'Getting Started', icon: FiBook },
    { id: 'api-reference', name: 'API Reference', icon: FiCode },
    { id: 'sdks', name: 'SDKs & Libraries', icon: FiDownload },
    { id: 'examples', name: 'Examples', icon: FiCode },
    { id: 'tutorials', name: 'Tutorials', icon: FiBook }
  ];

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    'getting-started': `# Getting Started with Ace Tech API

## Installation
\`\`\`bash
npm install ace-tech-sdk
\`\`\`

## Quick Start
\`\`\`javascript
import { AceTechAPI } from 'ace-tech-sdk';

const api = new AceTechAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Make your first API call
const response = await api.projects.list();
console.log(response);
\`\`\``,
    'api-reference': `# API Reference

## Authentication
All API requests require an API key in the header:

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Endpoints

### GET /api/v1/projects
List all projects for the authenticated user.

\`\`\`javascript
const projects = await api.projects.list({
  limit: 10,
  offset: 0
});
\`\`\`

### POST /api/v1/projects
Create a new project.

\`\`\`javascript
const project = await api.projects.create({
  name: 'My New Project',
  description: 'Project description',
  type: 'web-application'
});
\`\`\``,
    'sdks': `# SDKs & Libraries

## JavaScript/Node.js
\`\`\`bash
npm install ace-tech-sdk
\`\`\`

## Python
\`\`\`bash
pip install ace-tech-python
\`\`\`

## PHP
\`\`\`bash
composer require ace-tech/php-sdk
\`\`\`

## Ruby
\`\`\`bash
gem install ace-tech-ruby
\`\`\`

## Go
\`\`\`bash
go get github.com/ace-tech/go-sdk
\`\`\``,
    'examples': `# Code Examples

## Create a Project
\`\`\`javascript
const project = await api.projects.create({
  name: 'E-commerce Platform',
  description: 'Modern e-commerce solution',
  type: 'web-application',
  technologies: ['React', 'Node.js', 'PostgreSQL']
});

console.log('Project created:', project.id);
\`\`\`

## Upload Files
\`\`\`javascript
const file = await api.files.upload({
  file: fileInput.files[0],
  projectId: project.id,
  category: 'design'
});

console.log('File uploaded:', file.url);
\`\`\`

## Handle Errors
\`\`\`javascript
try {
  const result = await api.projects.get('invalid-id');
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    console.log('Project not found');
  } else {
    console.error('API Error:', error.message);
  }
}
\`\`\``,
    'tutorials': `# Tutorials

## Building Your First Integration

### Step 1: Set Up Your Environment
\`\`\`bash
mkdir ace-tech-integration
cd ace-tech-integration
npm init -y
npm install ace-tech-sdk dotenv
\`\`\`

### Step 2: Configure Authentication
Create a \`.env\` file:
\`\`\`env
ACE_TECH_API_KEY=your_api_key_here
ACE_TECH_ENVIRONMENT=sandbox
\`\`\`

### Step 3: Create Your First Script
\`\`\`javascript
require('dotenv').config();
const { AceTechAPI } = require('ace-tech-sdk');

const api = new AceTechAPI({
  apiKey: process.env.ACE_TECH_API_KEY,
  environment: process.env.ACE_TECH_ENVIRONMENT
});

async function main() {
  try {
    const projects = await api.projects.list();
    console.log('Your projects:', projects);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
\`\`\``
  };

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <span className="gradient-text">Documentation</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Comprehensive guides, API references, and examples to help you 
              integrate with our platform and build amazing applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Navigation */}
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
                placeholder="Search documentation..."
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

            {/* Quick Links */}
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
              <a href="#api-reference" className="btn btn-outline">
                API Reference
              </a>
              <a href="#sdks" className="btn btn-outline">
                Download SDKs
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Documentation Sections</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Choose a section to get started with our comprehensive documentation.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedSection(section.id)}
              >
                <div style={{
                  backgroundColor: '#eff6ff',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  <section.icon size={32} style={{ color: '#2563eb' }} />
                </div>
                
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '1.2rem',
                  textAlign: 'center'
                }}>
                  {section.name}
                </h3>
                
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  View Documentation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Section Content */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <div className="card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
                paddingBottom: '20px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <h2 style={{ margin: 0 }}>
                  {sections.find(s => s.id === selectedSection)?.name}
                </h2>
                <button
                  className="btn btn-outline"
                  onClick={() => copyToClipboard(codeExamples[selectedSection], selectedSection)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {copiedCode === selectedSection ? (
                    <>
                      <FiCheck size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy size={16} />
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              <div style={{
                backgroundColor: '#1f2937',
                color: '#f9fafb',
                padding: '24px',
                borderRadius: '12px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                overflow: 'auto',
                whiteSpace: 'pre-wrap'
              }}>
                {codeExamples[selectedSection]}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2>Additional Resources</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Get help, find examples, and connect with our developer community.
            </p>
          </motion.div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#eff6ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2563eb'
              }}>
                <FiBook size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Developer Guide</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Comprehensive guide covering all aspects of our platform integration.
              </p>
              <button className="btn btn-outline">Download Guide</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#eff6ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2563eb'
              }}>
                <FiCode size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>Code Samples</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Ready-to-use code samples for common integration scenarios.
              </p>
              <button className="btn btn-outline">View Samples</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#eff6ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2563eb'
              }}>
                <FiDownload size={28} />
              </div>
              <h3 style={{ marginBottom: '16px' }}>SDK Downloads</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Download our official SDKs for your preferred programming language.
              </p>
              <button className="btn btn-outline">Download SDKs</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section" style={{ backgroundColor: '#1e293b' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <h2 style={{ marginBottom: '24px' }}>Need Help?</h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              Can't find what you're looking for? Our developer support team is here to help.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
              <a href="/community" className="btn btn-outline" style={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}>
                Developer Community
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;