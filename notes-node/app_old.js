const fs = require('fs'); //file system
const os = require('os'); //os module
const _ = require('lodash');

const notes = require('./notes');
var user = os.userInfo();

// console.log(_.isString(true)); //checks the string or not and returns the boolean value
// console.log(_.isString('Venkat'));

var filteredArray = _.uniq(['Venkat', 2, 'Venkat', 1, 2, 3, 4]); //[ 'Venkat', 2, 1, 3, 4 ]
console.log(filteredArray);

// console.log(`Result: ${notes.add(3,4)}`);
// fs.appendFile('greetings.txt', 'Hello world!');

// fs.appendFileSync('greetings.txt', 'Hello world!');

//append file will create the file if it doesn't exist

// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`, function(err) {
//     if (err) {
//         console.log('unable to write to the file');
//     }
// })