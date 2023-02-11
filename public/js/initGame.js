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
        } 
        
        displayEnemy(){
    
        }
        
        defeatEnemy(){
    
        }
        
        displayLoot(){
    
        }
        
        displayInventory(ul){
                for (let i = 0; i < this.Inventory.Items.length; i ++) {
                let li = document.createElement("li")
                li.textContent = this.Inventory.Items[i].item_name;
                console.log(this.Inventory.Items[i].item_name)
                ul.appendChild(li);
            }
        }
        
        equipItem(){
    
        }
        
        displaySpells(ul){
            for (let i = 0; i < this.Spellbook.Spells.length; i ++) {
                let li = document.createElement("li")
                li.textContent = this.Spellbook.Spells[i].spell_name;
                ul.appendChild(li);
            }
        }
    
        createSpell(){
    
        }
        
        updateSpell(){
    
        }
        
        gameOver(){
    
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