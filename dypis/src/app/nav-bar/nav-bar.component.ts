import { Component, ViewChild } from '@angular/core';
import { menuItems } from '../utils/data';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  menuItems = menuItems;
}
