import { Component } from '@angular/core';

import {
  guyCarouselAnimation,
  textBlockCarouselAnimation,
} from '../../utils/animation';
import { openAdmission } from '../../utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [guyCarouselAnimation, textBlockCarouselAnimation],
})
export class HomeComponent {
  openAdmission = openAdmission;
}
