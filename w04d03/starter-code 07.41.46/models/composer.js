const mongoose = require('mongoose');

const composerSchema = new mongoose.Schema({
  firstname: {type: String, required: true },
  lastname: {type: String, required: true },
  compositions: {type: Number, required: true },
  nationality: {type: String, required: true}
});

module.exports = mongoose.model('Composer', composerSchema);
