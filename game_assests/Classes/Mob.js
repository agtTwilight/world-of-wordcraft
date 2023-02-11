const Enemy = require(`./Enemy`);
//probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
//probably need to remove quantity as quantity will be dynamically defined in the mob class upon enemy creation

class Mob {
    constructor() {
        this.storyList = [];
        this.enemyList = [];
        this.currentEnemies = [];
    }
    selectStories(campaignLength){
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
            this.currentEnemies.push(newEnemy);
        });
        return this.currentEnemies;
    }
}

module.exports = Mob;