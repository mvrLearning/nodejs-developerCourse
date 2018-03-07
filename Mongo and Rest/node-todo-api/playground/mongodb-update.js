const { MongoClient, ObjectID } = require('mongodb'); //using ES6 destructuring
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a9ce52c76a5ee033c6d0ae9')
    }, {
        $set: {
            name: 'Mareddy'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});