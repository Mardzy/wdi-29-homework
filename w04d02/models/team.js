const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  location: String,
  name: String,
  sport: String,
  arena: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
