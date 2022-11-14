'use strict'
const falso = require('@ngneat/falso')

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let gigs = [...Array(12)].map((_) => ({
      venueName: falso.randLastName(),
      location: falso.randLocale({ length: 12 }),
      gigType: falso.randImg(),
      bandleaderId: falso.randNumber({ min: 1, max: 3 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('gigs', gigs)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gigs')
  }
}
