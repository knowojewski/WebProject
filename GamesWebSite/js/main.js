document.addEventListener('DOMContentLoaded', function() {
// HAMBURGER MENU CLOSE 

    window.onload = function() {
        document.addEventListener('click',function(event){
            let click = event.target;
            let open = document.querySelector(".navbar-collapse");
            if(open.classList.contains("show") === true && !click.classList.contains("navbar-toggler")){
                document.querySelector(".navbar-toggler").click();
            }
        });
    };


    // ANIMATE FUNCTION

    function animate(item, animation, place) {
        new Waypoint({
            element: item,
            handler: function() {
                this.element.classList.add('animate__animated', `${animation}`);
            },
            offset: place
        }); 
    }


    // ABOUT US SECTION ANIMATION

    let aboutUsBoxes = document.getElementsByClassName("aboutus-hover")

    for(let i = 0; i < aboutUsBoxes.length; i++) {
        animate(aboutUsBoxes[i], 'animate__bounceIn', '70%');
    }

    // ABOUT US IMG SECTION ANIMATION

    let aboutUsImgBoxes = document.getElementsByClassName("aboutus-img-box");

    for(let i = 0; i < aboutUsImgBoxes.length; i++) {
        animate(aboutUsImgBoxes[i], 'animate__bounceInUp', '70%');
    }


    // PRICES SECTION ANIMATION

    let priceBoxes = document.getElementsByClassName("prices-box");

    for(let i = 0; i < priceBoxes.length; i++) {
        animate(priceBoxes[i], 'animate__bounceInUp', '50%');
    }


    // ACHIVEMENTS SECTION ANIMATION

    let achivBoxes = document.getElementsByClassName("achiv-box");

    for(let i = 0; i < achivBoxes.length; i++) {
        animate(achivBoxes[i], 'animate__bounceIn', '70%');
    }


    // SLICK.JS

    $(document).ready(function(){
        $('.team-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },

                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },

                {
                    breakpoint: 2560,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    });

});