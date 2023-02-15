// create character class
export class Character {
    constructor(obj) {
        const { id, character_name, race, alignment, magic, health, resistance, defense, accuracy, luck, constitution, exp, level, spell_point, gold, createdAt, updatedAt, UserId, Inventory, Spellbook } = obj
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
        this.actionMenuBtn1 = document.querySelector(`#am-btn-1`);
        this.actionMenuBtn2 = document.querySelector(`#am-btn-2`);
        this.actionMenuBtn3 = document.querySelector(`#am-btn-3`);
        this.actionMenuBtn4 = document.querySelector(`#am-btn-4`);
    }

    getStats() {
        const stats = {
            Name: this.character_name,
            Lvl: this.level,
            Exp: this.exp,
            Gold: this.gold,
            Race: this.race,
            Alignment: this.alignment,
            HP: this.health,
            MG: this.magic,
            SP: this.spell_point,
            Def: this.defense,
            Res: this.resistance,
            Acc: this.accuracy,
            Con: this.constitution,
            Luck: this.luck
        }
        return stats;
    }

    attack(ul) {
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


    defeatEnemy() {

    }

    displayLoot() {

    }

    displayInventory(ul, pc) {
        if (ul.children.length > 0) {
            for (let i = 0; i < ul.children.length; i++) {
                ul.removeChild(ul.children[i])
            }
        }
        for (const item in this.Inventory.Items) {
            console.log(this.Inventory.Items[item])
        }
        for (let i = 0; i < this.Inventory.Items.length; i++) {
            let li = document.createElement("li")
            li.textContent = this.Inventory.Items[i].item_name;
            li.addEventListener("click", function (event) {
                pc.equipItem(event.target.textContent)
            })
            ul.appendChild(li);
        }
    }

    equipItem(item) {
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

    displaySpells(ul) {
        this.clearLi();
        this.hideActiveSpellEl();

        if (this.storyboxMode === `attack`) {
            for (let i = 0; i < this.Spellbook.Spells.length; i++) {
                let li = document.createElement("li");
                let btn = document.createElement(`button`);
                btn.textContent = this.Spellbook.Spells[i].spell_name;
                btn.classList.add(`spell-attack-btn`);
                li.appendChild(btn);
                ul.appendChild(li);
            }
        } else if (this.storyboxMode === `spellbook`) {
            //this works for now but we need to have it limited to what spells are in the players "deck"
            for (let i = 0; i < this.Spellbook.Spells.length; i++) {
                let li = document.createElement("li");
                let btn = document.createElement(`button`);
                li.textContent = this.Spellbook.Spells[i].spell_name;
                ul.appendChild(li);
            }
        } else if (this.storyboxMode === `library`) {
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

    async getKeywords(type) {
        const keywordsData = await fetch(`/api/forge/type/${type}`);

        //eventually we'll divide the array based on frequency value and type, that way we can pull a specific amout of each type and a porpotion of them based on thier frequency.
        const keywords = await keywordsData.json();

        let indices = [];

        //get array of random numbers
        for (let i = 0; i < 50; i++) {
            const number = Math.floor(Math.random() * keywords.length);
            if (indices.indexOf(number) === -1) {
                indices.push(number);
            } else {
                i--;
            }
        }

        const forgeWords = indices.map(index => keywords[index]);
        console.log(forgeWords);
        return forgeWords;
    }

    //need to clear buttons of previous classes
    forgeScreen(ul, backBtn, createBtn, upgradeBtn) {
        this.clearLi();
        this.clearButtons([backBtn, createBtn, upgradeBtn]);

        //Forge greeting
        const li = document.createElement("li");
        li.textContent = `May the Forge be with you.`;
        ul.appendChild(li);

        //Forge action menu setup
        backBtn.classList.add(`forge-back-btn`);
        backBtn.textContent = `Back`;
        createBtn.classList.add(`forge-type-btn`);
        createBtn.textContent = `Create Spell`;
        upgradeBtn.classList.add(`forge-upgrade-btn`);
        upgradeBtn.textContent = `Upgrade Spell`;
    }

    //need to clear buttons of previous classes
    setSpellType(ul, backBtn, createBtn, spellbookBtn) {
        this.clearLi();
        this.clearButtons([backBtn, createBtn, spellbookBtn]);


        const typeGreetingLi = document.createElement(`li`);
        const fireButton = document.createElement("button");
        const waterButton = document.createElement("button");
        const airButton = document.createElement("button");
        const earthButton = document.createElement("button");
        const character = this;

        //Set element attributes
        typeGreetingLi.textContent = `Please select your spell's magic type:`
        fireButton.textContent = `Fire`;
        waterButton.textContent = `Water`;
        airButton.textContent = `Air`;
        earthButton.textContent = `Earth`;
        fireButton.classList.add = `fire-type`;
        waterButton.classList.add = `water-type`;
        airButton.classList.add = `air`;
        earthButton.classList.add = `Earth`;

        //Append elements
        const appendingArray = [typeGreetingLi, fireButton, waterButton, airButton, earthButton];
        appendingArray.forEach(element => {
            const li = document.createElement(`li`);
            li.appendChild(element);
            ul.appendChild(li);
        })

        fireButton.addEventListener(`click`, function () {
            character.buildSpell(ul, backBtn, createBtn, spellbookBtn, `fire`);
        }, { once: true });
        waterButton.addEventListener(`click`, function () {
        });
        airButton.addEventListener(`click`, function () {
        });
        earthButton.addEventListener(`click`, function () {
        });

        backBtn.classList.add(`forge-action`);
        backBtn.textContent = `Back`;
        createBtn.classList.add(`forge-build-btn`);
        createBtn.textContent = `Forge Spell`;
        spellbookBtn.classList.add(`spellbook-action`)
        spellbookBtn.textContent = `Spellbook`;
    }

    //need to clear buttons of previous classes
    async buildSpell(ul, backBtn, createBtn, callbackBtn, type) {
        this.clearLi();
        this.clearButtons([backBtn, createBtn]);


        const magicWords = await this.getKeywords(type);

        const nameLi = document.createElement(`li`);
        const spellLi = document.createElement(`li`);
        const taContainer = document.createElement(`li`);
        const nameContainer = document.createElement(`li`);
        const input = document.createElement(`input`);
        const textArea = document.createElement(`textarea`);
        const character = this;


        //build story box format
        nameLi.textContent = `Write your spell here:`;
        spellLi.textContent = `Name your spell here:`;
        textArea.setAttribute(`id`, `word-smithing`);
        textArea.setAttribute(`class`, `word-bench`);
        ul.appendChild(nameLi);
        nameContainer.appendChild(input);
        ul.appendChild(nameContainer);
        ul.appendChild(spellLi);
        taContainer.appendChild(textArea);
        ul.appendChild(taContainer);

        backBtn.textContent = `Back`;
        backBtn.classList.add(`forge-action`);
        createBtn.textContent = `Forge Spell`;
        createBtn.classList.add(`forge-build-btn`);

        //set new classes on btns
        createBtn.addEventListener(`click`, function () {
            const spellname = input.value;
            let spellString = textArea.value;
            let matchedWords = [];
            spellString = spellString.toLowerCase();
            spellString = spellString.replace(/[^a-zA-Z ]/g, " ")
            let spellWords = spellString.split(` `);
            spellWords = spellWords.filter(index => index != ``);
            let powerLevel = 1;
            console.log(spellWords);

            magicWords.forEach(word => {

                if (spellWords.indexOf(word.keyword) != -1) {
                    powerLevel += word.power_points;
                    matchedWords.push(word.keyword);
                    console.log(word.keyword);
                    console.log(powerLevel);
                }
            })

            character.createSpell(true, spellname, type, magicWords, matchedWords, powerLevel, 1, 3, 0, 1, 0);

            character.clearLi();
            nameLi.textContent = `You created the spell ${spellname}`;
            ul.appendChild(nameLi);

            backBtn.classList.remove(`forge-action`);
            backBtn.classList.add(`continue-action`);
            backBtn.textContent = `Proceed Onward`;
            createBtn.classList.remove(`forge-build-btn`);
            createBtn.classList.add(`spellbook-action`);
            createBtn.textContent = `Spellbook`;
            callbackBtn.classList.remove(`spellbook-action`);
            callbackBtn.classList.add(`inventory-action`)
            callbackBtn.textContent = `Inventory`;
            const btn4 = document.querySelector(`#am-btn-4`);
            btn4.classList.add(`forge-action`);
            btn4.textContent = `Forge`;
        }, { once: true });
    }

    createSpell(is_new, spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit) {
        // construct new spell obj
        this.Spellbook.Spells.push({ is_new, spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit })
    }

    updateSpell(is_updated, spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit) {
        for (const i in this.Spellbook.Spells) {
            if (this.Spellbook.Spells[i].spell_name === spell_name) {
                const id = this.Spellbook.Spells[i].id
                this.Spellbook.Spells[i] = { is_updated, id, spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit }
                console.log(this.Spellbook.Spells)
            }
        }
    }

    activateSpell(target) {
        this.Spellbook.Spells.forEach(spell => {
            if (spell.spell_name === target) {
                this.activeSpell = spell;
            }
        });
        console.log(this.activeSpell);
    }

    async gameOver() {
        // get all user data
        const { id, character_name, race, alignment, magic, health, resistance, defense, accuracy, luck, constitution, exp, level, spell_point, gold, UserId } = this
        const items = this.Inventory.Items
        const spells = this.Spellbook.Spells

        // PUT character by id
        await fetch(`/api/characters/${id}`, {
            method: "PUT",
            body: JSON.stringify({ character_name, race, alignment, magic, health, resistance, defense, accuracy, luck, constitution, exp, level, spell_point, gold, UserId }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        // POST new spells and items
        // spells
        for (let i = 0; i < spells.length; i++) {
            if (spells[i].is_new) {
                //TODO REMOVE THESE WHEN WE HAVE TYLER's FUNCTIONS
                spells[i].magic_words = "string"
                spells[i].matched_words = 1

                const rawData = await fetch("/api/spells/", {
                    method: "POST",
                    body: JSON.stringify(spells[i]),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                
                const newSpell = await rawData.json();

                await fetch("/api/spellbookSpells/", {
                    method: "POST",
                    body: JSON.stringify({ "SpellId": newSpell["id"], "SpellbookId": this.Spellbook.id }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            } else if (spells[i].is_updated) {
                const { spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit } = spells[i]
                await fetch(`/api/spells/${spells[i]["id"]}`, {
                    method: "PUT",
                    body: JSON.stringify({ spell_name, magic_type, magic_words, matched_words, power, target, magic_cost, use, level, char_limit })
                })
            }
        }

        // items
        for (let i = 0; i < items.length; i++) {
            if (items[i].is_new) {
                const rawData = await fetch("/api/items/", {
                    method: "POST",
                    body: JSON.stringify(items[i]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const newItem = await rawData.json();

                await fetch("/api/inventoryItems/", {
                    method: "POST",
                    body: JSON.stringify({ "ItemId": newItem.id, "InventoryId": this.Inventory.id }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            } else if (items[i].is_updated) {
                const { item_name, item_type, health, magic, resistance, defense, weight, cost, quantity, is_equipped } = items[i]
                await fetch(`/api/spells/${items[i]["id"]}`, {
                    method: "PUT",
                    body: JSON.stringify({ item_name, item_type, health, magic, resistance, defense, weight, cost, quantity, is_equipped })
                })
            }
        }
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

    clearButtons = (buttons) => {
        buttons.forEach(btn => {
            btn.setAttribute(`class`, `am-btn`);
            btn.textContent = ``;
        });
    }

    // resetButtons = (btn1, btn2, btn3, btn4,) => {
    //     btn1.textContent = `Proceed Onward`;
    //     btn1.classList.add(`continue-action`);
    //     btn2.textContent = `SpellBook`;
    //     btn2.classList.add(`spellbook-action`);
    //     btn3.textContent = `Inventory`;
    //     btn3.classList.add(`inventory-action`);
    //     btn4.textContent = `Forge`;
    //     btn4.classList.add(`forge-action`);
    // }
}

// fetch the user api, get the specific character data, return it for use
export const getCharacterData = async () => {
    const rawData = await fetch("/api/users/1", { method: "GET" })
    const newData = await rawData.json();

    // TODO: make the '0' increment to active character
    // create the playerCharacter
    const characterData = newData.Characters[0];
    console.log(newData.Characters)
    const playerCharacter = new Character(characterData)

    return playerCharacter
}

// getCharacterData()