import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { bounceInUpAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';
import { KgActivitiesService } from './kg-activities.service';

@Component({
  selector: 'kg-activities',
  templateUrl: './kg-activities.component.html',
  styleUrls: ['./kg-activities.component.scss'],
  animations: [bounceInUpAnimation],
})
export class KgActivitiesComponent implements AfterViewInit {
  state = 'start';
  selectedIndex = 0;
  kgActivities = this.kgActivitiesService.kgActivities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('kgActivitySection')
  kgActivitySection!: ElementRef<HTMLDivElement>;

  constructor(private readonly kgActivitiesService: KgActivitiesService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.kgActivitySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
