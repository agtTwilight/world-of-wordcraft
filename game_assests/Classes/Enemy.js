class Enemy {
    //probably need to add spell points to enemies which are only there to be transfered to player upon defeat.
    //probably need to remove quantity as quantity will be dynamically defined in the mob class upon enemy creation
    constructor(obj
    ) {
        const{id, enemy_name, race, alignment, sprite, health, attack, magic, resistance, defense, accuracy, luck, consitution, exp, level, gold} = obj;
        
        this.id = id;
        this.enemy_name = enemy_name;
        this.race = race;
        this.alignment = alignment;
        this.sprite = sprite;
        this.health = health;
        this.attack = attack;
        this.magic = magic;
        this.resistance = resistance;
        this.defense = defense;
        this.accuracy = accuracy;
        this.luck = luck;
        this.constitution = consitution;
        this.exp = exp;
        this.level = level;
        this.gold = gold;
        //this.quantity = quantity;
    }

    fillInventory() {

    }

    attackPlayer(player) {
        console.log(player.defense/Math.floor(Math.random() * this.luck) - this.attack)
        player.health = player.health - (player.defense/Math.floor(Math.random() * this.luck) - this.attack);
    }

    takeDamage(damage) {
        this.health = this.health - damage;
        if(this.health <= 0) {
            defeated
        }
    }

    //feed this function the game object
    defeated(game) {
        const indexToRemove = game.currentEnemies.indexOf(this);
        game.currentEnemies.splice(indexToRemove, 1);
    }
}

module.exports = Enemy;