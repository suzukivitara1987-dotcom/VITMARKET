import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb2ZsqINOu_LjUlXdXBYQVImTZ9Ib2iVk",
  authDomain: "vitmarket-kz.firebaseapp.com",
  projectId: "vitmarket-kz",
  storageBucket: "vitmarket-kz.firebasestorage.app",
  messagingSenderId: "690359698157",
  appId: "1:690359698157:web:3c8c89253faaefed9f42e4"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const CLOUD_NAME = "dijdrdudb";

export const UPLOAD_PRESET = "VITMARKET";