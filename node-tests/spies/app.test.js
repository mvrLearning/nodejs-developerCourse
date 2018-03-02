const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

//app.__get__, app.__set__  2 methods

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);
    it('Should call the Spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('Should call saveuser with user obj', () => {
        var email = 'mareddyvenkatesh@gmail.com';
        var password = 'Wipro@123';
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    })
})