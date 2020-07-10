// ------ RELLAX PARALLAX EFFECT
let rellax = new Rellax('.rellax');


// ------ VARIABLES
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-button');
const logo = document.querySelector('.nav-logo');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const travelImages = document.querySelectorAll('.traveling .images-container img');
const modalTravelGallery = document.querySelector('.traveling .modal-gallery');
const links = [...menuLinks, logo];
const travelImgsCopy = [...travelImages];
console.log(travelImages, travelImgsCopy)

// ------ EVENTS
hamburger.addEventListener('click', showMenu);
window.addEventListener('scroll', smallerNavigation);
links.forEach(link => { link.addEventListener('click', closeMenuAfterLinkClick) });
travelImgsCopy.map(image => { image.addEventListener('click', openTravelingModalGallery) });
modalTravelGallery.addEventListener('click', closeModal);


// ------ FUNCTIONS
function showMenu() {
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');

    if(menu.classList.contains('show')) {
        nav.style.background = 'transparent';
        body.style.overflow = 'hidden';
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

function openTravelingModalGallery(event) {
    const activeImage = document.querySelector('.traveling .modal-gallery .active')
    const backImages = document.querySelector('.traveling .modal-gallery .back')
    const modalImages = [];
    activeImage.innerHTML = '';
    backImages.innerHTML = '';
    modalTravelGallery.classList.add('show');

    for(let i = 1; i <= travelImages.length; i++) {
        const img = document.createElement('img');
        img.setAttribute('src', `./images/traveling/traveling-foto${i}-large.jpg`);
        img.setAttribute('alt', 'Image');
        img.setAttribute('id', i);

        modalImages.push(img);
    }

    modalImages.forEach(image => {
        if(image.id !== event.target.id) {
            const div = document.createElement('div');
            const shadow = document.createElement('shadow');
            div.className = 'image';
            shadow.className = 'shadow';

            div.appendChild(shadow);
            div.appendChild(image);

            div.addEventListener('click', openTravelingModalGallery);

            backImages.appendChild(div);
        } else {
            activeImage.appendChild(image);
        }
    });
}

function closeModal(event) {
    if(event.target == modalTravelGallery) {
        modalTravelGallery.classList.remove('show');
    }
}
