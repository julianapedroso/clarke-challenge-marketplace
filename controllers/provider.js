const Provider = require('../models/Provider');

// CREATE
exports.providers = async (req, res) => {
  const {
    name,
    logo,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  } = req.body;

  try {
    const provider = await Provider.create({
      name,
      logo,
      homeState,
      costKwh,
      minKwhLimit,
      totalNumberCustomers,
      averageCustomerRating,
    });

    res.status(201).json({
      success: true,
      message: 'Provider successfully entered into the system!',
      provider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// READ
exports.providers = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json({ 
      providers 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};