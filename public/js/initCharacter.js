// create character class
export class Character {
    constructor(obj) {
        const {id,character_name,race,alignment,magic,health,resistance,defense,accuracy,luck,constitution,exp,level,spell_point,gold,createdAt,updatedAt,UserId,Inventory,Spellbook} = obj
        this.id = id;
        this.character_name = character_name;
        this.race = race;
        this.alignment = alignment;
        this.health = health;
        this.magic = magic;
        this.resistance = resistance;
        this.defense = defense;
        this.accuracy = accuracy;
        this.luck = luck;
        this.constitution = constitution;
        this.exp = exp;
        this.level = level;
        this.spell_point = spell_point;
        this.gold = gold;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.UserId = UserId;
        this.Inventory = Inventory;
        this.Spellbook = Spellbook;
        this.activeSpell;
        this.storyboxMode = `null`;
    } 
    
    attack(ul){
        this.storyboxMode = `attack`;
        this.displaySpells(ul);
    }

    // attackEnemy(enemyId, btn, ul, game) {
    //     const lineItemsToRemove = document.querySelector(`li`);
    //     lineItemsToRemove.remove();
        
    //     const selectedEnemy = this.currentEnemies.filter(enemy => enemy.id === enemyId);

    //     const damage = Math.round(this.activeSpell.power - (selectedEnemy.defense/Math.floor((Math.random() * this.luck) +1)));
    //     selectedEnemy.health -= damage;

    //     //send on path to enemy turn or loot screen
    //     if(selectedEnemy.health <= 0) {
    //         const isWon = selectedEnemy.defeated(game);

    //         if(isWon) {
    //             btn.textContent = `Continue`;
    //             btn.enemyId = this.currentEnemies[i].id;
    //             btn.classList.remove(`attack-action`);
    //             btn.classList.add(`continue-to-loot`)
    //         } else {
    //             let reportDamage = document.createElement("li");
    //             let reportHealth = document.createElement("li");
    //             reportDamage.textContent(`${selectedEnemy.enemy_name} took ${damage}pts of damage`);
    //             reportHealth.textContent(`Your enemies health is at ${selectedEnemy.health}`);
    //             ul.appendChild(reportDamage);
    //             ul.appendChild(reportHealth);
        
    //             //update action menu button
    //             btn.textContent = `Continue`;
    //             btn.classList.remove(`attack-action`);
    //             btn.classList.add(`continue-to-enemy`);
    //         }
    //     }
        
        
    //     console.log(selectedEnemy.health);
    // }

    
    defeatEnemy(){

    }
    
    displayLoot(){

    }
    
    displayInventory(ul, pc){
        if (ul.children.length>0){
            for (let i = 0; i < ul.children.length; i ++) {
                ul.removeChild(ul.children[i])
            }
        }
        for (const item in this.Inventory.Items) {
            console.log(this.Inventory.Items[item])
        }
        for (let i = 0; i < this.Inventory.Items.length; i ++) {
            let li = document.createElement("li")
            li.textContent = this.Inventory.Items[i].item_name;
            li.addEventListener("click", function(event){
                pc.equipItem(event.target.textContent)
            })
            ul.appendChild(li);
        }
    }
    
    equipItem(item){
        // remove equipped item
        for (const i in this.Inventory.Items) {
            if (this.Inventory.Items[i].is_equipped) {
                this.Inventory.Items[i].is_equipped = false
            }
        }

        // equip new item
        for (const i in this.Inventory.Items) {
            if (this.Inventory.Items[i].item_name === item) {
                if (!this.Inventory.Items[i].is_equipped) {
                    this.Inventory.Items[i].is_equipped = true
                    console.log(this.Inventory.Items)
                }
            }
        }
    }
    
    displaySpells(ul){
        this.clearLi();
        this.hideActiveSpellEl();

        if (this.storyboxMode === `attack`) {
            for (let i = 0; i < this.Spellbook.Spells.length; i ++) {
                let li = document.createElement("li");
                let btn = document.createElement(`button`);
                btn.textContent = this.Spellbook.Spells[i].spell_name;
                btn.classList.add(`spell-attack-btn`);
                li.appendChild(btn);
                ul.appendChild(li);
            }
        } else if(this.storyboxMode === `spellbook`) {
            //this works for now but we need to have it limited to what spells are in the players "deck"
            for (let i = 0; i < this.Spellbook.Spells.length; i ++) {
                let li = document.createElement("li");
                let btn = document.createElement(`button`);
                li.textContent = this.Spellbook.Spells[i].spell_name;
                ul.appendChild(li);
            }
        } else if(this.storyboxMode === `library`) {
            // this should display all spells in the characters library
            // for (let i = 0; i < this.Spellbook.Spells.length; i ++) {
            //     let li = document.createElement("li");
            //     let btn = document.createElement(`button`);
            //     btn.textContent = this.Spellbook.Spells[i].spell_name;
            //     btn.classList.add(`spell-attack-btn`);
            //     li.appendChild(btn);
            //     ul.appendChild(li);
            // }
        } 
    }

    getKeywords() {

    }

    forgeScreen(ul, backBtn, createBtn, upgradeBtn) {
        //Forge greeting
        const li = document.createElement("li");
        li.textContent = `May the Forge be with you.`;
        ul.appendChild(li);

        //Forge action menu setup
        backBtn.classList.add()
    }

    createSpell(is_new,spell_name,magic_type,magic_words,matched_words,power,target,magic_cost,use,level,char_limit){
        // construct new spell obj
        this.Spellbook.Spells.push({is_new,spell_name,magic_type,magic_words,matched_words,power,target,magic_cost,use,level,char_limit})
    }
    
    updateSpell(is_new,spell_name,magic_type,magic_words,matched_words,power,target,magic_cost,use,level,char_limit){
        for (const i in this.Spellbook.Spells) {
            if (this.Spellbook.Spells[i].spell_name === spell_name) {
                const id = this.Spellbook.Spells[i].id
                this.Spellbook.Spells[i] = {is_new,id,spell_name,magic_type,magic_words,matched_words,power,target,magic_cost,use,level,char_limit}
                console.log(this.Spellbook.Spells)
            }
        }
    }

    activateSpell(target) {
        this.Spellbook.Spells.forEach(spell => {
            if(spell.spell_name === target){
                this.activeSpell = spell;
            }
        });
        console.log(this.activeSpell);
    }
    
    gameOver(){
        console.log(`You Died`);
    }

    clearLi() {
        const lineItemsToRemove = document.querySelectorAll(`li`);
        lineItemsToRemove.forEach(item => {
            item.remove();
        });
    }

    hideActiveSpellEl() {
        const activeSpellEl = document.querySelector(`#active-spell`);
        activeSpellEl.classList.add(`hidden`);
    }
}

// fetch the user api, get the specific character data, return it for use
export const getCharacterData = async () => {
    // TODO: make the '1' change to a the current user's id
    const rawData = await fetch("http://localhost:3000/api/users/1", {method: "GET"})
    const newData = await rawData.json();

    // TODO: make the '0' increment to active character
    // create the playerCharacter
    const characterData = newData.Characters[0];
    const playerCharacter = new Character(characterData)

    return playerCharacter
}