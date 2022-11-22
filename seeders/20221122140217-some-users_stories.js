"use strict";
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users_stories",
      [
        {
          title: "Apple",
          story: "Apple",
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
    await queryInterface.bulkDelete("users_stories", null, {});
  },
};
