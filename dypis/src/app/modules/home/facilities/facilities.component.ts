import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { zoomInUpAnimation } from '../../../utils/animation';
import { updateAnimationStateOnScroll } from '../../../utils/helpers';
import { FacilitiesService } from './facilities.service';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [zoomInUpAnimation],
})
export class FacilitiesComponent implements AfterViewInit {
  facilities = this.facilitiesService.facilities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  state = 'start';
  @ViewChild('facilitySection') facilitySection!: ElementRef<HTMLDivElement>;

  constructor(private readonly facilitiesService: FacilitiesService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.facilitySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
