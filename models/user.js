'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.users_story);
      user.hasMany(models.country_budget);
      user.hasMany(models.activity_table);
      user.hasMany(models.camping);
      user.belongsToMany(models.users_story, {
        through: "favorite_story",
        foreignKey: "userId"
      });
      user.belongsToMany(models.camping, {
        through: "review_camping",
        foreignKey: "userId"
      });
    }
  }
  user.init({
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING },
    date_of_birth: { type: DataTypes.DATE, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    instagram_blog: DataTypes.STRING,
    IsAdmin: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};