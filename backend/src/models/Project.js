const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
    maxLength: 200
  },
  client: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Web Development', 'Mobile App', 'AI/ML', 'Cloud Solutions', 'Consulting']
  },
  technologies: [{
    type: String
  }],
  images: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  liveUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  completedDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);