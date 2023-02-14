const {InventoryItem} = require("../../models")

const inventoryItemData = [
    {
        InventoryId: 1,
        ItemId: 1,
    },
    {
        InventoryId: 1,
        ItemId: 2,
    },
];

const seedInventoryItems = () => InventoryItem.bulkCreate(inventoryItemData);

module.exports = seedInventoryItems;