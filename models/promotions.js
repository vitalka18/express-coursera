var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true
  },
  description: String
});

var Promotions = mongoose.model('Promotions', promotionSchema);

module.exports = Promotions;