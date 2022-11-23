'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campings",
      [
        {

          name: "paradise",
          description: "great",
          wild_camping: true,
          pricePerNightPp: 0,
          currency: "euro",
          longitude: -68.906268,
          latitude: -41.810147,
          photo1: "photo1",
          photo2: "photo2",
          photo3: "photo3",
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
    await queryInterface.bulkDelete("campings", null, {});
  },
};