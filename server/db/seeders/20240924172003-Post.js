"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Post 1",
          text: "text 1",
          UserId: 1,
          PostCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Post 2",
          text: "text 2",
          UserId: 1,
          PostCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Post 3",
          text: "text 3",
          UserId: 1,
          PostCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
