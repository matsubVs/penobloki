(()=>{var t={523:t=>{!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,i=t.HTMLElement||t.Element,s={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:i.prototype.scroll||l,scrollIntoView:i.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,r=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?v.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):s.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?s.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;v.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var o=u(this),i=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(v.call(this,o,o.scrollLeft+n.left-i.left,o.scrollTop+n.top-i.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else s.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+r<t.scrollHeight:"X"===e?t.clientWidth+r<t.scrollWidth:void 0}function d(e,o){var i=t.getComputedStyle(e,null)["overflow"+o];return"auto"===i||"scroll"===i}function p(t){var e=c(t,"Y")&&d(t,"Y"),o=c(t,"X")&&d(t,"X");return e||o}function u(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host;return t}function h(e){var o,i,s,r,l=(n()-e.startTime)/468;r=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*r)),i=e.startX+(e.x-e.startX)*o,s=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,i,s),i===e.x&&s===e.y||t.requestAnimationFrame(h.bind(t,e))}function v(o,i,r){var a,c,d,p,u=n();o===e.body?(a=t,c=t.scrollX||t.pageXOffset,d=t.scrollY||t.pageYOffset,p=s.scroll):(a=o,c=o.scrollLeft,d=o.scrollTop,p=l),h({scrollable:a,method:p,startTime:u,startX:c,startY:d,x:i,y:r})}}}}()}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,o){if(t){if("string"==typeof t)return e(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function e(t){var o=t.main,i=t.wrap,s=t.next,n=t.prev,r=t.slidesToShow,l=void 0===r?3:r,a=t.responsive,c=void 0===a?[]:a,d=t.infinity,p=void 0!==d&&d;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(o),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.prev=document.querySelector(n),this.next=document.querySelector(s),this.slidesToShow=l,this.responsive=c,this.mainClass=o,this.wrapClass=i,this.childClass=o+"__item",this.options={position:0,widthSlide:Math.floor(100/this.slidesToShow),infinity:p}}var o,s;return o=e,(s=[{key:"init",value:function(){this.addMClass(),this.addStyle(),this.controlSlider(),this.checkButtons(),this.responsive&&this.initResponsive()}},{key:"hideButtons",value:function(){this.prev.style.visibility="hidden",this.next.style.visibility="hidden"}},{key:"visibleButtons",value:function(){this.prev.style.visibility="visible",this.next.style.visibility="visible"}},{key:"checkButtons",value:function(){this.slidesToShow==this.slides.length?this.hideButtons():this.visibleButtons()}},{key:"addMClass",value:function(){this.main.classList.add("mSlider"),this.wrap.classList.add("mSlider__wrap"),t(this.slides).forEach((function(t){return t.classList.add("mSlider__item")})),this.options.position=0,this.initResponsive(),this.checkButtons(),this.addStyle()}},{key:"addStyle",value:function(){var t=document.getElementById("mSliderCarusel-style-".concat(this.mainClass));t||((t=document.createElement("style")).id="mSliderCarusel-style-".concat(this.mainClass)),t.textContent="\n        ".concat(this.mainClass,".mSlider {\n            overflow: hidden !important;\n        }\n        ").concat(this.wrapClass,".mSlider__wrap {\n            display: flex !important;\n            transition: transform .5s !important;\n            will-change: transform !important;\n        }\n\n        ").concat(this.childClass,".mSlider__item {\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n            flex: 0 0 ").concat(this.options.widthSlide,"% !important;\n            margin: auto 0;\n        }\n        "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}},{key:"nextSlide",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"prevSlide",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"initResponsive",value:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(o)window.removeEventListener("resize",r);else{var i=this.slidesToShow,s=this.responsive.map((function(t){return t.breakpoint})),n=Math.max.apply(Math,t(s)),r=function(){var t=document.documentElement.clientWidth;if(t<n)for(var o=0;o<s.length;o++)t<s[o]&&(e.slidesToShow=e.responsive[o].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle(),e.checkButtons());else e.slidesToShow=i,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle(),e.checkButtons()};r(),window.addEventListener("resize",r)}}},{key:"removeClasses",value:function(){this.wrap.classList.remove("mSlider__wrap"),t(this.slides).forEach((function(t){return t.classList.remove("mSlider__item")})),this.options.position=0,this.wrap.style.transform="translateX(0%)",this.initResponsive(!0)}}])&&i(o.prototype,s),e}();function n(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e,o,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.mainBlock=document.querySelector(e),this.mainBlockWrapper=document.querySelector(o),this.toplevelBlockWrapper=document.querySelector(i),this.backButton=document.querySelector(s),this.mainBlockButtons=document.querySelector(".production-slider__buttons"),this.topBlockButtons=document.querySelector(".production-slider__buttons--top"),this.TopSliderClassExample=null,this.MainSliderClassExample=null}var e,o;return e=t,(o=[{key:"getData",value:function(){return fetch("../../db/db.json")}},{key:"renderBlock",value:function(t,e,o,i,s,n){var r=document.createElement("div");r.classList.add("production-slider__item"),r.insertAdjacentHTML("afterbegin",'<div class="product">\n            <div class="product__wrapper flex f-column">\n                <picture class="product__img">\n                    <source srcset="build/assets/penoblok.webp" type="image/webp" media="(min-width: 577px)">\n                    <source srcset="build/assets/penoblok-sm.webp" type="image/webp" media="(min-width: 310px)">\n                    <source srcset="build/assets/penoblok.png" type="image/png" media="(min-width: 577px)"> \n                    <source srcset="build/assets/penoblok-sm.png" type="image/png" media="(min-width: 310px)"> \n                    <img src="build/assets/penoblok.webp" alt="Alt Text!">\n                </picture>\n                <div class="product__about">\n                    <div class="product__top-block flex">\n                        <span>Характеристики</span>\n                    </div>\n                    <div class="product__bottom-block flex">\n                        <div class="product__measures flex f-column">\n                            <span>Размер, мм</span>\n                            <span>Класс плотности</span>\n                            <span>Прочнсть на сжатие</span>\n                            <span>кг/см<sup>2</sup></span>\n                            <span>Блоков на 1м<sup>3</sup></span>\n                        </div>\n                        <div class="product__value flex f-column">\n                            <span>'.concat(t,"</span>\n                            <span>").concat(e,"</span>\n                            <span>").concat(o,"</span>\n                            <span>").concat(i,"</span>\n                            <span>").concat(s,'</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="product__price">\n                    <p>Цена за 1 м<sup>3</sup>\n                    ').concat(n,"</p>\n                </div>   \n            </div>\n        </div>")),this.toplevelBlockWrapper.appendChild(r)}},{key:"activateToplevelMenu",value:function(){this.toplevelBlockWrapper.classList.remove("hide"),this.backButton.classList.remove("hide"),this.topBlockButtons.classList.remove("hide"),this.TopSliderClassExample.addMClass()}},{key:"deactivateToplevelMenu",value:function(){this.toplevelBlockWrapper.classList.add("hide"),this.backButton.classList.add("hide"),this.topBlockButtons.classList.add("hide"),this.TopSliderClassExample.removeClasses()}},{key:"activateMainMenu",value:function(){this.mainBlockWrapper.classList.remove("hide"),this.mainBlockButtons.classList.remove("hide"),this.MainSliderClassExample.addMClass()}},{key:"deactivateMainMenu",value:function(){this.mainBlockWrapper.classList.add("hide"),this.mainBlockButtons.classList.add("hide"),this.MainSliderClassExample.removeClasses()}},{key:"createSlider",value:function(){this.TopSliderClassExample=new s({main:".production-slider",wrap:".production-slider__wrap--toplevel",next:".production-slider__arrow-right-top",prev:".production-slider__arrow-left-top",slidesToShow:3,responsive:[{breakpoint:1200,slidesToShow:2},{breakpoint:842,slidesToShow:1}]}),this.TopSliderClassExample.init()}},{key:"controlProductsButton",value:function(t){var e=this,o=t.target;o.classList.contains("product__button")&&(t.preventDefault(),this.getData().then((function(t){return t.json()})).then((function(t){var i=o.dataset.id;e.deactivateMainMenu(),e.toplevelBlockWrapper.textContent="";var s=t[i],n=function(t){s[t].forEach((function(o){var s=o.compressiveStrength,n=o.kgsm,r=o.price,l=o.countOfBlockInCubicMeter;e.renderBlock(t,i,s,n,l,r)}))};for(var r in s)n(r)})).then((function(){e.TopSliderClassExample||e.createSlider(),e.activateToplevelMenu(),document.querySelector("#production").scrollIntoView({block:"center",behavior:"smooth"})})))}},{key:"controlBackButton",value:function(){this.deactivateToplevelMenu(),this.activateMainMenu()}},{key:"eventHandlers",value:function(){this.mainBlock.addEventListener("click",this.controlProductsButton.bind(this)),this.backButton.addEventListener("click",this.controlBackButton.bind(this))}},{key:"init",value:function(){this.eventHandlers(),this.MainSliderClassExample=new s({main:".production-slider",wrap:".production-slider__wrap",next:".production-slider__arrow-right",prev:".production-slider__arrow-left",slidesToShow:3,responsive:[{breakpoint:1200,slidesToShow:2},{breakpoint:842,slidesToShow:1}]}),this.MainSliderClassExample.init()}}])&&n(e.prototype,o),t}(),l=o(523),a=o.n(l);!function(){var t=document.querySelector(".header__swap"),e=document.querySelectorAll(".header__phone")[1],o=document.querySelector(".burger"),i=document.querySelector(".overlay"),s=document.querySelector(".nav"),n=document.querySelector(".main-page__catalog"),r=0;a().polyfill(),n.addEventListener("click",(function(t){t.preventDefault(),document.getElementById("production").scrollIntoView({behavior:"smooth",block:"start"})}));var l=function(t){1!=(r+=1)||s.classList.contains("transform")?(2==r&&(r=1),s.classList.remove("transform"),o.classList.remove("transform"),i.classList.remove("open"),document.body.classList.remove("lock")):(s.classList.add("transform"),o.classList.add("transform"),i.classList.add("open"),document.body.classList.add("lock"))};o.addEventListener("click",l),s.addEventListener("click",(function(t){var e=t.target.closest(".nav__item");if(e){t.preventDefault();var o=e.querySelector(".nav__link").getAttribute("href").substr(1);l(),document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}})),i.addEventListener("click",l),t.addEventListener("click",(function(){t.classList.toggle("transform"),e.classList.toggle("transform")}))}(),new s({main:".reviews-slider",wrap:".reviews-slider__wrap",next:".reviews-slider__arrow-right",prev:".reviews-slider__arrow-left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1200,slidesToShow:2},{breakpoint:842,slidesToShow:1}]}).init(),new r(".production__slider",".production-slider__wrap",".production-slider__wrap--toplevel",".production__back").init()})()})();