// import './styles/index.css';


document.addEventListener("DOMContentLoaded", function() {

  window.onscroll = function() {

    let scrolled = document.documentElement.scrollTop;

    
    let pageWrapper = document.querySelector('.wrapper');

    let pageElements = pageWrapper.querySelectorAll('.page-header, .global-nav__item, .global-nav__btn, .global-nav__link, .global-nav__submenu, .global-nav__sublink, .logo, .header-btn, .slider-btn__call');

    if (scrolled > 100 ){
      pageElements.forEach(items => {
        items.classList.add('scrolled');
      });
    } else {
      pageElements.forEach(items => {
        items.classList.remove('scrolled');
      });
    }
  }
  
  window.onload = function () {
    let slides = document.querySelectorAll('.slider-item');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.add('hide');
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].classList.remove('hide');
    }

    setInterval(nextSlide, 7000);
  }
});