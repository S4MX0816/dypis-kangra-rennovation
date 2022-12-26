import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { facilities } from '../../../utils/data';
import { zoomInUpAnimation } from '../../../utils/animation';
import { updateAnimationStateOnScroll } from '../../../utils/helpers';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [zoomInUpAnimation],
})
export class FacilitiesComponent implements AfterViewInit {
  facilities = facilities;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  state = 'start';
  @ViewChild('facilitySection') facilitySection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.facilitySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
