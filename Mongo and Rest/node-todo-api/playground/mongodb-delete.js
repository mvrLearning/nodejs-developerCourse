const { MongoClient, ObjectID } = require('mongodb'); //using ES6 destructuring
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //         console.log(result);
    //     })
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //         console.log(result);
    //     })
    //findone and Delete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => { //this method gives us the document back
            console.log(result); //only deletes the first thing which matters the criteria
        })
        // client.close();
});