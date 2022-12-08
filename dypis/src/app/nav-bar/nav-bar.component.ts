import { Component } from '@angular/core';
import { menuItems } from '../utils/data';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  menuItems = menuItems;
  faCoffee = faHome;
}
