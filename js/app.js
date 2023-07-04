const header = document.querySelector("header");

window.onscroll = () => {
    header.classList.toggle("sticky", window.scrollY > 80);
};

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};
