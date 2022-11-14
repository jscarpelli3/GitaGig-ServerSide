'use strict'
const falso = require('@ngneat/falso')

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let bandleaders = [...Array(3)].map((_) => ({
      name: falso.randLastName(),
      band: falso.randAnimalType(),
      socialMedia: falso.randUrl(),
      blImage: falso.randImg(),
      email: falso.randEmail(),
      passwordDigest: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('bandleaders', bandleaders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bandleaders')
  }
}
