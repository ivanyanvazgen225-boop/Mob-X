// ==============================
// MOB-X WEBSITE JAVASCRIPT
// ==============================


// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
});


// CLOSE MOBILE MENU AFTER CLICK

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });

});


// PRODUCT FILTERS

const filters = document.querySelectorAll(".filter");
const categoryButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");


function filterProducts(category) {

    products.forEach(product => {

        const productCategory =
            product.getAttribute("data-category");

        if (
            category === "all" ||
            productCategory === category
        ) {
            product.classList.remove("hidden");
        } else {
            product.classList.add("hidden");
        }

    });

    filters.forEach(filter => {

        if (
            filter.getAttribute("data-category") === category
        ) {
            filter.classList.add("active");
        } else {
            filter.classList.remove("active");
        }

    });

}


// TOP FILTER BUTTONS

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const category =
            filter.getAttribute("data-category");

        filterProducts(category);

    });

});


// CATEGORY CARDS

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.getAttribute("data-category");

        filterProducts(category);

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// CURRENT YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// HEADER SHADOW ON SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});