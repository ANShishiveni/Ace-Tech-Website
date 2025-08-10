const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Subscribe validation
const subscribeValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
];

// POST /api/subscribe - Subscribe to newsletter
router.post('/', subscribeValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, name } = req.body;

    // Here you would typically:
    // 1. Save to database
    // 2. Add to email marketing service
    // 3. Send welcome email
    
    // For now, we'll simulate a successful subscription
    console.log('Newsletter subscription:', { email, name });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      data: {
        email,
        name: name || 'Subscriber',
        subscribedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.'
    });
  }
});

module.exports = router;