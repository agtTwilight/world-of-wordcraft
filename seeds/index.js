// Boilerplate taken from module 13
// I've already added a script in the package.json that will run this file if you type `npm run seed` in your integrated terminal :)

//Tavern-side seeds
const seedAchievements = require("./tavern/achievement-seeds");
const seedComments = require("./tavern/comment-seeds");
const seedGroups = require("./tavern/group-seeds");
const seedGroupTags = require("./tavern/group-tag-seeds");
const seedUsers = require("./tavern/user-seeds");

//Game-side seeds
const seedCharacters = require("./game/character-seeds");
const seedInventories = require("./game/inventory-seeds");
const seedItems = require("./game/item-seeds");
const seedEnemies = require("./game/enemy-seeds");
const seedInventoryItems = require("./game/inventoryItem-seeds");
const seedSpellbookSpells = require("./game/spellbookSpell-seeds");
const seedSpellbooks = require("./game/spellbook-seeds");
const seedSpells = require("./game/spell-seeds");
// const seedForge = require("./game/forge-seeds");
const seedMobs = require("./game/mob-seeds");
// const seedShop = require("./game/shop-seeds");
// const seedSpells = require("./game/spell-seeds");
// const seedSpellbook = require("./game/spellbook-seeds");
const seedStory = require("./game/story-seeds");

const sequelize = require("../config/connection");

// TODO: change all these function calls & comments to our own seed file consts
const seedAll = async () => {
    //Tavern-side seeds
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedAchievements();
    console.log("\n----- ACHIEVEMENTS SEEDED -----\n");

    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");

    // Uncomment the below seeds once they are good to go - you may need to change the order in which they are placed relative to seeding order!

    // await seedGroups();
    // console.log("\n----- GROUPS SEEDED -----\n");

    // await seedGroupTags();
    // console.log("\n----- GROUP TAGS SEEDED -----\n");

    //Game-side seeds
    await seedCharacters();
    console.log("\n----- CHARACTERS SEEDED -----\n");

    await seedEnemies();
    console.log("\n----- ENEMIES SEEDED -----\n");

    await seedItems();
    console.log("\n----- ITEMS SEEDED -----\n");

    await seedInventories();
    console.log("\n----- INVENTORIES SEEDED -----\n");

    await seedInventoryItems();
    console.log("\n----- INVENTORYITEMS SEEDED -----\n");

    await seedSpellbooks();
    console.log("\n----- SPELLBOOKS SEEDED -----\n");

    await seedSpells();
    console.log("\n----- SPELLS SEEDED -----\n");

    await seedSpellbookSpells();
    console.log("\n----- SPELLBOOKSPELLS SEEDED -----\n");

    // Uncomment the below seeds once they are good to go - you may need to change the order in which they are placed relative to seeding order!

    // await seedForge();
    // console.log("\n----- FORGE SEEDED -----\n");
    await seedStory();
    console.log("\n----- STORY SEEDED -----\n");

    await seedMobs();
    console.log("\n----- MOBS SEEDED -----\n");

    // await seedShop();
    // console.log("\n----- SHOP SEEDED -----\n");

    // await seedSpells();
    // console.log("\n----- SPELLS SEEDED -----\n");

    // await seedSpellbook();
    // console.log("\n----- SPELLBOOK SEEDED -----\n");



    process.exit(0);
};

seedAll();
