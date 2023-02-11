const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const inventoryBtn = document.querySelector(`#am-btn-3`);
const spellbookBtn = document.querySelector(`#am-btn-4`);
const pauseBtn = document.querySelector(`.pause-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)
const dataStorage = document.querySelector("#data-storage")
// const Character = require("../../game_assests/Classes/Character")
// TODO: Working on importing game Character into this file
inventoryBtn.addEventListener("click", async() =>{
    const rawData = await fetch("http://localhost:3000/api/users/1", {method: "GET"})
    const newData = await rawData.json();

    // create the playerCharacter
    const characterData = newData.Characters[0];
    const playerCharacter = new Character(characterData)
    playerCharacter.displayInventory(dataStorage);
})

spellbookBtn.addEventListener("click", function(){

})

pauseBtn.addEventListener(`click`, function() {
    console.log(`ouch`);
    pauseMenu.setAttribute(`style`, `left: 0px; transition: .5s`)
});
