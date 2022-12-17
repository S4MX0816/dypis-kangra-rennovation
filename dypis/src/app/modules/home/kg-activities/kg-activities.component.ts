import { Component } from '@angular/core';

import { kgActivities } from 'src/app/utils/data';

@Component({
  selector: 'kg-activities',
  templateUrl: './kg-activities.component.html',
  styleUrls: ['./kg-activities.component.scss'],
})
export class KgActivitiesComponent {
  selectedIndex = 0;
  kgActivities = kgActivities;

  constructor() {}
}
