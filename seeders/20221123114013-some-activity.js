'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activity_tables",
      [
        {
          activity: "searching partner in crime",
          currently_cycling: true,
          activeUntil: "2021-03-05",
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
    await queryInterface.bulkDelete("activity_tables", null, {});
  },
};