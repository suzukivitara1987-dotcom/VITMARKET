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
const themeButton = document.getElementById("themeButton");

themeButton.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");
showNotification("🌙 Тёмная тема включена");

}else{

localStorage.setItem("theme","light");
showNotification("☀️ Светлая тема включена");

}

};
let newMessages = 3;

document.getElementById("messageCount").innerHTML =
"💬 "+newMessages;
let newMessages = 3;

const messageCount = document.getElementById("messageCount");

if (messageCount) {
    messageCount.innerHTML = "💬 " + newMessages;
}
let favoriteCount = document.getElementById("favoriteCount");

if (favoriteCount) {
    favoriteCount.innerHTML = "3";
}
if(localStorage.getItem("theme")=="dark"){
document.body.classList.add("dark");
}