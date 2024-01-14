export default class TabMenu {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  addClassAtivo(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });

    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addEventTabNav() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.addClassAtivo(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativa primeiro item
      this.addClassAtivo(0);
      this.addEventTabNav();
    }

    return this;
  }
}
