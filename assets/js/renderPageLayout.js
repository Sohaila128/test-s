// Home Header 
class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- Navbar/Header -->
    <header  class="position-absolute w-100" style="z-index: 10;">
      <nav class="navbar navbar-expand-lg py-2 bg-transparent mt-md-1">
        <div class="container d-flex align-items-lg-center justify-content-between">
          <!-- Logo Left -->
          <a class="navbar-brand" href="index.html">
            <img src="assets/images/navbar-logo.svg" alt="logo" title="Company Logo">
          </a>
    
          <!-- Toggle for mobile -->
          <button class="navbar-toggler border-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <!-- Offcanvas for all screens -->
          <div class="offcanvas offcanvas-start  text-white border-0" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header d-lg-none">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
    
            <div class="offcanvas-body w-100">
              <!-- Center Nav Links -->
              <div class="navbar-nav mx-lg-auto d-flex gap-md-3">
                <a class="nav-link text-white fw-500 nav-hover-link" href="index.html">  الصفحة الرئيسية  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="about.html"> من نحن  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="services.html"> خدماتنا  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="visas.html"> التأشيرات  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="contact.html"> تواصل بنا  </a>
                  <div class="nav-link  fw-400 nav-hover-link fs-sm d-lg-none d-flex">
            <div class="LanguageMenu" role="button" onclick="changeLanguage()">
              <span class="fs-arbic lan LanguageText" id="LanguageText">En</span>
             <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                 </svg>
              </span>
           </div>

      </div>
              </div>
    
              <!-- Language and Button (Right) -->
            </div>
          </div>
          <div class="d-flex gap-3 align-items-center d-none d-lg-flex mt-3 mt-lg-0">
            <div class="text-white LanguageMenu" role="button">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <path d="M3 12H8M3 12C3 16.97 7.03 21 12 21M3 12C3 7.03 7.03 3 12 3M8 12H16M8 12C8 16.97 9.79 21 12 21M8 12C8 7.03 9.79 3 12 3M16 12H21M16 12C16 7.03 14.21 3 12 3M16 12C16 16.97 14.21 21 12 21M21 12C21 7.03 16.97 3 12 3M21 12C21 16.97 16.97 21 12 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="text-white fs-arbic lan LanguageText" id="LanguageText">english</span>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define('custom-header', CustomHeader);


// Header Two
class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- Navbar/Header -->
    <header  class=" w-100">
      <nav class="navbar navbar-expand-lg py-2 bg-primary">
        <div class="container d-flex align-items-lg-center justify-content-between">
          <!-- Logo Left -->
          <a class="navbar-brand mt-2" href="index.html">
            <img src="assets/images/navbar-logo.svg" alt="logo" title="Company Logo">
          </a>
    
          <!-- Toggle for mobile -->
          <button class="navbar-toggler border-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <!-- Offcanvas for all screens -->
          <div class="offcanvas offcanvas-start  text-white border-0" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header d-lg-none">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
    
            <div class="offcanvas-body w-100">
              <!-- Center Nav Links -->
              <div class="navbar-nav mx-lg-auto d-flex gap-md-3">
                <a class="nav-link text-white fw-500 nav-hover-link" href="index.html">  الصفحة الرئيسية  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="about.html"> من نحن  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="services.html"> خدماتنا  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="visas.html"> التأشيرات  </a>
                <a class="nav-link text-white fw-500 nav-hover-link" href="contact.html"> تواصل بنا  </a>
                  <div class="nav-link  fw-400 nav-hover-link fs-sm d-lg-none d-flex">
            <div class="LanguageMenu" role="button" onclick="changeLanguage()">
              <span class="fs-arbic lan LanguageText" id="LanguageText">En</span>
             <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                 </svg>
              </span>
           </div>

      </div>
              </div>
    
              <!-- Language and Button (Right) -->
            </div>
          </div>
          <div class="d-flex gap-3 align-items-center d-none d-lg-flex mt-3 mt-lg-0">
            <div class="text-white LanguageMenu" role="button">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <path d="M3 12H8M3 12C3 16.97 7.03 21 12 21M3 12C3 7.03 7.03 3 12 3M8 12H16M8 12C8 16.97 9.79 21 12 21M8 12C8 7.03 9.79 3 12 3M16 12H21M16 12C16 7.03 14.21 3 12 3M16 12C16 16.97 14.21 21 12 21M21 12C21 7.03 16.97 3 12 3M21 12C21 16.97 16.97 21 12 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="text-white fs-arbic lan LanguageText" id="LanguageText">english</span>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define('main-header', MainHeader);

