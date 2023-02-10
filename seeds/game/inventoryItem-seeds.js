const {Item, Inventory} = require("../../models")

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

const item1Data = {
        item_name: "Potion of Healing",
        item_type: "potion",
        health: 50,
        magic: 0,
        resistance: 0,
        defense: 0,
        weight: 1,
        cost: 10,
        quantity: 10,
        is_equipped: false,
}

const inventory1Data = {
        CharacterId: 1,
}

const seedInventoryItems = async () => {
        const item = await Item.create(item1Data);
        const inventory = await Inventory.create(inventory1Data);
        await inventory.addItem(item, {through:{selfGranted:false}});
}

// const seedInventoryItems = async () => {
//         for (let i=0; i<Inventory.length; i ++) {
//                 for(let j=0; j<Item.length; j++) {
//                         if (Inventory[i][id].includes(Item[j].inventory_id)) {
//                                 await Inventory[i].addItem(Item[j], {through:{selfGranted:false}});
//                         }
//                 }
//         }
// }

module.exports = seedInventoryItems;