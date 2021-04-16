const slider = () => {
    class MSlider {
        constructor({
            main,
            wrap,
            next,
            prev,
            position = 0,
            slidesToShow = 3
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.prev = document.querySelector(prev);
            this.next = document.querySelector(next);
            this.slidesToShow = slidesToShow
            this.options = {
                position,
                widthSlide: Math.floor(100 / this.slidesToShow)
            }
            this.init();
        }
    
        init() {
            this.addMClass();
            this.addStyle();
            this.controlSlider();
        }
    
        addMClass() {
            this.main.classList.add('mSlider');
            this.wrap.classList.add('mSlider__wrap');
            [...this.slides].forEach(item => item.classList.add('mSlider__item'))
        }
    
        addStyle() {
            const style = document.createElement('style');
            style.id = 'mSliderCarusel-style';
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
            if (this.options.position < this.slides.length - this.slidesToShow) {
                ++this.options.position;
    
                if (this.options.position > this.slides.length - this.slidesToShow) {
                    this.options.position = 0;
                }
    
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
            }
        }
    
        prevSlide() {
            if (this.options.position > 0) {
                --this.options.position;
    
                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                }
    
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`    
            }
        }
    }

    const slider = new MSlider({
        main: '.reviews__slider',
        wrap: '.slider__wrap',
        next: '.slider__arrow-right',
        prev: '.slider__arrow-left',
        slidesToShow: 1
    });
}



export default slider;