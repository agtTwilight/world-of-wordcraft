const { Spell } = require("../../models");
const spellData = [
        {
                spell_name: "woosh",
                magic_type: "wind",
                magic_words: "swoosh",
                matched_words: 0,
                power: 50,
                target: 0,
                magic_cost: 1,
                use: 10,
                level: 10,
                char_limit: 0,
        }
]

const seedSpells = () => Spell.bulkCreate(spellData);

module.exports = seedSpells;