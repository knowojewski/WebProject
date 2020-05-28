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

// ABOUT US SECTION ANIMATION

let aboutUsBoxes = document.getElementsByClassName("aboutus-hover")

for(let i = 0; i < aboutUsBoxes.length; i++) {
    new Waypoint({
        element: aboutUsBoxes[i],
        handler: function() {
            aboutUsBoxes[i].classList.add('animate__animated', 'animate__bounceIn')
        },
        offset: '70%' 
    }); 
}

// ABOUT US IMG SECTION ANIMATION

let aboutUsImgBoxes = document.getElementsByClassName("aboutus-img-box")


for(let i = 0; i < aboutUsImgBoxes.length; i++) {
    new Waypoint({
        element: aboutUsImgBoxes[i],
        handler: function() {
            this.element.classList.add('animate__animated', 'animate__bounceInUp')
        },
        offset: '70%'
    }); 
}