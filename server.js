var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');



var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());




var port = 9090;

app.listen(port, function() {
    console.log('listening at port: ' + port);
});

var mongoURI = 'mongodb://localhost:27017/e-commerce';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
   console.log('What\'s good Mongoose');
});
