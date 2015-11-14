var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passportCode = require('./Services/passport');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var config = require('../config');
var PermitController = require('./Controllers/PermitController');
var UserController = require('./Controllers/UserController');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  return next();
};

app.post('/user', UserController.register);
app.get('/user', isAuthed, UserController.me);
app.put('/user', isAuthed, UserController.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/user'
}));
app.get('/logout', function(req, res) {
  req.logout();
  return res.send('logged out');
});

app.get('/permits', PermitController.read);
app.post('/permits', PermitController.create);
app.put('/permits/:id', PermitController.update);
app.delete('/permits/:id', PermitController.delete);

var mongoURI = config.mongoURI;
var port = config.port;

app.listen(port, function() {
    console.log('listening at port: ' + port);
});

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
   console.log('What\'s good Mongoose');
});
