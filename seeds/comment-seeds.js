// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Comment } = require("../models");

const commentData = [
    {
        text: "Blockhead won the Spell Slinging Ring!",
        AchievementId: 1,
    },
    {
        text: "Yor: Next time I wont wear heels!",
        AchievementId: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
