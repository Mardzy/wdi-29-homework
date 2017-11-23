const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: String,
  bedrooms: Number,
  bathrooms: Number,
  image: String,
  askingPrice: Number
});

propertySchema.set('toJSON', {
  // virtuals allows us to call the id for a resource as 'id' not '_id'
  virtuals: true,
  // when there is a json request using this model, we want to delete certain private or unwanted infomation
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    return json;
  }
});



module.exports = mongoose.model('Property', propertySchema);
