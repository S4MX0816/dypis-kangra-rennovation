import { Component, ElementRef, ViewChild } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { zoomUpAnimation } from 'src/app/utils/animation';

import { schoolStats, testimonials } from 'src/app/utils/data';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [zoomUpAnimation],
})
export class TestimonialsComponent {
  schoolStats = schoolStats;
  testimonials = testimonials;
  quoteLeft = faQuoteLeft;
  quoteRight = faQuoteRight;
  state = 'start';
  translatePos = 0;
  offsetPos = 0;
  iterationNumber = 0;
  readonly TRANSLATE_BY = 100;
  readonly OFFSET_ADD = 24;
  readonly REMAINING_CARDS = 2;
  readonly TRANSITION_TIMING = 3000; // in milliseconds
  @ViewChild('testimonialDiv') testimonialDiv!: ElementRef;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {
    this.applyTransition();
  }

  applyTransition() {
    setInterval(() => {
      const divEl = this.testimonialDiv?.nativeElement;
      if (this.state === 'start' || !divEl) {
        return;
      }
      this.iterationNumber++;
      this.translatePos -= this.TRANSLATE_BY;
      divEl.style.transform = `translateX(${this.translatePos}%)`;

      const arrayLength = this.testimonials.length;
      if (arrayLength - this.iterationNumber <= this.REMAINING_CARDS) {
        this.testimonials.push(...testimonials);
      }
    }, this.TRANSITION_TIMING);
  }
}
