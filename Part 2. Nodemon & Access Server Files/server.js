// my node start point

var express = require('express');
var http = require('http');
var path = require('path');
var port = 3000;

var app = express();

// set public resoures folder
app.use(express.static(__dirname + '/public'));

// set your first route
app.get('/', (req, res) => {
    // res.send('Hello Nodemon!');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

