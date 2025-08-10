const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Service = require('../models/Service');
const { adminAuth } = require('../middleware/auth');

// Get all active services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ active: true })
      .sort({ order: 1 });

    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single service
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create service (admin only)
router.post('/', adminAuth, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('shortDescription').trim().notEmpty().withMessage('Short description is required'),
  body('icon').trim().notEmpty().withMessage('Icon is required')
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
      icon,
      features,
      pricing,
      order,
      active
    } = req.body;

    const service = new Service({
      title,
      description,
      shortDescription,
      icon,
      features: features ? features.split(',').map(f => f.trim()) : [],
      pricing: pricing ? {
        starting: parseFloat(pricing.starting),
        currency: pricing.currency || 'USD'
      } : undefined,
      order: order ? parseInt(order) : 0,
      active: active !== false
    });

    await service.save();

    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update service (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const {
      title,
      description,
      shortDescription,
      icon,
      features,
      pricing,
      order,
      active
    } = req.body;

    const updateData = {
      title,
      description,
      shortDescription,
      icon,
      features: features ? features.split(',').map(f => f.trim()) : [],
      pricing: pricing ? {
        starting: parseFloat(pricing.starting),
        currency: pricing.currency || 'USD'
      } : undefined,
      order: order ? parseInt(order) : 0,
      active: active !== false
    };

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete service (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all services including inactive (admin only)
router.get('/admin/all', adminAuth, async (req, res) => {
  try {
    const services = await Service.find()
      .sort({ order: 1 });

    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;