import { Component } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import { schoolStats, testimonials } from 'src/app/utils/data';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  selectedIndex = 0;
  schoolStats = schoolStats;
  testimonials = testimonials;
  quoteLeft = faQuoteLeft;
  quoteRight = faQuoteRight;

  constructor() {}
}
