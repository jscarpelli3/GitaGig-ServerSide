'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('gigs', 'time', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('gigs', 'time', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
}
