const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String,
  caption: String
});

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const streetArtSchema = new mongoose.Schema({
  name: {type: mongoose.Schema.ObjectId, ref: 'StreetArtist'},
  images: [imageSchema],
  comment: [commentSchema]
});

module.exports = mongoose.model('StreetArt', streetArtSchema);
