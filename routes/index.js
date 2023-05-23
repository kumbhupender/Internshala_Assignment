const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_Controller');
console.log('Router is loaded');

router.use('/', homeController.home);

module.exports = router;