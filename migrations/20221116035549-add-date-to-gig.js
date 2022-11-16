'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('gigs', 'date', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('gigs', 'date', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
}
