'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite_story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favorite_story.belongsTo(models.user);
      favorite_story.belongsTo(models.users_story);
    }
  }
  favorite_story.init({
    storyId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'favorite_story',
  });
  return favorite_story;
};