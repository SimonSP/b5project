'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PollMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.MessageStatus, {
        foreignKey: `messageStatusId`,
        as: `messageStatus`,
      })
      this.belongsTo(models.Post, {
        foreignKey: `postId`,
        as: `post`,
      })
    }
  };
  PollMessage.init({
    content: DataTypes.STRING,
    options: DataTypes.JSON,
    openOptions: DataTypes.JSON,
    responses: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'PollMessage',
  });
  return PollMessage;
};