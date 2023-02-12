//you were about to tahe actionMenuBtn1 query selector and place it in the Game class so that you can create a progress the story function.

//Query Selectors
const actionMenu = document.querySelector(`#action-menu`);
const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const actionMenuBtn3 = document.querySelector(`#am-btn-1`);
const actionMenuBtn4 = document.querySelector(`#am-btn-2`);

//Pause menu buttons
const pauseBtn = document.querySelector(`.pause-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)
const dataStorage = document.querySelector("#data-storage")

//variable buttons
const continueBtn = document.querySelector(`button[subclass = 'continue']`);
const attackBtn = document.querySelector(`button[subclass = 'attack']`);
const inventoryBtn = document.querySelector(`button[subclass = 'inventory']`);
const useBtn = document.querySelector(`button[subclass = 'use']`);
const spellbookBtn = document.querySelector(`button[subclass = 'spellbook']`);
const libraryBtn = document.querySelector(`button[subclass = 'library']`);
const addBtn = document.querySelector(`button[subclass = 'add']`);
const dropBtn = document.querySelector(`button[subclass = 'drop']`);
const backBtn = document.querySelector(`button[subclass = 'back']`);

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
actionMenuBtn1.classList.add(`continue-action`);

actionMenu.addEventListener(`click`, function(e) {
    const continueAct = e.target.closest(`.continue-action`);
    const attackAct = e.target.closest(`.attack-action`);
    const inventoryAct = e.target.closest(`.inventory-action`);
    const useAct = e.target.closest(`.use-action`);
    const libraryAct = e.target.closest(`.library-action`);
    const spellbookAct = e.target.closest(`.spellbook-action`);
    const addAct = e.target.closest(`.add-action`);
    const dropAct = e.target.closest(`.drop-action`);
    const backAct = e.target.closest(`.back-action`);


    if(continueAct) {
        gameController.progressStory(dataStorage);
    } else if(continueAct) {
        gameController.progressStory(dataStorage);
    } else if(continueAct) {
        gameController.progressStory(dataStorage);
    }
})

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
