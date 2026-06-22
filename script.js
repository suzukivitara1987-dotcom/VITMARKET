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
window.onload = function(){

let speech = new SpeechSynthesisUtterance(
"Добро пожаловать в Витмаркет Кей Зет. Здесь вы можете покупать и продавать товары по всему Казахстану."
);

speech.lang = "ru-RU";

speechSynthesis.speak(speech);

}