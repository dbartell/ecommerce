var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('./services/passport');
var LocalStrategy = require('passport-local').Strategy;

var PermitController = require('./Controllers/PermitController');
var UserController = require('./Controllers/UserController');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use(session({
	secret:'dbaby',
	saveUninitialized:true,
	resave:true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/permits', PermitController.read);
app.post('/permits', PermitController.create);
app.put('/permits/:id', PermitController.update);
app.delete('/permits/:id', PermitController.delete);

// app.get('/user', UserController.read);
app.get('/user/:id', UserController.find);

var port = 9090;

app.listen(port, function() {
    console.log('listening at port: ' + port);
});

var mongoURI = 'mongodb://localhost:27017/cor';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
   console.log('What\'s good Mongoose');
});
