const swapArrow = document.querySelector('.header__swap');
const swapNumber = document.querySelectorAll('.header__phone')[1];
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');

const lockScroll = () => {
    document.body.classList.add('lock');
}

const unlockScroll = () => {
    document.body.classList.remove('lock');
}

overlay.addEventListener('click', () => {
    nav.classList.toggle('transform')
    burger.classList.toggle('transform');
    overlay.classList.toggle('open');
    unlockScroll();
});

swapArrow.addEventListener('click', () => {
    swapArrow.classList.toggle('transform');
    swapNumber.classList.toggle('transform');
});

burger.addEventListener('click', () => {;
    nav.classList.toggle('transform');
    overlay.classList.toggle('open');
    lockScroll();
    burger.classList.toggle('transform');
});