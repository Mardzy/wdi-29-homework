const mongoose = require('mongoose');


const marketSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  who: String,
  when: String,
  where: String,
  rating: String,
  image: String
});


module.exports = mongoose.model('Market', marketSchema);
