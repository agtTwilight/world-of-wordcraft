const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const inventoryBtn = document.querySelector(`#am-btn-3`);
const spellbookBtn = document.querySelector(`#am-btn-4`);
const pauseBtn = document.querySelector(`.pause-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)
const dataStorage = document.querySelector("#data-storage")
import * as Utils from "./initGame.js";

const playerCharacter = await Utils.getCharacterData()
console.log(playerCharacter)

inventoryBtn.addEventListener("click", async() =>{
    await playerCharacter.displayInventory(dataStorage,playerCharacter);
})

spellbookBtn.addEventListener("click", async () =>{
    await playerCharacter.displaySpells(dataStorage);
})

pauseBtn.addEventListener(`click`, function() {
    console.log(`ouch`);
    pauseMenu.setAttribute(`style`, `left: 0px; transition: .5s`)
});
