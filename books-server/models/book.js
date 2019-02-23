const mongoose = require('mongoose');

// Book Schema
const BookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Book = module.exports = mongoose.model('Book', BookSchema);