// boiler plate
// TODO: before adding model associations...create your models!
const Achievement = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
const GroupTag = require("./tavern/GroupTag");
const User = require("./tavern/User");
const Character = require("./game/Character");
const Forge = require("./game/Forge");
const Item = require("./game/Item");
const Spell = require("./game/Spell");

// example association. Documentation link: https://sequelize.org/docs/v6/core-concepts/assocs/
// TODO: add all associations shown in ERDs
// comment to achievement associations
Comment.belongsTo(Achievement, {
    onDelete: "CASCADE",
});
Achievement.hasMany(Comment);

// User association with characters
Character.belongsTo(User,{
    onDelete:"CASCADE"
  })
  
  User.hasMany(Character)
  
  // User associations with groups...can change to group hasmany users if we want users to only be able to join a single group.
  Group.belongsToMany(User, {through: GroupTag})

// TODO export all updated (associations added) models
module.exports = {
    User,
    Comment,
    Achievement,
};
