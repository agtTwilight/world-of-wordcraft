const createNewCharacter = require("../../game_assests/playableCharacters")

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
        const newUser = rawUserData.json();
        const character_name = document.querySelector("#signup-character-name")
        
        await createNewCharacter(character_name, newUser.id)
        location.href="/home"
    })