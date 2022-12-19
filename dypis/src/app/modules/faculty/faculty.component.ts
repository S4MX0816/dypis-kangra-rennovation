import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { faculty } from 'src/app/utils/data';
import { Faculty, FacultyHeaders } from 'src/app/models/interfaces';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent {
  faculty = faculty;
  faSearch = faSearch;
  filteredFaculty = new BehaviorSubject<Faculty[]>([]);
  searchFacultyCtrl = new FormControl();

  readonly headers: FacultyHeaders[] = [
    'name',
    'designation',
    'qualification',
    'subject',
  ];

  constructor() {
    this.attachListener();
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
