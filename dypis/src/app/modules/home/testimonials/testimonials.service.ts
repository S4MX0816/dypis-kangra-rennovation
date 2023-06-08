import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { testimonial, SchoolStat } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private _testimonialsUrl = `${environment.firebaseUrl}/testimonial.json`;
  private _schoolStatsUrl = `${environment.firebaseUrl}/schoolStat.json`;
  testimonials: testimonial[] = [];
  schoolStats: SchoolStat[] = [];

  constructor(private http: HttpClient) {}

  getTestimonial() {
    return this.http.get<testimonial[]>(this._testimonialsUrl).pipe(
      tap((testimonials) => {
        this.testimonials = testimonials;
      })
    );
  }

  getSchoolStat() {
    return this.http.get<SchoolStat[]>(this._schoolStatsUrl).pipe(
      tap((schoolStats) => {
        this.schoolStats = schoolStats;
      })
    );
  }
}
