import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { zoomInLeftAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';
import { SchoolTeachersService } from './school-teachers.service';

@Component({
  selector: 'school-teachers',
  templateUrl: './school-teachers.component.html',
  styleUrls: ['./school-teachers.component.scss'],
  animations: [zoomInLeftAnimation],
})
export class SchoolTeachersComponent implements AfterViewInit {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  schoolTeachers = this.schoolTeachersService.schoolTeachers;
  @ViewChild('schoolTeacherSection')
  schoolTeacherSection!: ElementRef<HTMLDivElement>;

  constructor(private readonly schoolTeachersService: SchoolTeachersService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.schoolTeacherSection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
