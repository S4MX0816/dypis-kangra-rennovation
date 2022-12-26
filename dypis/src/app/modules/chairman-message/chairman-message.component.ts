import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  bounceInUpAnimation,
  zoomInRightAnimation,
} from 'src/app/utils/animation';

import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-chairman-message',
  templateUrl: './chairman-message.component.html',
  styleUrls: ['./chairman-message.component.scss'],
  animations: [bounceInUpAnimation, zoomInRightAnimation],
})
export class ChairmanMessageComponent implements AfterViewInit {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('chairmanMessageSection')
  chairmanMessageSection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.chairmanMessageSection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
