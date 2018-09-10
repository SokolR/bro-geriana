document.addEventListener("DOMContentLoaded", function() {

  window.onscroll = function() {

    let scrolled = document.documentElement.scrollTop;

    let pageWrapper = document.querySelector('.wrapper');
    let nav = pageWrapper.querySelector('.global-nav');
    let navBtns = pageWrapper.querySelector('.global-nav__btn');
    let navLinks = pageWrapper.querySelector('.global-nav__link');
    let navSubMenu = pageWrapper.querySelector('.global-nav__submenu');
    let navSubLink = pageWrapper.querySelector('.global-nav__sublink');
    let staticLogo = pageWrapper.querySelector('#staticLogo');
    let scrollLogo = pageWrapper.querySelector('#scrollLogo');
    let callBtn = pageWrapper.querySelector('#callBtn');
    let sliderBtn = pageWrapper.querySelector('#sliderBtn');

    if (scrolled > 150 ){
      staticLogo.style.display = 'none';
      scrollLogo.style.display = 'block';
      callBtn.style.display = 'none';
      nav.style.backgroundColor = '#ffffff';
      navBtns.style.color = '#004d80';
      navBtns.style.border = '2px solid #005173';
      navLinks.style.color = '#0b2a37';
      navSubMenu.classList.add('submenu-scrolled');
      navSubLink.classList.add('sublink-scrolled');  
      sliderBtn.style.display = 'block';
    } else {
      staticLogo.style.display = 'block';
      scrollLogo.style.display = 'none';
      callBtn.style.display = 'block';
      nav.style.backgroundColor = 'transparent';
      navBtns.style.color = '#ffffff';
      navBtns.style.border = '2px solid #ffffff';
      navLinks.style.color = '#ffffff';
      navSubMenu.classList.remove('submenu-scrolled');
      navSubLink.classList.remove('sublink-scrolled');
      sliderBtn.style.display = 'none';
    }
  } 
});