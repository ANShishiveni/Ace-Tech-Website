const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 150
  },
  icon: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  pricing: {
    starting: {
      type: Number
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);