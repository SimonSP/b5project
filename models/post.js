'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Channel, {
        foreignKey: `channelId`,
        as: `channel`,
      })
      this.hasMany(models.TextMessage, {
        foreignKey: `postId`,
        as: `textMessages`,
      })
      this.hasMany(models.EventMessage, {
        foreignKey: `postId`,
        as: `eventMessages`,
      })
      this.hasMany(models.PollMessage, {
        foreignKey: `postId`,
        as: `pollMessages`,
      })
      this.hasMany(models.MediaMessage, {
        foreignKey: `postId`,
        as: `mediaMessages`,
      })
    }
  };
  Post.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post
}