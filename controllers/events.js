//var express = require('express');
//var router = express.Router();
var models = require('../models');
//var event = require('../controllers/events');

var eraseEvent = function (req, res) {
    //console.log(JSON.stringify(req.body.actor));
   
    models.Event.destroy({ truncate: { cascade: true } });
    models.Actor.destroy({ truncate: { cascade: true } });
    models.Repo.destroy({ truncate: { cascade: true } });
    res.send("success");
    
};


var getEventByActor = function (req, res) {
    //console.log(JSON.stringify(req.body.actor));
  
    models.Event.findAll({
      include: [
        models.Actor,
        models.Repo
      ],
  
      where: {
        ActorId: req.params.actorID
      },
      order: [
        ['id', 'ASC']
      ]
    }).then(function (data) {
      res.send(data);
    });
    //res.send(req.body.actor);
  };

var getEvents = function (req, res) {
    //console.log(JSON.stringify(req.body.actor));
  
    models.Event.findAll({
      include: [
        models.Actor,
        models.Repo
      ]
    }).then(function (data) {
      res.send(data);
    });
    //res.send(req.body.actor);
};

var createEvent = function (req, res) {
    //console.log(JSON.stringify(req.body.actor));
  
    models.Repo.findOrCreate({
  
      where: {//object containing fields to found
        id: req.body.repo.id
      },
      defaults: {//object containing fields and values to apply
        id: req.body.repo.id,
        name: req.body.repo.name,
        url: req.body.repo.url
      }
    }).then(function (repo) {
      //console.log("testing repo"+JSON.stringify(repo));
      models.Actor.findOrCreate({
        where: {//object containing fields to found
          id: req.body.actor.id
        },
        defaults: {//object containing fields and values to apply
          id: req.body.actor.id,
          login: req.body.actor.login,
          avatar_url: req.body.actor.avatar_url
        }
      }).then(function (actor) {
        //console.log("testing repo"+JSON.stringify(repo));
        //console.log("testing actor"+JSON.stringify(actor));
        if (Array.isArray(repo) && Array.isArray(actor)){
          models.Event.create({
            id: req.body.id,
            type: req.body.type,
            ActorId: actor[0].id,
            RepoId: repo[0].id
          }).then(function () {
            res.send("success");
          });
        }else if(Array.isArray(repo)){
          models.Event.create({
            id: req.body.id,
            type: req.body.type,
            ActorId: actor.id,
            RepoId: repo[0].id
          }).then(function () {
            res.send("success");
          });
        }else if(Array.isArray(actor)){
          models.Event.create({
            id: req.body.id,
            type: req.body.type,
            ActorId: actor[0].id,
            RepoId: repo.id
          }).then(function () {
            res.send("success");
          });
        }
      });
    });
  };


  module.exports = {
    createEvent: createEvent,
    getEvents: getEvents,
    getEventByActor, getEventByActor,
    eraseEvent: eraseEvent
};