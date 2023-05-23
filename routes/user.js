const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
//api 
router.get('/profile', userController.user);

router.post('/create', userController.create);

module.exports = router;