import { Component, ViewChild } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { menuItems } from '../utils/data';
import { hamburgerSildingAnimation } from './hamburger-animation';

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
}
