
const express = require('express');
const multer = require('multer');
const path = require('path');
const { registerUser, loginUser, loggedInUser } = require('../controllers/userController');

const router = express.Router();




//Register user
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', loggedInUser);

//Module exports
module.exports = router;