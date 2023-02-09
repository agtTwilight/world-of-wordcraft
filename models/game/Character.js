const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init({
        // example data value
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