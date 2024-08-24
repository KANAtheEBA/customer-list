// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";
import { fetchListData } from "./my-modules/fetchListData";
import { addListData } from "./my-modules/addListData"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STRAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

if(document.getElementById("js-list")){
    fetchListData(getDocs, collection, db, query, orderBy);
}

if(document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) =>
    addListData(e, addDoc, collection, db));
}
