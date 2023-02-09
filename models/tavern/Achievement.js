const { Model, DataTypes, NOW } = require("sequelize");
const sequelize = require("../config/connection");
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
class Achievement extends Model {}

Achievement.init(
    {
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

// export achievement
module.exports = Achievement;
