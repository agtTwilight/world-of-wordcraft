const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Forge extends Model {}

Forge.init({
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
    keyword: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    magic_type: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    power_points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    frequency: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }

},{
    sequelize
});

// export character
// TODO Update the export
module.exports = Forge