// var square = (x) => {
//     var result = x * x;
//     return result;
// }

//var square = (x) => x * x;
var square = x => x * x; // only for one parameter
console.log(square(9));

var user = {
    name: 'venkat',
    sayHi: () => {
        console.log(arguments); //refer to global object
        console.log(`Hi ${this.name}`); // this will bind to global
    },

    sayHiAlt() {
        console.log(arguments);
        console.log(`hi ${this.name}`);

    }
}

user.sayHiAlt(1, 2, 3);

/* Arrow functions doesnot bind this keyword if we use this in function if we use arrow fn in that place we get
    to refer to global this
*/