import { Component, ViewChildren } from '@angular/core';

import { facilities } from '../../../utils/data';
import { zoomInUpAnimation } from '../../../utils/animation';
import { updateAnimationStateOnScroll } from '../../../utils/helpers';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [zoomInUpAnimation],
})
export class FacilitiesComponent {
  facilities = facilities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  state = 'start';

  constructor() {}
}
