var express = require('express');
var router = express.Router();
var models = require('../models');
var event = require('../controllers/events');
// Routes related to event
router.post('/', event.createEvent);

router.get('/', event.getEvents);

router.get('/actors/:actorID', event.getEventByActor);

module.exports = router;