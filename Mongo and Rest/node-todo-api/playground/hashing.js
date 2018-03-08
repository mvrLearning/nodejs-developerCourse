const { SHA256 } = require('crypto-js');

var message = 'I am user number 3';

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

// hasing is always one side
//-> storing the passwords in dbs

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

//salt the hash means we are adding something to data so that it will be difficult to find

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

//JWET --json web token


var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log('data was not chnaged');
} else {
    console.log('data was changed');
}