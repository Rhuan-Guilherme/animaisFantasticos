export default class ScrollSmooth {
  constructor(linksInternos, options) {
    this.linksInternos = document.querySelectorAll(linksInternos);

    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.activeScroll = this.activeScroll.bind(this);
  }

  activeScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addEventLinks() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.activeScroll);
    });
  }

  init() {
    this.addEventLinks();
    return this;
  }
}
