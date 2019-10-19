'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.INTEGER,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
    webtoons.belongsTo(models.users, {
      as: 'userID',
      foreignKey: 'createdBy'
    })
  };
  return webtoons;
};