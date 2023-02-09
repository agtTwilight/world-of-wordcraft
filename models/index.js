//Tavern-side Models
const Achievement = require("./tavern/Achievement");
const Comment = require("./tavern/Comment");
const Group = require("./tavern/Group");
const User = require("./tavern/User");
<<<<<<< HEAD
// const Character = require("./game/Character");
// const Forge = require("./game/Forge");
// const Item = require("./game/Item");
// const Spell = require("./game/Spell");
=======

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
>>>>>>> dev

// example association. Documentation link: https://sequelize.org/docs/v6/core-concepts/assocs/
// TODO: add all associations shown in ERDs
// Comment to achievement associations
Comment.belongsTo(Achievement, {onDelete: "CASCADE"});
Achievement.hasMany(Comment);

// User association with characters
<<<<<<< HEAD
// Character.belongsTo(User,{
//     onDelete:"CASCADE"
//   })
  
//   User.hasMany(Character)
  
  // User associations with groups...can change to group hasmany users if we want users to only be able to join a single group.
//   Group.belongsToMany(User, {through: GroupTag})
=======
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
Inventory.hasMany(Item, {through: "InventoryItem"});


//Shop and items associations
Item.belongsToMany(Shop, {through: ShopItem});
Shop.hasMany(Item, {through: ShopItem});

//Character and spell associations
Character.hasOne(Spellbook);
Spellbook.belongsTo(Character, {onDelete: "CASCADE"});
Spell.belongsToMany(Spellbook, {through: "SpellbookSpell"});
Spellbook.hasMany(Spell, {through: "SpellbookSpell"});

//Spell and forge association
//Might need to add a inventory like table for keywords list
Spell.hasMany(Forge);
Forge.belongsTo(Spell);

//Enemy mob and story assocations
Story.hasOne(Mob);
Mob.belongsTo(Story);
Mob.hasMany(Enemy, {through: "EnemyMob"});
Enemy.belongsToMany(Mob, {through: "EnemyMob"});

>>>>>>> dev

// TODO export all updated (associations added) models
module.exports = {
    User,
    Comment,
    Achievement,
<<<<<<< HEAD
    Group
=======
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
>>>>>>> dev
};
