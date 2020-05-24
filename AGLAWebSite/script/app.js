let mainHero = document.querySelector('.main-hero');
let box = document.querySelector('.about-content');
let services = document.querySelector('.services');
let contact = document.querySelector('.contact-row');
let nav = document.querySelector('.navigation');

// ANIMATIONS

mainHero.classList.add('animate__animated', 'animate__fadeIn');
mainHero.style.setProperty('--animate-duration', '3s');

// WAYPOINT ANIMATIONS

let aboutWay = new Waypoint ({
    element: document.querySelector('.about'),
    handler: function() {
        box.classList.add('animate__animated', 'animate__fadeInUp');
    },
    offset: '40%'
});

let servicesWay = new Waypoint ({
    element: document.querySelector('.services-section'),
    handler: function() {
        services.classList.add('animate__animated', 'animate__pulse');
    },
    offset: 200
});

let contactWay = new Waypoint ({
    element: document.querySelector('.contact-section'),
    handler: function() {
        contact.classList.add('animate__animated', 'animate__fadeIn');
    },
    offset: 550
});

let navWay = new Waypoint ({
    element: document.querySelector('.about'),
    handler: function(direction) {
        if(direction == "down") {
            nav.style.background = "rgba(139, 35, 35, 0.97)";
        } else {
            nav.style.background = "#8b23239f";
        }
    }
});

// NAVIGATION SMALlER

window.onscroll = function() { scrollingNav() };

function scrollingNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.height = "70px";
    } else {
        nav.style.height = "120px";
    }
}

