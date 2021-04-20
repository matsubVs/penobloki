export default class ProductionController {
    constructor(mainBlock, mainBlockWrapper, toplevelBlockWrapper, backButton) {
        this.mainBlock = document.querySelector(mainBlock);
        this.mainBlockWrapper = document.querySelector(mainBlockWrapper);
        this.toplevelBlockWrapper = document.querySelector(toplevelBlockWrapper);
        this.backButton = document.querySelector(backButton);
    }

    getData() {
        return fetch('../../db/db.json');
    }

    renderBlock(dimension, classOfDensity, compressionStrength, kgsm, blockByMeter, price) {
        const itemBlock = document.createElement('div');
        this.mainBlockWrapper.textContent = '';
        itemBlock.classList.add('production-slider__item');
        itemBlock.insertAdjacentHTML("afterbegin", 
        `<div class="production-slider__item">
            <div class="product">
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
                        <p>Цена за 1 <sup>м3</sup>
                        ${price}</p>
                    </div>   
                </div>
            </div>
        </div>`);

        this.toplevelBlockWrapper.appendChild(itemBlock);
    }

    switchWrapper() {
        if (this.mainBlockWrapper.classList.contains('hide')) {
            this.mainBlockWrapper.classList.remove('hide');
            this.toplevelBlockWrapper.classList.add('hide');
        } else {
            this.mainBlockWrapper.classList.add('hide');
            this.toplevelBlockWrapper.classList.remove('hide'); 
        }
    }

    eventHandlers() {
        this.switchWrapper.bind(this);
        this.mainBlock.addEventListener('click', e => {
            const target = e.target;
            console.log(target);
            if (target.classList.contains('product__button')) {
                e.preventDefault();
                const blockID = target.textContent;
                
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

                            if (selectedBlock.status === "error") {
                                console.log(selectedBlock.text);
                            }
                         }
                    })

                this.switchWrapper();
            }
        });
    }

    init() {
        this.eventHandlers();
    }
}