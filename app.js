const nav_items = document.querySelector("#nav-items");
const nav_logo = document.querySelector(".nav-logo-container");
const body = document.getElementById("body");
nav_logo.addEventListener("click",() => {
    nav_items.classList.toggle("nav-show");
})

if (window.innerWidth > 500) {
    nav_items.classList.remove("nav-show");
}
