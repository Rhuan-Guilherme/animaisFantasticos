export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrirModal = document.querySelector(botaoAbrir);
    this.botaoFecharModal = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(container);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToogleModal = this.eventToogleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  // abre ou fehca o modal
  toogleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToogleModal(event) {
    event.preventDefault();
    this.toogleModal();
  }

  addEventModal() {
    this.botaoAbrirModal.addEventListener('click', this.eventToogleModal);
    this.botaoFecharModal.addEventListener('click', this.eventToogleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  // Fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toogleModal(event);
    }
  }

  init() {
    if (this.botaoAbrirModal && this.botaoFecharModal && this.containerModal) {
      this.addEventModal();
    }

    return this;
  }
}
