'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('country_budgets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amountPerDay: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeAccomodation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeFood: {
        allowNull: false,
        type: Sequelize.STRING
      },
      countryId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('country_budgets');
  }
};