import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeResolver } from './home.resolver';
import { SharedModule } from '../../utils/shared.module';
import { CarouselComponent } from './carousel/carousel.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SpecialClassesComponent } from './special-classes/special-classes.component';
import { KgActivitiesComponent } from './kg-activities/kg-activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SchoolTeachersComponent } from './school-teachers/school-teachers.component';
import { AdmissionProcessComponent } from './admission-process/admission-process.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, resolve: [HomeResolver] },
];

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FacilitiesComponent,
    SpecialClassesComponent,
    KgActivitiesComponent,
    GalleryComponent,
    TestimonialsComponent,
    SchoolTeachersComponent,
    AdmissionProcessComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
