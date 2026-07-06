document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".navbar-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    toggleBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔥 Firebase config (replace with yours)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FORM SUBMIT
document.getElementById("volunteer-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await addDoc(collection(db, "volunteers"), {
            fullName: document.getElementById("full-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            support: document.getElementById("support").value,
            availability: document.getElementById("programArea").value,
            message: document.getElementById("message").value,
            contactMethod: document.getElementById("contactMethod").value,
            createdAt: serverTimestamp()
        });

        alert("Submitted successfully!");
        document.getElementById("volunteer-form").reset();

    } catch (error) {
        console.error(error);
        alert("Submission failed!");
    }
});