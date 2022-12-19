import { Component, HostListener, ViewChild } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { menuItems } from '../utils/data';
import { MenuItem } from '../models/interfaces';
import { openAdmission } from '../utils/helpers';
import { hamburgerSlidingAnimation } from '../utils/animation';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: hamburgerSlidingAnimation,
})
export class NavBarComponent {
  menuItems = menuItems;
  barsIcon = faBars;
  closeIcon = faXmark;
  showHamburgerMenu = false;
  openAdmission = openAdmission;

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

  getRouterLink(menuItem: MenuItem, isClass = false): string {
    const defaultReturn = '';
    const mainReturn = isClass ? 'active-menu-item' : menuItem.name;
    if (menuItem.name === 'admission') {
      return '';
    }
    if (menuItem.subMenu) {
      return '';
    }
    return mainReturn;
  }
}
