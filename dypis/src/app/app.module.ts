import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './utils/shared.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [SharedModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
