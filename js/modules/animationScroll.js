export default function ativaAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const metadeWindow = window.innerHeight * 0.6;

  function activeAnimationScroll() {
    sections.forEach((section) => {
      const topSection = section.getBoundingClientRect().top;
      const activeSection = topSection - metadeWindow < 0;
      if (activeSection) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', activeAnimationScroll);
    activeAnimationScroll();
  }
}
