const router = require('express').Router();

const Provider = require('../models/Provider');

// CREATE
router.post('/', async (req, res) => {
  const {
    name,
    logo,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  } = req.body;

  if (
    !name ||
    !logo ||
    !homeState ||
    !costKwh ||
    !minKwhLimit ||
    !totalNumberCustomers ||
    !averageCustomerRating
  ) {
    res.status(422).json({
      error:
        'Required fields: name, logo, homeState, costKwh, minKwhLimit, totalNumberCustomers, averageCustomerRating',
    });
    return;
  }

  const provider = {
    name,
    logo,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  };

  try {
    await Provider.create(provider);
    res
      .status(201)
      .json({ message: 'Provider successfully entered into the system!' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const provider = await Provider.findOne({ _id: id });

    if (!provider) {
      res.status(422).json({ message: 'Provider not found!' });
      return;
    }
    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE
router.patch('/:id', async (req, res) => {
  const id = req.params.id;

  const {
    name,
    logo,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  } = req.body;

  const provider = {
    name,
    logo,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  };

  try {
    const updatedProvider = await Provider.updateOne({ _id: id }, provider);

    if (updatedProvider.matchedCount === 0) {
      res.status(422).json({ message: 'Provider not found!' });
      return;
    }

    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const provider = await Provider.findOne({ _id: id });

  if (!provider) {
    res.status(422).json({ message: 'Provider not found!' });
    return;
  }

  try {
    await Provider.deleteOne({ _id: id });
    res.status(200).json({ message: 'Provider removed successfully!' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
