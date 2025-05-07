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
            <img src="assets/images/navbar-logo.svg" alt="logo" title="Safir Logo">
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
            <img src="assets/images/navbar-logo.svg" alt="logo" title="Safir Logo">
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
            <div class="mb-3 d-block d-md-none">
              <img src="assets/images/logo-white.svg" class="img-fluid" alt="" width="">
            </div>
            <div class="m-0 p-0 d-none d-md-block">
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
                        <span class="text-white fs-5 border social-icons rounded-circle rounded-2 link-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7.00801 7L6.99902 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                      </svg></span>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                            <span class="text-white fs-5 border social-icons rounded-circle rounded-2 link-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM16 8V8.75V8ZM11.25 21.5C11.25 21.9142 11.5858 22.25 12 22.25C12.4142 22.25 12.75 21.9142 12.75 21.5H11.25ZM10 13.25C9.58579 13.25 9.25 13.5858 9.25 14C9.25 14.4142 9.58579 14.75 10 14.75V13.25ZM15 14.75C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25V14.75ZM17 8V7.25H16V8V8.75H17V8ZM12 12H11.25V21.5H12H12.75V12H12ZM16 8V7.25C15.0784 7.25 14.3117 7.24841 13.7055 7.32991C13.0777 7.41432 12.5109 7.59999 12.0555 8.05546L12.5858 8.58579L13.1161 9.11612C13.2464 8.9858 13.4439 8.87858 13.9054 8.81654C14.3884 8.75159 15.036 8.75 16 8.75V8ZM12 12H12.75C12.75 11.036 12.7516 10.3884 12.8165 9.90539C12.8786 9.44393 12.9858 9.24643 13.1161 9.11612L12.5858 8.58579L12.0555 8.05546C11.6 8.51093 11.4143 9.07773 11.3299 9.70552C11.2484 10.3117 11.25 11.0784 11.25 12H12ZM10 14V14.75H15V14V13.25H10V14Z" fill="white"/>
                        </svg>
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                          <span class="text-white fs-5 border social-icons rounded-circle rounded-2 link-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <path d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                  <path d="M15.5 11C15.5 13.4853 13.4853 15.5 11 15.5C8.51472 15.5 6.5 13.4853 6.5 11C6.5 8.51472 8.51472 6.5 11 6.5C13.4853 6.5 15.5 8.51472 15.5 11Z" stroke="white" stroke-width="1.5"/>
                                  <path d="M16.5078 5.5L16.4988 5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="" class="text-decoration-none" target="_blank">
                            <span class="text-white fs-5 border social-icons rounded-circle rounded-2 link-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2.50011 12C2.50011 7.52166 2.50011 5.28249 3.89135 3.89124C5.28259 2.5 7.52176 2.5 12.0001 2.5C16.4784 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4784 21.5 12.0001 21.5C7.52176 21.5 5.28259 21.5 3.89135 20.1088C2.50011 18.7175 2.50011 16.4783 2.50011 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.00011 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.77788 7H7.00011L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </span>
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

