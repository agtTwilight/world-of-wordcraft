const Enemy = require(`./Enemy`);

let storyList = [];
let enemyList = [];
let currentEnemies = [];

//probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
//probably need to remove quantity as quantity will be dynamically defined in the mob class upon enemy creation

class Mob {
    constructor() {

    }
    selectStories(campaignLength){
        fetch(`http://localhost:3000/api/stories`)
        .then(res =>{
            return res.json();
        })
        .then(data => {
            for (let i = 0; i < campaignLength; i++) {
                const storyNumber = Math.floor(Math.random() * data.length) + 1;
                storyList.push(storyNumber);
            }
            console.log(`story list: ` + storyList);
            this.getEnemyList(storyList);

        })
    }

    getEnemyList(stories){

        console.log(`story 0: ` + stories[0]);
        
        const currentStory = stories[0];
        
        fetch(`http://localhost:3000/api/enemies/mob/${currentStory}`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                enemyList = data.map((enemy) => {return enemy.EnemyId});
                
                console.log(`enemy list: ` + enemyList);
                this.generateMob(enemyList);
            });
    }

    generateMob(enemies){
        enemies.forEach((enemy) => {
            console.log(enemy);
            fetch(`http://localhost:3000/api/enemies/${enemy}`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                //const{ id, enemy_name, race, alignment, sprite, health, attack, magic, resistance, defense, accuracy, luck, consitution, exp, level, gold} = data;
                
                const newEnemy = new Enemy(data)
                console.log(data);

                console.log(`new enemy: ` + newEnemy);

                currentEnemies.push(newEnemy);

                console.log(`current enemies: ` + currentEnemies);
            });
        });
    }
}

const test = new Mob;
test.selectStories(3);

module.exports = Mob;