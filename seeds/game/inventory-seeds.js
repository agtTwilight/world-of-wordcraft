// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Inventory } = require("../../models");

const inventoryData = [
    {
        CharacterId: 1,
        ItemId: [1, 2],
    },
    {
        EnemyId: 1,
        ItemId: [1],
    },
];

const seedInventories = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventories;
