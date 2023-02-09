const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GroupTag extends Model {}

GroupTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model:"user",
        key:"id"
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model:"group",
        key:"id"
      }
    }
  },
  {
    sequelize
  }
);

module.exports = GroupTag;