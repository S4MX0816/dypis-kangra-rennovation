import { Component } from '@angular/core';

import {
  zoomInUpAnimation,
  bounceInUpAnimation,
} from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-about-dypis',
  templateUrl: './about-dypis.component.html',
  styleUrls: ['./about-dypis.component.scss'],
  animations: [zoomInUpAnimation, bounceInUpAnimation],
})
export class AboutDypisComponent {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {}
}
