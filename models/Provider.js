const mongoose = require('mongoose');

const Provider = mongoose.model('Provider', {
  id: Number,
  name: String,
  logo: String,
  homeState: String,
  costKwh: Number,
  minKwhLimit: Number,
  totalNumberCustomers: Number,
  averageCustomerRating: Number,
});

module.exports = Provider;
