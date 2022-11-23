'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class camping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      camping.belongsTo(models.user);
      camping.belongsToMany(models.user, {
        through: "review_camping",
        foreignKey: "campingId"
      })
    }
  }
  camping.init({
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    latitude: { type: DataTypes.INTEGER, allowNull: false },
    longitude: { type: DataTypes.INTEGER, allowNull: false },
    wild_camping: { type: DataTypes.BOOLEAN, allowNull: false },
    pricePerNightPp: { type: DataTypes.INTEGER, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    photo1: { type: DataTypes.STRING, allowNull: false },
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    countryId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'camping',
  });
  return camping;
};