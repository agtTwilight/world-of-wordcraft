const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Item extends Model {}

Item.init(
    {
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        item_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        magic: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        resistance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_equipped: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

// export character
module.exports = Item;
