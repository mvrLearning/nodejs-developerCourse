var mongoose = require('mongoose');
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1, //min length of the property
        trim: true //trimming the white spaces
    }
});

module.exports = { User };