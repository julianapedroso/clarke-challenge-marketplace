const router = require('express').Router();
const Client = require('../models/Client');
const Provider = require('../models/Provider');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* CLIENTS */

// CREATE
router.post('/auth/signup', async (req, res) => {
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
});

// LOGIN
router.post('/auth/signin', async (req, res) => {
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
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, client.password);

    if (!checkPassword) {
      res.status(400).json({
        success: false,
        error: 'Invalid credentials',
      });
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
        message: 'Authentication performed successfully!',
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
});

// READ BY ID
router.get('/auth/:id', checkToken, async (req, res) => {
  const id = req.params.id;
  const client = await Client.findById(id, '-password');

  if (!client) {
    res.status(404).json({
      success: false,
      error: 'User not found',
    });
    return;
  }

  res.status(200).json(client);
});

// Middleware auth
function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  let token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Access denied!',
    });
    return;
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid token',
    });
  }
}

/* PROVIDERS */

// CREATE
router.post('/providers', async (req, res) => {
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
});

// READ
router.get('/providers', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json({
      providers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
