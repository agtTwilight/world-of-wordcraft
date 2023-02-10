// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Achievement } = require("../../models");

const achievementData = [
    {
        text: "Blockhead won the Spell Slinging Ring!",
        public: true,
        UserId: 1,
    },
    {
        text: "agtTwilight has saved princess Anya!",
        public: true,
        UserId: 2,
    },
];

const seedAchievements = () => Achievement.bulkCreate(achievementData);

module.exports = seedAchievements;
