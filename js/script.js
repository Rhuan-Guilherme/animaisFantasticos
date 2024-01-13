import ativaAnimacaoScroll from './modules/animationScroll.js';
import ScrollSmooth from './modules/scrollSmooth.js';
import ativaAccordionList from './modules/activeAccordion.js';
import ativaTabMenu from './modules/tabMenu.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollSuave = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

ativaAnimacaoScroll();
ativaAccordionList();
ativaTabMenu();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
