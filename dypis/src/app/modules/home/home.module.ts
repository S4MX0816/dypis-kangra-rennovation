import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../utils/shared.module';
import { CarouselComponent } from './carousel/carousel.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SpecialClassesComponent } from './special-classes/special-classes.component';
import { KgActivitiesComponent } from './kg-activities/kg-activities.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FacilitiesComponent,
    SpecialClassesComponent,
    KgActivitiesComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
