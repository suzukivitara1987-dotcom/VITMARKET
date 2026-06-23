// ======================================
// VITMARKET.KZ
// script_new.js
// ЧАСТЬ 1
// ======================================

console.log("VITMARKET.KZ запущен");

// ======================================
// ЗВУК КНОПОК
// ======================================

const clickSound = new Audio("sounds/click.mp3");

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        try {
            clickSound.currentTime = 0;
            clickSound.play();
        } catch (e) {}

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

    });

});

// ======================================
// УВЕДОМЛЕНИЯ
// ======================================

function showNotification(message) {

    let notification = document.createElement("div");

    notification.innerText = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.padding = "15px";
    notification.style.background = "#7d29ff";
    notification.style.color = "white";
    notification.style.borderRadius = "20px";
    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.remove();

    },3000);

}

// ======================================
// ТЁМНАЯ ТЕМА
// ======================================

function toggleTheme(){

    document.body.classList.toggle("dark-theme");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme")
    );

}

if(localStorage.getItem("theme")==="true"){

    document.body.classList.add("dark-theme");

}

// ======================================
// ИЗБРАННОЕ
// ======================================

let favorites = JSON.parse(
    localStorage.getItem("favorites")
) || [];

function addToFavorites(title){

    favorites.push(title);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    showNotification("❤️ Добавлено в избранное");

}

// ======================================
// ПОИСК
// ======================================

function searchAds(){

    let value = document.querySelector("input");

    if(!value) return;

    if(value.value===""){

        showNotification("Введите запрос");

        return;

    }

    showNotification(
        "Поиск: " + value.value
    );

}

// ======================================
// ПРОСМОТРЫ
// ======================================

let views = localStorage.getItem("views");

if(!views){

    views = 0;

}

views++;

localStorage.setItem("views",views);

// ======================================
// АНИМАЦИЯ КАРТОЧЕК
// ======================================

document.querySelectorAll(".ad-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});

// ======================================
// ЗАГРУЗКА ОБЪЯВЛЕНИЙ
// ======================================

function loadAds(){

    console.log("Загрузка объявлений...");

}

// ======================================
// СТАРТ
// ======================================

window.onload = ()=>{

    loadAds();

    console.log("VITMARKET.KZ готов");

};// ======================================
// ПУБЛИКАЦИЯ ОБЪЯВЛЕНИЙ
// ======================================

function publishAd() {

    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let phone = document.getElementById("phone");
    let whatsapp = document.getElementById("whatsapp");
    let city = document.getElementById("city");

    if (!title || !price) return;

    if (title.value === "" || price.value === "") {

        showNotification("Заполните обязательные поля");

        return;

    }

    let ad = {

        title: title.value,
        description: description.value,
        price: price.value,
        phone: phone.value,
        whatsapp: whatsapp.value,
        city: city.value,
        date: new Date().toLocaleString(),
        views: 0,
        likes: 0

    };

    let ads = JSON.parse(localStorage.getItem("ads")) || [];

    ads.unshift(ad);

    localStorage.setItem(
        "ads",
        JSON.stringify(ads)
    );

    showNotification("🚀 Объявление опубликовано");

}

// ======================================
// КНОПКА ПУБЛИКАЦИИ
// ======================================

let publishBtn = document.getElementById("publishBtn");

if (publishBtn) {

    publishBtn.addEventListener("click", publishAd);

}

// ======================================
// ЗАГРУЗКА ОБЪЯВЛЕНИЙ
// ======================================

function loadAds() {

    let ads = JSON.parse(localStorage.getItem("ads")) || [];

    console.log("Объявлений:", ads.length);

}

// ======================================
// ЧАТ
// ======================================

function openChat() {

    showNotification("💬 Чат будет доступен позже");

}

// ======================================
// FIREBASE
// ======================================

function initFirebase() {

    console.log("Firebase будет подключён позже");

}

// ======================================
// АВТОЗАПУСК
// ======================================

loadAds();

console.log("VITMARKET.KZ полностью загружен");

// ======================================
// # ФАЙЛ ЗАКОНЧЕН
// ======================================