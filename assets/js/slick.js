
$(document).ready(function() {
  function initSlick() {
      var isRTL = $('html').attr('dir') === 'rtl'; 

      $('.services-slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,  
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,  
        autoplaySpeed: 2000, 
        arrows: false,
        rtl: isRTL, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    });

    // تهيئة سلايدر الشعارات (لوجو الشركات)
    $('.logos-slider').slick({
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        rtl: isRTL,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  }

  initSlick();

  let currentDir = $('html').attr('dir');

  setInterval(function() {
      let newDir = $('html').attr('dir');
      if (newDir !== currentDir) {
          currentDir = newDir;
          $('.services-slider, .logos-slider').slick('unslick'); 
          initSlick(); 
      }
  }, 500); 
});
