const mongoose = require('mongoose');
// const bcrypt = required('bcryptjs')

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
