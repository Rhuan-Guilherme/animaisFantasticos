import ativaAnimacaoScroll from './modules/animationScroll.js';
import ScrollSmooth from './modules/scrollSmooth.js';
import AccordionList from './modules/activeAccordion.js';
import TabMenu from './modules/tabMenu.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollSuave = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new AccordionList('[data-anime="accordion"] dt');
accordion.init();

const tabMenu = new TabMenu('[data-tab="menu"] li', '[data-tab="content"] section');
tabMenu.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

ativaAnimacaoScroll();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
