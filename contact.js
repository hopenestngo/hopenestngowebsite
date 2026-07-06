document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".navbar-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    toggleBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});



emailjs.init("aREQy9cslxJQHEzla");


const form = document.getElementById("contact-form");
const button = document.querySelector(".contact-form-button button");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    button.textContent = "Sending...";
    button.disabled = true;

    
    emailjs.sendForm(
        "service_dl7xdnt",
        "template_zgjijtl",
        this
    )
    .then(() => {
        
        form.reset();
    })
    .catch((error) => {
        console.log("EmailJS Error:", error);
    })
    .finally(() => {
        
        button.textContent = "Send";
        button.disabled = false;
    });
});