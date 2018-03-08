const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
var hashedpwd;
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        hashedpwd = hash

    })
});


bcrypt.compare(password, hashedpwd, (err, res) => {
    console.log(res);
})