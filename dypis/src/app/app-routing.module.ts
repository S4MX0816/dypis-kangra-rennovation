import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutDypisComponent } from './modules/about-dypis/about-dypis.component';
import { ChairmanMessageComponent } from './modules/chairman-message/chairman-message.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { FacultyComponent } from './modules/faculty/faculty.component';
import { InformationUpdatingComponent } from './modules/information-updating/information-updating.component';
import { VisionAndMissionComponent } from './modules/vision-and-mission/vision-and-mission.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './modules/docs/docs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'faculty', component: FacultyComponent },
  { path: 'about-dypis', component: AboutDypisComponent },
  { path: 'vision-and-mission', component: VisionAndMissionComponent },
  {
    path: 'courses-of-study',
    component: InformationUpdatingComponent,
    data: { compName: 'courses of study' },
  },
  {
    path: 'examination-and-promotion',
    component: InformationUpdatingComponent,
    data: { compName: 'examination and promotion' },
  },
  {
    path: 'date-sheet',
    component: InformationUpdatingComponent,
    data: { compName: 'date sheet' },
  },
  {
    path: 'virtual-schooling',
    component: InformationUpdatingComponent,
    data: { compName: 'virtual schooling' },
  },
  { path: 'chairman-message', component: ChairmanMessageComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
