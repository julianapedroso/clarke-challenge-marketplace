const Client = require('../models/Client');
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Create password hash
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    const client = await Client.create({
      name,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      success: true,
      message: 'Client successfully entered into the system!',
      client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.signin = async (req, res, next) => {
  // const { email, password } = req.body;
  // if (!email || !password) {
  //   res.status(400).json({
  //     success: false,
  //     error: 'Please provide email and password',
  //   });
  //   return;
  // }
  // try {
  //   const client = await Client.findOne({ email }).select('+password');
  //   if (!client) {
  //     res.status(404).json({ success: false, error: 'Invalid credentials' });
  //     return;
  //   }
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     error: error.message,
  //   });
  // }
};
