$(document).ready(function(){
    $(".features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    },{offset: '60px'});
    
    $(".js-scroll-to-plans").click(function(){
        $("html , body").animate({scrollTop: $(".section-plans").offset().top}, 1000);
    });
    $(".js-scroll-to-start").click(function(){
        $("html , body").animate({scrollTop: $(".features").offset().top}, 500);
    });
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
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
              };
            });
          }
        }
      });
    
    $(".js-wp-1").waypoint(function(){
        $(".js-wp-1").addClass("animated fadeIn");
    }, {offset: "50%"});
    
    $(".js-wp-2").waypoint(function(){
        $(".js-wp-2").addClass("animated bounceInUp");
    }, {offset: "50%"});
    
    $(".js-wp-3").waypoint(function(){
        $(".js-wp-3").addClass("animated fadeIn");
    }, {offset: "50%"});
    
    $(".js-wp-4").waypoint(function(){
        $(".js-wp-4").addClass("animated shake");
    }, {offset: "50%"});
    
    $(".mobile-nav-icon").click(function(){
        var nav=$(".main-nav");
        var icon=$(".mobile-nav-icon i");
        
        icon.toggleClass("ion-navicon-round");
        icon.toggleClass("ion-close-round");
        
        nav.slideToggle(200);
        
        
    });
});