import { Component } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import { menuItems } from '../utils/data';
import { FooterService } from './footer.service';
import { Footer } from '../models/interfaces';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItems;
  addressDetails: Footer[] = [];
  faAnglesUp = faAnglesUp;

  constructor(readonly footerService: FooterService) {
    footerService
      .getFooterData()
      .subscribe((footer) => (this.addressDetails = footer));
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
