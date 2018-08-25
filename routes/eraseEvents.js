var express = require('express');
var router = express.Router();
var models = require('../models');
var event = require('../controllers/events');

// Route related to delete events

router.delete('/', event.eraseEvent);

module.exports = router;