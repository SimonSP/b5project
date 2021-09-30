'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: `userId`,
        as: `channelAdmin`,
      })
      this.hasMany(models.Post, {
        foreignKey: `channelId`,
        as: `posts`,
      })
    }
  };
  Channel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};