import outsideClick from './outside.js';

export default function initDropDownMenu() {
  const dropDownMenu = document.querySelectorAll('[data-dropdown]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropDownMenu.forEach((menu) => {
    ['click', 'touchstart'].forEach((useEvent) => {
      menu.addEventListener(useEvent, handleClick);
    });
  });
}
