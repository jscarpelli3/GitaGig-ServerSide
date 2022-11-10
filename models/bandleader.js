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
      // define association here
    }
  }
  Bandleader.init(
    {
      name: DataTypes.STRING,
      band: DataTypes.STRING,
      socialMedia: DataTypes.STRING,
      blImage: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bandleader'
    }
  )
  return Bandleader
}
