const mongoose = require('mongoose');

// Author Schema
const AuthorSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  created_at:{
    type: Date,
    required: true,
    default: Date.now
  }
});

const Author = module.exports = mongoose.model('Author', AuthorSchema);