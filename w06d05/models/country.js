const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, trim: true }
});

module.exports = mongoose.model('Country', countrySchema);
