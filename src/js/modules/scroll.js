const smoothScroll = () => {
    const nav = document.querySelector('.nav');

    nav.addEventListener('click', e => {
        const t = e.target;
        const closest = t.closest('.nav__item');
        if (closest) {
            e.preventDefault();
            const blockID = closest.querySelector('.nav__link').getAttribute('href').substr(1);
    
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

export default smoothScroll;