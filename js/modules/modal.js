export default function initModal() {
  const botaoAbrirModal = document.querySelector('[data-modal="abrir"]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toogleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickForaModal(event) {
    if (event.target === this) toogleModal(event);
  }

  if (botaoAbrirModal && botaoFecharModal && containerModal) {
    botaoAbrirModal.addEventListener('click', toogleModal);
    botaoFecharModal.addEventListener('click', toogleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
}
