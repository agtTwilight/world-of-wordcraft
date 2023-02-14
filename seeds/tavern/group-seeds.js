// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Group } = require("../../models");

const groupData = [
    {
        groupName: "BlockBody",
    },
    {
        groupName: "OpStrix",
    },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;
