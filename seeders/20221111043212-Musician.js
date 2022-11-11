'use strict'

// /** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let musicians = [...Array(5)].map((_) => ({
      name: falso.randFirstName(),
      socialMedia: falso.randUrl(),
      genre: falso.randMusicGenre(),
      about: falso.randText({ charCount: 30 }),
      image: falso.randUrl(),
      gigId: falso.randNumber({ min: 1, max: 20 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('musicians', musicians)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('musicians')
  }
}

// const b = await Drummer.findAll({ raw: true })
//   let r = Math.floor(Math.random() * b.length)
