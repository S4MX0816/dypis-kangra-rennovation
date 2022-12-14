import { Component, OnInit } from '@angular/core';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

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
  faAnglesDown = faAnglesDown;

  ngOnInit(): void {
    setInterval(() => {
      this.carouselNumber++;
    }, 6000);
  }

  goToSection(elRef: HTMLDivElement): void {
    elRef.scrollIntoView({ behavior: 'smooth' });
  }
}
