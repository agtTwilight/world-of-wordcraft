const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Spellbook extends Model {}

Spellbook.init({
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
},{
    sequelize
});

// export character
module.exports = Spellbook