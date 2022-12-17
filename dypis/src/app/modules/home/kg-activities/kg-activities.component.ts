import { Component } from '@angular/core';

import { kgActivities } from 'src/app/utils/data';
import { bounceInUpAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'kg-activities',
  templateUrl: './kg-activities.component.html',
  styleUrls: ['./kg-activities.component.scss'],
  animations: [bounceInUpAnimation],
})
export class KgActivitiesComponent {
  state = 'start';
  selectedIndex = 0;
  kgActivities = kgActivities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {}
}
