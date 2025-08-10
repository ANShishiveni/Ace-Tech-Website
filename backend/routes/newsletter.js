const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const router = express.Router();

// In-memory storage for newsletter subscribers (in production, use a database)
let subscribers = new Set();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Newsletter subscription
router.post('/subscribe', [
  body('email').isEmail().normalizeEmail(),
  body('name').optional().trim().escape(),
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
        errors: errors.array()
      });
    }

    const { email, name } = req.body;

    // Check if already subscribed
    if (subscribers.has(email)) {
      return res.status(409).json({
        success: false,
        message: 'You are already subscribed to our newsletter'
      });
    }

    // Add to subscribers
    subscribers.add(email);

    // Send welcome email
    const welcomeMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Ace Tech Newsletter!',
      html: `
        <h2>Welcome to Ace Tech Newsletter!</h2>
        <p>Hi ${name || 'there'},</p>
        <p>Thank you for subscribing to our newsletter! You'll receive the latest updates about our services, tech insights, and industry news.</p>
        <p>Stay tuned for exciting content!</p>
        <p>Best regards,<br>The Ace Tech Team</p>
        <hr>
        <small>If you no longer wish to receive these emails, you can unsubscribe at any time.</small>
      `
    };

    await transporter.sendMail(welcomeMailOptions);

    res.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error with your subscription. Please try again later.'
    });
  }
});

// Get subscriber count (for admin purposes)
router.get('/count', (req, res) => {
  res.json({
    success: true,
    count: subscribers.size
  });
});

module.exports = router;