const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init({
    group_name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique: true, 
         validate: {
            isAlphanumeric: true
         }
    }
},{
    sequelize
});

// export character
module.exports= Group