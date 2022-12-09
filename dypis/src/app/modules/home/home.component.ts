import { Component } from '@angular/core';
import { guyCarouselAnimation } from 'src/app/utils/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: guyCarouselAnimation,
})
export class HomeComponent {}
