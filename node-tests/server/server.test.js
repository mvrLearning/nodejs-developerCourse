const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;
describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({ //this is used for using the expect library
                        error: 'Page Not found'
                    })
                })
                .end(done);
        });
    })

    describe('GET /users', () => {
        it('Should return the users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        users: [{ name: 'Venkat', age: 24 }, { name: 'Mareddy', age: 25 }, { name: 'Mvr', age: 23 }]
                    })
                })
                .end(done);
        })

        it('Should return the users', (done) => {
            request(app)
                .get('/users2')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Venkat',
                        age: 24
                    })
                })
                .end(done);
        })
    })

})