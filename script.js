const clickSound = new Audio("sounds/click.mp3");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}