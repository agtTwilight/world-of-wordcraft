// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Story } = require("../../models");

const storyData = [
    {
        story_name: "Forest of Foes",
        tag: "Forest",
        difficulty: 1,
        description:
            "You are strolling through the forest and you noticed something shiny peeking out of the bushes ahead of you. You decide to go investigate the bush, hoping to find some treasure! At your own surprise - 3 Goblins jumped out waiting to ambush their next victim!",
    },
    {
        story_name: "Tree of Spiders",
        tag: "Forest",
        difficulty: 2,
        description:
            "During your exploration through the forest you find a nice large tree that provides a lot of shade, perfect for a place to rest. As you set your equipment down to take a quick break, you notice 5 Large Spiders descending upon you!",
    },
    {
        story_name: "Forest Graveyard",
        tag: "Forest",
        difficulty: 3,
        description:
            "Along your journey to the next city, you come across what looks like a graveyard in the middle of the forest. Quite an odd sight, but not to an adventurer like you! A few moments later as you walk by, 3 Skeletons climb out of the ground and run towards you!",
    },
    {
        story_name: "Witch Grounds",
        tag: "Forest",
        difficulty: 4,
        description:
            "You are out in the forest looking to harvest some plants to brew a new potion and you notice a strong smell in the air. Not sure if you liked it nor dislike it, you decide to investigate the source of the smell and find yourself in the middle of a witch camp! 3 Witches come out of their huts and they do not look happy!",
    },
    {
        story_name: "Grassland Crawlers",
        tag: "Plains",
        difficulty: 1,
        description:
            "For your next adventure you decide to cross the dreaded plains. As you make your attempt to cross through the plains, you encounter your greatest fear - 2 Spiders looking for their next meal!",
    },
    {
        story_name: "Grassland Campers",
        tag: "Plains",
        difficulty: 2,
        description:
            "During your adventure to cross the plains you find an abondoned camp. You decide to see if anything might have been left behind, but it turns out the previous campers did not make it out alive! 4 Skeletons arise from the camp and they do not look friendly!",
    },
    {
        story_name: "Grassland Friends?",
        tag: "Plains",
        difficulty: 3,
        description:
            "Along your journey through the plains, you come along a nice looking individual who seems to also be making the same journey as yourself. You decide to camp up with them since you have had a lonely journey thus far. In the middle of the night you hear what seems to be a Witch enchantment, so you get up to find out they surprised you with an attack!",
    },
    {
        story_name: "Grassland Goblins",
        tag: "Plains",
        difficulty: 4,
        description:
            "While you make your way through the plains, all seemed well until you glanced at a mob of 6 goblins in the distance. You try to sneak by, but at the last moment, one of the goblins caught you and alerted the rest of his crew!",
    },
    {
        story_name: "Witches Domain",
        tag: "Ruins",
        difficulty: 1,
        description:
            "As you are making your way to the next city, you come across an abondoned ruin. You make your way to the entrance hoping to take a quick break, unexpectedly, 2 Witches come out of ruin and they're not looking for friends!",
    },
    {
        story_name: "Goblin Party",
        tag: "Ruins",
        difficulty: 2,
        description:
            "You are exploring an abandoned ruin and come across a nicely lit room. Out of your own genuine curiosity, you investigate the source hoping to find a friendly adventurer like yourself. Unfortunately, you walked in on a goblin party! 3 Goblins turn your way, not expecting any visitors!",
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
