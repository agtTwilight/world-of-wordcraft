//you were about to tahe actionMenuBtn1 query selector and place it in the Game class so that you can create a progress the story function.

//HUD variables
const body = document.querySelector(`body`);
const hud = document.querySelector(`#hud`);
const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const actionMenuBtn3 = document.querySelector(`#am-btn-3`);
const actionMenuBtn4 = document.querySelector(`#am-btn-4`);
const allActionMenuButtons = [actionMenuBtn1, actionMenuBtn2, actionMenuBtn3, actionMenuBtn4];
const dataStorage = document.querySelector("#data-storage")
const li = document.createElement(`li`);

//Pause menu variables
const pauseBtn = document.querySelector(`.pause-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)
const characterDetails = document.querySelector(`#character-details-list`);
const saveBtn = document.querySelector(`#save`)
const saveExitBtn = document.querySelector(`#save-and-exit`)
const exitBtn = document.querySelector(`#exit`)

//Imported Classes
import * as Character from "./initCharacter.js";
import {Game} from "./initGame.js";
import * as Enemy from "./initEnemy.js";

//Class Objects
const playerCharacter = await Character.getCharacterData()

const gameController = new Game;

//Init Game Landing HUD
gameController.gameInit(2);
gameController.storyboxInit(dataStorage);
actionMenuBtn1.textContent = `Continue`;
actionMenuBtn1.classList.add(`continue-action`);
actionMenuBtn2.textContent = `SpellBook`;
actionMenuBtn2.classList.add(`spellbook-action`);
actionMenuBtn3.textContent = `Inventory`;
actionMenuBtn3.classList.add(`inventory-action`);
actionMenuBtn4.textContent = `Forge`;
actionMenuBtn4.classList.add(`forge-action`);

//Testing functions
// console.log(playerCharacter)
// playerCharacter.getKeywords(`fire`);
// playerCharacter.buildSpell(dataStorage, actionMenuBtn1, actionMenuBtn2, actionMenuBtn3, `fire`);



hud.addEventListener(`mousedown`, async function(e) {
    //Combat event listeners
    const continueAct = e.target.closest(`.continue-action`);
    const continueToEnemyTurn = e.target.closest(`.continue-to-enemy`);
    const continueToMain = e.target.closest(`.continue-to-main`);
    const continueToLoot = e.target.closest(`.continue-to-loot`);
    const attackAct = e.target.closest(`.attack-action`);
    const spellAttackAct = e.target.closest(`.spell-attack-btn`);
    const attackEnemyAct = e.target.closest(`.attack-enemy-btn`);
    
    //Forge event listeners
    const forgeAct = e.target.closest(`.forge-action`);
    const forgeBack = e.target.closest(`.forge-back-btn`);
    const forgeType =e.target.closest(`.forge-type-btn`);
    const forgeBuild =e.target.closest(`.forge-build-btn`);
    const forgeCreate = e.target.closest(`.forge-create-btn`);
    const forgeUpgrade = e.target.closest(`.forge-upgrade-btn`);

    const gameOver = e.target.closest(`.game-over`);


    const inventoryAct = e.target.closest(`.inventory-action`);
    const useAct = e.target.closest(`.use-action`);
    const libraryAct = e.target.closest(`.library-action`);
    const spellbookAct = e.target.closest(`.spellbook-action`);
    const addAct = e.target.closest(`.add-action`);
    const dropAct = e.target.closest(`.drop-action`);
    const backAct = e.target.closest(`.back-action`);


    //Progress story text
    if(continueAct) {
        gameController.progressStory(dataStorage, actionMenuBtn1);
    } else if(spellbookAct) {
        playerCharacter.storyboxMode = `spellbook`;
        playerCharacter.displaySpells(dataStorage);
    } else if(inventoryAct) {
        playerCharacter.displayInventory(dataStorage);
    //Combat Events
    } else if(attackAct) {

        //begin attack loop
        playerCharacter.attack(dataStorage);
    } else if(spellAttackAct) {

        //load selected spell in initGame and display enemylist
        playerCharacter.activateSpell(spellAttackAct.innerText);
        gameController.displayEnemies(dataStorage);
    } else if(attackEnemyAct) {
        //deal damage to enemy
        gameController.combat(attackEnemyAct.enemyId, playerCharacter, actionMenuBtn1, dataStorage, `player`);
    } else if(continueToEnemyTurn) {
        //enemy damages player
        gameController.combat(continueToEnemyTurn.enemyId, playerCharacter, actionMenuBtn1, dataStorage, `enemy`);
    } else if(continueToMain) {
        //got to begining of combat loop
        gameController.combatScreen(playerCharacter, dataStorage, actionMenuBtn1);
    } else if(continueToLoot) {
        //post combat screen where you get loot and level up
        gameController.lootScreen(playerCharacter, dataStorage, actionMenuBtn1);
    
    //Forge Events
    } else if(forgeAct) {
        clearButtons(allActionMenuButtons);
        playerCharacter.forgeScreen(dataStorage, actionMenuBtn1, actionMenuBtn2, actionMenuBtn3)
    } else if(forgeBack) {
        clearButtons(allActionMenuButtons);
        resetButtons();
    } else if(forgeType) {
        clearButtons(allActionMenuButtons);
        if(playerCharacter.spell_point >= 20) {
        playerCharacter.setSpellType(dataStorage, actionMenuBtn1, actionMenuBtn2, actionMenuBtn3);
        } else {
            playerCharacter.clearLi();
            actionMenuBtn1.textContent = `Back`;
            actionMenuBtn1.classList.add(`forge-action`)
            li.textContent = `You don't have enough SP to create a spell`
            dataStorage.appendChild(li);
        }
    }else if(gameOver) {
        await playerCharacter.gameOver(false);
        location.href="/";
    }

})

pauseBtn.addEventListener(`click`, function() {
    pauseMenu.setAttribute(`style`, `left: 0px; transition: .5s`);
    pauseMenu.status = 'open'
    const stats = playerCharacter.getStats();
    const keys = Object.keys(stats);

    console.log(stats)

    Object.values(stats).forEach((stat, i) => {
        const li = document.createElement(`li`);
        li.setAttribute(`class`, `character-detail`)
        li.textContent = `${keys[i]}: ${stat}`;
        characterDetails.appendChild(li);
    });
});

body.addEventListener(`click`, function(e) {
    const menuEl = e.target.closest(`#pause-menu`);
    const pauseBtnEl = e.target.closest(`#pause-button`);

    if(!menuEl && !pauseBtnEl){
        pauseMenu.setAttribute(`style`, `left: -19vw; transition: .5s;`);
    }
});




//Utility Functions=============================================
const clearButtons = (buttons) => {
    buttons.forEach(btn => {
        btn.setAttribute(`class`, `am-btn`);
        btn.textContent = ``;
    });
}

//basically acts as a main menu function
const resetButtons = () => {
    actionMenuBtn1.textContent = `Combat`;
    actionMenuBtn1.classList.add(`continue-action`);
    actionMenuBtn2.textContent = `SpellBook`;
    actionMenuBtn2.classList.add(`spellbook-action`);
    actionMenuBtn3.textContent = `Inventory`;
    actionMenuBtn3.classList.add(`inventory-action`);
    actionMenuBtn4.textContent = `Forge`;
    actionMenuBtn4.classList.add(`forge-action`);
}

// Save and exit
saveBtn.addEventListener("click", async function(){
    await playerCharacter.gameOver()
})

saveExitBtn.addEventListener("click", async function(){
    await playerCharacter.gameOver();
    location.href="/"
})

exitBtn.addEventListener("click", function(){
    location.href="/"
})
