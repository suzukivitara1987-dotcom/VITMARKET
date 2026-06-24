// VITMARKET.KZ

console.log("VITMARKET.KZ запущен");

// Звуки
const clicksound = new Audio("sounds_new/click.mp3");
const successsound = new Audio("sounds_new/success.mp3");
const favoritesound = new Audio("sounds_new/favorite.mp3");

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

    favoritesound.play();

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

    successsound.play();

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

    successsound.play();

    showNotification(
        "⭐ Объявление стало VIP"
    );

}


// Поднять объявление

function boostAd(adName){

    successsound.play();

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
// =======================
// AI помощник VITMARKET
// =======================

function aiAssistant(){

let question = prompt(
"🤖 Что вы хотите продать?"
);

if(question === null) return;

if(question.toLowerCase().includes("iphone")){

alert(
"📱 Категория: Электроника\n💰 Рекомендуемая цена: 400000 - 1200000 ₸"
);

}

else if(question.toLowerCase().includes("toyota")){

alert(
"🚗 Категория: Авто\n💰 Проверьте похожие объявления в разделе Авто"
);

}

else{

alert(
"🤖 AI помощник поможет подобрать категорию и цену"
);

}

}



// =======================
// Автоописание
// =======================

function generateDescription(name){

return `
Продаётся ${name}.
Товар в хорошем состоянии.
Все вопросы по телефону или в сообщениях VITMARKET.KZ.
`;

}



// =======================
// Геолокация
// =======================

function getUserLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

console.log(
"Широта:",
position.coords.latitude
);

console.log(
"Долгота:",
position.coords.longitude
);

showNotification(
"📍 Геолокация определена"
);

},

()=>{

showNotification(
"Не удалось определить местоположение"
);

}

);

}

}



// =======================
// Казахстан
// =======================

const kazakhstanRegions = [

"Астана",
"Алматы",
"Шымкент",
"Уральск",
"Аксай",
"Актобе",
"Атырау",
"Актау",
"Костанай",
"Кокшетау",
"Кызылорда",
"Павлодар",
"Петропавловск",
"Семей",
"Тараз",
"Талдыкорган",
"Туркестан",
"Усть-Каменогорск",
"Караганда"

];

console.log(
"Города Казахстана загружены"
);
// =======================
// Сообщения
// =======================

let messages = [];

function sendMessage(user, text){

messages.push({

user:user,

text:text,

date:new Date()

});

localStorage.setItem(

"messages",

JSON.stringify(messages)

);

showNotification(

"💬 Сообщение отправлено"

);

}



// =======================
// Профиль пользователя
// =======================

let profile = {

name:"",

phone:"",

city:"",

rating:5

};

function saveProfile(){

localStorage.setItem(

"profile",

JSON.stringify(profile)

);

showNotification(

"👤 Профиль сохранён"

);

}



// =======================
// Загрузка избранного
// =======================

window.onload = function(){

favorites = JSON.parse(

localStorage.getItem("favorites")

) || [];

hotAds = JSON.parse(

localStorage.getItem("hotAds")

) || [];

vipAds = JSON.parse(

localStorage.getItem("vipAds")

) || [];

messages = JSON.parse(

localStorage.getItem("messages")

) || [];

console.log(

"VITMARKET.KZ полностью загружен"

);

}



// =======================
// Google Play и App Store
// =======================

function openGooglePlay(){

showNotification(

"📱 Android приложение скоро появится"

);

}

function openAppStore(){

showNotification(

"🍎 iPhone приложение скоро появится"

);

}



// =======================
// Оплата
// =======================

function paymentSystem(){

showNotification(
"💳 Оплата будет доступна скоро"
);

}
