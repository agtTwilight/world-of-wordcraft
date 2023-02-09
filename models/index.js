// boiler plate
// TODO: before adding model associations...create your models!
const Achievements = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
const Journal = require("./tavern/Journal");
const User = require("./tavern/User");
const Character = require("./game/Character")
const Forge = require("./game/Forge")
const Item = require("./game/Item")
const Spell = require("./game/Spell")

// example association. Documentation link: https://sequelize.org/docs/v6/core-concepts/assocs/
// TODO: add all associations shown in ERDs
Character.belongsTo(User,{
    onDelete:"CASCADE"
})
User.hasMany(Character)

// TODO export all updated (associations added) models
module.exports = {
    User,
}