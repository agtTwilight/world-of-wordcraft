// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { Story } = require("../../models");

const storyData = [
    {
        story_name: "Forest of Foes",
        tag: "Forest",
        enemy_tag: "G2",
        difficulty: 1,
        description:
            "You are strolling through the forest and you noticed something shiny peeking out of the bushes ahead of you. You decide to go investigate the bush, hoping to find some treasure! At your own surprise - Goblins jumped out waiting to ambush their next victim!",
    },
    {
        story_name: "Tree of Spiders",
        tag: "Forest",
        enemy_tag: "Sp2",
        difficulty: 2,
        description:
            "During your exploration through the forest you find a nice large tree that provides a lot of shade, perfect for a place to rest. As you set your equipment down to take a quick break, you notice Large Spiders descending upon you!",
    },
    {
        story_name: "Forest Graveyard",
        tag: "Forest",
        enemy_tag: "Sk2",
        difficulty: 3,
        description:
            "Along your journey to the next city, you come across what looks like a graveyard in the middle of the forest. Quite an odd sight, but not to an adventurer like you! A few moments later as you walk by, Skeletons climb out of the ground and run towards you!",
    },
    {
        story_name: "Witch Grounds",
        tag: "Forest",
        enemy_tag: "W2",
        difficulty: 4,
        description:
            "You are out in the forest looking to harvest some plants to brew a new potion and you notice a strong smell in the air. Not sure if you liked it nor dislike it, you decide to investigate the source of the smell and find yourself in the middle of a witch camp! Witches come out of their huts and they do not look happy!",
    },
    {
        story_name: "Grassland Crawlers",
        tag: "Plains",
        enemy_tag: "Sp1,G1",
        difficulty: 1,
        description:
            "For your next adventure you decide to cross the dreaded plains. As you make your attempt to cross through the plains, you encounter your greatest fear - a Spider and a rabid Goblin looking for their next meal!",
    },
    {
        story_name: "Grassland Campers",
        tag: "Plains",
        enemy_tag: "Sk1,W1",
        difficulty: 2,
        description:
            "During your adventure to cross the plains you find an abondoned camp. You decide to see if anything might have been left behind, but it turns out the previous campers did not make it out alive! Skeletons and a Witch arise from the camp and they do not look friendly!",
    },
    {
        story_name: "Grassland Friends?",
        tag: "Plains",
        enemy_tag: "W1",
        difficulty: 3,
        description:
            "Along your journey through the plains, you come along a nice looking individual who seems to also be making the same journey as yourself. You decide to camp up with them since you have had a lonely journey thus far. In the middle of the night you hear what seems to be Witch enchantment, so you get up to find out and a surprised you with an attack!",
    },
    {
        story_name: "Grassland Goblin",
        tag: "Plains",
        enemy_tag: "G1",
        difficulty: 4,
        description:
            "While you make your way through the plains, all seemed well until you glanced at a mob of goblin(s) in the distance. You try to sneak by, but at the last moment, a goblin caught you!",
    },
    {
        story_name: "Spider Domain",
        tag: "Ruins",
        enemy_tag: "Sp1",
        difficulty: 1,
        description:
            "As you are making your way to the next city, you come across an abondoned ruin. You make your way to the entrance hoping to take a quick break, unexpectedly, a Spider comes out of ruin!",
    },
    {
        story_name: "Skeleton Man",
        tag: "Ruins",
        enemy_tag: "Sk1",
        difficulty: 2,
        description:
            "You are exploring an abandoned ruin and come across a nicely lit room. Out of your own genuine curiosity, you investigate the source hoping to find a friendly adventurer like yourself. Unfortunately, you walked in on a skeleton! The Skeleton turns your way, not expecting any visitors!",
    },
    {
        story_name: "Spider's Home",
        tag: "Ruins",
        enemy_tag: "Sp1,G1",
        difficulty: 3,
        description:
            "During your exploration through the ruins, you come across a largely webbed room. You figure there may something good in there, so you go in to take a look. It looks like you woke up the owners, and they're not too happy! a Large Spider and a Goblin appear and are ready to protect their home!",
    },
    {
        story_name: "Skeleton Ring",
        tag: "Ruins",
        enemy_tag: "Sk1,G1",
        difficulty: 4,
        description:
            "You are exploring the ruins and find a large room that looks like it might've had some battles back in its prime. A few steps in, the room lights up and the entrance closes behind you - a Skeleton and a Goblon appear, it seems the battle-ring is still in business!",
    },
];

const seedStories = () => Story.bulkCreate(storyData);

module.exports = seedStories;
