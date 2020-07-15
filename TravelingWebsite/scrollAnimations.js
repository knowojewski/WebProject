// --------- SELECTORS


const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const headingP = document.querySelector('.heading-box p');
const headingLine = document.querySelector('.heading-box .line');
const headingButtons = document.querySelector('.heading-box .buttons');


// --------- EVENT LISTENERS & FUNCTION CALLINGS


waypoint(h1, 1, 'fadeInDown', 0);
waypoint(headingP, 1, 'fadeIn', 100);
waypoint(headingLine, 1, 'fadeIn', 500);
waypoint(headingButtons, 1, 'fadeIn', 800);
window.document.addEventListener('scroll', function() {
    h2.forEach( item => {
        waypoint(item, 0.8, 'fadeInDown', 0);
    } )
});


// --------- SCROLL ANIMATIONS FUNCTION


function waypoint(element, offset, animation, delay) {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * offset;

    if(elementPosition < screenPosition) {
        setTimeout(function() {
            element.classList.add(`${animation}`);
        }, delay);
    }
}