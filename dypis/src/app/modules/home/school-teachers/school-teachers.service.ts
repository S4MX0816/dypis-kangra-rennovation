import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { SchoolTeacher } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SchoolTeachersService {
  private _schoolTeacherUrl = `${environment.firebaseUrl}/schoolTeacher.json`;
  schoolTeachers: SchoolTeacher[] = [];

  constructor(private http: HttpClient) {}

  getSchoolTeachers() {
    return this.http.get<SchoolTeacher[]>(this._schoolTeacherUrl).pipe(
      tap((schoolTeacher) => {
        this.schoolTeachers = schoolTeacher;
      })
    );
  }
}
