const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Character extends Model {}

Character.init({
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
    character_name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique: true
    }
},{
    sequelize
});

// export character
module.exports= Character