'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MediaMessage extends Model {
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
  MediaMessage.init({
    content: DataTypes.STRING,
    attachedUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MediaMessage',
  });
  return MediaMessage;
};