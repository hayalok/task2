'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    id:  {
      type: DataTypes.BIGINT(11),
      primaryKey: true
  },
    type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    ActorId: DataTypes.BIGINT(11),
    RepoId: DataTypes.BIGINT(11)
  });

  Event.associate = function (models) {
    models.Event.belongsTo(models.Repo, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Event.belongsTo(models.Actor, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });


    // models.Event.belongsTo(models.Repo, {as: 'repo'});
    // models.Event.belongsTo(models.Actor, {as: 'actor'});
  };

 // Event.sync({force: true});
  //sequelize.sync();

  return Event;
};