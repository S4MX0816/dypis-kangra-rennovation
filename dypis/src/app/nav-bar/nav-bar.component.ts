import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  menuItems;
  constructor() {
    this.menuItems = [
      'home',
      'admission',
      'academics',
      'faculty',
      'about us',
      'contact us',
    ];
  }
}
