'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChannel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: `userId`,
        as: `user`,
      })
      this.belongsTo(models.Channel, {
        foreignKey: `channelId`,
        as: `channel`,
      })
    }
  };
  UserChannel.init({
  }, {
    sequelize,
    modelName: 'UserChannel',
  });
  return UserChannel;
};