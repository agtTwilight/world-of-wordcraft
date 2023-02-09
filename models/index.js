//Tavern-side Models
const Achievement = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
const GroupTag = require("./tavern/GroupTag");
const User = require("./tavern/User");

//Game-side Models
const Character = require("./game/Character");
const Enemy = require("./game/Enemy");
const Forge = require("./game/Forge");
const Inventory = require("./game/Inventory");
const Item = require("./game/Item");
const Mob = require("./game/Mob");
const Shop = require("./game/Shop");
const Spell = require("./game/Spell");
const Spellbook = require("./game/Spellbook");
const Story = require("./game/Story");

// example association. Documentation link: https://sequelize.org/docs/v6/core-concepts/assocs/
// TODO: add all associations shown in ERDs
// Comment to achievement associations
Comment.belongsTo(Achievement, {onDelete: "CASCADE"});
Achievement.hasMany(Comment);

// User association with characters
Character.belongsTo(User, {onDelete:"CASCADE"})
User.hasMany(Character);

// User associations with groups...can change to group hasmany users if we want users to only be able to join a single group.
Group.belongsToMany(User, {through: GroupTag});
User.belongsToMany(Group, {through: GroupTag});

//Item and inventory associations
Character.belongsTo(Inventory);
Inventory.belongsTo(Character, {onDelete: "CASCADE"});
Enemy.belongsTo(Inventory);
Inventory.belongsTo(Enemy, {onDelete: "CASCADE"});
Inventory.hasMany(Item);
Item.belongsTo(Inventory);

//Shop and items associations
Item.belongsToMany(Shop, {through: ShopItem});
Shop.belongsToMany(Item, {through: ShopItem});

//Character and spell associations
Character.belongsTo(Spellbook);
Spellbook.belongsTo(Character, {onDelete: "CASCADE"});
Spell.belongsToMany(Spellbook, {through: SpellbookSpell});
Spellbook.belongsToMany(Spell, {through: SpellbookSpell});

//Spell and forge association
//Might need to add a inventory like table for keywords list
Spell.hasMany(Forge);
Forge.belongsTo(Spell);

//Enemy mob and story assocations
Story.belongsTo(Mob);
Mob.belongsTo(Story);
Mob.belongsToMany(Enemy, {through: EnemyMob});
Enemy.belongsToMany(Mob, {through: EnemyMob});


// TODO export all updated (associations added) models
module.exports = {
    User,
    Comment,
    Achievement,
    Character,
    Enemy,
    Forge,
    Inventory,
    Item,
    Mob,
    Shop,
    Spell,
    Spellbook,
    Story
};
