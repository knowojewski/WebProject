// ------ RELLAX PARALLAX EFFECT
let rellax = new Rellax('.rellax');


// ------ VARIABLES
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-button');
const logo = document.querySelector('.nav-logo');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const links = [...menuLinks, logo];


// ------ EVENTS
hamburger.addEventListener('click', showMenu);
window.addEventListener('scroll', smallerNavigation);
links.forEach(link => { link.addEventListener('click', closeMenuAfterLinkClick) });


// ------ FUNCTIONS
function showMenu() {
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');

    if(menu.classList.contains('show')) {
        // body.style.overflow = 'hidden';
        nav.style.background = 'transparent';
    } else {
        body.style.overflow = 'visible';
        nav.style.background = '#01639c56';
    }
}

function smallerNavigation() {
    if(window.scrollY > 300) {
        nav.style.height = '100px';
        nav.style.background = '#01639c56';
        logo.classList.add('smaller');
        hamburger.classList.add('smaller');
    } else {
        nav.style.height = '200px';
        nav.style.background = 'transparent';
        logo.classList.remove('smaller');
        hamburger.classList.remove('smaller');
    }
}

function closeMenuAfterLinkClick() {
    menu.classList.remove('show');
    hamburger.classList.remove('open');
    body.style.overflow = 'visible';
}
