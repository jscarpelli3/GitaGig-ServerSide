'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('musicians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      socialMedia: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      gigId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model:'gigs',
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('musicians'); 
  }
};