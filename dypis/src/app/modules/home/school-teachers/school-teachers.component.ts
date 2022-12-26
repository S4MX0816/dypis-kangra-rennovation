import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { schoolTeachers } from 'src/app/utils/data';
import { zoomInLeftAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'school-teachers',
  templateUrl: './school-teachers.component.html',
  styleUrls: ['./school-teachers.component.scss'],
  animations: [zoomInLeftAnimation],
})
export class SchoolTeachersComponent implements AfterViewInit {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  schoolTeachers = schoolTeachers;
  @ViewChild('schoolTeacherSection')
  schoolTeacherSection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.schoolTeacherSection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
