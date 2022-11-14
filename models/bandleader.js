'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bandleader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bandleader.hasMany(models.Gig, {
        foreignKey: 'bandleaderId'
      }) 


    }
  }
  Bandleader.init(
    {
      name: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      band: DataTypes.STRING,
      socialMedia: DataTypes.STRING,
      blImage: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Bandleader',
      tableName: 'bandleaders'
    }
  )
  return Bandleader
}
