import { Component, OnInit } from '@angular/core';

import { facilities } from '../../../utils/data';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  facilities = facilities;

  constructor() {}

  ngOnInit(): void {}
}
