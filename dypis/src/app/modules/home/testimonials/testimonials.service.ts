import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { testimonial } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private _testimonialsUrl = `${environment.firebaseUrl}/testimonial.json`;
  testimonials: testimonial[] = [];

  constructor(private http: HttpClient) {}

  getTestimonial() {
    return this.http.get<testimonial[]>(this._testimonialsUrl).pipe(
      tap((testimonials) => {
        this.testimonials = testimonials;
      })
    );
  }
}
