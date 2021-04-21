import MSlider from './slider';

export default class ProductionController {
    constructor(mainBlock, mainBlockWrapper, toplevelBlockWrapper, backButton) {
        this.mainBlock = document.querySelector(mainBlock);
        this.mainBlockWrapper = document.querySelector(mainBlockWrapper);
        this.toplevelBlockWrapper = document.querySelector(toplevelBlockWrapper);
        this.backButton = document.querySelector(backButton);
        this.mainBlockButtons = document.querySelector('.production-slider__buttons')
        this.topBlockButtons = document.querySelector('.production-slider__buttons--top')
        this.TopSliderClassExample = null;
        this.MainSliderClassExample = null;
    }

    getData() {
        return fetch('../../db/db.json');
    }

    renderBlock(dimension, classOfDensity, compressionStrength, kgsm, blockByMeter, price) {
        const itemBlock = document.createElement('div');
        itemBlock.classList.add('production-slider__item');
        itemBlock.insertAdjacentHTML("afterbegin", 
        `<div class="product">
            <div class="product__wrapper flex f-column">
                <picture class="product__img">
                    <source srcset="build/assets/penoblok.webp" type="image/webp" media="(min-width: 577px)">
                    <source srcset="build/assets/penoblok-sm.webp" type="image/webp" media="(min-width: 310px)">
                    <source srcset="build/assets/penoblok.png" type="image/png" media="(min-width: 577px)"> 
                    <source srcset="build/assets/penoblok-sm.png" type="image/png" media="(min-width: 310px)"> 
                    <img src="build/assets/penoblok.webp" alt="Alt Text!">
                </picture>
                <div class="product__about">
                    <div class="product__top-block flex">
                        <span>Характеристики</span>
                    </div>
                    <div class="product__bottom-block flex">
                        <div class="product__measures flex f-column">
                            <span>Размер, мм</span>
                            <span>Класс плотности</span>
                            <span>Прочнсть на сжатие</span>
                            <span>кг/см<sup>2</sup></span>
                            <span>Блоков на 1м<sup>3</sup></span>
                        </div>
                        <div class="product__value flex f-column">
                            <span>${dimension}</span>
                            <span>${classOfDensity}</span>
                            <span>${compressionStrength}</span>
                            <span>${kgsm}</span>
                            <span>${blockByMeter}</span>
                        </div>
                    </div>
                </div>
                <div class="product__price">
                    <p>Цена за 1 м<sup>3</sup>
                    ${price}</p>
                </div>   
            </div>
        </div>`);

        this.toplevelBlockWrapper.appendChild(itemBlock);
    }

    switchWrapper() {
        if (this.mainBlockWrapper.classList.contains('hide')) {
            this.mainBlockWrapper.classList.remove('hide');
            this.toplevelBlockWrapper.classList.add('hide');
            this.backButton.classList.add('hide');
            this.mainBlockButtons.classList.remove('hide');
            this.topBlockButtons.classList.add('hide');
            this.TopSliderClassExample.removeClasses();
            this.MainSliderClassExample.addMClass();
        } else {
            this.mainBlockWrapper.classList.add('hide');
            this.toplevelBlockWrapper.classList.remove('hide'); 
            this.backButton.classList.remove('hide');
            this.mainBlockButtons.classList.add('hide');
            this.topBlockButtons.classList.remove('hide');
            this.TopSliderClassExample.addMClass();
            this.MainSliderClassExample.removeClasses();
        }
    }

    createSlider() {
        this.TopSliderClassExample = new MSlider({
            main: '.production-slider',
            wrap: '.production-slider__wrap--toplevel',
            next: '.production-slider__arrow-right-top',
            prev: '.production-slider__arrow-left-top',
            slidesToShow: 3,
        
            responsive: [{
                breakpoint: 1200,
                slidesToShow: 2,
                },
                {
                breakpoint: 842,
                slidesToShow: 1,
                },
            ]
        });

        this.TopSliderClassExample.init();
    }

    controlProductsButton(e) {
        const target = e.target;
        if (target.classList.contains('product__button')) {
            e.preventDefault();
            const blockID = target.dataset.id;
            this.MainSliderClassExample.removeClasses();
            this.toplevelBlockWrapper.textContent = '';
            
            this.getData()
                .then(response => response.json())
                .then(data => {
                    const selectedBlock = data[blockID];
                    for (let key in selectedBlock) {
                        const arrayOfDimension = selectedBlock[key];
                        
                        arrayOfDimension.forEach(item => {
                            const compressiveStrength = item['compressiveStrength'];
                            const kgsm = item['kgsm'];
                            const price = item['price'];
                            const blockInMeter = item['countOfBlockInCubicMeter']

                            this.renderBlock(key, blockID, compressiveStrength, kgsm, blockInMeter, price);
                        });
                    }
                })
                .then(() => {
                    if (!this.TopSliderClassExample) {
                        this.createSlider();
                    } else {
                        this.TopSliderClassExample.addMClass();
                    }
        
                    this.switchWrapper();
                    document.querySelector('#production').scrollIntoView({
                        block: "bottom",
                        behavior: 'smooth'
                    });
                });    
        }
    }

    eventHandlers() {
        this.mainBlock.addEventListener('click', this.controlProductsButton.bind(this));
        this.backButton.addEventListener('click', this.switchWrapper.bind(this));
    }

    init() {
        this.eventHandlers();
        this.MainSliderClassExample = new MSlider({
            main: '.production-slider',
            wrap: '.production-slider__wrap',
            next: '.production-slider__arrow-right',
            prev: '.production-slider__arrow-left',
            slidesToShow: 3,
        
            responsive: [{
                breakpoint: 1200,
                slidesToShow: 2,
                },
                {
                breakpoint: 842,
                slidesToShow: 1,
                },
            ]
        });
        this.MainSliderClassExample.init();
    }
}