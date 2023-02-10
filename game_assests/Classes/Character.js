const Actor = require(`./Actor`);

class Character extends Actor{
   
    constructor(
        id,
        character_name,
        race,
        alignment,
        health,
        magic,
        resistance,
        defense,
        accuracy,
        luck,
        consitution,
        exp,
        level,
        spell_point,
        gold,
        createdAt,
        updatedAt,
        UserId,
        inventory,
        spellbook
    ) {
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
        this.constitution = consitution;
        this.exp = exp;
        this.level = level;
        this.spell_point = spell_point;
        this.gold = gold;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.UserId = UserId;
        this.inventory = inventory;
        this.spellbook = spellbook;
    } 
    
    displayEnemy(){

    }
    
    defeatEnemy(){

    }
    
    displayLoot(){

    }
    
    displayInventory(){

    }
    
    equipItem(){

    }
    
    displaySpells(){

    }
    
    createSpell(){

    }
    
    updateSpell(){

    }
    
    gameOver(){

    }


}
