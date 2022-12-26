import { FormControl } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

import { faculty } from 'src/app/utils/data';
import { bounceInUpAnimation } from 'src/app/utils/animation';
import { Faculty, FacultyHeaders } from 'src/app/models/interfaces';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
  animations: [bounceInUpAnimation],
})
export class FacultyComponent implements AfterViewInit {
  state = 'start';
  faculty = faculty;
  faSearch = faSearch;
  filteredFaculty = new BehaviorSubject<Faculty[]>([]);
  searchFacultyCtrl = new FormControl();
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('facultySection') facultySection!: ElementRef<HTMLDivElement>;

  readonly headers: FacultyHeaders[] = [
    'name',
    'designation',
    'qualification',
    'subject',
  ];

  readonly mobileHeaders: FacultyHeaders[] = this.headers.slice(1);

  constructor() {
    this.attachListener();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.facultySection?.nativeElement,
        this.state
      );
    }, 0);
  }

  attachListener(): void {
    this.filteredFaculty.next(this.faculty.slice());
    this.searchFacultyCtrl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchVal) => {
        searchVal = searchVal.trim();

        if (!searchVal) {
          this.filteredFaculty.next(faculty.slice());
          return;
        }

        searchVal = searchVal.replace(/ {2,}/g, ' ').toLowerCase();
        this.filteredFaculty.next(
          faculty?.filter((el) => el.name.toLowerCase().indexOf(searchVal) > -1)
        );
      });
  }
}
