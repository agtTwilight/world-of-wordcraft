//Tavern-side Models
const Achievement = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
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

// User association with achievements
User.hasMany(Achievement);
Achievement.belongsTo(User, {onDelete: "CASCADE", foreignKey:"UserId"});

// Comment to achievement associations
Comment.belongsTo(Achievement, {onDelete: "CASCADE"});
Achievement.hasMany(Comment);

Comment.belongsTo(User, {onDelete: "CASCADE"});
User.hasMany(Comment);
// TODO make comment belong to user and then update the commentController

// User association with characters
Character.belongsTo(User, {onDelete:"CASCADE"})
User.hasMany(Character);

// User associations with groups...can change to group hasmany users if we want users to only be able to join a single group.
Group.belongsToMany(User, {through: "GroupTag"});
User.belongsToMany(Group, {through: "GroupTag"});

//Item and inventory associations
Character.hasOne(Inventory);
Inventory.belongsTo(Character, {onDelete: "CASCADE"});
Enemy.hasOne(Inventory);
Inventory.belongsTo(Enemy, {onDelete: "CASCADE"});
Item.belongsToMany(Inventory, {through: "InventoryItem"});
// TODO I dont think we need to include the hasMany association when we already have belongsToMany...it throws an error saying the syntax isn't correct on seqeulizes end
// Inventory.hasMany(Item, {through: "InventoryItem"});


//Shop and items associations
Item.belongsToMany(Shop, {through: "ShopItem"});
// TODO I dont think we need to include the hasMany association when we already have belongsToMany...it throws an error saying the syntax isn't correct on seqeulizes end
// Shop.hasMany(Item, {through: "ShopItem"});

//Character and spell associations
Character.hasOne(Spellbook);
Spellbook.belongsTo(Character, {onDelete: "CASCADE"});
Spell.belongsToMany(Spellbook, {through: "SpellbookSpell"});
// TODO I dont think we need to include the hasMany association when we already have belongsToMany...it throws an error saying the syntax isn't correct on seqeulizes end
// Spellbook.hasMany(Spell, {through: "SpellbookSpell"});

//Spell and forge association
//Might need to add a inventory like table for keywords list
Spell.hasMany(Forge);
Forge.belongsTo(Spell);

//Enemy mob and story assocations
Story.hasOne(Mob);
Mob.belongsTo(Story);
// TODO I dont think we need to include the hasMany association when we already have belongsToMany...it throws an error saying the syntax isn't correct on seqeulizes end
// Mob.hasMany(Enemy, {through: "EnemyMob"});
Enemy.belongsToMany(Mob, {through: "EnemyMob"});


// TODO export all updated (associations added) models
module.exports = {
    User,
    Comment,
    Achievement,
    Group,
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
