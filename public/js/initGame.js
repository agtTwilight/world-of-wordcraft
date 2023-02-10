const Character = require("../../game_assests/Classes/Character")

// fetch the user api, get the specific character data, return it for use
const getCharacterData = async () => {
        // TODO: make the '1' change to a the current user's id
        const rawData = await fetch("http://localhost:3000/api/users/1", {method: "GET"})
        const newData = await rawData.json();

        // TODO: make the '0' increment to active character
        // create the playerCharacter
        const characterData = newData.Characters[0];
        const playerCharacter = new Character(characterData)
        console.log(playerCharacter)

        return playerCharacter
}

getCharacterData()

module.exports = getCharacterData;