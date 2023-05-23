const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_Controller');
console.log('Router is loaded');

router.get('/', homeController.home);
router.use('/users', require('./user'));

module.exports = router;