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
function showNotification(text){

const notification =
document.getElementById("notification");

notification.innerHTML = text;
notification.classList.add("show");

setTimeout(()=>{
notification.classList.remove("show");
},3000);

}
showNotification("❤️ Добро пожаловать в VITMARKET.KZ");