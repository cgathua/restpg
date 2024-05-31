
import hamburgerMenu from "./hamburgermenu";
import header from "./header";
import homePage from "./homepage";
import menu from "./menu";
import drinks from "./drinks";
import lastSection from "./lastsection";
import contactPage from "./contact";
import footer from "./footer";


header();
homePage();
menu();
drinks();
lastSection();
footer();

// home page event listener
const homeSection = document.getElementById('home');
homeSection.addEventListener('click', function () {
    const content = document.getElementById('content');
    content.textContent = "";
    homePage();
});

// menu page event listener
const menuSection = document.getElementById('menu');
menuSection.addEventListener('click', function () {
    const content = document.getElementById('content');
    content.textContent = "";
    menu();
    footer();
});

// drinks page event listener
const drinksSection = document.getElementById('drinks');
drinksSection.addEventListener('click', function () {
    const content = document.getElementById('content');
    content.textContent = "";
    drinks();
    footer();
});

// last section event listener
const callToAction = document.getElementById('cta');
callToAction.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.textContent = "";
    lastSection();
});

// contact page event listener
const contact = document.getElementById('contact');
contact.addEventListener('click', function () {
    const content = document.getElementById('content');
    content.textContent = "";
    contactPage();
});

// invoke mobile menu
hamburgerMenu();

// ask user if they want to reload page
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
});