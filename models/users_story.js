'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_story.belongsTo(models.user);
    }
  }
  users_story.init({
    title: { type: DataTypes.STRING, allowNull: false },
    story: { type: DataTypes.TEXT, allowNull: false },
    photo1: { type: DataTypes.STRING, allowNull: false },
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    countryId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'users_story',
  });
  return users_story;
};