// Entry point to all the routes
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users')); // require users file if incoming request is /users

module.exports = router; // exporting to make available to main index.js