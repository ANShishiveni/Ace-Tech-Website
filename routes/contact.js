const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Contact form validation
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 5, max: 100 }).withMessage('Subject must be between 5 and 100 characters'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
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

    const { name, email, subject, message } = req.body;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    
    // For now, we'll simulate a successful submission
    console.log('Contact form submission:', { name, email, subject, message });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        name,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.'
    });
  }
});

module.exports = router;