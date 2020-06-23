// Entry point to all the routes
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users')); // require users file if incoming request is /users
router.use('/posts', require('./posts')); // require posts file if incoming request is /posts
router.use('/comments', require('./comments')); // require controllers file if incoming request is /comments

module.exports = router; // exporting to make available to main index.js