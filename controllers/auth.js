const Client = require('../models/Client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
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

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: 'Please provide email and password',
    });
    return;
  }
  try {
    const client = await Client.findOne({ email: email });
    if (!client) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, client.password);

    if (!checkPassword) {
      res.status(404).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: client._id,
        },
        secret
      );

      res.status(200).json({
        success: true,
        mssage: 'Authentication performed successfully!',
        token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// READ BY ID 
exports.client = async (req, res) => {
  const id = req.params.id
  const client = await Client.findById(id, '-password');

  if (!client) {
    res.status(404).json({ success: false, error: 'User not found' });
    return;
  }

  res.status(200).json(client);
}
