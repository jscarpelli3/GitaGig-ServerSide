'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gig.init({
    venueName: DataTypes.STRING,
    location: DataTypes.STRING,
    gigType: DataTypes.STRING,
    bandleaderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gig',
    tableName: 'gigs'
  });
  return Gig;
};