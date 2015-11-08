var Permit = require('../models/PermitApplication');

module.exports = {
  create: function(req, res) {
    Permit.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
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
  }
};
