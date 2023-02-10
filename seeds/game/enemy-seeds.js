// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Enemy } = require("../../models");

const enemyData = [
    {
        enemy_name: "Green Goblin",
        race: "Goblin",
        alignment: "Evil",
        sprite: "blah",
        health: 100,
        magic: 5,
        resistance: 10,
        defense: 35,
        accuracy: 50,
        luck: 5,
        constitution: 10,
        exp: 100,
        level: 5,
        spell_point: 1,
        gold: 100,
        quantity: 3,
    },
    {
        enemy_name: "Witch",
        race: "Human",
        alignment: "Evil",
        sprite: "blah2",
        health: 80,
        magic: 45,
        resistance: 35,
        defense: 10,
        accuracy: 65,
        luck: 15,
        constitution: 8,
        exp: 140,
        level: 6,
        spell_point: 2,
        gold: 150,
        quantity: 1,
    },
];

const seedEnemies = () => Enemy.bulkCreate(enemyData);

module.exports = seedEnemies;
