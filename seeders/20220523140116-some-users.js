"use strict";
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          surname: "Apple",
          email: "apple@apple.com",
          phone: 1234567,
          date_of_birth: "1986-03-12",
          password: bcrypt.hashSync("apple", 10),
          instagram_blog: "lala",
          IsAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};