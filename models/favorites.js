'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    isFavorite: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    favorites.belongsTo(models.webtoons, {
      as: 'webtoonID',
      foreignKey: 'webtoon_id'
    })
  };
  return favorites;
};
