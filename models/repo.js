'use strict';
module.exports = (sequelize, DataTypes) => {
  var Repo = sequelize.define('Repo', {
    id:  {
      type: DataTypes.BIGINT(11),
      primaryKey: true
  },
    name: DataTypes.STRING,
    url:DataTypes.STRING
  });

  Repo.associate = function (models) {
    models.Repo.hasMany(models.Event, {});
  };
  
  //Repo.sync({force: true});
 
  return Repo;
};