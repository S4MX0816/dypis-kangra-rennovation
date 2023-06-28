import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DocumentsComponent } from './documents.component';

const routes: Route[] = [{ path: '', component: DocumentsComponent }];

@NgModule({
  declarations: [DocumentsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class DocumentsModule {}
