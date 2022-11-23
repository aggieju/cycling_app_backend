'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity_table.belongsTo(models.user);
    }
  }
  activity_table.init({
    activity: { type: DataTypes.STRING, allowNull: false },
    currently_cycling: { type: DataTypes.BOOLEAN, allowNull: false },
    activeUntil: { type: DataTypes.DATE, allowNull: false },
    countryId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'activity_table',
  });
  return activity_table;
};