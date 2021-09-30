'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TextMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Post, {
        foreignKey: `postId`,
        as: `post`,
      })
    }
  };
  TextMessage.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TextMessage',
  });
  return TextMessage;
};