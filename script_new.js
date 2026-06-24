// VITMARKET.KZ

console.log("VITMARKET.KZ запущен");

// Звуки
const clickSound = new Audio("Sounds_new/click.mp3");
const successSound = new Audio("Sounds_new/success.mp3");
const favoriteSound = new Audio("Sounds_new/favorite.mp3");

// Уведомление
function showNotification(text){
    alert(text);
}

// AI помощник
function aiAssistant(){
    alert("🤖 AI помощник VITMARKET скоро будет доступен");
}

// Избранное
let favorites = [];

function addToFavorites(name){

    favorites.push(name);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    favoriteSound.play();

    showNotification("❤️ Добавлено в избранное");

}

// Поиск
function searchAds(){

    let text =
    document.querySelector("input");

    console.log(
        "Поиск:",
        text.value
    );

}