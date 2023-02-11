// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Story } = require("../../models");

const storyData = [
    {
        story_name: "Forest of Foes",
        tag: "Forest",
        difficulty: 1,
        description:
            "You are strolling through the forest and you noticed the bushes ahead of you have something shiny peeking out. You decide to go investigate the bush and by surprise, 3 Goblins jumped out waiting to ambush their next victim!",
    },
    {
        story_name: "Tree of Spiders",
        tag: "Forest",
        difficulty: 2,
        description:
            "During your exploration you find a nice large tree that provides a lot of shade, perfect for a place to rest! As you set your equipment down to take a quick break, you notice 5 Large Spiders descending upon you!",
    },
    {
        story_name: "Forest Graveyard",
        tag: "Forest",
        difficulty: 3,
        description:
            "Along your journey to the next city, you come across what looks like a graveyard in the middle of a forest. Not even a few moments later, you notice 3 Skeletons climbing out of the ground!",
    },
    {
        story_name: "Witch Grounds",
        tag: "Forest",
        difficulty: 4,
        description:
            "You are out in the forest looking for plants to brew a potion and you notice an odd smell in the air. You decide to investigate the odd smell and find yourself in the middle of a witch camp! 3 Witches come out of their huts and they do not look happy!",
    },
    {
        story_name: "Desert Crawlers",
        tag: "Desert",
        difficulty: 1,
        description:
            "For your next adventure, you decide to cross the dreaded desert. As you make your attempt through the desert, you encounter your greatest fear - 2 Desert Spiders looking for their next meal!",
    },
    {
        story_name: "Desert Campers",
        tag: "Desert",
        difficulty: 2,
        description:
            "During your adventure to cross the desert. You find an abondoned camp in the middle of the desert, you decide to see if anything was left behind, but it turns out the previous campers did not make it out alive! 4 Skeletons arise and they did not look like they were expecting any visitors!",
    },
    {
        story_name: "Desert Friends?",
        tag: "Desert",
        difficulty: 3,
        description:
            "Along your journey through the desert, you come along a nice looking individual who seems to also be making the same journey. You decide to camp up with them, but in the middle of the night you hear what seems to be a Witch enchantment, so you get up to find out they surprised you with an attack!",
    },
    {
        story_name: "Desert Goblins",
        tag: "Desert",
        difficulty: 4,
        description:
            "While you make your way through the desert, you find a mob of 6 goblins! You try to sneak by, but one of the goblins catch you and alert the rest of his crew!",
    },
    {
        story_name: "Witches Domain",
        tag: "Ruins",
        difficulty: 1,
        description:
            "As you are making your way to the next city, you come across an abondoned ruin. You make your way to the entrance hoping to take a quick break, unexpectedly, 2 Witches come out of ruin gates and they're not looking for friends!",
    },
    {
        story_name: "Goblin Camp",
        tag: "Ruins",
        difficulty: 2,
        description:
            "As you are making your way to the next city, you come across an abondoned ruin. You make your way to the entrance hoping to take a quick break, unexpectedly, 2 Witches come out of ruin gates and they're not looking for friends!",
    },
    {
        story_name: "Spider's Home",
        tag: "Ruins",
        difficulty: 3,
        description:
            "During your exploration through the ruins, you come across a largely webbed room. You figure there may something good in there, so you go in to take a look. It looks like you woke up the owners, and they're not too happy! 4 Large Spiders appear and are ready to protect their home!",
    },
    {
        story_name: "Skeleton Ring",
        tag: "Ruins",
        difficulty: 4,
        description:
            "You are exploring the ruins and find a large room that looks like it might've had some battles back in its prime. A few steps in, the room lights up and the entrance closes behind you - 5 Skeletons appear, it seems the battle-ring is still in business!",
    },
];

const seedStories = () => Story.bulkCreate(storyData);

module.exports = seedStories;
