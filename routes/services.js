const express = require('express');
const router = express.Router();

// Sample services data
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies. From simple websites to complex enterprise solutions.",
    icon: "🌐",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development",
      "Performance Optimization"
    ],
    technologies: ["React", "Vue.js", "Node.js", "Python", "PHP", "MySQL", "MongoDB"],
    pricing: {
      basic: "$5,000",
      standard: "$15,000",
      premium: "$50,000+"
    },
    category: "Development"
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: "📱",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    pricing: {
      basic: "$8,000",
      standard: "$25,000",
      premium: "$80,000+"
    },
    category: "Development"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage artificial intelligence and machine learning to solve complex business problems.",
    icon: "🤖",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Data Mining",
      "Model Training & Deployment"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "AWS SageMaker"],
    pricing: {
      basic: "$15,000",
      standard: "$50,000",
      premium: "$150,000+"
    },
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to help businesses leverage the power of the cloud.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Automation",
      "Container Orchestration",
      "Serverless Architecture",
      "Cost Optimization"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    pricing: {
      basic: "$10,000",
      standard: "$30,000",
      premium: "$100,000+"
    },
    category: "DevOps"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive user experiences.",
    icon: "🎨",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "User Testing",
      "Design Systems",
      "Accessibility Compliance"
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer"],
    pricing: {
      basic: "$3,000",
      standard: "$12,000",
      premium: "$40,000+"
    },
    category: "Design"
  },
  {
    id: 6,
    title: "Consulting & Strategy",
    description: "Strategic technology consulting to help businesses make informed decisions about their digital transformation.",
    icon: "💡",
    features: [
      "Technology Assessment",
      "Digital Strategy",
      "Architecture Planning",
      "Security Audits",
      "Performance Reviews",
      "Team Training"
    ],
    technologies: ["Various", "Industry Best Practices", "Security Standards", "Performance Tools"],
    pricing: {
      basic: "$150/hour",
      standard: "$250/hour",
      premium: "$400/hour"
    },
    category: "Consulting"
  }
];

// GET /api/services - Get all services
router.get('/', (req, res) => {
  try {
    const { category } = req.query;
    
    let filteredServices = [...services];
    
    if (category) {
      filteredServices = filteredServices.filter(service => 
        service.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    res.json({
      success: true,
      data: filteredServices,
      total: filteredServices.length
    });
  } catch (error) {
    console.error('Services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services'
    });
  }
});

// GET /api/services/:id - Get service by ID
router.get('/:id', (req, res) => {
  try {
    const serviceId = parseInt(req.params.id);
    const service = services.find(s => s.id === serviceId);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service'
    });
  }
});

module.exports = router;