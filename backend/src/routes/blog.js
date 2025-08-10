const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');
const { auth, adminAuth } = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/blog'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
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

// Get all published blog posts
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, tag, search } = req.query;
    const query = { published: true };

    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const blogs = await Blog.find(query)
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Blog.countDocuments(query);

    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true })
      .populate('author', 'name');

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create blog post (admin only)
router.post('/', [adminAuth, upload.single('featuredImage')], [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('content').trim().notEmpty().withMessage('Content is required'),
  body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
  body('category').notEmpty().withMessage('Category is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, excerpt, category, tags, published } = req.body;

    const blog = new Blog({
      title,
      slug: '', // Will be generated automatically
      content,
      excerpt,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      author: req.user._id,
      published: published === 'true',
      featuredImage: req.file ? `/uploads/blog/${req.file.filename}` : undefined
    });

    await blog.save();
    await blog.populate('author', 'name');

    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update blog post (admin only)
router.put('/:id', [adminAuth, upload.single('featuredImage')], async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, published } = req.body;
    
    const updateData = {
      title,
      content,
      excerpt,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      published: published === 'true',
      updatedAt: Date.now()
    };

    if (req.file) {
      updateData.featuredImage = `/uploads/blog/${req.file.filename}`;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).populate('author', 'name');

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete blog post (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all blog posts (admin only, including unpublished)
router.get('/admin/all', adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const blogs = await Blog.find()
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Blog.countDocuments();

    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;