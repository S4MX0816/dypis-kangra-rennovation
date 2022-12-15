import { Component, OnInit } from '@angular/core';
import { zoomInUpAnimation } from 'src/app/utils/animation';

import { facilities } from '../../../utils/data';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [zoomInUpAnimation],
})
export class FacilitiesComponent implements OnInit {
  facilities = facilities;

  constructor() {}

  ngOnInit(): void {}
}
