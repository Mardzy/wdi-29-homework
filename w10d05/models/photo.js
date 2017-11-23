const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  image: String,
  description: String,
  location: String,
  camera: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Photo', photoSchema);
