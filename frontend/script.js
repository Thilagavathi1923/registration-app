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

  const fullname = document.getElementById("fullname").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const marital_status = document.getElementById("marital_status").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const qualification = document.getElementById("qualification").value;
  const occupation = document.getElementById("occupation").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;

  try {

    await addDoc(collection(db, "registrations"), {
      fullname,
      dob,
      gender,
      marital_status,
      email,
      phone,
      address,
      city,
      state,
      qualification,
      occupation,
      age,
      password,
      createdAt: new Date()
    });

    alert("Registration Successful");

  } catch (error) {

    console.error(error);

    alert("Error saving data");

  }

}