// Misc
const request = require('request');

// Blync setup
const blyncCore = require('blync-core');
const blyncLights = blyncCore.findAllBlyncLights();

if (!blyncLights || blyncLights.length == 0) {
    console.log('No Blynclight found');
    process.exit();
}
const blyncLight = blyncLights[0];

// Express and body parser setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('Listening on port 3000!')
});

let IS_OUT = false;

// Query API to get current value
request.get('https://themtn.top/api/simple', (error, response, body) => {
    IS_OUT = response.statusCode == 200;
    handleChange();
});

app.post('/', (req, res) => {
    IS_OUT = !IS_OUT;
    handleChange();
});

function handleChange() {
    if (IS_OUT) {
        blyncLight.setColor('green');
    } else {
        blyncLight.setColor('red');
    }
}