// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase configuration
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

    dob: document.getElementById("dob").value,

    gender: document.getElementById("gender").value,

    marital_status: document.getElementById("marital_status").value,

    email: document.getElementById("email").value,

    phone: document.getElementById("phone").value,

    address: document.getElementById("address").value,

    city: document.getElementById("city").value,

    state: document.getElementById("state").value,

    qualification: document.getElementById("qualification").value,

    occupation: document.getElementById("occupation").value,

    age: document.getElementById("age").value,

    password: document.getElementById("password").value,

    createdAt: new Date()

  };

  try {

    await addDoc(collection(db, "users"), userData);

    alert("Registration Successful");

    // Clear form
    document.getElementById("fullname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "Male";
    document.getElementById("marital_status").value = "Single";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("qualification").value = "";
    document.getElementById("occupation").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";

  } catch (error) {

    console.error(error);

    alert("Error: " + error.message);

  }

}