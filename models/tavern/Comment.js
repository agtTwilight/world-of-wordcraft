const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// Boiler plate sequelize model construction ex. taken from unfinished Character.js file
class Comment extends Model {}

Comment.init(
    {
        // example data value
        // TODO: use the correct ERD in the resources tab to fill out model data structure
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

// export comment
module.exports = Comment;
