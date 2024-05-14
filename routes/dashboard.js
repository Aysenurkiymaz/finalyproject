const express = require('express');
const authController = require('../controllers/dashboard');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();
router.get('/event', authController.viewEvent);
router.get('/dashboard', authController.dashboardView);
router.post('/event', authController.createEvent);

module.exports = router;
