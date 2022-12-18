import { Component } from '@angular/core';

import { admissionProcess } from 'src/app/utils/data';
import { openAdmission } from 'src/app/utils/helpers';

@Component({
  selector: 'admission-process',
  templateUrl: './admission-process.component.html',
  styleUrls: ['./admission-process.component.scss'],
})
export class AdmissionProcessComponent {
  admissionProcess = admissionProcess;
  openAdmission = openAdmission;

  constructor() {}
}
