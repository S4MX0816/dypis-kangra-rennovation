import { Component } from '@angular/core';

import {
  zoomInUpAnimation,
  bounceInUpAnimation,
} from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-vision-and-mission',
  templateUrl: './vision-and-mission.component.html',
  styleUrls: ['./vision-and-mission.component.scss'],
  animations: [zoomInUpAnimation, bounceInUpAnimation],
})
export class VisionAndMissionComponent {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {}
}
