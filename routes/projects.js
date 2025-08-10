const express = require('express');
const router = express.Router();

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution built with React and Node.js. Features include user authentication, product management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "/images/projects/ecommerce.jpg",
    category: "Web Development",
    client: "RetailCorp",
    duration: "3 months",
    status: "Completed",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/ace-tech/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Firebase"],
    image: "/images/projects/banking.jpg",
    category: "Mobile Development",
    client: "BankTech",
    duration: "6 months",
    status: "Completed",
    liveUrl: "https://apps.apple.com/banking-app",
    githubUrl: "https://github.com/ace-tech/banking-app",
    featured: true
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Intelligent business analytics platform that provides real-time insights, predictive analytics, and customizable reporting.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    image: "/images/projects/analytics.jpg",
    category: "AI/ML",
    client: "DataCorp",
    duration: "4 months",
    status: "In Progress",
    liveUrl: null,
    githubUrl: "https://github.com/ace-tech/analytics-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "IoT Smart Home System",
    description: "Comprehensive smart home automation system with mobile app control, voice commands, and energy optimization.",
    technologies: ["IoT", "Python", "React Native", "MQTT", "AWS IoT"],
    image: "/images/projects/smart-home.jpg",
    category: "IoT",
    client: "HomeTech",
    duration: "5 months",
    status: "Completed",
    liveUrl: "https://smarthome-demo.com",
    githubUrl: "https://github.com/ace-tech/smart-home",
    featured: false
  },
  {
    id: 5,
    title: "Blockchain Supply Chain",
    description: "Transparent supply chain management system using blockchain technology for tracking and verification.",
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
    image: "/images/projects/blockchain.jpg",
    category: "Blockchain",
    client: "SupplyChain Inc",
    duration: "7 months",
    status: "Completed",
    liveUrl: "https://supplychain-demo.com",
    githubUrl: "https://github.com/ace-tech/supply-chain",
    featured: true
  },
  {
    id: 6,
    title: "Cloud Migration Platform",
    description: "Automated cloud migration tool that helps businesses transition from on-premise to cloud infrastructure.",
    technologies: ["AWS", "Terraform", "Python", "React", "Docker"],
    image: "/images/projects/cloud.jpg",
    category: "DevOps",
    client: "CloudCorp",
    duration: "4 months",
    status: "In Progress",
    liveUrl: null,
    githubUrl: "https://github.com/ace-tech/cloud-migration",
    featured: false
  }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  try {
    const { category, featured, status } = req.query;
    
    let filteredProjects = [...projects];
    
    if (category) {
      filteredProjects = filteredProjects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    if (status) {
      filteredProjects = filteredProjects.filter(project => 
        project.status.toLowerCase() === status.toLowerCase()
      );
    }
    
    res.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length
    });
  } catch (error) {
    console.error('Projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects'
    });
  }
});

// GET /api/projects/:id - Get project by ID
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Project error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project'
    });
  }
});

module.exports = router;