let mainHero = document.querySelector('.main-hero');
let box = document.querySelector('.about-content');
let services = document.querySelector('.services');
let contact = document.querySelector('.contact-row');
let nav = document.querySelector('.navigation');
let menuIcon = document.querySelector('.nav-hamburger');
let navList = document.querySelector('.nav-list');
const modal = document.querySelector('.modal');
const galleryPreview = document.querySelectorAll('.grid-container img');
const galleryFull = document.querySelector('.modal .full-img');
const galleryBtn = document.querySelector('.close-icon');

galleryPreview.forEach(image => { image.addEventListener('click', openModal); });
modal.addEventListener('click', closeModal);
galleryBtn.addEventListener('click', closeModal);


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
        menuIcon.style.width = "70px";
    } else {
        nav.style.height = "120px";
        menuIcon.style.width = "120px";
    }
}

// MOBILE NAV

menuIcon.addEventListener('click', displayMenu);

function displayMenu() {
    if (navList.className === 'nav-list') {
        navList.className += ' mobile';
    } else {
        navList.className = 'nav-list';
    }

    console.log(menuIcon.innerHTML);

    if (menuIcon.innerHTML == '<ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon>') {
        menuIcon.innerHTML = '<ion-icon name="menu" role="img" class="md hydrated" aria-label="menu"></ion-icon>';
    } else {
        menuIcon.innerHTML = '<ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon>';
    }

    
}

// MODAL GALLERY

function closeModal(event) {
    if(event.target !== galleryFull) {
        modal.classList.remove('show');
    }
}

function openModal(e) {
    modal.classList.add('show');
    const fullPath = e.target.getAttribute('data-full');

    if(e.target.classList.contains('landscape')) {
        galleryFull.classList.add('landscape');
        console.log(galleryFull.classList)
    } else {
        galleryFull.classList.remove('landscape');
        console.log(galleryFull.classList)
    }

    galleryFull.src = `./images/large/${fullPath}`;
}