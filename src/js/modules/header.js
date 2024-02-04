import debounce from './debounce.js';

export default class HeaderLinks {
  constructor(sections, links) {
    this.sections = document.querySelectorAll(sections);
    this.links = document.querySelectorAll(links);
    this.windowMetade = window.innerHeight * 0.6;

    this.activeLink = debounce(this.activeLink.bind(this), 20);
  }

  activeLink() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      const { id } = section;

      if (isSectionVisible) {
        this.links.forEach((link) => {
          const href = link.getAttribute('data-header');
          if (href === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      } else {
        section.classList.remove('active');
      }
    });
  }

  addEventsHeader() {
    window.addEventListener('scroll', this.activeLink);
  }

  init() {
    if (this.sections.length) {
      this.addEventsHeader();
      this.links[0].classList.add('active');
    }
  }
}
