const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Character extends Model {}

Character.init({
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
    spell_name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    magic_type: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    magic_words: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    matched_words: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    power: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    target: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    magic_cost: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    use: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    char_limit: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},{
    sequelize
});

// export character
module.exports = Character