const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  id: Number,
  name: String,
  logo: String,
  homeState: String,
  costKwh: Number,
  minKwhLimit: Number,
  totalNumberCustomers: Number,
  averageCustomerRating: Number,
});

const Provider = mongoose.model('Provider', ProviderSchema);

module.exports = Provider;
