'use strict';
module.exports = (sequelize, DataTypes) => {
  var Actor = sequelize.define('Actor', {
    id:   {
        type: DataTypes.BIGINT(11),
        primaryKey: true
    },
    login: DataTypes.STRING,
    avatar_url: DataTypes.STRING
  });

  Actor.associate = function (models) {
        models.Actor.hasMany(models.Event, {});
  };

  //Actor.sync({force: true});
  //sequelize.sync();
  return Actor;
};