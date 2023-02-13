const { Forge } = require("../../models");
const forgeData = [
        {
                keyword: "bonfire",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "blaze",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.3
        },
        {
                keyword: "heat",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.2
        },
        {
                keyword: "inferno",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.3
        },
        {
                keyword: "coals",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "combustion",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "conflagration",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.3
        },
        {
                keyword: "flames",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.5
        },
        {
                keyword: "fire",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.7
        },
        {
                keyword: "hearth",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "pyre",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.2
        },
        {
                keyword: "scorching",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "charring",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.3
        },
        {
                keyword: "devouring",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.1
        },
        {
                keyword: "incandescence",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.1
        },
        {
                keyword: "embers",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.3
        },
        {
                keyword: "searing",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.1,
                frequency: 0.2
        },
        {
                keyword: "sparks",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.3
        },
        {
                keyword: "tinder",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.1
        },
        {
                keyword: "flare",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.2
        },
        {
                keyword: "glow",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.3
        },
        {
                keyword: "warmth",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.5
        },
        {
                keyword: "flaming",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.5
        },
        {
                keyword: "combust",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.2
        },
        {
                keyword: "flame",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.3
        },
        {
                keyword: "wild",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "wildfire",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.2
        },
        {
                keyword: "wild-fire",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.2
        },
        {
                keyword: "hellfire",
                magic_type: "fire",
                power_points: 4,
                frequency: 0.1
        },
        {
                keyword: "hell-fire",
                magic_type: "fire",
                power_points: 4,
                frequency: 0.1
        },
        {
                keyword: "brimstone",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.3
        },
        {
                keyword: "fiery",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.5
        },
        {
                keyword: "fieriness",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.5
        },
        {
                keyword: "hot",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.1
        },
        {
                keyword: "ignite",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.3
        },
        {
                keyword: "fillball",
                magic_type: "fire",
                power_points: 3,
                frequency: 0.5
        },
        {
                keyword: "kindle",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "enkindle",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "torrid",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "torridity",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "torridness",
                magic_type: "fire",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "hotness",
                magic_type: "fire",
                power_points: 2,
                frequency: 0.1
        },
        {
                keyword: "element",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "set",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "this",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "that",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "then",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "when",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "why",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "how",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "what",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "for",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "to",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "too",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "so",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "do",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "magic",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "spell",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "magical",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "spells",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "cast",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "casts",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "curse",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "curses",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "cursed",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "cursing",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "casting",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "conjure",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "conjured",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "conjuring",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "summon",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "summoned",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "summoning",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "summons",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "invoke",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "invokes",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "invoked",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "invoking",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "evoke",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "evokes",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "evoked",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "evoking",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "blast",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "blasted",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "blasts",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "blasting",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "call",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "calling",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "called",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "calls",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "search",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "searching",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "searched",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "searches",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "bring",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "brought",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "brings",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "bringing",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "be",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "being",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "been",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "seen",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "sight",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "saw",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "sighting",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "shown",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "fast",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "slow",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "faster",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "slower",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "fastest",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "slowest",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "mythic",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "mythical",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "mystic",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "mystical",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "legend",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "legendary",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rife",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "harm",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "hurt",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "hurtful",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "harmful",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "pain",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "painful",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "pains",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "hurts",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "harms",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "suffer",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "suffering",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "suffered",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "sufferer",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "burden",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "burdened",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rush",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rushed",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rushing",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rapid",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "rapids",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "won't",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "not",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "can",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "try",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "will",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "willed",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "well",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "might",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "smite",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "am",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "I",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "you",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "your",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "you're",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "me",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "he",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "she",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "they",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "them",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "we",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "we'll",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "clan",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "cult",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "should",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "would",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "could",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "does",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "doesn't",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
        {
                keyword: "don't",
                magic_type: "neutral",
                power_points: 1,
                frequency: 0.1
        },
]

const seedForge = () => Forge.bulkCreate(forgeData);

module.exports = seedForge;
