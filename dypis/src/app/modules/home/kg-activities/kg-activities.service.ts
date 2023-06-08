import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { KgActivity } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class KgActivitiesService {
  kgActivitiesUrl = `${environment.firebaseUrl}/kgActivities.json`;
  kgActivities: KgActivity[] = [];

  constructor(private http: HttpClient) {}

  getKgActivities() {
    return this.http.get<KgActivity[]>(this.kgActivitiesUrl).pipe(
      tap((kgActivities) => {
        this.kgActivities = kgActivities;
      })
    );
  }
}
