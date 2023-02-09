// Example seeds file from Module 13.
// TODO: Create our own seed files following this structure
const { User } = require("../models");

const userData = [
    {
        username: "Blockhead",
        password: "iAmBlockhead",
    },
    {
        username: "agtTwilight",
        password: "DrLoidForger",
    },
    {
        username: "Ballhead",
        password: "iWishIwasBlockhead",
    },
    {
        username: "agtBond",
        password: "iLoveAnyaForger",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
