var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: String,
  category: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  comments: [{
    rating: Number,
    comment: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }]
});


var Dishes = mongoose.model('Dishes', dishSchema);

module.exports = Dishes;