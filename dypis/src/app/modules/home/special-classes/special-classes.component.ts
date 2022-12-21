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
  translatePos = 0;
  offsetPos = 0;
  readonly TRANSLATE_BY = 100;
  readonly OFFSET_ADD = 24;
  readonly REMAINING_CARDS = 5;
  readonly TRANSITION_TIMING = 3000; // in milliseconds

  constructor() {
    this.applyTransition();
  }

  applyTransition() {
    setInterval(() => {
      if (this.state === 'start') {
        return;
      }
      this.translatePos -= this.TRANSLATE_BY;
      this.offsetPos += this.OFFSET_ADD;
      document.querySelectorAll('.special-class-card').forEach((el) => {
        const divEl = el as HTMLDivElement;
        divEl.style.transform = `translateX(calc(${this.translatePos}% - ${this.offsetPos}px))`;
      });
      const arrayLength = this.specialClasses.length;
      const iterationNumber = this.offsetPos / this.OFFSET_ADD;
      if (arrayLength - iterationNumber <= this.REMAINING_CARDS) {
        this.specialClasses.push(...specialClasses);
      }
    }, this.TRANSITION_TIMING);
  }
}
