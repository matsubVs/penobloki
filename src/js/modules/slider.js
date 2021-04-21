export default class MSlider {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0,
        slidesToShow = 3,
        responsive = [],
        infinity = false
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slidesToShow = slidesToShow,
        this.responsive = responsive
        this.options = {
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
            infinity
        }
    }

    init() {
        this.addMClass();
        this.addStyle();
        this.controlSlider();
        this.checkButtons();

        if (this.responsive) this.initResponsive();
    }

    hideButtons() {
        this.prev.style.visibility = 'hidden';
        this.next.style.visibility = 'hidden';
    }

    visibleButtons() {
        this.prev.style.visibility = 'visible';
        this.next.style.visibility = 'visible';
    }

    checkButtons() {
        if (this.slidesToShow == this.slides.length) {
            this.hideButtons();
        } else {
            this.visibleButtons();
        }
    }

    addMClass() {
        this.main.classList.add('mSlider');
        this.wrap.classList.add('mSlider__wrap');
        [...this.slides].forEach(item => item.classList.add('mSlider__item'));
        this.addStyle();
        this.wrap.style.transform = `translateX(-0%)`
    }

    addStyle() {
        let style = document.getElementById('mSliderCarusel-style')

        if (!style) {
            style = document.createElement('style');
            style.id = 'mSliderCarusel-style';
        }

        style.textContent = `
        .mSlider {
            overflow: hidden !important;
        }
        .mSlider__wrap {
            display: flex !important;
            transition: transform .5s !important;
            will-change: transform !important;
        }

        .mSlider__item {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0;
        }
        `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlide.bind(this));
        this.next.addEventListener('click', this.nextSlide.bind(this));
    }

    nextSlide() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;

            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
    }

    prevSlide() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;

            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`    
        }
    }

    initResponsive() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponsive = this.responsive.map(item => item.breakpoint);
        const masxResponsive = Math.max(...allResponsive);

        const checkResponsive = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < masxResponsive) {
                for (let i = 0; i < allResponsive.length; i++) {
                    if (widthWindow < allResponsive[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                        this.checkButtons();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
                this.checkButtons();
            }
        }

        checkResponsive();
        window.addEventListener('resize', checkResponsive);
    }

    removeClasses() {
        this.wrap.classList.remove('mSlider__wrap');
        [...this.slides].forEach(item => item.classList.remove('mSlider__item'));
        this.options.position = 0;
    }
}
