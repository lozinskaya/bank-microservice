'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Accounts', {
        account_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        balance: {
          allowNull: false,
          type: Sequelize.DECIMAL(12, 2),
        },
        test: {
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addConstraint('Accounts', {
          fields: ['balance'],
          type: 'check',
          name: 'balance_check',
          where: {
            balance: {
              [Sequelize.Op.gt]: 0,
            },
          },
        })
      );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Accounts');
  },
};
