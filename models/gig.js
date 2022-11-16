'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Gig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gig.belongsTo(models.Bandleader, {
        foreignKey: 'bandleaderId'
      })
      Gig.hasMany(models.Musician, {
        foreignKey: 'gigId'
      })
    }
  }
  Gig.init(
    {
      venueName: DataTypes.STRING,
      location: DataTypes.STRING,
      time: DataTypes.STRING,
      date: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gigType: DataTypes.STRING,
      bandleaderId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'bandleaders',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Gig',
      tableName: 'gigs'
    }
  )
  return Gig
}
