'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      venueName: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      gigType: {
        type: Sequelize.STRING
      },
      bandleaderId: {
        type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model:'bandleaders',
        key: 'id'
      }
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gigs')
  }
}