// CustomPopup
class CustomPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md-custom">
    <div class="modal-content border-0 overflow-auto">
      <form action="">
        <div class="modal-header border-0 d-flex align-items-start">
          <button type="button" class="btn-close fs-6 btn-sm ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body px-md-6 px-4">
          <div class="mb-3">
            <label for="username" class="form-label">اسم المستخدم</label>
            <input type="text" class="form-control" id="username" placeholder="اكتب اسمك" required>
          </div>
      
          <div class="mb-3">
            <label for="phone" class="form-label">رقم الهاتف</label>
            <input type="phone" class="form-control phone" id="phone" placeholder="اكتب رقم هاتفك" required>
          </div>
      
          <div class="mb-3">
            <label for="email" class="form-label">البريد الالكتروني</label>
            <input type="email" class="form-control" id="email" placeholder="اكتب بريدك الالكتروني" required>
          </div>
      
          <p class="mt-4 text-third fs-14">
            للاستفسار علي خدمة شركة سفير، يمكن لفريقنا التواصل معك لجمع البيانات اللازمة وإتمام الإجراءات، أو يمكنك متابعة تقديم الطلب بنفسك عبر الإنترنت بسهولة.
          </p>
        </div>
        <div class="modal-footer position-relative mt-4 px-md-6 d-flex justify-content-start border-0 align-items-start">
          <button type="submit" class="btn btn-primary-two px-7">ارسال</button>
          <img src="assets/images/plane vector-2.png" alt="plane" class="position-absolute plan-popup" >
      
        </div>
      </form>
      
    </div>
  </div>
</div>

    `;
  }
}
customElements.define('custom-popup', CustomPopup);




// Footer  
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-5 bg-primary">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-12 col-lg-5">
            <a href="index.html">
            <div class="m-0 p-0">
              <img src="assets/images/logo.png" class="img-fluid" alt="" width="">
            </div>
            </a>
            <p class="text-white">
              نحن هنا لنكون دليلك لعالم من التجارب الرائعة. نقدم خدمات متكاملة تشمل حجوزات الطيران والفنادق، البرامج السياحية، وخدمات العمرة، بجودة وموثوقية تستحقها.
             </p>
              
          </div>
        
          <div class="col-lg-7">
            <div class="row">
              <div class="col-md-12 col-lg-4 mt-5 mt-lg-0">
                <div class="mb-2">
                  <h5 class="text-white fw-700">  خريطة الموقع  </h5>
              </div>
                <ul class="list-unstyled m-0 p-0">
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="index.html">  الصفحة الرئيسية  </a></li>
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="about.html">  من نحن  </a></li>
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="services.html"> خدماتنا  </a></li>
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="visas.html"> التأشيرات  </a></li>
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="contact.html"> تواصل بنا </a></li>
                </ul>
              </div>
              <div class="col-md-12 col-lg-3 mt-5 mt-lg-0">
                <div class="mb-2">
                  <h5 class="text-white fw-700">الشروط</h5>
              </div>
                <ul class="list-unstyled m-0 p-0">
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="terms-conditions.html">  الشروط والاحكام  </a></li>
                  <li class="text-white mb-2 link-hover"><a class="text-white text-decoration-none link-hover fw-400 mb-2" href="privacy-policy.html">  سياسة الخصوصية </a></li>
                </ul>
              </div>
    
              <div class="col-md-12 col-lg-5 mt-5 mt-lg-0">
                <div class="mb-4">
                  <h5 class="text-white fw-700"> تواصل بنا  </h5>
                </div>
                <div class="">
                  <ul class="list-unstyled m-0 p-0">
                    <li class="d-flex gap-2 mb-2">
                      <a class="text-decoration-none text-white mb-1" href="" dir="ltr">(+966)  544448095</a>
                    </li>
                    <li class="d-flex gap-2 mb-2">
                      <a class="text-decoration-none text-white" href="" dir="ltr">(+966)  547449945</a>
                    </li>
                  
                  </ul>
                  <div class="d-flex align-items-center mb-4 mb-md-0">
                    <ul class="list-unstyled mb-0 mt-0 m-0 p-0 gap-3 mt-4 d-flex flex-wrap">
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                          <i class="fa-brands fa-snapchat text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                          <i class="fa-brands fa-facebook-f text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                          <i class="fa-brands fa-instagram text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                          <i class="fa-brands fa-youtube text-white fs-5 border social-icons rounded-circle rounded-2 link-primary"></i>
                        </a>
                      </li>
                      
                    
                    </ul>
                  </div>
              </div>
              
        
              </div>
            </div>
          </div>

        
        </div> 
    
        <div class="text-white" style="border:1px solid #f1f1f1 !important;"> 
        </div> 
        
      </div>
      <div class="container">
        <div class="bg-primary d-flex  justify-content-center text-center mt-3 mb-0">
          <h6 class="text-white fw-normal fw-400 mt-3 mb-0" dir="ltr">  
            © 2025 Safir. All rights reserved. Powerd  by  <a href="" class="text-white text-decoration-none fw-700">Emcan</a> 
          </h6>
        </div>
      
      </div>
    </footer>
     `;
  }
}
customElements.define('custom-footer', CustomFooter);

