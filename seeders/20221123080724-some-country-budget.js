'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "country_budgets",
      [
        {
          amountPerDay: 20,
          currency: "euro",
          typeAccomodation: "camping",
          typeFood: "cooking",
          countryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("country_budgets", null, {});
  },
};