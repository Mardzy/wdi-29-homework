const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: mongoose.Schema.ObjectId, ref: 'Country' },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  strength: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Cheese', cheeseSchema);
