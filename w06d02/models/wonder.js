const mongoose = require('mongoose');

const wonderSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  location: {
    lat: Number,
    lng: Number
  }
});

wonderSchema.set('toJSON', {
  // virtuals allows us to call the id for a resource as 'id' not '_id'
  virtuals: true,
  // when there is a json request using this model, we want to delete certain private or unwanted infomation
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    return json;
  }
});

module.exports = mongoose.model('Property', wonderSchema);
