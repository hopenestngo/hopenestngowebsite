
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".navbar-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("show");
        });
    }
});


const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
const mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");

if (mobileDropdownToggle) {
    mobileDropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobileDropdownMenu.classList.toggle("show");
    });
}


const firebaseConfig = {
  apiKey: "AIzaSyAVCrJNn0VnNGw6MCWK0cXhexrzjNiTbXM",
  authDomain: "hope-nest-community-ngo.firebaseapp.com",
  projectId: "hope-nest-community-ngo",
  storageBucket: "hope-nest-community-ngo.firebasestorage.app",
  messagingSenderId: "641918315234",
  appId: "1:641918315234:web:5e8455d0a2db3eec494cbb"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



const contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", async (e)=>{

    e.preventDefault();


   const button = contactForm.querySelector("button");


    button.textContent = "Sending...";
    button.disabled = true;


const messageData = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    phone: document.getElementById("phone").value,

    message: document.getElementById("message").value,

    createdAt: serverTimestamp()

};


    try {


        await addDoc(collection(db,"messages"), messageData);


        alert("Message Sent successfully!");


        contactForm.reset();


    }

    catch(error){

        console.error(error);

        alert("Message Failed!");

    }


    finally{

        button.textContent = "Send";

        button.disabled = false;

    }


});