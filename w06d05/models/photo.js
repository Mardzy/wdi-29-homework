const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  country: { type: mongoose.Schema.ObjectId, ref: 'Country' },
  location: { type: String, required: true},
  description: { type: String, required: true},
  image: String

});

module.exports = mongoose.model('Photo', photoSchema);
