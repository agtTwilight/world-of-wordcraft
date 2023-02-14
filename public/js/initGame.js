import {Enemy} from "./initEnemy.js";
import {Character} from "./initCharacter.js";


//probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
//probably need to remove quantity as quantity will be dynamically defined in the Game class upon enemy creation


//for scaling purposes we should have Game take in the characters level as a value and scale the enemies accordingly.
export class Game {
    constructor() {
        this.storyList = [];
        this.stories = [];
        this.storyPromts = [
            `Adventure start`
        ]
        this.enemyList = [];
        this.currentEnemies = [];
        this.loot = {
            gold: 0,
            exp: 0,
            spell_points: 0,
            items: []
        };
        this.storyboxMode = `null`;
    }

    storyboxInit(ul){
        const li = document.createElement("li");
        li.textContent = `Welcome Traveler`;
        ul.appendChild(li);
    }
    //initiate game and get stories
    gameInit(campaignLength){
        fetch(`/api/stories`)
        .then(res =>{
            return res.json();
        })
        .then(data => {
            for (let i = 0; i < campaignLength; i++) {
                const storyNumber = Math.floor(Math.random() * data.length);
                this.storyList.push(storyNumber + 1);
                this.stories.push(data[storyNumber]);
                console.log(storyNumber);
                console.log(this.stories);
                console.log(this.storiesList);
            }
            if(this.currentEnemies[0] === undefined){
                this.getEnemyList(this.storyList);
                return this.storyList;
            } else {
                return this.storyList;
            }
        })
    }

    async progressStory (ul, btn){
        //add descriptive story to storybox
        this.clearLi();
        const game = this;
        const li = document.createElement("li");
        li.textContent = this.stories[0].description;
        ul.appendChild(li);
        
        const containerEl = document.querySelector(`#game-container`);
        containerEl.setAttribute(`style`, `    background-image: url('../assets/game-bg/${this.stories[0]["tag"].toLowerCase()}.png'); background-size: cover;     background-position-y: bottom;`)

        const spawn1 = document.querySelector(`#spawn-1`)
        const spawn2 = document.querySelector(`#spawn-2`)
        const spawn3 = document.querySelector(`#spawn-3`)
        const spawns = [spawn1, spawn2, spawn3];

        if(this.currentEnemies[0] === undefined){
            await this.getEnemyList([this.stories[0].id]);
        }

        setTimeout(() => {
            game.currentEnemies.forEach((enemy, i) => {
                spawns[i].setAttribute(`style`, `background-image: url('${enemy.sprite}'); background-size: cover;`)
                enemy.index = i;
            });
    
        }, 100)
        
        //update action menu button
        btn.textContent = `Attack`;
        btn.classList.remove(`continue-action`);
        btn.classList.add(`attack-action`);
    }

    async getEnemyList(stories){        
        const currentStory = stories[0];
        const enemiesRaw = await fetch(`/api/enemies/mob/${currentStory}`);
        const enemies = await enemiesRaw.json();

        this.enemyList = enemies.map((enemy) => {return enemy.EnemyId});
                
        if(this.currentEnemies[0] === undefined){
            this.generateMob(this.enemyList)
            //testing loot with only gold
        } else {
            return this.enemyList;
        }           
        // fetch(`/api/enemies/mob/${currentStory}`)
        //     .then(res =>{
        //         return res.json();
        //     })
        //     .then(data => {
        //         this.enemyList = data.map((enemy) => {return enemy.EnemyId});
                
        //         if(this.currentEnemies[0] === undefined){
        //             this.generateMob(this.enemyList)
        //             //testing loot with only gold
        //         } else {
        //             return this.enemyList;
        //         }           
        //     });
    }

    generateMob (enemies){
        enemies.forEach(async (enemy) => {
            const getEnemy = await fetch(`/api/enemies/${enemy}`);
            const enemyObj = await getEnemy.json();
            const newEnemy = new Enemy(enemyObj);
            console.log(newEnemy);
            //create in game mob
            this.currentEnemies.push(newEnemy);

            //collect loot for lootScreen
            this.loot.gold += newEnemy.gold;
            this.loot.exp += newEnemy.exp;
            //this.loot.spell_points += newEnemy.spell_points;
            //this.loot.inventory.push(newEnemy.inventory);
        });
        return this.currentEnemies;
    }

    lootScreen (player, ul, btn) {
        this.clearLi();
        console.log(this.loot.gold);
        if(this.loot.gold > 0) {
            const li = document.createElement("li");
            li.textContent = `You received ${this.loot.gold} 
            pieces of gold.`;
            ul.appendChild(li);
        }
        if(this.loot.exp > 0) {
            const li = document.createElement("li");
            li.textContent = `You received ${this.loot.exp} experience points.`;
            ul.appendChild(li);
        }
        //add spell points

        player.gold += this.loot.gold;
        player.exp += this.loot.exp;
        //player.spell_points += this.loot.spell_points;

        btn.textContent = `Proceed Onward`;
        btn.classList.remove(`continue-to-loot`);
        btn.classList.add(`continue-action`);
    }

