var db = require('./dbs');
module.exports.handleSignUp = (email, password) => {
    //check email exists r not
    db.saveUser({ email, password })
        //welcome mail
}