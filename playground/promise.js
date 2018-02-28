var asyncAdd = (a, b) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof a === 'number' && typeof b === 'number') {
                    resolve(a + b)
                } else {
                    reject('Arguments must be numbers');
                }
            }, 1500);
        })
    }
    // var somePromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('hey it worked!');
    //         reject('Unable to full fill the promise');
    //     }, 2500);
    // });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errMsg) => {
//     console.log('Error: ', errMsg);
// })


// we can do only one thing either resolve or reject and that also only once.

// asyncAdd(5, 7).then((res) => {
//     console.log('Result: ', res);
//     return asyncAdd(res, 33);
// }, (err) => {
//     console.log(err);
// }).then((res) => {
//     console.log('Should be 45: ', res);
// }, (err) => {
//     console.log(err);
// }); //if there is any error the next call backs will be called. to avoid  that we should use catch

asyncAdd(5, '7').then((res) => {
        console.log('Result: ', res);
        return asyncAdd(res, '33');
    }).then((res) => {
        console.log('Should be 45: ', res);
    }).catch((err) => {
        console.log(err);
    }) //useful in promise chaining