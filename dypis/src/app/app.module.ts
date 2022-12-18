import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './utils/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export let router: Router;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [SharedModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(_router: Router) {
    router = _router;
  }
}
