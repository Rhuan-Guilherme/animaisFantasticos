export default class AccordionList {
  constructor(list) {
    this.listAccordion = document.querySelectorAll(list);
  }

  // eslint-disable-next-line class-methods-use-this
  toogleAccordion(item) {
    item.classList.toggle('ativo');
    item.nextElementSibling.classList.toggle('ativo');
  }

  // Adcionando o evento aos itens da lista
  addEventAccordion() {
    this.listAccordion.forEach((item) => {
      item.addEventListener('click', () => this.toogleAccordion(item));
    });
  }

  // iniciando a função
  init() {
    if (this.listAccordion.length) {
      this.toogleAccordion(this.listAccordion[0]);
      this.addEventAccordion();
    }

    return this;
  }
}
