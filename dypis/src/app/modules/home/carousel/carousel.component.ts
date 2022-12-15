import { Component } from '@angular/core';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import {
  guyCarouselAnimation,
  roboticsKidCarouselAnimation,
  textBlockCarouselAnimation,
} from '../../../utils/animation';
import { openAdmission } from '../../../utils/helpers';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    guyCarouselAnimation,
    roboticsKidCarouselAnimation,
    textBlockCarouselAnimation,
  ],
})
export class CarouselComponent {
  carouselNumber = 1;
  openAdmission = openAdmission;
  faAnglesDown = faAnglesDown;
  readonly CAROUSEL_DURATION = 6000; // in milliseconds

  constructor() {
    setInterval(() => {
      this.carouselNumber++;
    }, this.CAROUSEL_DURATION);
  }

  goToFacilities(): void {
    const facilitiesDiv = document.getElementById('facilities');
    facilitiesDiv?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
