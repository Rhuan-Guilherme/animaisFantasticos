export default function ativaTabMenu() {
  const listaAnimais = document.querySelectorAll("[data-menu='menu'] li");
  const listaSection = document.querySelectorAll("[data-tab='content'] section");

  function addClassAtivo(index) {
    listaSection.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direcao = listaSection[index].dataset.anime;
    listaSection[index].classList.add("ativo", direcao);
  }

  if (listaAnimais.length && listaSection.length) {
    listaSection[0].classList.add("ativo");

    listaAnimais.forEach((item, index) => {
      item.addEventListener("click", () => {
        addClassAtivo(index);
      });
    });
  }
}
