/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

/*==================== ACCORDION FAQ ====================*/
const faqContent = document.getElementsByClassName('faq__content'),
      faqHeader = document.querySelectorAll('.faq__header')

function toggleFaq(){
  let itemClass = this.parentNode.className

  for(i = 0; i < faqContent.length; i++){
    faqContent[i].className = 'faq__content faq__close'
  }
  if(itemClass === 'faq__content faq__close'){
    this.parentNode.className = 'faq__content faq__open'
  }
}

faqHeader.forEach((el) =>{
  el.addEventListener('click', toggleFaq)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
}) 

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})

/*==================== SERVICES ====================*/

const servicesContent = document.getElementsByClassName('services__content'),
      servicesHeader = document.querySelectorAll('.services__header')

function toggleServices(){
  let itemClass = this.parentNode.className

  for(i = 0; i < servicesContent.length; i++){
    servicesContent[i].className = 'services__content services__close'
  }
  if(itemClass === 'services__content services__close'){
    this.parentNode.className = 'services__content services__open'
  }
}

servicesHeader.forEach((el) =>{
  el.addEventListener('click', toggleServices)
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    540:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
    // 1440:{
    //   slidesPerView: 4,
    // }
  }
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  cssMode: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
    }
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== AUTO REDIRECT ====================*/

function autoRedirect() {
  var idleDurationSecs = 10;
  var redirectUrl = 'http://127.0.0.1:5500/';  // Redirect idle users to this URL
  var idleTimeout;

  var resetIdleTimeout = function() {
    if(idleTimeout) clearTimeout(idleTimeout);

    idleTimeout = setTimeout(function(){
      location.href = redirectUrl
    }, idleDurationSecs * 1000);
  };

  resetIdleTimeout();

  ['click', 'touchstart', 'mousemove', 'touchmove', 'scroll'].forEach(function(evt) {
    document.addEventListener(evt, resetIdleTimeout, false)
  });
}

