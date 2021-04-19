import smoothscroll from 'smoothscroll-polyfill';

const activateHeader = () => {
    const swapArrow = document.querySelector('.header__swap');
    const swapNumber = document.querySelectorAll('.header__phone')[1];
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const nav = document.querySelector('.nav');

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    const lockScroll = () => {
        document.body.classList.add('lock');
    }

    const toggleMenu = () => {
        nav.classList.toggle('transform')
        burger.classList.toggle('transform');
        overlay.classList.toggle('open');

        if (document.body.classList.contains('lock')) {
            unlockScroll();  
        } else {
            lockScroll();
        }
    }

    const smoothScroll = () => {
        nav.addEventListener('click', e => {
            const t = e.target;
            const closest = t.closest('.nav__item');
            if (closest) {
                e.preventDefault();
                const blockID = closest.querySelector('.nav__link').getAttribute('href').substr(1);

                smoothscroll.polyfill();
                
                if (nav.classList.contains('transform')) {
                    toggleMenu();
                }
                
                
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    overlay.addEventListener('click', () => {
        
    });
    
    swapArrow.addEventListener('click', () => {
        swapArrow.classList.toggle('transform');
        swapNumber.classList.toggle('transform');
    });
    
    burger.addEventListener('click', () => {;
        toggleMenu();
    });

    smoothScroll();
}

export default activateHeader;

