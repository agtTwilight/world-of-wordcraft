const {SpellbookSpell} = require("../../models")

const spellbookSpellData = [
        {
                SpellId: 1,
                SpellbookId: 1
        }
]

const seedSpellbookSpells = () => SpellbookSpell.bulkCreate(spellbookSpellData);

module.exports = seedSpellbookSpells;