import './styles/index.css';


document.addEventListener("DOMContentLoaded", function() {

  window.onscroll = function() {

    let scrolled = document.documentElement.scrollTop;

    let pageWrapper = document.querySelector('.wrapper');
    let nav = pageWrapper.querySelector('.global-nav');
    let navBtns = pageWrapper.querySelector('.global-nav__btn');
    let navLinks = pageWrapper.querySelectorAll('.global-nav__link');
    let navSubMenu = pageWrapper.querySelector('.global-nav__submenu');
    let navSubLink = pageWrapper.querySelectorAll('.global-nav__sublink');
    let staticLogo = pageWrapper.querySelector('#staticLogo');
    let scrollLogo = pageWrapper.querySelector('#scrollLogo');
    let staticMenuIcon = pageWrapper.querySelector('#staticMenuIcon');
    let scrollMenuIcon = pageWrapper.querySelector('#scrollMenuIcon');
    let callBtn = pageWrapper.querySelector('#callBtn');
    let sliderBtn = pageWrapper.querySelector('#sliderBtn');

    if (scrolled > 150 ){
      staticLogo.style.display = 'none';
      scrollLogo.style.display = 'block';

      staticMenuIcon.style.display = 'none';
      scrollMenuIcon.style.display = 'inline-block';

      sliderBtn.style.display = 'block';

      callBtn.style.display = 'none';

      nav.style.backgroundColor = '#ffffff';
      nav.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.2)';

      navBtns.style.color = '#004d80';
      navBtns.style.border = '2px solid #005173';

      navSubMenu.classList.add('submenu-scrolled');
      
      navLinks.forEach(link => {
        link.style.color = '#0b2a37';
      });
      navSubLink.forEach(sublink => {
        sublink.classList.add('sublink-scrolled');
      });
    } else {
      staticLogo.style.display = 'block';
      scrollLogo.style.display = 'none';

      staticMenuIcon.style.display = 'inline-block';
      scrollMenuIcon.style.display = 'none';

      callBtn.style.display = 'block';

      sliderBtn.style.display = 'none';

      nav.style.backgroundColor = 'transparent';
      nav.style.boxShadow = 'none';


      navBtns.style.color = '#ffffff';
      navBtns.style.border = '2px solid #ffffff';

      navSubMenu.classList.remove('submenu-scrolled');

      navLinks.forEach(link => {
        link.style.color = '#ffffff';
      });
      navSubLink.forEach(sublink => {
        sublink.classList.remove('sublink-scrolled');
      });
    }
  }
  
  window.onload = function () {
    let slides = document.querySelectorAll('.slider-item');
    let currentSlide = 0;
    var slideInterval = setInterval(nextSlide,2000);
    
    function nextSlide() {
        slides[currentSlide].classList.add('hide');
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].classList.remove('hide');
    }
  }
});