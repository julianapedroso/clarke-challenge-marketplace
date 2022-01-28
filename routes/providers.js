const express = require('express');
const router = express.Router();

const { providers } = require('../controllers/provider');

router.route('/providers').post(providers);
router.route('/providers').get(providers);

module.exports = router;
