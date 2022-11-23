'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country_budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      country_budget.belongsTo(models.user);
    }
  }
  country_budget.init({
    amountPerDay: { type: DataTypes.INTEGER, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    typeAccomodation: { type: DataTypes.STRING, allowNull: false },
    typeFood: { type: DataTypes.STRING, allowNull: false },
    countryId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'country_budget',
  });
  return country_budget;
};