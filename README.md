# Project 2: World of Wordcraft

## Description

The motivation behind this project was to create an immersive game play experience that would allow users to have their own input in the creativeness of their gameplay.
We built this project to fill a gap in the gaming space where we wanted to implement user input to create something that would be value in an RPG-style game.
This solved the mundane game play experience of some RPG style games, where now the user is able to be creative in the way they can create their own spells and implement their unique choices in spellcrafting.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)

## Installation

To install this project, proceed with the git cloning procedures and be sure to clone the repo in the directory of your choice. Once you have your repository cloned, open the terminal of your choice and make sure that you are inside of the newly cloned repository - from there you can run the command "npm i" to install the dependencies for this project. From there, navigate your terminal to the db(database) folder to run your sequel commands to create the database ("mysql -uroot -p --> source schema.sql;). Once that has been completed, go ahead and navigate to the server.js file and head to the bottom of the file - from there, if it is your first time starting the server, change the very bottom method to "force: true" and save the file. Once you have done that, in your terminal, run the command "node server.js", this will force the database to sync with the models in the repo. From there, close your terminal and change the line back to "force: false: and run the command "npm run seed" in your terminal to seed all the models and then the command "node server.js" or "nodemon" to get your server running!

## Usage

Play the game with the attached link:
https://world-of-wordcraft.herokuapp.com/

## Credits

Lukas Macmillen - https://github.com/agtTwilight
Tyler Brown - https://github.com/OneDeadFox
Jason Nguyen - https://github.com/jhnwoo-dev

Sprite Assets:
https://pimen.itch.io/fantasy-skeleton-enemies
https://luizmelo.itch.io/monsters-creatures-fantasy
https://9e0.itch.io/witches-pack
https://alexs-assets.itch.io/16x16-rpg-item-pack
https://penzilla.itch.io/hooded-protagonist
https://lilwillydesigns.itch.io/twin-spiders

Background Assets:
https://edermunizz.itch.io/free-pixel-art-forest
https://ansimuz.itch.io/bulkhead-walls-environment
https://admurin.itch.io/parallax-backgrounds-plains
MidJourney AI

CSS Frameworks:
https://github.com/nostalgic-css/NES.css
https://getbootstrap.com/docs/3.4/

## License

N/A

## Badges

![N/A](https://img.shields.io/badge/none-%20-blue)

## Features

N/A

## How to Contribute

The Contributor Covenant is an industry standard - feel free to contribute as you would like with respect to the Contributor Covenant.

## Tests

N/A
