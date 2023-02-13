const createNewCharacter = async (character_name, userId) => {
        // todo adjust stats
        const characterObj = {
                "race": "Human",
                "alignment": "Good",
                "health": 120,
                "magic": 15,
                "resistance": 35,
                "defense": 50,
                "accuracy": 80,
                "luck": 15,
                "constitution": 12,
                "exp": 20,
                "level": 6,
                "spell_point": 4,
                "gold": 70,
                "userId": userId,
                character_name
        }

        // adds new character to db connected to current user
        const rawData = await fetch("http://localhost:3000/api/characters/", {
                method:"POST",
                body: JSON.stringify(characterObj),
                headers:{
                        "Content-Type":"application/json"
                }
        })
        const dbCharacter = await rawData.json()

        // creates starting inventory, connected to new character
        const createStartingInventory = await fetch("http://localhost:3000/api/inventories/", {
                method:"POST",
                body: JSON.stringify({"CharacterId":dbCharacter.id}),
                headers:{
                        "Content-Type":"application/json"
                }
        })
        const inventory = await createStartingInventory.json()
        const itemJunction = {"InventoryId":inventory.id,"ItemId":1,}

        // add items to starting inventory
        // TODO: make a for loop that adds all items we want
        const fillStartingInventory = await fetch("http://localhost:3000/api/inventoryItems", {
                method:"POST",
                body: JSON.stringify(itemJunction),
                headers:{
                        "Content-Type":"application/json"
                }
        })

        // add spellbook to new character
        const createStartingSpellbook = await fetch("http://localhost:3000/api/spellbooks", {
                method:"POST",
                body: JSON.stringify({"CharacterId":dbCharacter.id}),
                headers:{
                        "Content-Type":"application/json"
                }
        })
        const spellbook = await createStartingSpellbook.json()
        const spellJunction = {"SpellbookId":spellbook.id,"SpellId":1}

        // add spells to spellbook
        // TODO: make a for loop to add all spells
        const fillStartingSpellbook = await fetch("http://localhost:3000/api/spellbookSpells", {
                method:"POST",
                body: JSON.stringify(spellJunction),
                headers:{
                        "Content-Type":"application/json"
                }
        })
}

const test = async () => {
        const signupObj = {
                "username":"aaffffd",
                "password":"password"
            }
    
            const rawUserData = await fetch("http://localhost:3000/api/users/",{
                method:"POST",
                body:JSON.stringify(signupObj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const newUser = await rawUserData.json();
            const character_name = "test not workiasdfang"
            
            await createNewCharacter(character_name, newUser["id"])
}

module.exports = createNewCharacter;
