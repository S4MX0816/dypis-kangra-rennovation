import { Component } from '@angular/core';

import { schoolTeachers } from 'src/app/utils/data';

@Component({
  selector: 'school-teachers',
  templateUrl: './school-teachers.component.html',
  styleUrls: ['./school-teachers.component.scss'],
})
export class SchoolTeachersComponent {
  schoolTeachers = schoolTeachers;
  constructor() {}
}
