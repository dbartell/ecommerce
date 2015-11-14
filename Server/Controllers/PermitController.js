var Permit = require('./Server/Models/PermitApplication.js');

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
  },
  update: function(req, res) {
    Permit.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {users: req.body}},
      {safe: true, upsert: true},

      function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
  delete: function(req, res) {
    Permit.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
};
