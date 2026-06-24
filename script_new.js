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
// HOT и VIP

let hotAds = [];
let vipAds = [];

function makeHot(adName){

    hotAds.push(adName);

    localStorage.setItem(
        "hotAds",
        JSON.stringify(hotAds)
    );

    successSound.play();

    showNotification(
        "🔥 Объявление стало HOT"
    );

}

function makeVip(adName){

    vipAds.push(adName);

    localStorage.setItem(
        "vipAds",
        JSON.stringify(vipAds)
    );

    successSound.play();

    showNotification(
        "⭐ Объявление стало VIP"
    );

}


// Поднять объявление

function boostAd(adName){

    successSound.play();

    showNotification(
        "🚀 Объявление поднято вверх"
    );

}


// История просмотров

let viewedAds = [];

function addViewed(adName){

    viewedAds.push(adName);

    localStorage.setItem(
        "viewedAds",
        JSON.stringify(viewedAds)
    );

}


// Цены услуг

const prices = {

    boostOnce:490,

    boostWeek:1490,

    hot7:1990,

    hot30:4990,

    vip7:2490,

    vip30:6990,

    top7:3990,

    top30:9990

};


// Уведомления

function vipEnded(){

    showNotification(
        "⭐ Срок VIP объявления закончился"
    );

}

function hotEnded(){

    showNotification(
        "🔥 Срок HOT объявления закончился"
    );

}