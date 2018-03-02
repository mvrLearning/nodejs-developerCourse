const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44);
            expect(res).toBeA('number');
            // if (res !== 44) {
            //     throw new Error(`Expected 44 but got ${res}`);
            // }
        });
    })


    it('Should square the number', () => {
        var res = utils.square(8);
        expect(res).toBeA('number');
        expect(res).toBe(64);
        // if (res !== 64) {
        //     throw new Error(`Expected 64 but got ${res}`);
        // }
    });

    it('Should expect Some Value', () => {
        //expect(12).toNotBe(11);
        // expect({ name: 'venkat' }).toBe({ name: 'venkat' }); //false
        // expect({ name: 'venkat' }).toEqual({ name: 'venkat' }); //true for comparing objects
        // expect({ name: 'venkat' }).toNotEqual({ name: 'Venkat' }); //false
        expect([2, 3, 4]).toInclude(2); //true
        expect([2, 3, 4]).toExclude(1); //true
        expect({
            name: 'Venkat',
            age: 24,
            location: 'India'
        }).toInclude({
            age: 24
        });

    });

    it('Should set first and last name', () => {
        var user = { location: 'Hyderabad', age: 24 };
        var res = utils.setName(user, 'Venkat Mareddy');
        expect(user).toEqual(res);
        expect(res).toInclude({ firstName: 'Venkat', lastName: 'Mareddy' });
    });

    it('should async add two numbers', (done) => { //telling mocha this test is async by adding the done as the parameter
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            expect(sum).toBeA('number');
            done(); //will pass the test when this is called
        })
    });

    it('Should async square two numbers', (done) => {
        utils.asyncSquare(4, (sqrd) => {
            expect(sqrd).toBe(16);
            expect(sqrd).toBeA('number');
            done();
        })
    });
});