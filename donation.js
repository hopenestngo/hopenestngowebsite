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