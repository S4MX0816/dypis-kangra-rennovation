import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './utils/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FacultyComponent } from './modules/faculty/faculty.component';
import { HoverContactInfoComponent } from './hover-contact-info/hover-contact-info.component';
import { AboutDypisComponent } from './modules/about-dypis/about-dypis.component';
import { VisionAndMissionComponent } from './modules/vision-and-mission/vision-and-mission.component';
import { ChairmanMessageComponent } from './modules/chairman-message/chairman-message.component';
import { InformationUpdatingComponent } from './modules/information-updating/information-updating.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { DocsComponent } from './modules/docs/docs.component';
import { HttpClientModule } from '@angular/common/http';

export let router: Router;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
    FacultyComponent,
    HoverContactInfoComponent,
    AboutDypisComponent,
    VisionAndMissionComponent,
    ChairmanMessageComponent,
    InformationUpdatingComponent,
    ContactUsComponent,
    DocsComponent,
  ],
  imports: [SharedModule, AppRoutingModule, HomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(_router: Router) {
    router = _router;
  }
}
