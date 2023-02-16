// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Enemy } = require("../../models");

//probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
//probably need to remove quantity as quantity will be dynamically defined in the mob class upon enemy creation
const enemyData = [
    {
        enemy_name: "Green Goblin",
        race: "Goblin",
        alignment: "Evil",
        sprite: "../assets/character/enemies/goblin.png",
        health: 35,
        attack: 20,
        magic: 5,
        resistance: 10,
        defense: 15,
        accuracy: 50,
        luck: 5,
        constitution: 10,
        exp: 100,
        level: 5,
        spell_point: 10,
        gold: 100,
        quantity: 3,
    },
    {
        enemy_name: "Witch",
        race: "Human",
        alignment: "Evil",
        sprite: "./assets/character/enemies/blue-witch.png",
        health: 50,
        attack: 25,
        magic: 45,
        resistance: 35,
        defense: 10,
        accuracy: 65,
        luck: 15,
        constitution: 8,
        exp: 140,
        level: 6,
        spell_point: 10,
        gold: 150,
        quantity: 1,
    },
    {
        enemy_name: "Big Spider",
        race: "Spider",
        alignment: "Evil",
        sprite: "./assets/character/enemies/spider.png",
        health: 20,
        attack: 35,
        magic: 5,
        resistance: 10,
        defense: 30,
        accuracy: 50,
        luck: 5,
        constitution: 10,
        exp: 100,
        level: 5,
        spell_point: 20,
        gold: 100,
        quantity: 3,
    },
    {
        enemy_name: "Sad Skeleton",
        race: "Human",
        alignment: "Evil",
        sprite: "./assets/character/enemies/skeleton.png",
        health: 30,
        attack: 30,
        magic: 45,
        resistance: 35,
        defense: 10,
        accuracy: 65,
        luck: 15,
        constitution: 8,
        exp: 140,
        level: 6,
        spell_point: 15,
        gold: 150,
        quantity: 1,
    },
];

const seedEnemies = () => Enemy.bulkCreate(enemyData);

module.exports = seedEnemies;
