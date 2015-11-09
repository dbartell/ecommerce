var User = require('../models/User');

module.exports = {
    register: function(req, res) {
        User.create(req.body, function(err, user){
            if(err){
                return res.status(500).json(err);
            } else {
                user.password = null;
                return res.json(user);
            }
        });
    },

    me: function(req, res){
        if(!req.user){
            return res.send("current user not defined");
        } else {
            req.user.password = null;
            return res.json(req.user);
        }
    },

    update: function(req, res, done){
        User.findByIdandUpdate(req.user._id, req.body, function(err, result){
            if(err){
                return res.status(500).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    },

    read: function(req, res) {
      Permit.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      });
    },

    find: function(req, res) {
      User.findById(req.params.id).populate('favorites').exec(function(err, result){
          if(err){
              return res.status(500).json(err);
          } else {
              res.status(200).json(result);
          }
      });
    }
  };
