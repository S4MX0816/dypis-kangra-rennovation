import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BasicCard } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FacilitiesService {
  facilitiesUrl = `${environment.firebaseUrl}/facilities.json`;
  facilities: BasicCard[] = [];

  constructor(private http: HttpClient) {}

  getFacilities() {
    return this.http.get<BasicCard[]>(this.facilitiesUrl).pipe(
      tap((facilities) => {
        this.facilities = facilities;
      })
    );
  }
}
