const createNewCharacter = async (character_name, userId) => {
    // todo adjust stats
    const characterObj = {
            "race": "Human",
            "alignment": "Good",
            "health": 80,
            "magic": 25,
            "resistance": 10,
            "defense": 30,
            "accuracy": 65,
            "luck": 5,
            "constitution": 10,
            "exp": 50,
            "level": 1,
            "spell_point": 100,
            "gold": 100,
            "userId": userId,
            character_name
    }

    // adds new character to db connected to current user
    const rawData = await fetch("/api/characters/", {
            method:"POST",
            body: JSON.stringify(characterObj),
            headers:{
                    "Content-Type":"application/json"
            }
    })
    const dbCharacter = await rawData.json()

    // creates starting inventory, connected to new character
    const createStartingInventory = await fetch("/api/inventories/", {
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
    const fillStartingInventory = await fetch("/api/inventoryItems", {
            method:"POST",
            body: JSON.stringify(itemJunction),
            headers:{
                    "Content-Type":"application/json"
            }
    })

    // add spellbook to new character
    const createStartingSpellbook = await fetch("/api/spellbooks", {
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
    const fillStartingSpellbook = await fetch("/api/spellbookSpells", {
            method:"POST",
            body: JSON.stringify(spellJunction),
            headers:{
                    "Content-Type":"application/json"
            }
    })
}

document.querySelector("#signup-form").addEventListener("submit", async e=>{
        e.preventDefault();
        const signupObj = {
            username:document.querySelector("#signup-username").value,
            password:document.querySelector("#signup-password").value
        }

        const rawUserData = await fetch("/api/users/",{
            method:"POST",
            body:JSON.stringify(signupObj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const newUser = await rawUserData.json();
        const character_name = document.querySelector("#signup-character-name").value
        
        await createNewCharacter(character_name, newUser["id"])
        goHome()
})

function goHome() {
    location.href="/"
}