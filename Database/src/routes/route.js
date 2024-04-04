const express = require('express');
const router = express.Router();
const user = require('../controllers/userControllers');
router.get('/',user)

module.exports = router;
