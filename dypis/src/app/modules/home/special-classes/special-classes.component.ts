import { Component } from '@angular/core';

import { specialClasses } from 'src/app/utils/data';
import { zoomInUpAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'special-classes',
  templateUrl: './special-classes.component.html',
  styleUrls: ['./special-classes.component.scss'],
  animations: [zoomInUpAnimation],
})
export class SpecialClassesComponent {
  specialClasses = specialClasses.slice();

  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  state = 'start';

  constructor() {
    this.applyTransition();
  }

  applyTransition() {
    setInterval(() => {});
  }
}
