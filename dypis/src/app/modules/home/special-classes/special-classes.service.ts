import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BasicCard } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SpecialClassesService {
  private _specialClassesUrl = `${environment.firebaseUrl}/specialClasses.json`;
  specialClasses: BasicCard[] = [];

  constructor(private http: HttpClient) {}

  getSpecialClasses() {
    return this.http.get<BasicCard[]>(this._specialClassesUrl).pipe(
      tap((specialClasses) => {
        this.specialClasses = specialClasses;
      })
    );
  }
}
