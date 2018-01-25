// my node start point

var express = require('express');
var http = require('http');
var port = 3000;

var app = express();

// set your first route
app.get('/', (req, res) => {
    res.send('Hello Nodemon!');
});
 
var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

