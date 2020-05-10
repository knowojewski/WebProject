var location;
var $;
var document;

$(document).ready(function() {


    /* --- Sticky navigation --- */


    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {

        offset: '60px;'
    });

    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });



    /* --- Navigation scroll --- */


        $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });

    /* --- Navigation scroll --- */

    $('.js--wp-1').waypoint(function() {
       $('.js--wp-1').addClass('animate__fadeIn');
       $('.js--wp-1').addClass('animate__animated');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function() {
       $('.js--wp-2').addClass('animate__fadeInUp');
       $('.js--wp-2').addClass('animate__animated');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function() {
       $('.js--wp-3').addClass('animate__fadeIn');
       $('.js--wp-3').addClass('animate__animated');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function() {
       $('.js--wp-4').addClass('animate__pulse');
       $('.js--wp-4').addClass('animate__animated');
    }, {
        offset: '50%'
    });



});












