// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAAGomtULiPY4p_tqgq5Q6bnEf40hWP1P8",
  authDomain: "registration-app-5f3ac.firebaseapp.com",
  projectId: "registration-app-5f3ac",
  storageBucket: "registration-app-5f3ac.firebasestorage.app",
  messagingSenderId: "868138598832",
  appId: "1:868138598832:web:f083f5c11e200eebbe9675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Register function
window.register = async function () {

  const userData = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value
  };

  try {

    await addDoc(collection(db, "users"), userData);

    alert("Registration Successful");

  } catch (error) {

    console.error(error);
    alert(error.message);

  }

}