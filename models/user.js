var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
 
    admin:   {
        type: Boolean,
        default: false
    }
});

User.method.getName = function() {
    return (this.lastname + ' ' + this.firstname);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);