import { Component } from '@angular/core';
import {
  bounceInUpAnimation,
  zoomInRightAnimation,
} from 'src/app/utils/animation';

import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-chairman-message',
  templateUrl: './chairman-message.component.html',
  styleUrls: ['./chairman-message.component.scss'],
  animations: [bounceInUpAnimation, zoomInRightAnimation],
})
export class ChairmanMessageComponent {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {}
}
