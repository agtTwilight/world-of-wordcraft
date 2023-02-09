const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Character extends Model {}

Character.init({
        // example data value
    character_name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    race: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    alignment: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    health: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    magic: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    resistance: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    accuracy: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    luck: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    constitution: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    exp: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    spell_point: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    gold: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},{
    sequelize
});

// export character
module.exports = Character