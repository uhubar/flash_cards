"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", [
      { title: "JS", createdAt: new Date(), updatedAt: new Date() },
      { title: "Угадай мелодию", createdAt: new Date(), updatedAt: new Date() },
      { title: "Новый год", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
