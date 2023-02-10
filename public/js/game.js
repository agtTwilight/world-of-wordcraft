const actionMenuBtn1 = document.querySelector(`#am-btn-1`);
const actionMenuBtn2 = document.querySelector(`#am-btn-2`);
const actionMenuBtn3 = document.querySelector(`#am-btn-3`);
const actionMenuBtn4 = document.querySelector(`#am-btn-4`);
const pauseBtn = document.querySelector(`.pause-btn`);
const pauseMenu = document.querySelector(`#pause-menu`)

console.log(pauseMenu.style.left);

pauseBtn.addEventListener(`click`, function() {
    console.log(`ouch`);
    pauseMenu.setAttribute(`style`, `left: 0px; transition: .5s`)
    //movePauseMenu();
});

const movePauseMenu = () => {
    menuOffset = -230;
    const moveing = setInterval(function () {
        menuOffset += 5;
        pauseMenu.style.left = menuOffset + `px`;
        console.log(menuOffset);
        console.log(menuOffset);

        if(menuOffset <= 0){
            clearInterval(moveing)
        }

    }, 1);

    
}