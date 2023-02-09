// boiler plate
// TODO: before adding model associations...create your models!
const Achievement = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
const Journal = require("./tavern/Journal");
const User = require("./tavern/User");
const Character = require("./game/Character");
const Forge = require("./game/Forge");
const Item = require("./game/Item");
const Spell = require("./game/Spell");
const Achievement = require("./tavern/Achievement");

// example association. Documentation link: https://sequelize.org/docs/v6/core-concepts/assocs/
// TODO: add all associations shown in ERDs
Comment.belongsTo(Achievement, {
    onDelete: "CASCADE",
});
Achievement.hasMany(Comment);

// TODO export all updated (associations added) models
module.exports = {
    User,
    Comment,
    Achievement,
};
