'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobbies = sequelize.define('Hobbies', {
    title: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE 
  }, {});
  Hobbies.associate = function(models) {
  };
  return Hobbies;
};