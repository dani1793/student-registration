var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({

  registerationNo:{ type: String },
  firstName: { type: String },
  lastName: { type: String } ,
  gender:{type: String},
  contactNo: {type: String},
  address: {type: String},
  email: {type: String}
});


module.exports = mongoose.model('student', StudentSchema);
