// Boilerplate taken from module 13
// I've already added a script in the package.json that will run this file if you type `npm run seed` in your integrated terminal :)
// TODO: change all these consts with our own seed file consts
const seedAchievements = require("./achievement-seeds");
const seedComments = require("./comment-seeds");
const seedGroups = require("./group-seeds");
const seedGroupTags = require("./group-tag-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

// TODO: change all these function calls & comments to our own seed file consts
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedAchievements();
    console.log("\n----- ACHIEVEMENTS SEEDED -----\n");

    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");

    await seedGroups();
    console.log("\n----- GROUPS SEEDED -----\n");

    await seedGroupTags();
    console.log("\n----- GROUP TAGS SEEDED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    process.exit(0);
};

seedAll();
