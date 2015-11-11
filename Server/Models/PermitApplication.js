var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  permit: {
    name: String,
    email: String,
    phone: String,
    fax: String,

    company: String,
    licence: String,
    truck: String,
    trailer: String,
    trailerlength: String,
    axles: String,
    axlewidth: String,
    equipment: String,
    description: String,

    date: String,
    origin: String,
    destination: String,
    route: String,
    states: String,

    length: String,
    height: String,
    width: String,

    oal: String,
    foh: String,
    roh: String,
    oah: String,
    kpla: String,

    groupone: String,
    truckweights: String,
    grouptwo: String,
    groupthree: String,
    groupfour: String,
    groupfive: String,
    grossweight: String,
    tirecount: String,

    notes: String
  }
});

module.exports = mongoose.model('PermitApplication', schema);
