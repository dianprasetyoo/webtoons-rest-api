'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_webtoons = sequelize.define('detail_webtoons', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER
  }, {});
  detail_webtoons.associate = function(models) {
    // associations can be defined here
  };
  return detail_webtoons;
};