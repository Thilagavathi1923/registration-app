import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAGomtULiPY4p_tqgq5Q6bnEf40hWP1P8",
  authDomain: "registration-app-5f3ac.firebaseapp.com",
  projectId: "registration-app-5f3ac",
  storageBucket: "registration-app-5f3ac.firebasestorage.app",
  messagingSenderId: "868138598832",
  appId: "1:868138598832:web:f083f5c11e200eebbe9675"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.register = async function () {

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  try {

    await addDoc(collection(db, "registrations"), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    alert("Registration Successful");

  } catch (error) {

    console.error(error);

    alert("Error saving data");

  }

}