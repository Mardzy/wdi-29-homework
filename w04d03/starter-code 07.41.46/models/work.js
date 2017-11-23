const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
  composition: { type: String },
  style: { type: String },
  datecreated: { type: Number },
  composer: { type: mongoose.Schema.ObjectId, ref: 'Composer' }
});

module.exports = mongoose.model('Work', workSchema );
