'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Choices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      a: {
        type: Sequelize.STRING
      },
      b: {
        type: Sequelize.STRING
      },
      c: {
        type: Sequelize.STRING
      },
      d: {
        type: Sequelize.STRING
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions'
          },
          key: 'id'
        },
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Choices');
  }
};