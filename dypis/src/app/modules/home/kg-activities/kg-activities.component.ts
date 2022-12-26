import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { kgActivities } from 'src/app/utils/data';
import { bounceInUpAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'kg-activities',
  templateUrl: './kg-activities.component.html',
  styleUrls: ['./kg-activities.component.scss'],
  animations: [bounceInUpAnimation],
})
export class KgActivitiesComponent implements AfterViewInit {
  state = 'start';
  selectedIndex = 0;
  kgActivities = kgActivities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('kgActivitySection')
  kgActivitySection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.kgActivitySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
