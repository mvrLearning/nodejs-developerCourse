const { MongoClient, ObjectID } = require('mongodb'); //using ES6 destructuring
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').find({ _id: new ObjectID('5a9ce34f8a877d2ed01b2c26') }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch the todos', err);
        })
        // client.close();
});