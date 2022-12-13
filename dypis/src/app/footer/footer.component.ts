import { Component } from '@angular/core';

import { addressDetails, menuItems } from '../utils/data';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItems;
  addressDetails = addressDetails;
}