    combatScreen (player, ul, btn) {
        this.clearLi();
    const {activeSpell} = player;

        const activeSpellEl = document.querySelector(`#active-spell`);
        activeSpellEl.classList.remove(`hidden`);
        activeSpellEl.textContent = `current spell: ${activeSpell.spell_name} Mg: ${activeSpell.magic_cost} Pw: ${activeSpell.power}`;

        for (let i = 0; i < this.currentEnemies.length; i ++) {
            let li = document.createElement("li");
            let btn = document.createElement(`button`);
            btn.textContent = this.currentEnemies[i].enemy_name + `   HP: ` + this.currentEnemies[i].health;
            btn.classList.add(`attack-enemy-btn`);
            btn.enemyId = this.currentEnemies[i].id;
            li.appendChild(btn);
            ul.appendChild(li);
        }

        //update action menu button
        btn.textContent = `Change Spell`;
        btn.classList.remove(`continue-to-main`);
        btn.classList.add(`attack-action`);
    }

    displayEnemies (ul) {
        this.clearLi();

        for (let i = 0; i < this.currentEnemies.length; i ++) {
            let li = document.createElement("li");
            let btn = document.createElement(`button`);
            btn.textContent = this.currentEnemies[i].enemy_name + `   HP: ` + this.currentEnemies[i].health;
            btn.classList.add(`attack-enemy-btn`);
            btn.enemyId = this.currentEnemies[i].id;
            li.appendChild(btn);
            ul.appendChild(li);
        }
    }

    combat (enemyId, player, btn, ul, state) {
        this.hideActiveSpellEl();
        

        let selectedEnemy = this.currentEnemies.filter(enemy => enemy.id === enemyId);
        selectedEnemy = selectedEnemy[0];

        console.log(`combat`);
        //Player State=============================================
        if(state === `player`) {
            this.clearLi();
            
            console.log(selectedEnemy);

            let damage = Math.round((player.activeSpell.power * 10) - (selectedEnemy.defense/Math.floor((Math.random() * player.luck) +1)));
            if(damage < 0) {
                damage = 0;
            }
            selectedEnemy.health -= damage;
            console.log(selectedEnemy.health);
            
            if(selectedEnemy.health <= 0) {
                const isWon = selectedEnemy.defeated(this);
    
                if(isWon) {
                    let li = document.createElement("li");
                    li.textContent =`You Won`;
                    ul.appendChild(li);

                    this.stories.shift();
                    this.storyList.shift();
                    btn.textContent = `Continue`;
                    btn.classList.remove(`attack-action`);
                    btn.classList.add(`continue-to-loot`)
                    console.log(`in isWon: ` + selectedEnemy.health);
                } else {
                    let reportDamage = document.createElement("li");
                    let reportHealth = document.createElement("li");
                    console.log(typeof(damage));
                        console.log(damage);
                    if(damage <= 0) {
                        reportDamage.textContent =`You missed ${selectedEnemy.enemy_name}.`;
                    } else {
                        console.log(typeof(damage));
                        console.log(damage);
                        reportDamage.textContent =`${selectedEnemy.enemy_name} took ${damage}pts of damage`;
                    }

                    if(selectedEnemy.health < 0) {
                        reportHealth.textContent =`${selectedEnemy.enemy_name}'s health is at ${0}`;
                    } else {
                        reportHealth.textContent =`${selectedEnemy.enemy_name}'s health is at ${selectedEnemy.health}`;
                    }

                    ul.appendChild(reportDamage);
                    ul.appendChild(reportHealth);
            
                    //update action menu button
                    btn.textContent = `Continue`;
                    btn.classList.remove(`attack-action`);
                    btn.classList.add(`continue-to-enemy`);
                    console.log(`in !isWon: ` + selectedEnemy.health);

                } 
            } else {
                let reportDamage = document.createElement("li");
                let reportHealth = document.createElement("li");
                reportDamage.textContent =`${selectedEnemy.enemy_name} took ${damage}pts of damage`;
                reportHealth.textContent =`${selectedEnemy.enemy_name}'s health is at ${selectedEnemy.health}`;
                ul.appendChild(reportDamage);
                ul.appendChild(reportHealth);
        
                //update action menu button
                btn.textContent = `Continue`;
                btn.classList.remove(`attack-action`);
                btn.classList.add(`continue-to-enemy`);
                console.log(`in !isWon: ` + selectedEnemy.health);
            }

                console.log(selectedEnemy.health);
        //Enemy State===============================================
        } else if (state === `enemy`) {

            this.clearLi();

            this.currentEnemies.forEach(enemy => {
                let damage = Math.round(enemy.attack - (player.defense/Math.floor((Math.random() * enemy.luck) +1)));
                let reportDamage = document.createElement("li");
                    reportDamage.textContent =`You took ${damage}pts of damage`;
                let reportHealth = document.createElement("li");

                if(damage < 0) {
                    damage = 0;
                    reportDamage.textContent =`${enemy.enemy_name} missed you.`
                }

                player.health -= damage;
                console.log(player.health);

                
                reportHealth.textContent = `Your health is at ${player.health}`;
                ul.appendChild(reportDamage);
                ul.appendChild(reportHealth);
            })

            btn.textContent = `Continue`;
            btn.classList.remove(`continue-to-enemy`);
            btn.classList.add(`continue-to-main`);
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
}