import { Component } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import { addressDetails, menuItems } from '../utils/data';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItems;
  addressDetails = addressDetails;
  faAnglesUp = faAnglesUp;

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
