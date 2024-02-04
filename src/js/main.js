import ToggleMenu from './modules/toggleMenu.js';
import AnimacaoScroll from './modules/scroll.js';
import initFaqs from './modules/faq.js';

const scroll = new AnimacaoScroll('[data-anime="scroll"]');
scroll.init();

const toggleMenu = new ToggleMenu('.header-container', '.menu-button', '.menu-list', 'active');
toggleMenu.init();

initFaqs();
