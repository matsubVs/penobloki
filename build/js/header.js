const swapArrow = document.querySelector('.header__swap');
const swapNumber = document.querySelectorAll('.header__phone')[1];
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const catalogButton = document.querySelector('.main-page__catalog');

catalogButton.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById("production").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

const unlockScroll = () => {
    document.body.classList.remove('lock');
}

const lockScroll = () => {
    document.body.classList.add('lock');
}

const openMenu = () => {
    nav.classList.add('transform')
    burger.classList.add('transform');
    overlay.classList.add('open');
    lockScroll()
}

const closeMenu = () => {
    nav.classList.remove('transform')
    burger.classList.remove('transform');
    overlay.classList.remove('open');
    unlockScroll();
}

const handlerMenu = (e) => {
    if (!nav.classList.contains('transform')) {
        openMenu();
        return;
    }
    closeMenu();
}

burger.addEventListener('click', handlerMenu);

nav.addEventListener('click', e => {
    const t = e.target;
    const closest = t.closest('.nav__item');
    if (closest) {
        e.preventDefault();
        const blockID = closest.querySelector('.nav__link').getAttribute('href').substr(1);
        
        handlerMenu();
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

overlay.addEventListener('click', handlerMenu);

swapArrow.addEventListener('click', () => {
    swapArrow.classList.toggle('transform');
    swapNumber.classList.toggle('transform');
});    