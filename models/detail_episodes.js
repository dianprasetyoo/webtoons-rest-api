'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episodes = sequelize.define('detail_episodes', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode_id: DataTypes.INTEGER
  }, {});
  detail_episodes.associate = function(models) {
    // associations can be defined here
    detail_episodes.belongsTo(models.detail_webtoons, {
      as: 'episodeId',
      foreignKey: 'episode_id'
    })
  };
  return detail_episodes;
};