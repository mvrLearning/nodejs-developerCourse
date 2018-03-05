/* mongodb v2
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert document');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.close();
});
*/
//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //using ES6 destructuring
var obj = new ObjectID(); //creates an object Id everythime we do this like the _id
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert document');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection('Users').insertOne({
        name: 'Venkat',
        age: 24,
        location: 'Hyderabad'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to inset document');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
});

//ES6 Destructuring
/*var user = { name: 'Venkat', age: 24 };
var { name } = user;
console.log(name); //Venkat
*/