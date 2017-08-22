var mongoose = require('mongoose');
var User = require('./user');

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
  comments: []
});


var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
    timestamps: true
  });

var Dishes = mongoose.model('Dishes', dishSchema);
var Comments = mongoose.model('Comments', commentSchema);

module.exports = Dishes;