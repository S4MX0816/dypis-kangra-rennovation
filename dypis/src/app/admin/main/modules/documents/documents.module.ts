import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DocumentsComponent } from './documents.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DocsResolver } from 'src/app/modules/docs/docs.resolver';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Route[] = [
  { path: '', component: DocumentsComponent, resolve: [DocsResolver] },
];

@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentFormComponent,
    DocumentsTableComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class DocumentsModule {}
