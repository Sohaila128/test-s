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
  if ($('.brands-slider').hasClass('slick-initialized')) {
    $('.brands-slider').slick('unslick');
  }
  if ($('.services-slider').hasClass('slick-initialized')) {
    $('.services-slider').slick('unslick');
  }
  if ($('.gallery-slider').hasClass('slick-initialized')) {
    $('.gallery-slider').slick('unslick');
  }
  if ($('.clients-slider').hasClass('slick-initialized')) {
    $('.clients-slider').slick('unslick');
  }

  // Reinitialize brands slider
  $('.brands-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.Categories-slider-nav .prev',
    nextArrow: '.Categories-slider-nav .next',
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Reinitialize services slider
  $('.services-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // Reinitialize clients-slider
  $('.clients-slider').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Reinitialize gallery slider
  $('.gallery-slider').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
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

