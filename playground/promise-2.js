var request = require('request');
var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBz9FqOMhKAfLyljnOLSGpGhtNbX4q27os`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the Address')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    })

};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errmsg) => {
    console.log(errmsg);
});