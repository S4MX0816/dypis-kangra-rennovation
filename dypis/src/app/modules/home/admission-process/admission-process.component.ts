import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { admissionProcess } from 'src/app/utils/data';
import { openAdmission } from 'src/app/utils/helpers';
import { bounceInUpAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from '../../../utils/helpers';

@Component({
  selector: 'admission-process',
  templateUrl: './admission-process.component.html',
  styleUrls: ['./admission-process.component.scss'],
  animations: [bounceInUpAnimation],
})
export class AdmissionProcessComponent implements AfterViewInit {
  state = 'start';
  admissionProcess = admissionProcess;
  openAdmission = openAdmission;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('admissionProcessSection')
  admissionProcessSection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.admissionProcessSection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
