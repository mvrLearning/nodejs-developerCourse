console.log('Starting App');

setTimeout(() => {
    console.log('Inside Callback');
}, 2000);

setTimeout(() => {
    console.log('no delay call back');

}, 0);
console.log('Finishing up');