'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Role, {
                foreignKey: `roleId`,
                as: `role`,
            })
        }
    };
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: { msg: `El correo electrónico es requerido y único` },
                },
            },
            nickName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: { msg: `Alias ya registrado por otro usuario` },
                },
            },
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: `User`,
        },
    )
    return User
};