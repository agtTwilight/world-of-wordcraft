class Enemy {
    constructor(obj
    ) {
        const{ id, enemy_name, race, alignment, sprite, health, attack, magic, resistance, defense, accuracy, luck, consitution, exp, level, spell_point, gold, quantity, inventory} = obj;
        
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
        this.spell_point = spell_point;
        this.gold = gold;
        this.quantity = quantity;
        this.inventory = inventory;
    }

    attackPlayer(player) {
        damage = player.defense/Math.floor(Math.random() * this.luck) - this.attack;
        return damage;
    }

    takeDamage(damage) {
        this.health = this.health - damage;
        if(this.health <= 0) {
            defeated
        }
    }

    defeated() {

    }
}
