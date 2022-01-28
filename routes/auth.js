const express = require('express');
const router = express.Router();

const { signup, signin, client } = require('../controllers/auth');

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/:id').get(client);

module.exports = router;
