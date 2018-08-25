var express = require('express');
var router = express.Router();
var models = require('../models');
var actor = require('../controllers/actors');
// Routes related to actor.
router.get('/', actor.getActors);

// router.PushEvent('/', function (req, res) {
   
//   // models.sequelize.query("SELECT `actors`.`id`, `actors`.`login`, `actors`.`avatar_url`, count(`Events`.`id`) as `ECount`, FROM `actors` JOIN `events` ON `actors`.`id` = `events`.`ActorId` ORDER BY `ECount` DESC", { type: sequelize.QueryTypes.SELECT})
//   // .then(users => {
//   //   res.send(users);
//   // });
  
    
  
//     models.Actor.findAll({
      
//     }).then(function (data) {
//       res.send(data);
//     });
//     //res.send(req.body.actor);


// });

module.exports = router;