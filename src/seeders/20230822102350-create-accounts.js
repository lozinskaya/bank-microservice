'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Accounts',
      [
        {
          balance: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          balance: 7000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          balance: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};
