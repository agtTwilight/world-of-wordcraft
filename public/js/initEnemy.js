export class Enemy {
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
        const lineItemsToRemove = document.querySelectorAll(`li`);
        lineItemsToRemove.remove();
        
        const damage = Math.round(this.attack - (player.defense/Math.floor((Math.random() * this.luck) +1)));
        player.health -= damage;
        
        let reportDamage = document.createElement("li");
        let reportHealth = document.createElement("li");
        reportDamage.textContent(`You took ${damage}pts of damage`);
        reportHealth.textContent(`Your health is at ${player.health}`);
        ul.appendChild(reportDamage);
        ul.appendChild(reportHealth);

        console.log(player.health);
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

        if(game.currentEnemies.length != 0) {
            return false;
        } else {
            return true;
        }
    }
}