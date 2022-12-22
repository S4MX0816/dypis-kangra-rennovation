import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDypisComponent } from './modules/about-dypis/about-dypis.component';
import { ChairmanMessageComponent } from './modules/chairman-message/chairman-message.component';
import { FacultyComponent } from './modules/faculty/faculty.component';
import { HomeComponent } from './modules/home/home.component';
import { InformationUpdatingComponent } from './modules/information-updating/information-updating.component';
import { VisionAndMissionComponent } from './modules/vision-and-mission/vision-and-mission.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'about-dypis', component: AboutDypisComponent },
  { path: 'vision-and-mission', component: VisionAndMissionComponent },
  {
    path: 'courses-of-study',
    component: InformationUpdatingComponent,
    data: { compName: 'courses of study' },
  },
  { path: 'chairman-message', component: ChairmanMessageComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
