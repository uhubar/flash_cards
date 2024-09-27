"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PostCategories", [
      { title: "Node.js", createdAt: new Date(), updatedAt: new Date() },
      { title: "React", createdAt: new Date(), updatedAt: new Date() },
      { title: "Vue", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PostCategories", null, {});
  },
};
