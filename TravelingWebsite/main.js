// ------ RELLAX PARALLAX EFFECT
let rellax = new Rellax('.rellax');


// ------ VARIABLES
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-button');
const logo = document.querySelector('.nav-logo');
const menu = document.querySelector('.menu');


// ------ EVENTS
hamburger.addEventListener('click', showMenu);
window.addEventListener('scroll', smallerNavigation);


// ------ FUNCTIONS
function showMenu() {
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
}

function smallerNavigation() {
    if(window.scrollY > 300) {
        nav.style.height = '100px';
        logo.classList.add('smaller');
        hamburger.classList.add('smaller');
    } else {
        nav.style.height = '200px';
        logo.classList.remove('smaller');
        hamburger.classList.remove('smaller');
    }
}
