import header from './modules/header';
import Slider from './modules/slider';
import ProductionController from "./modules/production";

header();
Slider();
const ProdController = new ProductionController(
    '.production__slider',
    '.production-slider__wrap',
    '.production-slider__wrap--toplevel',
    '.production__back'
);

ProdController.init();