import debounce from './debounce.js';

export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = debounce(this.animaScroll.bind(this), 50);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('bgActive ');
      } else { section.classList.remove('bgActive '); }
    });
  }

  addScrollEvents() {
    window.addEventListener('scroll', this.animaScroll);
  }

  init() {
    this.addScrollEvents();
  }
}
