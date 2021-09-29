'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PollMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      options: {
        type: Sequelize.JSON
      },
      openOptions: {
        type: Sequelize.JSON
      },
      responses: {
        type: Sequelize.JSON
      },
      messageStatusId: {
        type: Sequelize.INTEGER,
        references: {
          model: `MessageStatuses`,
          key: `id`,
        },
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
    await queryInterface.dropTable('PollMessages');
  }
};