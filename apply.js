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


    if (toggleBtn && mobileMenu) {

        toggleBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

        });

    }

});


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



document.addEventListener("DOMContentLoaded", () => {

    const applicationForm = document.getElementById("application-form");

    const submitButton = applicationForm.querySelector(".submit-btn");


    applicationForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        submitButton.textContent = "Submitting...";
        submitButton.disabled = true;


        const applicationData = {

            position: document.getElementById("position").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,

            physicalAddress: document.getElementById("physicalAddress").value,
            city: document.getElementById("city").value,
            country: document.getElementById("country").value,

            highestQualification: document.getElementById("highestQualification").value,
            institution: document.getElementById("institution").value,
            certification: document.getElementById("certification").value,

            currentEmployer: document.getElementById("currentEmployer").value,
            currentPosition: document.getElementById("currentPosition").value,
            yearsExperience: document.getElementById("yearsExperience").value,
            experienceSummary: document.getElementById("experienceSummary").value,

            relevantSkills: document.getElementById("relevantSkills").value,
            whyWork: document.getElementById("motivation").value,

            createdAt: serverTimestamp()
        };


        try {

            await addDoc(collection(db, "applications"), applicationData);

            alert("Application submitted successfully!");

            applicationForm.reset();

        } catch(error) {

            console.error("Error:", error);
            alert("Submission failed!");

        } finally {

            submitButton.textContent = "Submit Application";
            submitButton.disabled = false;

        }

    });

});