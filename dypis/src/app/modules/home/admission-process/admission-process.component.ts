import { Component } from '@angular/core';
import {
  faCircleQuestion,
  faMapLocationDot,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import { openAdmission } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admission-process',
  templateUrl: './admission-process.component.html',
  styleUrls: ['./admission-process.component.scss'],
})
export class AdmissionProcessComponent {
  faCircleQuestion = faCircleQuestion;
  faPenToSquare = faPenToSquare;
  faMapLocationDot = faMapLocationDot;
  openAdmission = openAdmission;

  constructor() {}

  openMaps(): void {
    window.open(environment.mapsLink, '_target');
  }
}
