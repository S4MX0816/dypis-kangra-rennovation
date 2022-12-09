import { Component, HostListener, ViewChild } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { menuItems } from '../utils/data';
import { hamburgerSildingAnimation } from '../utils/animation';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: hamburgerSildingAnimation,
})
export class NavBarComponent {
  menuItems = menuItems;
  barsIcon = faBars;
  closeIcon = faXmark;
  showHamburgerMenu = false;

  @HostListener('window:click', ['$event'])
  closeHamburger(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('#hamburger-menu') && this.showHamburgerMenu) {
      this.showHamburgerMenu = false;
    }
  }

  @HostListener('document:keydown', ['$event']) closeHamburgerOnEscape(
    event: KeyboardEvent
  ) {
    if (event.code === 'Escape' && this.showHamburgerMenu) {
      this.showHamburgerMenu = false;
    }
  }

  openHamburgerMenu(event: Event): void {
    event.stopPropagation();
    this.showHamburgerMenu = true;
  }
}
