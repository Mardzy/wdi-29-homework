const mongoose = require('mongoose');

const streetArtistSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  age: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('StreetArtist', streetArtistSchema);
