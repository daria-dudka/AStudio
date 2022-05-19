const swiper = new Swiper('.swiper', {
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav__list');
const body = document.querySelector('body');

function bodyOverflow() {
  if (burgerBtn.classList.contains('--active')) {
    body.style.overflowY = 'hidden';
    body.style.height = `${navMenu.scrollHeight}px`;
  } else {
    body.style.overflowY = 'auto';
    body.style.height = '100%';
  }
}

function toggleMenu() {
  burgerBtn.classList.toggle('--active');
  navMenu.classList.toggle('--active');
  bodyOverflow();
}

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    burgerBtn.classList.remove('--active');
    navMenu.classList.remove('--active');
  }
  bodyOverflow();
}

burgerBtn.addEventListener('click', toggleMenu);

navMenu.addEventListener('click', closeMenu);
