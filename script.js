const clickSound = new Audio("sounds/click.mp3");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("button, a").forEach(element => {

    element.addEventListener("click", () => {
      playClick();
    });

  });

});