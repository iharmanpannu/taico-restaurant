AOS.init({duration: 1000});

// const close = document.querySelector('close-tog');
const open = document.getElementById('open-tog');
const mainNav = document.getElementById('main-nav');

// mainNav.classList.add('hide-tog');

function mainNavToggle() {
  mainNav
    .classList
    .toggle('hide-tog');
}

open.addEventListener('click', mainNavToggle);