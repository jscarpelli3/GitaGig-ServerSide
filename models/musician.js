'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Musician.belongsTo(models.Gig, {
        foreignKey: 'gigId'
      })
    }
  }
  Musician.init({
    name: DataTypes.STRING,
    socialMedia: DataTypes.STRING,
    genre: DataTypes.STRING,
    about: DataTypes.STRING,
    image: DataTypes.STRING,
    gigId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model:'gigs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Musician',
    tableName: 'musicians'
  });
  return Musician;
};