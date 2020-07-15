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
const natureModal = document.querySelector('.nature-modal');
const naturePreview = document.querySelectorAll('.grid-container img');
const natureFull = document.querySelector('.nature-modal .full-img');
const natureDesc = document.querySelector('.nature-modal p');
const culturesImages = document.querySelectorAll('.cultures-gallery img');
const culturesModal = document.querySelector('.cultures-modal');
const culturesModalImages = document.querySelectorAll('.cultures-modal .slide img');
const culturesSlideBox = document.querySelector('.slides-box');
const culturesPreviewImages = document.querySelectorAll('.cultures-modal .preview-box img');
const nextSlide = document.querySelector('.next-slide');
const previousSlide = document.querySelector('.previous-slide');
const caption = document.querySelector('.caption');


// ------ EVENTS
hamburger.addEventListener('click', showMenu);
window.addEventListener('scroll', smallerNavigation);
links.forEach(link => { link.addEventListener('click', closeMenuAfterLinkClick) });
travelImgsCopy.map(image => { image.addEventListener('click', openTravelingModalGallery) });
modalTravelGallery.addEventListener('click', closeModal);
naturePreview.forEach(image => { image.addEventListener('click', openNatureModal); });
natureModal.addEventListener('click', closeModal);
culturesImages.forEach(image => { image.addEventListener('click', openCulturesGallery) });
window.addEventListener('click', closeModal);
culturesPreviewImages.forEach( image => { image.addEventListener('click', openCulturesGallery); });
nextSlide.addEventListener('click', () => { culturesChangeSlide(1) });
previousSlide.addEventListener('click', () => { culturesChangeSlide(-1) });


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
    if(event.target == modalTravelGallery ) {
        modalTravelGallery.classList.remove('show');
    } else if(event.target == natureModal) {
        natureModal.classList.remove('show');
    } else if(event.target == culturesModal || event.target == culturesSlideBox) {
        culturesModal.classList.remove('show');
    }
}

function openNatureModal(e) {
    natureModal.classList.add('show');
    const fullPath = e.target.getAttribute('data-full');
    const description = e.target.getAttribute('alt');

    natureFull.src = `./images/nature/full/${fullPath}`;
    natureFull.alt = description;
    natureDesc.innerText = description;
}

let index = 0;

function openCulturesGallery(event) {
    const image = event.target;
    index = parseInt(image.dataset.index);
    culturesModal.classList.add('show');
    showSlide(index);
}

function culturesChangeSlide(num) {
    index = index + num;
    showSlide(index);
}

function showSlide(i) {
    culturesModalImages.forEach( image => { image.parentElement.style.display = "none" });
    culturesPreviewImages.forEach( image => { image.classList.remove('active'); })
    if(i > 5) { 
        index = 1; 
    } else if(i < 1) {
        index = 5;
    }
    culturesModalImages[index - 1].parentElement.style.display = 'block';
    caption.innerText = culturesModalImages[index - 1].alt;
    culturesPreviewImages[index - 1].classList.add('active');
}
