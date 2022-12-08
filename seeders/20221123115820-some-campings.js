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
          photo1: "./assets/camping1.jpg",
          photo2: "photo2",
          photo3: "photo3",
          country: "Chile",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {

          name: "paradise2",
          description: "great",
          wild_camping: true,
          pricePerNightPp: 0,
          currency: "euro",
          longitude: -68.906268,
          latitude: -41.810147,
          photo1: "./assets/camping2.jpg",
          photo2: "photo2",
          photo3: "photo3",
          country: "Chile",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {

          name: "paradise3",
          description: "great",
          wild_camping: true,
          pricePerNightPp: 0,
          currency: "euro",
          longitude: -68.906268,
          latitude: -41.810147,
          photo1: "./assets/camping3.jpg",
          photo2: "photo2",
          photo3: "photo3",
          country: "Chile",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {

          name: "paradise4",
          description: "great",
          wild_camping: true,
          pricePerNightPp: 0,
          currency: "euro",
          longitude: -68.906268,
          latitude: -41.810147,
          photo1: "./assets/camping4.jpg",
          photo2: "photo2",
          photo3: "photo3",
          country: "Chile",
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