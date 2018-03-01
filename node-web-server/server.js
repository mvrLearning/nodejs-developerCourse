const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', 'hbs'); // telling express to use the following view engine. like key value pair

app.use((req, res, next) => { //next is used to tell that is done.
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append to server.log');

        }
    })
    next(); //goes to next step
});
app.use((req, res, next) => {
    res.render('maintenance.hbs');
})
app.use(express.static(__dirname + '/public')); //takes the absolute path //middleware

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        message: 'Hi Welcome to my Website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to hand request'
    })
})
app.listen(3000, () => {
    console.log('Server is up and running on 3000');
});