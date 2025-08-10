const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const Project = require('../models/Project');
const { adminAuth } = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/projects'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    const query = {};

    if (category) query.category = category;
    if (featured === 'true') query.featured = true;

    const projects = await Project.find(query)
      .sort({ completedDate: -1 });

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create project (admin only)
router.post('/', [adminAuth, upload.array('images', 10)], [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('shortDescription').trim().notEmpty().withMessage('Short description is required'),
  body('client').trim().notEmpty().withMessage('Client is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('completedDate').isISO8601().withMessage('Valid completion date is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      shortDescription,
      client,
      category,
      technologies,
      featured,
      liveUrl,
      githubUrl,
      completedDate
    } = req.body;

    const images = req.files ? req.files.map(file => `/uploads/projects/${file.filename}`) : [];

    const project = new Project({
      title,
      description,
      shortDescription,
      client,
      category,
      technologies: technologies ? technologies.split(',').map(tech => tech.trim()) : [],
      images,
      featured: featured === 'true',
      liveUrl,
      githubUrl,
      completedDate
    });

    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update project (admin only)
router.put('/:id', [adminAuth, upload.array('images', 10)], async (req, res) => {
  try {
    const {
      title,
      description,
      shortDescription,
      client,
      category,
      technologies,
      featured,
      liveUrl,
      githubUrl,
      completedDate
    } = req.body;

    const updateData = {
      title,
      description,
      shortDescription,
      client,
      category,
      technologies: technologies ? technologies.split(',').map(tech => tech.trim()) : [],
      featured: featured === 'true',
      liveUrl,
      githubUrl,
      completedDate
    };

    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(file => `/uploads/projects/${file.filename}`);
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete project (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;