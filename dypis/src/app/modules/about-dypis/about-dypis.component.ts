import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import {
  zoomInUpAnimation,
  bounceInUpAnimation,
} from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-about-dypis',
  templateUrl: './about-dypis.component.html',
  styleUrls: ['./about-dypis.component.scss'],
  animations: [zoomInUpAnimation, bounceInUpAnimation],
})
export class AboutDypisComponent implements AfterViewInit {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('aboutDypisSection')
  aboutDypisSection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.aboutDypisSection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
