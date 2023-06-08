import { KgActivitiesService } from './kg-activities/kg-activities.service';
import { Resolve } from '@angular/router';
import { FacilitiesService } from './facilities/facilities.service';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SpecialClassesService } from './special-classes/special-classes.service';
import { GalleryService } from './gallery/gallery.service';
import { TestimonialsService } from './testimonials/testimonials.service';

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<any> {
  constructor(
    private readonly facilitiesService: FacilitiesService,
    private readonly specialClassesService: SpecialClassesService,
    private readonly kgActivitiesService: KgActivitiesService,
    private readonly galleryService: GalleryService,
    private readonly testimonialsService: TestimonialsService
  ) {}

  resolve() {
    return forkJoin([
      this.facilitiesService.getFacilities(),
      this.specialClassesService.getSpecialClasses(),
      this.kgActivitiesService.getKgActivities(),
      this.galleryService.getGallery(),
      this.testimonialsService.getSchoolStat(),
      this.testimonialsService.getTestimonial(),
    ]);
  }
}
