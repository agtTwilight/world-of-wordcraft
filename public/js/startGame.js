const Game = require(`../../game_assests/Classes/Game`);
const Enemy = require(`../../game_assests/Classes/Enemy`);

document.querySelector("#game-btn").addEventListener("click",e=>{
        e.preventDefault();

        //a bit of a misnomer. I think Mob should be renamed to GameRun or just Run.
        const newGame = new Game;


        location.href = "/game"
    })