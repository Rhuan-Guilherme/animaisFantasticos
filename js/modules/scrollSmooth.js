export default function ativaScrollSmooth() {
  const linksInternos = document.querySelectorAll("[data-nav='menu'] a[href^='#']");

  function activeScroll(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", activeScroll);
  });
}
