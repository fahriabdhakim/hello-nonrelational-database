const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create herose Schema
let heroesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
  speciality: {
    type: String,
    required: true
  },
  hp: {
    type: Number,
    required: true
  },
  mana: {
    type: Number,
    required: true
  }
}, {
  versionKey: false // Remove __v
});

module.exports = mongoose.model('Heroes', heroesSchema);