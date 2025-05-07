//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// loader 
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".loader-bg")) {
    window.addEventListener("load", function () {
      const loader = document.querySelector(".loader-bg");
      loader.style.display = "flex";

      setTimeout(function () {
        loader.style.display = "none";
        document.body.style.visibility = "visible";

        AOS.init({
          once: true,
          duration: 1000,
        });
      }, 3000);
    });
  } else {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }
});


//  pure counter
new PureCounter();

// language 
document.addEventListener('DOMContentLoaded', function () {
  startPage();

  const languageMenus = document.querySelectorAll('.LanguageMenu');
  if (languageMenus.length) {
    languageMenus.forEach(menu => {
      menu.addEventListener('click', function (event) {
        event.preventDefault();

        const selectedOption = localStorage.getItem('Language') === "العربية" ? "English" : "العربية";
        localStorage.setItem('Language', selectedOption);
        CheckLanguage();
      });
    });
  }
});

function startPage() {
  let lang = localStorage.getItem('Language');
  if (!lang) {
    localStorage.setItem('Language', "العربية"); 
  }
  CheckLanguage();
}


function CheckLanguage() {
  const Language = localStorage.getItem('Language');
  const languageTextElements = document.querySelectorAll('.LanguageText');

  if (Language === "English") {
    document.body.style.direction = "ltr";
    document.body.classList.remove("arabicVersion");
    languageTextElements.forEach(el => el.innerText = "ع");

    document.querySelectorAll('.offcanvas').forEach(el => {
      el.classList.remove('offcanvas-end');
      el.classList.add('offcanvas-start');
    });

  } else {
    document.body.style.direction = "rtl";
    document.body.classList.add("arabicVersion");
    languageTextElements.forEach(el => el.innerText = "EN");

    document.querySelectorAll('.offcanvas').forEach(el => {
      el.classList.remove('offcanvas-start');
      el.classList.add('offcanvas-end');
    });
  }

  reinitializeSliders(); // Update sliders when language changes
}


function reinitializeSliders() {
  const isRTL = localStorage.getItem('Language') === "العربية";

  // Destroy existing sliders if initialized
  if ($('.testimonial-slide').hasClass('slick-initialized')) {
    $('.testimonial-slide').slick('unslick');
  }
  if ($('.city-gallery').hasClass('slick-initialized')) {
    $('.city-gallery').slick('unslick');
  }
  const MAX_VISIBLE_DOTS = 4;

// --- testimonial-slider dots handling ---
$('.testimonial-slide').on('init reInit afterChange', function(event, slick, currentSlide){
    const $dots = $('.testimonial-dots li');
    const totalDots = $dots.length;

    if (totalDots <= MAX_VISIBLE_DOTS) {
        $dots.show(); 
        return;
    }

    let start = Math.max(0, slick.currentSlide - Math.floor(MAX_VISIBLE_DOTS / 2));
    if (start + MAX_VISIBLE_DOTS > totalDots) {
        start = totalDots - MAX_VISIBLE_DOTS;
    }
    start = Math.max(start, 0);

    $dots.hide().slice(start, start + MAX_VISIBLE_DOTS).show();
});

// --- city-gallery dots handling ---
$('.city-gallery').on('init reInit afterChange', function(event, slick, currentSlide){
    const $dots = $('.city-gallery .slick-dots li');
    const totalDots = $dots.length;

    if (totalDots <= MAX_VISIBLE_DOTS) {
        $dots.show(); 
        return;
    }

    let start = Math.max(0, slick.currentSlide - Math.floor(MAX_VISIBLE_DOTS / 2));
    if (start + MAX_VISIBLE_DOTS > totalDots) {
        start = totalDots - MAX_VISIBLE_DOTS;
    }
    start = Math.max(start, 0);

    $dots.hide().slice(start, start + MAX_VISIBLE_DOTS).show();
});

  $('.testimonial-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      dots: true,
      rtl: isRTL,
      appendDots: $('.testimonial-dots'),
      prevArrow: $('.testimonial-prev'),
      nextArrow: $('.testimonial-next'),
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });
  

$('.city-gallery').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow: '.Categories-slider-nav .prev', 
  nextArrow: '.Categories-slider-nav .next', 
  rtl: document.body.style.direction === "rtl", 
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
    },
  ]
});
  

}



// tooltip
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// profile offcanvas
document.addEventListener("DOMContentLoaded", function () {
  let offcanvasElement = document.querySelector(".offcanvas");
  let offcanvasLinks = document.querySelectorAll(".offcanvas-body .nav-link");

  offcanvasLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      let targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        event.preventDefault(); 
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
          let sectionPosition = targetSection.offsetTop;

          let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }

          setTimeout(() => {
            window.scrollTo({
              top: sectionPosition,
              behavior: "smooth"
            });
          }, 300); 
        }
      }
    });
  });
});


  //  Initiate glightbox
  const glightbox = GLightbox({
    selector: ".glightbox",
  }); 

