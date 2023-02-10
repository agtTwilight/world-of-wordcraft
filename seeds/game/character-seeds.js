// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Character } = require("../../models");

const characterData = [
    {
        character_name: "Blockhead",
        race: "Blockman",
        alignment: "Good",
        health: 100,
        magic: 25,
        resistance: 10,
        defence: 30,
        accuracy: 65,
        luck: 5,
        constitution: 10,
        exp: 50,
        level: 5,
        spell_point: 2,
        gold: 50,
    },
    {
        character_name: "Twilight",
        race: "Human",
        alignment: "Good",
        health: 120,
        magic: 15,
        resistance: 35,
        defence: 50,
        accuracy: 80,
        luck: 15,
        constitution: 12,
        exp: 20,
        level: 6,
        spell_point: 4,
        gold: 70,
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
