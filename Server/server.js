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

var isAuthed = function(req, res, next){
  if(!req.isAuthenticated()) {return res.sendStatus(401);}
  return next();
};

app.post('/user', UserController.register);
app.get('/user', UserController.me);
app.put('/user', isAuthed, UserController.update);
app.post('/login', passport.authenticate('local',{
	successRedirect:'/user'
}));
app.get('/logout', function(req,res){
 req.logout();
 req.session.destroy(function (err) {
        res.redirect('/');
    });
});

app.get('/permits', PermitController.read);
app.post('/permits', PermitController.create);

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
