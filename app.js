import {
db,
auth,
CLOUD_NAME,
UPLOAD_PRESET
}
from "./firebase-config.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

window.publishAd = async () => {

try {

const title = document.getElementById("title").value.trim();
const price = document.getElementById("price").value.trim();
const city = document.getElementById("city").value.trim();
const phone = document.getElementById("phone").value.trim();
const description = document.getElementById("description").value.trim();

if (!title || !price || !city || !phone || !description) {
alert("Заполните все поля");
return;
}

const files = document.getElementById("images").files;

let imageUrls = [];

for (const file of files) {

const formData = new FormData();

formData.append("file", file);
formData.append("upload_preset", UPLOAD_PRESET);

const response = await fetch(
`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
{
method: "POST",
body: formData
}
);

const data = await response.json();

imageUrls.push(data.secure_url);

}

await addDoc(collection(db, "ads"), {

title,
price,
city,
phone,
description,
images: imageUrls,
createdAt: serverTimestamp()

});

alert("Объявление опубликовано");

location.href = "index.html";

}
catch(error){

alert(error.message);

}

};