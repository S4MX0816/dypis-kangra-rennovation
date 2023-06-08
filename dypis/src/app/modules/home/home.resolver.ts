import { KgActivitiesService } from './kg-activities/kg-activities.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { FacilitiesService } from './facilities/facilities.service';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SpecialClassesService } from './special-classes/special-classes.service';

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<any> {
  constructor(
    private readonly facilitiesService: FacilitiesService,
    private readonly specialClassesService: SpecialClassesService,
    private readonly kgActivitiesService: KgActivitiesService
  ) {}

  resolve() {
    return forkJoin([
      this.facilitiesService.getFacilities(),
      this.specialClassesService.getSpecialClasses(),
      this.kgActivitiesService.getKgActivities(),
    ]);
  }
}
