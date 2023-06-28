import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DocumentsComponent } from './documents.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [{ path: '', component: DocumentsComponent }];

@NgModule({
  declarations: [DocumentsComponent, DocumentFormComponent],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class DocumentsModule {}
