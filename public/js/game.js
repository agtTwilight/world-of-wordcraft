//you were about to tahe actionMenuBtn1 query selector and place it in the Game class so that you can create a progress the story function.

//Query Selectors
const actionMenu = document.querySelector(`#action-menu`);
const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const inventoryBtn = document.querySelector(`#am-btn-3`);
const spellbookBtn = document.querySelector(`#am-btn-4`);
const pauseBtn = document.querySelector(`.pause-btn`);
const progressBtn = document.querySelector(`.progress-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)
const dataStorage = document.querySelector("#data-storage")

//variable buttons
const continueBtn = document.querySelector(`button[subclass = 'continue']`);

//Imported Classes
import * as Character from "./initCharacter.js";
import {Game} from "./initGame.js";
import * as Enemy from "./initEnemy.js";

//Class Objects
const playerCharacter = await Character.getCharacterData()
console.log(playerCharacter)
const gameController = new Game;

gameController.gameInit(1);
gameController.storyboxInit(dataStorage);
actionMenuBtn1.textContent = `Continue`;
actionMenuBtn1.classList.add(`continue`);

actionMenu.addEventListener(`click`, function(e) {
    const target = e.target.closest(`.continue`);

    if(target) {
        gameController.progressStory(dataStorage);
    }
})

inventoryBtn.addEventListener("click", async() =>{
    playerCharacter.displayInventory(dataStorage);
})

spellbookBtn.addEventListener("click", function(){
    playerCharacter.displaySpells(dataStorage);
})

pauseBtn.addEventListener(`click`, function() {
    console.log(`ouch`);
    pauseMenu.setAttribute(`style`, `left: 0px; transition: .5s`)
});
