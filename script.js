const handleScroll = () => {
  $('a[href*="#"]').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&  location.hostname == this.hostname) {
          let target = $(this.hash);
          console.log(target)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
        // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
          // Callback after animation
          // Must change focus!
                  let $target = $(target);
                  $target.focus();

                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  }

                  else {
                      $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });

          }
      }
  });
};


const watchForScroll = () => {
    $(window).on('scroll', event => {
        let wn = $(window).scrollTop();

        if (wn > 50) {

            $(".navbar-fixed-top").css("background-color", "black");
            $(".navbar-fixed-top").css("border-bottom", "1px solid white")
        }

        else if (wn <= 50 && !$(".navbar-collapse").hasClass("in")) {
            $(".navbar-fixed-top").css("background-color", "transparent")
            $(".navbar-fixed-top").css("border-bottom", "none")
        }
    })
};

const watchForCollapsedNav = () => {
    $('.navbar-toggle').on('click', event => {
        if (!$(".navbar-collapse").hasClass("in")) {
            $(".navbar-fixed-top").css("background-color", "black");
            $(".navbar-fixed-top").css("border-bottom", "1px solid white")
        }
    });
};


const showLargeProject = () => {
    $('.portfolio-box-small').on('click', event => {
        event.preventDefault();

        const correctAnsestor = $(event.target).closest('.portfolio-box-small');
        const projName = correctAnsestor.attr('id');

        $('.portfolio-box-small').fadeOut('fast');
        $(`.${projName}`).fadeIn('slow');
    });
};

const hideLargeProj = () => {
    $('.upward-arrow').on('click', event => {
        $('.portfolio-box').fadeOut('fast')
        $('.portfolio-box-small').fadeIn('slow')
    })
}

const init = () => {
    watchForScroll();
    handleScroll();
    watchForCollapsedNav();
    showLargeProject();
    hideLargeProj();

}

$(init);
