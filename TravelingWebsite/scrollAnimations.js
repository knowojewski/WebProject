// --------- SELECTORS


const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const headingP = document.querySelector('.heading-box p');
const headingLine = document.querySelector('.heading-box .line');
const headingButtons = document.querySelector('.heading-box .buttons');
const sectionText = document.querySelectorAll('.section-text');
const aboutBox = document.querySelectorAll('.about-box');
const travelingImage = document.querySelectorAll('.traveling .image-box');
const natureImages = document.querySelectorAll('.nature .grid-item');
const culturesImgs = document.querySelectorAll('.cultures-gallery .gallery-image');
const bgText = document.querySelectorAll('.bg-text');
const joinusH3 = document.querySelectorAll('.joinus h3');
const joinusIcons = document.querySelectorAll('.joinus-box div a');
const joinusForm = document.querySelector('.joinus form');


// --------- EVENT LISTENERS & FUNCTION CALLINGS


waypoint(h1, 1, 'fadeInDown', 0);
waypoint(headingP, 1, 'fadeIn', 100);
waypoint(headingLine, 1, 'fadeIn', 500);
waypoint(headingButtons, 1, 'fadeIn', 800);

window.document.addEventListener('scroll', function() {
    smallerNavigation();

    h2.forEach( item => {
        waypoint(item, 0.8, 'fadeInDown', 0);
    });

    sectionText.forEach( item => {
        waypoint(item, 0.8, 'fadeIn', 0);
    });

    natureImages.forEach( item => {
        waypoint(item, 0.7, 'fadeIn', Math.floor(Math.random()*1000));
    });

    culturesImgs.forEach( item => {
        waypoint(item, 0.7, 'fadeInLeft', Math.floor(Math.random()*1000));
    });

    joinusH3.forEach( item => {
        waypoint(item, 0.8, 'fadeIn', 000);
    });

    waypoint(aboutBox[0], 0.7, 'fadeInRight', 0);
    waypoint(aboutBox[1], 0.7, 'fadeInLeft', 0);
    waypoint(aboutBox[2], 0.7, 'fadeInRight', 0);
    waypoint(travelingImage[0], 0.5, 'fadeInRight', 0);
    waypoint(travelingImage[1], 0.5, 'fadeInRight', 200);
    waypoint(travelingImage[2], 0.5, 'fadeInRight', 400);
    waypoint(joinusIcons[0], 0.7, 'fadeInLeft', 0);
    waypoint(joinusIcons[1], 0.7, 'fadeInLeft', 200);
    waypoint(joinusIcons[2], 0.7, 'fadeInLeft', 400);
    waypoint(joinusForm, 0.6, 'pulse', 0);
});


// --------- SCROLL ANIMATIONS FUNCTION


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

function waypoint(element, offset, animation, delay) {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * offset;

    if(elementPosition < screenPosition) {
        setTimeout(function() {
            element.classList.add(`${animation}`);
        }, delay);
    }
}
