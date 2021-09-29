'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MediaMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      attachedUrl: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Posts`,
          key: `id`,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn(`now`),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn(`now`),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MediaMessages');
  }
};