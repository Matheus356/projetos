import outsideClick from './outsideclick.js';
import debounce from './debounce.js';

export default class ToggleMenu {
  constructor(menuContainer, menuButton, menuList, activeClass, events) {
    this.menuContainer = document.querySelector(menuContainer);
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ['click'];
    else this.events = events;
    this.activeClass = activeClass;
    this.openMenu = this.openMenu.bind(this);
    this.toggleBg = debounce(this.toggleBg.bind(this), 50);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    this.menuButton.setAttribute('aria-expanded', 'true');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.menuButton.setAttribute('aria-expanded', 'false');
    });
  }

  addMenuMobileEvent() {
    window.addEventListener('scroll', this.toggleBg);
    this.events.forEach((events) => this.menuButton.addEventListener(events, this.openMenu));
  }

  toggleBg() {
    if (window.scrollY > 0) {
      this.menuContainer.classList.add('bgActive');
    } else {
      this.menuContainer.classList.remove('bgActive');
    }
  }

  init() {
    if (this.menuContainer && this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
