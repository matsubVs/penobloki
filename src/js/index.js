
import MSlider from './modules/slider';
import ProductionController from "./modules/production";
import activateHeader from "./modules/header";

activateHeader();
const sliderReviews = new MSlider({
    main: '.reviews-slider',
    wrap: '.reviews-slider__wrap',
    next: '.reviews-slider__arrow-right',
    prev: '.reviews-slider__arrow-left',
    slidesToShow: 3,
    infinity: true,

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
sliderReviews.init();

const ProdController = new ProductionController(
    '.production__slider',
    '.production-slider__wrap',
    '.production-slider__wrap--toplevel',
    '.production__back'
);

ProdController.init();