export default function ativaAccordionList() {
  const listAccordion = document.querySelectorAll("[data-anime='accordion'] dt");

  function ativaAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (listAccordion.length) {
    listAccordion.forEach((item) => {
      item.addEventListener('click', ativaAccordion);
    });

    listAccordion[0].classList.add('ativo');
    listAccordion[0].nextElementSibling.classList.add('ativo');
  }
}
