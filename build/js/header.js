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
    if (!burger.classList.contains('hide')) {
        lockScroll();
        overlay.classList.add('open');
        nav.classList.add('transform')
        burger.classList.add('transform');    
    }
}

const closeMenu = () => {
    if (!burger.classList.contains('hide')) {
        unlockScroll();
        overlay.classList.remove('open');
        nav.classList.remove('transform');
        burger.classList.remove('transform');    
    }}

const handlerMenu = () => {
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
window.addEventListener('resize', () => {
    const widthWindow = document.documentElement.clientWidth
    if (widthWindow <= 768) {
        burger.classList.remove('hide');
    } else {
        burger.classList.add('hide');
    }
});

swapArrow.addEventListener('click', () => {
    swapArrow.classList.toggle('transform');
    swapNumber.classList.toggle('transform');
});    