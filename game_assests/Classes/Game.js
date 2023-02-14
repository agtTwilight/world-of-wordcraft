const Enemy = require(`./Enemy`);
const Character = require(`./Character`);

//probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
//probably need to remove quantity as quantity will be dynamically defined in the Game class upon enemy creation


//for scaling purposes we should have Game take in the characters level as a value and scale the enemies accordingly.
class Game {
    constructor() {
        this.storyList = [];
        this.enemyList = [];
        this.currentEnemies = [];
        this.loot = {
            gold: 0,
            exp: 0,
            spell_points: 0,
            items: []
        };
    }
    async testCharacter () {
        const getCharacter = await fetch(`http://localhost:3000/api/users/testcharacter/1`);
        const characterObj = await getCharacter.json();
        return characterObj;
    }

    gameInit(campaignLength){
        fetch(`http://localhost:3000/api/stories`)
        .then(res =>{
            return res.json();
        })
        .then(data => {
            for (let i = 0; i < campaignLength; i++) {
                const storyNumber = Math.floor(Math.random() * data.length) + 1;
                this.storyList.push(storyNumber);
            }
            if(this.currentEnemies === []){
                this.getEnemyList(storyList);
                return this.storyList;
            } else {
                return this.storyList;
            }
        })
    }

    getEnemyList(stories){        
        const currentStory = stories[0];
        
        fetch(`http://localhost:3000/api/enemies/mob/${currentStory}`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                this.enemyList = data.map((enemy) => {return enemy.EnemyId});
                
                if(this.currentEnemies === []){
                    this.generateMob(this.enemyList)
                    //testing loot with only gold
                } else {
                    return this.enemyList;
                }           
            });
    }

    generateMob (enemies){
        enemies.forEach(async (enemy) => {
            const getEnemy = await fetch(`http://localhost:3000/api/enemies/${enemy}`);
            const enemyObj = await getEnemy.json();
            const newEnemy = new Enemy(enemyObj);
            
            //create in game mob
            this.currentEnemies.push(newEnemy);

            //collect loot for lootScreen
            this.loot.gold += newEnemy.gold;
            this.loot.exp += newEnemy.exp;
            //this.loot.spell_points += newEnemy.spell_points;
            //this.loot.inventory.push(newEnemy.inventory);
            //console.log(this.loot);
        });
        return this.currentEnemies;
    }

    lootScreen (player) {
        //console.log(player);
        //console.log(player);
        //setTimeout(() => {console.log(Object.keys(player))},1000);
        console.log(this.loot);
        player.gold += this.loot.gold;
        player.exp += this.loot.exp;
        //player.spell_points += this.loot.spell_points;
        console.log(player.gold + ` ` + player.exp);
    }

    changeStory (enemies, stories){

    }
}

const awaitGame = async () => {
    const newGame = new Game;
    const newCharacter = await newGame.testCharacter();

    newGame.generateMob([1,2]);

    setTimeout(() => {
        newGame.lootScreen(newCharacter);
    }, 1000);

}
awaitGame();

module.exports = Game;