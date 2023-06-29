import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DocumentsComponent } from './documents.component';
import { DocsResolver } from 'src/app/modules/docs/docs.resolver';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';

const routes: Route[] = [
  { path: '', component: DocumentsComponent, resolve: [DocsResolver] },
];

@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentFormComponent,
    DocumentsTableComponent,
    DeleteConfirmationDialogComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class DocumentsModule {}
