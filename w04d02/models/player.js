const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String,
  caption: String
});

const playerSchema = new mongoose.Schema({
  name: String,
  team: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  position: String,
  countryofbirth: String,
  age: Number,
  images: [imageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);
