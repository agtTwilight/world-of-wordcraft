const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
// TODO: remove instance of character with the current files name
class Story extends Model {}

Story.init(
    {
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
        story_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

// export character
module.exports = Story;
