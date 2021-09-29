'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventMessage extends Model {
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
  EventMessage.init({
    content: DataTypes.STRING,
    responses: DataTypes.JSON,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'EventMessage',
  });
  return EventMessage;
};