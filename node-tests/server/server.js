const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not found',
        name: 'Todo v1.0.0'
    });
})

app.get('/users', (req, res) => {
    res.send({
        users: [{ name: 'Venkat', age: 24 }, { name: 'Mareddy', age: 25 }, { name: 'Mvr', age: 23 }]
    });
})
app.get('/users2', (req, res) => {
    res.send(
        [{ name: 'Venkat', age: 24 }, { name: 'Mareddy', age: 25 }, { name: 'Mvr', age: 23 }]
    );
})
app.listen(3000, () => {
    console.log('started the server');
});

module.exports.app = app;