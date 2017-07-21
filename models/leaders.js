var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  designation: {
    type: String,
    default: ''
  },
  abbr: {
    type: String,
    required: true
  },
  description: String
});

var Leaders = mongoose.model('Leaders', leaderSchema);

module.exports = Leaders;