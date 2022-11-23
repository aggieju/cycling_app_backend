'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_camping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review_camping.belongsTo(models.user);
      review_camping.belongsTo(models.camping);
    }
  }
  review_camping.init({
    review: { type: DataTypes.TEXT, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    photo1: DataTypes.STRING,
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    campingId: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'review_camping',
  });
  return review_camping;
};