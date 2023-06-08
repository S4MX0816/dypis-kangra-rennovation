import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { DocsNamePipe } from './docs-name.pipe';
import { SentenceCasePipe } from './sentence-case.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DocsNamePipe, SentenceCasePipe],
  imports: [CommonModule],
  exports: [
    FlexLayoutModule,
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    DocsNamePipe,
    SentenceCasePipe,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
