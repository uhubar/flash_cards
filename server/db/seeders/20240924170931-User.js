"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "user@user.ru",
        password: await bcrypt.hash("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user1@user.ru",
        password: await bcrypt.hash("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user2@user.ru",
        password: await bcrypt.hash("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
