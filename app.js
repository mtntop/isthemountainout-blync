// imports
const request = require('request');
const io = require('socket.io-client');
const express = require('express');
const bodyParser = require('body-parser');
const blyncCore = require('blync-core');

// Blync setup
const blyncLights = blyncCore.findAllBlyncLights();

if (!blyncLights || blyncLights.length == 0) {
    console.log('No Blynclight found');
    process.exit();
}
const blyncLight = blyncLights[0];

// Keeps state
let IS_OUT = false;

// Use Webhooks or Socket.io
if (process.env.USE_SOCKETIO) {
    console.log('Using Socket.io');
    var socket = io('http://themtn.top');
    socket.on('mountainChange', function (data) {
        IS_OUT = data.result;
        handleChange();
    });
} else {
    console.log('Using Webhooks');
    // Express and body parser setup
    const app = express();
    app.use(bodyParser.json());
    app.listen(3000, () => {
        console.log('Listening on port 3000!')
    });

    app.post('/', (req, res) => {
        IS_OUT = !IS_OUT;
        handleChange();
    });
}

// Query API to get current value
request.get('https://themtn.top/api/simple', (error, response, body) => {
    IS_OUT = response.statusCode == 200;
    handleChange();
});

function handleChange() {
    console.log(IS_OUT);
    if (IS_OUT) {
        blyncLight.setColor('green');
    } else {
        blyncLight.setColor('red');
    }
}