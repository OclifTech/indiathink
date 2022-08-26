import * as bootstrap from 'bootstrap';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { disablePrevNextBtns, listenForNextBtnClick, listenForPrevBtnClick } from './helpers/emblaHelper';
bootstrap;
// console.log(bootstrap); 








/* Carousel code blow*/
const wrap = document.querySelector('.embla');
const viewPort = wrap.querySelector('.embla__viewport');
const prevBtn = wrap.querySelector('.embla__button--prev');
const nextBtn = wrap.querySelector('.embla__button--next');

const autoplay = Autoplay(
  { delay: 3000, stopOnInteraction: false },
  (emblaRoot) => emblaRoot.parentElement
);
const embla = EmblaCarousel(viewPort, { loop: false }, [autoplay]);
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

listenForPrevBtnClick(prevBtn, embla, autoplay);
listenForNextBtnClick(nextBtn, embla, autoplay);

embla.on('init', disablePrevAndNextBtns);
embla.on('select', disablePrevAndNextBtns);