import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
