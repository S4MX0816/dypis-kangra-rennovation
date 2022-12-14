import { Component, OnInit } from '@angular/core';

import {
  guyCarouselAnimation,
  roboticsKidCarouselAnimation,
  textBlockCarouselAnimation,
} from '../../utils/animation';
import { openAdmission } from '../../utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    guyCarouselAnimation,
    roboticsKidCarouselAnimation,
    textBlockCarouselAnimation,
  ],
})
export class HomeComponent implements OnInit {
  carouselNumber = 1;
  openAdmission = openAdmission;

  ngOnInit(): void {
    setInterval(() => {
      this.carouselNumber++;
    }, 6000);
  }
}
