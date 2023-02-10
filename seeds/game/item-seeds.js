// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Item } = require("../../models");

const itemData = [
    {
        item_name: "Potion of Healing",
        item_type: "potion",
        health: 50,
        magic: 0,
        resistance: 0,
        defence: 0,
        weight: 1,
        cost: 10,
        quantity: 10,
        is_equipped: false,
    },
    {
        item_name: "Potion of Resistance",
        item_type: "potion",
        health: 0,
        magic: 0,
        resistance: 10,
        defence: 5,
        weight: 1,
        cost: 15,
        quantity: 5,
        is_equipped: false,
    },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
