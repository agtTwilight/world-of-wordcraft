const { Spellbook } = require("../../models");

const spellbookData = [
        {
                CharacterId: 1,
        }
]

const seedSpellbooks = () => Spellbook.bulkCreate(spellbookData);

module.exports = seedSpellbooks;